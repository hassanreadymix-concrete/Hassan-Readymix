import React, { useState } from 'react';
import { FAQ_LIST } from '../data/processData';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E8EDF3] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[#002D72] text-xs font-black tracking-[0.25em] uppercase mb-3">
            <HelpCircle className="w-4 h-4 text-[#F4C400]" />
            <span>CONCRETE DISPATCH & MIX CLARIFICATIONS</span>
            <span className="w-5 h-[2px] bg-[#F4C400]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#001F52] font-heading uppercase tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#667085] text-base leading-relaxed max-w-2xl mx-auto">
            Essential information regarding concrete mix designs, PSI strengths, transit mixer delivery timings, and booking in Lahore.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#F5F7FA] border border-[#E8EDF3] rounded-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-black text-sm sm:text-base text-[#001F52] uppercase tracking-wide hover:text-[#002D72] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[#001F52] font-mono-tech text-xs font-bold bg-[#F4C400] px-2 py-0.5 rounded-xs">
                      Q0{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#002D72] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#C92323]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475467] leading-relaxed border-t border-[#E8EDF3]/60">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call Box in FAQ */}
        <div className="mt-10 p-6 bg-[#001F52] text-white rounded-xs border border-[#002D72] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-black font-heading uppercase text-white">Have a specific structural mix requirement?</div>
            <div className="text-xs text-slate-300">Speak directly with our chief concrete batching engineer in Lahore.</div>
          </div>
          <a
            href="tel:03000751574"
            className="bg-[#F4C400] text-[#001F52] hover:bg-[#FFE066] px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-xs flex items-center gap-2 shrink-0 shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>0300-0751574</span>
          </a>
        </div>

      </div>
    </section>
  );
};

