import React, { useState, useEffect } from 'react';
import {
  googleSignIn,
  logout,
  initAuth,
  getAccessToken,
} from '../services/firebaseAuth';
import {
  listGmailMessages,
  sendGmailEmail,
  getGmailProfile,
  GmailMessage,
  GmailUserProfile,
} from '../services/gmailService';
import {
  Mail,
  X,
  Send,
  Inbox,
  FileSpreadsheet,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  LogOut,
  UserCheck,
  Building,
  Truck,
  Phone,
  Shield,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';
import { User } from 'firebase/auth';

interface GmailHubModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRecipient?: string;
  initialSubject?: string;
  initialGrade?: string;
  initialVolume?: string;
}

export const GmailHubModal: React.FC<GmailHubModalProps> = ({
  isOpen,
  onClose,
  initialRecipient = '',
  initialSubject = '',
  initialGrade = '3000 PSI (RCC Slab & Columns)',
  initialVolume = '50',
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<GmailUserProfile | null>(null);
  const [activeTab, setActiveTab] = useState<'inbox' | 'compose' | 'quick-inquiry'>('compose');
  const [loading, setLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Inbox state
  const [messages, setMessages] = useState<GmailMessage[]>([]);
  const [searchQuery, setSearchQuery] = useState('concrete OR quote OR HRC');

  // Quotation Composer Form State
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState(initialRecipient);
  const [siteLocation, setSiteLocation] = useState('DHA Lahore Phase 6');
  const [concreteGrade, setConcreteGrade] = useState(initialGrade);
  const [volumeM3, setVolumeM3] = useState(initialVolume);
  const [pumpType, setPumpType] = useState('42m Mobile Hydraulic Boom Pump');
  const [ratePerM3, setRatePerM3] = useState('18,500');
  const [customNotes, setCustomNotes] = useState('Includes continuous transit mixer rotation, slump testing on site (ASTM C143), and prompt batching from Gajjumatta plant.');

  // Confirmation Modal State (MANDATORY per workspace integration guidelines)
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingEmailData, setPendingEmailData] = useState<{
    to: string;
    subject: string;
    bodyHtml: string;
  } | null>(null);

  useEffect(() => {
    if (initialRecipient) setClientEmail(initialRecipient);
    if (initialGrade) setConcreteGrade(initialGrade);
    if (initialVolume) setVolumeM3(initialVolume);
  }, [initialRecipient, initialGrade, initialVolume]);

  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, authToken) => {
        setUser(currentUser);
        setToken(authToken);
      },
      () => {
        setUser(null);
        setToken(null);
        setProfile(null);
      }
    );
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user && token && isOpen) {
      loadProfileAndInbox();
    }
  }, [user, token, isOpen]);

  const loadProfileAndInbox = async () => {
    setLoading(true);
    setStatusMessage(null);
    try {
      const prof = await getGmailProfile();
      setProfile(prof);
      const msgs = await listGmailMessages(searchQuery);
      setMessages(msgs);
    } catch (err: any) {
      console.error('Failed to load Gmail data:', err);
      setStatusMessage({
        type: 'error',
        text: err.message || 'Unable to connect to Gmail. Please sign in again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async () => {
    setLoading(true);
    setStatusMessage(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setToken(result.accessToken);
        setStatusMessage({
          type: 'success',
          text: `Signed in as ${result.user.email}. Gmail integration active.`,
        });
      }
    } catch (err: any) {
      console.error('Sign in failed:', err);
      setStatusMessage({
        type: 'error',
        text: err.message || 'Google Sign-in was cancelled or encountered an issue.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await logout();
    setUser(null);
    setToken(null);
    setProfile(null);
    setMessages([]);
    setStatusMessage({ type: 'success', text: 'Successfully signed out from Google account.' });
  };

  // Generate standard HRC official HTML email template
  const generateQuotationHtml = () => {
    const totalEst = (parseFloat(volumeM3 || '0') * parseFloat(ratePerM3.replace(/,/g, '') || '0')).toLocaleString();

    return `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; border: 2px solid #002D72; border-radius: 4px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #001F52; padding: 20px; color: #ffffff; border-bottom: 4px solid #F4C400;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td>
                <h1 style="margin: 0; font-size: 22px; color: #ffffff; text-transform: uppercase; font-weight: 900; letter-spacing: 1px;">Hassan ReadyMix Concrete (HRC)</h1>
                <p style="margin: 4px 0 0 0; font-size: 11px; color: #F4C400; font-weight: bold; letter-spacing: 1px;">OFFICIAL READY-MIX CONCRETE QUOTATION & DISPATCH ORDER</p>
              </td>
              <td align="right">
                <div style="background-color: #F4C400; color: #001F52; padding: 6px 12px; font-size: 11px; font-weight: bold; border-radius: 2px;">ASTM CERTIFIED</div>
              </td>
            </tr>
          </table>
        </div>

        <div style="padding: 24px; color: #172033;">
          <p style="font-size: 15px; margin-top: 0;">Dear <strong>${clientName || 'Valued Client'}</strong>,</p>
          <p style="font-size: 13px; line-height: 1.6; color: #4B5563;">Thank you for choosing <strong>Hassan ReadyMix Concrete (HRC)</strong> for your construction project in Lahore. Below are the verified batching specifications and pricing details prepared for your site:</p>

          <table width="100%" style="border-collapse: collapse; margin: 18px 0; font-size: 13px;">
            <tr style="background-color: #F3F4F6; border-bottom: 1px solid #E5E7EB;">
              <td style="padding: 10px; font-weight: bold; color: #001F52; width: 40%;">Project Site Location:</td>
              <td style="padding: 10px; color: #111827;">${siteLocation}</td>
            </tr>
            <tr style="border-bottom: 1px solid #E5E7EB;">
              <td style="padding: 10px; font-weight: bold; color: #001F52;">Concrete Grade & Mix:</td>
              <td style="padding: 10px; color: #111827; font-weight: bold;">${concreteGrade}</td>
            </tr>
            <tr style="background-color: #F3F4F6; border-bottom: 1px solid #E5E7EB;">
              <td style="padding: 10px; font-weight: bold; color: #001F52;">Required Volume:</td>
              <td style="padding: 10px; color: #111827;">${volumeM3} m³ (Approx ${(parseFloat(volumeM3 || '0') * 35.315).toFixed(0)} cu.ft)</td>
            </tr>
            <tr style="border-bottom: 1px solid #E5E7EB;">
              <td style="padding: 10px; font-weight: bold; color: #001F52;">Pumping & Placement:</td>
              <td style="padding: 10px; color: #111827;">${pumpType}</td>
            </tr>
            <tr style="background-color: #F3F4F6; border-bottom: 1px solid #E5E7EB;">
              <td style="padding: 10px; font-weight: bold; color: #001F52;">Rate per m³:</td>
              <td style="padding: 10px; color: #111827;">PKR ${ratePerM3} / m³</td>
            </tr>
            <tr style="background-color: #001F52; color: #ffffff;">
              <td style="padding: 12px; font-weight: bold; color: #F4C400;">Total Estimated Amount:</td>
              <td style="padding: 12px; font-weight: bold; font-size: 15px; color: #ffffff;">PKR ${totalEst}</td>
            </tr>
          </table>

          <div style="background-color: #FEF9C3; border-left: 4px solid #CA8A04; padding: 12px; font-size: 12px; color: #854D0E; margin-bottom: 20px;">
            <strong>Quality Guarantee:</strong> Computerized batching from our Gajjumatta plant, Grade 53 cement, washed Lawrancepur/Chenab aggregate, and slump test verified on delivery.
          </div>

          <p style="font-size: 12px; color: #4B5563; line-height: 1.5;">${customNotes}</p>

          <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 20px 0;" />

          <div style="font-size: 12px; color: #374151;">
            <p style="margin: 0 0 4px 0; font-weight: bold; color: #001F52;">HASSAN READYMIX CONCRETE (HRC) DISPATCH CENTER</p>
            <p style="margin: 0 0 2px 0;">📍 Gajjumatta Metro Bus Station, Rohi Nala Near Sabzi Mandi, Ferozepur Road Lahore</p>
            <p style="margin: 0 0 2px 0;">📞 Direct Dispatch: <strong>0300-0751574</strong> | <strong>0308-4311505</strong></p>
            <p style="margin: 0;">✉️ Email: <strong>hassanreadymix@gmail.com</strong></p>
          </div>
        </div>
      </div>
    `;
  };

  // Step 1: Trigger Confirmation Modal (MANDATORY user prompt)
  const handleInitiateSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientEmail) {
      setStatusMessage({ type: 'error', text: 'Please provide a valid recipient email address.' });
      return;
    }

    const subject = `HRC Concrete Quotation - ${concreteGrade} for ${siteLocation}`;
    const bodyHtml = generateQuotationHtml();

    setPendingEmailData({
      to: clientEmail,
      subject,
      bodyHtml,
    });
    setShowConfirmModal(true);
  };

  // Step 2: Confirmed Execution
  const handleExecuteSend = async () => {
    if (!pendingEmailData) return;
    setShowConfirmModal(false);
    setLoading(true);
    setStatusMessage(null);

    try {
      await sendGmailEmail({
        to: pendingEmailData.to,
        subject: pendingEmailData.subject,
        bodyHtml: pendingEmailData.bodyHtml,
        senderEmail: profile?.emailAddress || user?.email || undefined,
      });

      setStatusMessage({
        type: 'success',
        text: `Quotation email successfully sent to ${pendingEmailData.to} via Gmail!`,
      });
      // Refresh inbox
      loadProfileAndInbox();
    } catch (err: any) {
      console.error('Failed to send email:', err);
      setStatusMessage({
        type: 'error',
        text: err.message || 'Failed to send email. Please check your Gmail connection.',
      });
    } finally {
      setLoading(false);
      setPendingEmailData(null);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-[#00183F] border-2 border-[#002D72] rounded-xs max-w-4xl w-full text-white shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-[#001F52] p-4 sm:p-5 border-b border-[#002D72] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xs bg-[#EA4335] text-white flex items-center justify-center font-bold shadow-md">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black font-heading uppercase text-white tracking-wide">
                  HRC Gmail Dispatch & Quotation Center
                </h3>
                <span className="text-[10px] bg-[#F4C400] text-[#001F52] font-mono-tech font-bold px-2 py-0.5 rounded-xs">
                  GOOGLE WORKSPACE
                </span>
              </div>
              <p className="text-xs text-slate-300 font-mono-tech mt-0.5">
                Official dispatch email hub connected with <span className="text-[#F4C400]">hassanreadymix@gmail.com</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xs bg-[#00183F] hover:bg-[#C92323] text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-[#002D72]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Auth Banner Strip */}
        <div className="bg-[#00112C] px-4 py-3 border-b border-[#002D72] flex flex-wrap items-center justify-between gap-3 text-xs">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#F4C400]" />
                <span className="font-mono-tech text-slate-300">Connected:</span>
                <span className="font-bold text-white font-mono-tech">{user.email}</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-amber-300">
              <AlertCircle className="w-4 h-4 text-[#F4C400]" />
              <span>Connect your Google account to read inquiries and send official quotations.</span>
            </div>
          )}

          <div className="flex items-center gap-2">
            {user ? (
              <button
                onClick={handleSignOut}
                className="flex items-center gap-1.5 px-3 py-1 bg-[#001F52] hover:bg-[#C92323] text-xs font-mono-tech text-slate-200 hover:text-white rounded-xs border border-[#002D72] transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Disconnect</span>
              </button>
            ) : (
              <button
                onClick={handleSignIn}
                disabled={loading}
                className="gsi-material-button flex items-center gap-2 px-4 py-1.5 bg-white hover:bg-slate-100 text-[#1F1F1F] text-xs font-bold font-sans rounded-xs shadow-md transition-all cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
                <span>Sign in with Google</span>
              </button>
            )}
          </div>
        </div>

        {/* Status Notification */}
        {statusMessage && (
          <div
            className={`px-4 py-2.5 text-xs font-mono-tech flex items-center justify-between border-b ${
              statusMessage.type === 'success'
                ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                : 'bg-red-950/80 border-red-500/40 text-red-300'
            }`}
          >
            <div className="flex items-center gap-2">
              {statusMessage.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-400" />
              )}
              <span>{statusMessage.text}</span>
            </div>
            <button
              onClick={() => setStatusMessage(null)}
              className="text-xs opacity-70 hover:opacity-100 cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Tabs Bar */}
        <div className="bg-[#001F52] border-b border-[#002D72] flex items-center px-4 gap-2">
          <button
            onClick={() => setActiveTab('compose')}
            className={`py-3 px-4 text-xs font-bold font-mono-tech uppercase border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'compose'
                ? 'border-[#F4C400] text-[#F4C400] bg-[#00183F]'
                : 'border-transparent text-slate-300 hover:text-white'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>Compose HRC Quotation</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('inbox');
              if (user && token) loadProfileAndInbox();
            }}
            className={`py-3 px-4 text-xs font-bold font-mono-tech uppercase border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'inbox'
                ? 'border-[#F4C400] text-[#F4C400] bg-[#00183F]'
                : 'border-transparent text-slate-300 hover:text-white'
            }`}
          >
            <Inbox className="w-3.5 h-3.5" />
            <span>Inquiries & Dispatch Inbox {messages.length > 0 && `(${messages.length})`}</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-[#00183F]">
          
          {/* TAB 1: COMPOSE QUOTATION */}
          {activeTab === 'compose' && (
            <div>
              {!user && (
                <div className="mb-6 p-4 bg-[#001F52] border border-[#F4C400]/40 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#F4C400] shrink-0" />
                    <div className="text-xs text-slate-300">
                      <strong className="text-white">Google Authorization Required:</strong> Sign in with Google to send official quotations directly from your Gmail account.
                    </div>
                  </div>
                  <button
                    onClick={handleSignIn}
                    className="px-4 py-2 bg-[#F4C400] text-[#001F52] font-black text-xs uppercase tracking-wider rounded-xs hover:bg-[#FFE066] transition-colors shrink-0 cursor-pointer shadow-md"
                  >
                    Authorize Gmail
                  </button>
                </div>
              )}

              <form onSubmit={handleInitiateSend} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 font-mono-tech uppercase mb-1">
                      Client / Contractor Name
                    </label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Malik Construction / Engr. Bilal"
                      className="w-full bg-[#001F52] border border-[#002D72] focus:border-[#F4C400] rounded-xs px-3 py-2 text-sm text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 font-mono-tech uppercase mb-1">
                      Client Email Address <span className="text-[#F4C400]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="client@company.com or hassanreadymix@gmail.com"
                      className="w-full bg-[#001F52] border border-[#002D72] focus:border-[#F4C400] rounded-xs px-3 py-2 text-sm text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 font-mono-tech uppercase mb-1">
                      Pour Site Location
                    </label>
                    <input
                      type="text"
                      value={siteLocation}
                      onChange={(e) => setSiteLocation(e.target.value)}
                      placeholder="e.g. DHA Phase 7 / Bahria Sector C"
                      className="w-full bg-[#001F52] border border-[#002D72] focus:border-[#F4C400] rounded-xs px-3 py-2 text-sm text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 font-mono-tech uppercase mb-1">
                      Concrete Strength Grade
                    </label>
                    <select
                      value={concreteGrade}
                      onChange={(e) => setConcreteGrade(e.target.value)}
                      className="w-full bg-[#001F52] border border-[#002D72] focus:border-[#F4C400] rounded-xs px-3 py-2 text-sm text-white focus:outline-none"
                    >
                      <option value="3000 PSI (1:2:4 RCC Slabs & Beams)">3000 PSI (1:2:4 RCC Slabs & Beams)</option>
                      <option value="4000 PSI (Commercial Heavy Columns)">4000 PSI (Commercial Heavy Columns)</option>
                      <option value="5000 PSI (High-Rise Core & Raft)">5000 PSI (High-Rise Core & Raft)</option>
                      <option value="Waterproof / SRC Basement Mix">Waterproof / SRC Basement Mix</option>
                      <option value="Lean Concrete (1:4:8 Sub-base)">Lean Concrete (1:4:8 Sub-base)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 font-mono-tech uppercase mb-1">
                      Estimated Volume (m³)
                    </label>
                    <input
                      type="number"
                      value={volumeM3}
                      onChange={(e) => setVolumeM3(e.target.value)}
                      min="5"
                      step="1"
                      className="w-full bg-[#001F52] border border-[#002D72] focus:border-[#F4C400] rounded-xs px-3 py-2 text-sm text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 font-mono-tech uppercase mb-1">
                      Concrete Pumping Machine
                    </label>
                    <select
                      value={pumpType}
                      onChange={(e) => setPumpType(e.target.value)}
                      className="w-full bg-[#001F52] border border-[#002D72] focus:border-[#F4C400] rounded-xs px-3 py-2 text-sm text-white focus:outline-none"
                    >
                      <option value="42m Mobile Hydraulic Boom Pump">42m Mobile Hydraulic Boom Pump</option>
                      <option value="Static High-Pressure Ground Line Pump (Up to 300m)">Static Ground Line Pump</option>
                      <option value="Direct Chute Pour from Transit Mixer (No Pump)">Direct Chute Pour (No Pump)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 font-mono-tech uppercase mb-1">
                      HRC Rate per m³ (PKR)
                    </label>
                    <input
                      type="text"
                      value={ratePerM3}
                      onChange={(e) => setRatePerM3(e.target.value)}
                      className="w-full bg-[#001F52] border border-[#002D72] focus:border-[#F4C400] rounded-xs px-3 py-2 text-sm text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 font-mono-tech uppercase mb-1">
                    Special Batching Conditions & Notes
                  </label>
                  <textarea
                    rows={2}
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    className="w-full bg-[#001F52] border border-[#002D72] focus:border-[#F4C400] rounded-xs px-3 py-2 text-xs text-white focus:outline-none"
                  />
                </div>

                {/* Email Preview Container */}
                <div className="bg-[#00112C] border border-[#002D72] p-3 rounded-xs">
                  <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#F4C400] mb-2">
                    <span className="flex items-center gap-1.5">
                      <FileSpreadsheet className="w-3.5 h-3.5" />
                      <span>Live Quotation Letterhead Preview</span>
                    </span>
                    <span>Total: PKR {(parseFloat(volumeM3 || '0') * parseFloat(ratePerM3.replace(/,/g, '') || '0')).toLocaleString()}</span>
                  </div>
                  <div className="bg-white text-slate-900 rounded-xs p-4 text-xs max-h-48 overflow-y-auto border border-slate-300">
                    <div className="font-bold text-[#001F52] text-sm uppercase">HASSAN READYMIX CONCRETE (HRC)</div>
                    <div className="text-[10px] text-amber-700 font-bold mb-2">OFFICIAL CONCRETE QUOTATION</div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] my-2 bg-slate-50 p-2 border border-slate-200">
                      <div><strong>Client:</strong> {clientName || 'Valued Client'}</div>
                      <div><strong>Location:</strong> {siteLocation}</div>
                      <div><strong>Mix Grade:</strong> {concreteGrade}</div>
                      <div><strong>Quantity:</strong> {volumeM3} m³</div>
                      <div><strong>Pumping:</strong> {pumpType}</div>
                      <div><strong>Rate:</strong> PKR {ratePerM3}/m³</div>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-2">
                      📍 Gajjumatta Metro Bus Station, Ferozepur Road Lahore • 📞 0300-0751574 / 0308-4311505 • ✉️ hassanreadymix@gmail.com
                    </div>
                  </div>
                </div>

                {/* Form Action */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="text-[11px] font-mono-tech text-slate-400 flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Requires one-click confirmation before sending</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !user}
                    className={`px-6 py-3 font-mono-tech font-bold text-xs uppercase tracking-wider rounded-xs flex items-center gap-2 cursor-pointer shadow-lg transition-all ${
                      user
                        ? 'bg-[#F4C400] text-[#001F52] hover:bg-[#FFE066] border-b-4 border-[#D4AB00]'
                        : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Official Email</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 2: INBOX & INQUIRIES */}
          {activeTab === 'inbox' && (
            <div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 w-full sm:w-auto flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search messages by keyword (e.g. quote, mix, DHA)"
                    className="w-full bg-[#001F52] border border-[#002D72] rounded-xs px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F4C400]"
                  />
                  <button
                    onClick={loadProfileAndInbox}
                    disabled={loading || !user}
                    className="p-2 bg-[#001F52] border border-[#002D72] hover:border-[#F4C400] text-slate-200 hover:text-white rounded-xs cursor-pointer"
                    title="Refresh messages"
                  >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                  </button>
                </div>
              </div>

              {!user ? (
                <div className="text-center py-12 bg-[#001F52] rounded-xs border border-[#002D72] p-6">
                  <Mail className="w-12 h-12 text-[#F4C400] mx-auto mb-3 opacity-60" />
                  <h4 className="text-sm font-bold uppercase text-white">Gmail Account Not Connected</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto mt-1 mb-4">
                    Sign in with your Google account to view incoming concrete inquiries and client threads directly.
                  </p>
                  <button
                    onClick={handleSignIn}
                    className="px-5 py-2.5 bg-[#F4C400] text-[#001F52] text-xs font-bold uppercase rounded-xs hover:bg-[#FFE066] transition-colors cursor-pointer"
                  >
                    Sign in with Google
                  </button>
                </div>
              ) : loading ? (
                <div className="text-center py-12">
                  <RefreshCw className="w-8 h-8 text-[#F4C400] animate-spin mx-auto mb-2" />
                  <p className="text-xs text-slate-300 font-mono-tech">Fetching messages from Gmail...</p>
                </div>
              ) : messages.length === 0 ? (
                <div className="text-center py-12 bg-[#001F52] rounded-xs border border-[#002D72]">
                  <Inbox className="w-10 h-10 text-slate-500 mx-auto mb-2" />
                  <p className="text-xs text-slate-300 font-mono-tech">No matching emails found in Gmail.</p>
                  <p className="text-[11px] text-slate-400 mt-1">Try changing the search keyword above.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className="bg-[#001F52] border border-[#002D72] hover:border-[#F4C400] p-3 rounded-xs transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs text-white truncate">{msg.from}</span>
                            {msg.unread && (
                              <span className="bg-[#EA4335] text-white text-[9px] font-mono-tech px-1.5 py-0.2 rounded-xs font-bold">
                                UNREAD
                              </span>
                            )}
                          </div>
                          <h4 className="text-xs font-bold text-[#F4C400] truncate mt-0.5">{msg.subject}</h4>
                          <p className="text-[11px] text-slate-300 line-clamp-2 mt-1 font-mono-tech">
                            {msg.snippet}
                          </p>
                        </div>
                        <div className="text-right shrink-0 flex flex-col items-end gap-2">
                          <span className="text-[10px] text-slate-400 font-mono-tech">{msg.date}</span>
                          <button
                            onClick={() => {
                              // Extract email from 'From' header
                              const emailMatch = msg.from?.match(/<([^>]+)>/) || [null, msg.from];
                              const extractedEmail = emailMatch[1] || msg.from || '';
                              setClientEmail(extractedEmail);
                              setClientName(msg.from?.split('<')[0]?.trim() || '');
                              setActiveTab('compose');
                            }}
                            className="px-2.5 py-1 bg-[#00183F] hover:bg-[#F4C400] text-[#F4C400] hover:text-[#001F52] border border-[#002D72] text-[10px] font-mono-tech font-bold uppercase rounded-xs transition-colors cursor-pointer"
                          >
                            Reply with Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#001F52] p-3 px-5 border-t border-[#002D72] flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono-tech gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Building className="w-3.5 h-3.5 text-[#F4C400]" />
              <span>Gajjumatta, Ferozepur Road Lahore</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-[#F4C400]" />
              <span>0300-0751574 / 0308-4311505</span>
            </span>
          </div>

          <a
            href="https://mail.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#F4C400] hover:underline"
          >
            <span>Open Gmail in Web</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>

      {/* MANDATORY USER CONFIRMATION DIALOG (Per Workspace Integration Skill) */}
      {showConfirmModal && pendingEmailData && (
        <div className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#001F52] border-2 border-[#F4C400] rounded-xs max-w-md w-full p-6 text-white shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#F4C400]/20 border border-[#F4C400] text-[#F4C400] flex items-center justify-center shrink-0">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-black font-heading uppercase text-white">
                  Confirm Email Dispatch
                </h4>
                <p className="text-xs text-slate-300 font-mono-tech">Gmail Workspace Authorization</p>
              </div>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed mb-4">
              You are about to send an official <strong>HRC Concrete Quotation & Dispatch Notice</strong> to:
            </p>

            <div className="bg-[#00183F] border border-[#002D72] p-3 rounded-xs text-xs font-mono-tech space-y-1.5 mb-5">
              <div><span className="text-slate-400">Recipient:</span> <strong className="text-white">{pendingEmailData.to}</strong></div>
              <div><span className="text-slate-400">Subject:</span> <span className="text-[#F4C400]">{pendingEmailData.subject}</span></div>
              <div><span className="text-slate-400">Sender:</span> <span className="text-slate-300">{profile?.emailAddress || user?.email}</span></div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setShowConfirmModal(false);
                  setPendingEmailData(null);
                }}
                className="px-4 py-2 bg-[#00183F] hover:bg-slate-700 text-slate-200 text-xs font-mono-tech font-bold uppercase rounded-xs border border-[#002D72] cursor-pointer transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleExecuteSend}
                className="px-5 py-2 bg-[#F4C400] hover:bg-[#FFE066] text-[#001F52] text-xs font-mono-tech font-black uppercase tracking-wider rounded-xs cursor-pointer shadow-md transition-all flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Confirm & Send Email</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
