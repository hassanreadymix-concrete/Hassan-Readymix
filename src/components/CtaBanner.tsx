import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';

interface CtaProps {
  onOpenQuoteModal: () => void;
}

export const CtaBanner: React.FC<CtaProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-20 lg:py-24 bg-[#00183F] relative overflow-hidden border-b border-[#002D72] font-sans">
      {/* Industrial Hazard Stripe Accent Bar Top & Bottom */}
      <div className="absolute top-0 left-0 right-0 h-1.5 industrial-stripe" />
      <div className="absolute bottom-0 left-0 right-0 h-1.5 industrial-stripe" />
      
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#001F52] text-[#F4C400] text-[11px] font-black tracking-[0.25em] uppercase rounded-xs mb-6 border border-[#002D72]">
          <span>HASSAN READYMIX CONCRETE • LAHORE</span>
        </div>

        {/* Heavy Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading uppercase tracking-tight max-w-4xl mx-auto mb-6 leading-tight">
          Ready to Pour? Order Your Concrete Mix Today
        </h2>

        {/* Supporting Text */}
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Direct dispatch from our Gajjumatta Central Batching Plant. We supply certified RCC mixes, high-strength foundations, commercial slabs, and mobile boom pumps across all Lahore sectors.
        </p>

        {/* Action Buttons with Direct Phone Numbers */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:03000751574"
            className="bg-[#F4C400] text-[#001F52] hover:bg-[#FFE066] px-8 py-4 font-black text-sm uppercase tracking-widest transition-all rounded-xs border-b-4 border-[#D4AB00] shadow-xl flex items-center gap-3 cursor-pointer"
          >
            <PhoneCall className="w-5 h-5 text-[#001F52]" />
            <span>Call: 0300-0751574</span>
          </a>

          <a
            href="tel:03084311505"
            className="bg-[#002D72] hover:bg-[#001F52] text-white border-2 border-[#F4C400]/60 px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all rounded-xs flex items-center gap-2.5"
          >
            <PhoneCall className="w-5 h-5 text-[#F4C400]" />
            <span>0308-4311505</span>
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white/40 px-7 py-4 font-bold text-sm uppercase tracking-wider transition-all rounded-xs flex items-center gap-2.5 cursor-pointer"
          >
            <span>Request Online Quote</span>
            <ArrowRight className="w-4 h-4 text-[#F4C400]" />
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-[#002D72]/80 flex flex-wrap items-center justify-center gap-8 text-xs font-mono-tech text-slate-300 uppercase">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#F4C400]" />
            <span>ASTM C94 & C39 Certified Tests</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#38BDF8]" />
            <span>Fleet of Transit Mixers & Mobile Pumps</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span>Gajjumatta Metro Bus Station, Rohi Nala LHR</span>
          </div>
        </div>

      </div>
    </section>
  );
};

