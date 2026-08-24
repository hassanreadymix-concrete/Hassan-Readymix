import React from 'react';
import { HRCLogo } from './HRCLogo';
import { Phone, Mail, MapPin, Award } from 'lucide-react';

export const HRCHeaderBanner: React.FC = () => {
  return (
    <div className="w-full bg-white border-b border-[#E8EDF3] relative overflow-hidden hidden md:block">
      {/* Decorative Swooshes from L head hrc.png */}
      <svg
        viewBox="0 0 1200 120"
        fill="none"
        preserveAspectRatio="none"
        className="absolute top-0 right-0 w-3/5 h-full pointer-events-none opacity-90"
      >
        {/* Yellow Golden Dynamic Curve Accent */}
        <path
          d="M 100 0 Q 300 120, 600 30 Q 900 -40, 1200 60 L 1200 0 Z"
          fill="#F4C400"
          opacity="0.9"
        />
        {/* Deep Royal Navy Wave Swoosh */}
        <path
          d="M 220 0 Q 420 140, 750 45 Q 1050 -20, 1200 20 L 1200 0 Z"
          fill="#002D72"
        />
        {/* Crisp Golden Highlight Line */}
        <path
          d="M 215 0 Q 415 145, 750 48 Q 1055 -18, 1200 22"
          stroke="#F9D423"
          strokeWidth="4"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between relative z-10">
        {/* Left: Brand Identity matching L head hrc.png */}
        <div className="flex items-center gap-4">
          <HRCLogo size="lg" theme="light" />
        </div>

        {/* Right Contact Details aligned with Letterhead Theme */}
        <div className="flex items-center gap-6 text-white text-xs font-mono-tech">
          <div className="hidden lg:flex items-center gap-2 bg-[#002D72]/90 border border-white/20 px-3 py-1.5 rounded-xs shadow-sm">
            <Award className="w-4 h-4 text-[#F4C400]" />
            <span className="font-bold text-white uppercase text-[11px]">8+ YEARS IN LAHORE</span>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-[10px] text-white/80 font-bold uppercase tracking-wider">BOOKING & DISPATCH:</span>
            <div className="flex items-center gap-3">
              <a href="tel:03000751574" className="font-bold text-[#F4C400] hover:text-white transition-colors text-sm">
                0300-0751574
              </a>
              <span className="text-white/40">|</span>
              <a href="tel:03084311505" className="font-bold text-white hover:text-[#F4C400] transition-colors text-sm">
                0308-4311505
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
