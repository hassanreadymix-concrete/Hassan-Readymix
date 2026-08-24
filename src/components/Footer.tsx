import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight, Award, ChevronRight } from 'lucide-react';
import { HRCLogo } from './HRCLogo';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-[#002D72] text-white border-t-4 border-[#F4C400] relative overflow-hidden font-sans">
      {/* Background blueprint details */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-10 pointer-events-none" />

      {/* TOP: Dedicated Contact Banner Card matching Footer hrc.png */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 relative z-10">
        <div className="relative bg-[#001F52] border-2 border-[#F4C400] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden mb-12">
          {/* Yellow Arc Styling on edges matching Footer hrc.png */}
          <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full border-4 border-[#F4C400] opacity-40 pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full border-4 border-[#F4C400] opacity-40 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-24 h-1 bg-[#F4C400]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-[#123D78]">
            
            {/* Block 1: Plant Site Address matching Footer hrc.png */}
            <div className="flex items-start gap-4 pr-4">
              <div className="w-12 h-12 rounded-full bg-[#002D72] border-2 border-[#F4C400] flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-6 h-6 text-[#F4C400]" />
              </div>
              <div>
                <span className="text-[11px] font-black font-mono-tech uppercase text-[#F4C400] tracking-wider block mb-1">
                  PLANT SITE ADDRESS:
                </span>
                <p className="text-xs text-slate-100 font-medium leading-relaxed">
                  2-km, Ferozepur off Road, Main Gajumata Metro Bus Stop, Rohi Nala Near Sabzi Mandi, Lahore - Pakistan, 5400.
                </p>
              </div>
            </div>

            {/* Block 2: Email matching Footer hrc.png */}
            <div className="flex items-start gap-4 pt-6 md:pt-0 md:px-6">
              <div className="w-12 h-12 rounded-full bg-[#002D72] border-2 border-[#F4C400] flex items-center justify-center shrink-0 shadow-md">
                <Mail className="w-6 h-6 text-[#F4C400]" />
              </div>
              <div>
                <span className="text-[11px] font-black font-mono-tech uppercase text-[#F4C400] tracking-wider block mb-1">
                  OFFICIAL EMAIL:
                </span>
                <a
                  href="mailto:hassanreadymix@gmail.com"
                  className="text-xs sm:text-sm font-bold text-white hover:text-[#F4C400] transition-colors block"
                >
                  hassanreadymix@gmail.com
                </a>
                <a
                  href="mailto:readymixhassan@gmail.com"
                  className="text-xs text-slate-300 hover:text-[#F4C400] transition-colors block mt-0.5"
                >
                  readymixhassan@gmail.com
                </a>
              </div>
            </div>

            {/* Block 3: Contact Phones matching Footer hrc.png */}
            <div className="flex items-start gap-4 pt-6 md:pt-0 md:pl-6">
              <div className="w-12 h-12 rounded-full bg-[#002D72] border-2 border-[#F4C400] flex items-center justify-center shrink-0 shadow-md">
                <Phone className="w-6 h-6 text-[#F4C400]" />
              </div>
              <div>
                <span className="text-[11px] font-black font-mono-tech uppercase text-[#F4C400] tracking-wider block mb-1">
                  DIRECT CONTACT & DISPATCH:
                </span>
                <div className="flex flex-col gap-0.5 font-mono-tech">
                  <a href="tel:03000751574" className="text-sm font-black text-white hover:text-[#F4C400] transition-colors">
                    0300-0751574
                  </a>
                  <a href="tel:03084311505" className="text-sm font-bold text-white hover:text-[#F4C400] transition-colors">
                    0308-4311505
                  </a>
                  <a href="tel:03064186863" className="text-xs text-slate-300 hover:text-[#F4C400] transition-colors">
                    0306-4186863
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* HRC Logo */}
              <div className="mb-4">
                <HRCLogo size="lg" theme="dark" />
              </div>

              <div className="text-xs font-mono-tech text-[#F4C400] uppercase font-bold tracking-widest mb-3">
                LAHORE'S TRUSTED READY-MIX CONCRETE PARTNER
              </div>

              <p className="text-xs text-slate-200 leading-relaxed max-w-sm mb-6">
                Hassan ReadyMix Concrete (HRC) has delivered 8+ years of high-specification concrete batching, precision laboratory testing, and continuous transit mixer dispatch across major residential, commercial, and industrial developments in Lahore.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono-tech text-slate-200 bg-[#001F52] p-3 border border-[#123D78] rounded-xs">
              <ShieldCheck className="w-4 h-4 text-[#F4C400] shrink-0" />
              <span>ASTM C94 & ISO Standards Compliant Batching</span>
            </div>
          </div>

          {/* Col 2: Concrete Grades & Products (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black font-mono-tech text-[#F4C400] uppercase tracking-widest mb-4 pb-2 border-b border-[#123D78]">
              CONCRETE GRADES & SUPPLY
            </h4>
            <ul className="space-y-2 text-xs text-slate-200">
              <li><a href="#products" className="hover:text-[#F4C400] transition-colors">Lean Concrete (1:4:8 & 1:3:6)</a></li>
              <li><a href="#products" className="hover:text-[#F4C400] transition-colors">RCC Grade Concrete (1:2:4 / 3000 PSI)</a></li>
              <li><a href="#products" className="hover:text-[#F4C400] transition-colors">High-Strength (4000 PSI – 6000 PSI)</a></li>
              <li><a href="#products" className="hover:text-[#F4C400] transition-colors">Self-Compacting Concrete (SCC)</a></li>
              <li><a href="#products" className="hover:text-[#F4C400] transition-colors">Sulfate Resistant Marine Cement (SRC)</a></li>
              <li><a href="#products" className="hover:text-[#F4C400] transition-colors">Pavement Quality Concrete (PQC)</a></li>
            </ul>
          </div>

          {/* Col 3: Machinery & Services (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black font-mono-tech text-[#F4C400] uppercase tracking-widest mb-4 pb-2 border-b border-[#123D78]">
              MACHINERY & FLEET
            </h4>
            <ul className="space-y-2 text-xs text-slate-200">
              <li><a href="#batching-system" className="hover:text-[#F4C400] transition-colors">Automated Batching Plants</a></li>
              <li><a href="#products" className="hover:text-[#F4C400] transition-colors">Twin Shaft Forced Mixers</a></li>
              <li><a href="#calculator" className="hover:text-[#F4C400] transition-colors">Transit Mixer Fleet (8-10 m³)</a></li>
              <li><a href="#products" className="hover:text-[#F4C400] transition-colors">Concrete Boom & Line Pumps</a></li>
              <li><a href="#calculator" className="text-[#F4C400] hover:underline font-bold flex items-center gap-1">Volume Calculator <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* Col 4: Quick Action & Lahore Hub (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black font-mono-tech text-[#F4C400] uppercase tracking-widest mb-4 pb-2 border-b border-[#123D78]">
              LAHORE DISPATCH DESK
            </h4>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Book same-day or scheduled continuous concrete pours across Lahore, Kasur, Raiwind, Ring Road, and surrounding Punjab sectors.
            </p>

            <button
              onClick={onOpenQuoteModal}
              className="w-full bg-[#F4C400] text-[#061C3D] hover:bg-white py-3 text-center font-black uppercase tracking-widest text-xs rounded-xs border-b-2 border-[#D4AB00] transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
            >
              <span>Get Instant Concrete Rate</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="mt-3 text-center text-[10px] text-slate-400 font-mono-tech">
              Hotline: 0300-0751574 / 0308-4311505
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-[#123D78] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 font-mono-tech">
          <div>
            © 2016 – {new Date().getFullYear()} Hassan ReadyMix Concrete (HRC). All Rights Reserved. Lahore, Pakistan.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="#quality" className="hover:text-white transition-colors">Lab Testing</a>
            <a href="#contact" className="hover:text-white transition-colors">Plant Location</a>
            <span className="text-[#F4C400]">GAJJUMATTA • ROHI NALA • LAHORE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
