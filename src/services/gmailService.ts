import { getAccessToken } from './firebaseAuth';

export interface GmailMessage {
  id: string;
  threadId: string;
  snippet?: string;
  subject?: string;
  from?: string;
  to?: string;
  date?: string;
  body?: string;
  labelIds?: string[];
  unread?: boolean;
}

export interface GmailUserProfile {
  emailAddress: string;
  messagesTotal: number;
  threadsTotal: number;
  historyId: string;
}

// Encode email in base64url format for Gmail API
export function createRawEmail({
  to,
  subject,
  body,
  from,
}: {
  to: string;
  subject: string;
  body: string;
  from?: string;
}): string {
  const emailLines = [
    from ? `From: ${from}` : '',
    `To: ${to}`,
    `Subject: =?utf-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    body,
  ].filter(Boolean);

  const rawMessage = emailLines.join('\r\n');
  const base64Encoded = btoa(unescape(encodeURIComponent(rawMessage)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  return base64Encoded;
}

export const getGmailProfile = async (): Promise<GmailUserProfile | null> => {
  const token = await getAccessToken();
  if (!token) throw new Error('Not authenticated with Google');

  const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || 'Failed to fetch Gmail profile');
  }

  return res.json();
};

export const listGmailMessages = async (query = 'concrete OR quote OR HRC OR order OR mix', maxResults = 10): Promise<GmailMessage[]> => {
  const token = await getAccessToken();
  if (!token) throw new Error('Not authenticated with Google');

  const url = new URL('https://gmail.googleapis.com/gmail/v1/users/me/messages');
  if (query) url.searchParams.set('q', query);
  url.searchParams.set('maxResults', maxResults.toString());

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || 'Failed to list Gmail messages');
  }

  const data = await res.json();
  if (!data.messages || !Array.isArray(data.messages)) {
    return [];
  }

  // Fetch header snippets in parallel (max 10)
  const detailedMessages = await Promise.all(
    data.messages.map(async (msgItem: { id: string; threadId: string }) => {
      try {
        const detailRes = await fetch(
          `https://gmail.googleapis.com/gmail/v1/users/me/messages/${msgItem.id}?format=metadata&metadataHeaders=Subject&metadataHeaders=From&metadataHeaders=To&metadataHeaders=Date`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (!detailRes.ok) return { id: msgItem.id, threadId: msgItem.threadId };
        const detailData = await detailRes.json();

        const headers: Record<string, string> = {};
        detailData.payload?.headers?.forEach((h: { name: string; value: string }) => {
          headers[h.name.toLowerCase()] = h.value;
        });

        return {
          id: detailData.id,
          threadId: detailData.threadId,
          snippet: detailData.snippet,
          subject: headers['subject'] || '(No Subject)',
          from: headers['from'] || 'Unknown Sender',
          to: headers['to'] || '',
          date: headers['date'] || '',
          labelIds: detailData.labelIds || [],
          unread: detailData.labelIds?.includes('UNREAD'),
        };
      } catch (err) {
        return { id: msgItem.id, threadId: msgItem.threadId };
      }
    })
  );

  return detailedMessages;
};

export const sendGmailEmail = async ({
  to,
  subject,
  bodyHtml,
  senderEmail,
}: {
  to: string;
  subject: string;
  bodyHtml: string;
  senderEmail?: string;
}): Promise<{ id: string; threadId: string }> => {
  const token = await getAccessToken();
  if (!token) throw new Error('Not authenticated with Google. Please sign in first.');

  const raw = createRawEmail({
    to,
    subject,
    body: bodyHtml,
    from: senderEmail,
  });

  const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ raw }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || 'Failed to send email via Gmail API');
  }

  return res.json();
};
