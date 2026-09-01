import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, ChevronRight, MapPin, Award } from 'lucide-react';
import { HRCLogo } from './HRCLogo';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  onOpenGmailHub?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, onOpenGmailHub }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About HRC', href: '#about' },
    { name: 'Plant Gallery', href: '#gallery' },
    { name: 'RMC Mixes', href: '#products' },
    { name: 'Batching System', href: '#batching-system' },
    { name: 'Concrete Calculator', href: '#calculator' },
    { name: 'Projects in Lahore', href: '#projects' },
    { name: 'Quality Lab', href: '#quality' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans px-1.5 sm:px-4 md:px-6 pt-1 sm:pt-2 md:pt-3">
      {/* Floating Rounded Header Container */}
      <div className={`max-w-7xl mx-auto rounded-xl sm:rounded-2xl md:rounded-3xl bg-white shadow-lg sm:shadow-xl shadow-slate-900/10 border border-slate-200/90 overflow-hidden transition-all duration-300 ring-1 ring-black/5 ${
        isScrolled ? 'shadow-xl ring-black/10' : ''
      }`}>
        
        {/* 1. Authentic Letterhead Header matching "L head hrc.png" */}
        <div className="w-full bg-white relative overflow-hidden border-b border-[#E2E8F0]/80">
          {/* Background Precise Graphic Swooshes matching L head hrc.png */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            <svg
              viewBox="0 0 1440 100"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="goldSwooshGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F4C400" />
                  <stop offset="40%" stopColor="#F9D423" />
                  <stop offset="85%" stopColor="#E5A912" />
                  <stop offset="100%" stopColor="#D49B00" />
                </linearGradient>
                <linearGradient id="blueSwooshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00225E" />
                  <stop offset="100%" stopColor="#002D72" />
                </linearGradient>
              </defs>

              {/* Left Top Golden Flowing Swoosh matching L head hrc.png */}
              <path
                d="M 0 0 L 680 0 C 520 42, 280 46, 0 20 Z"
                fill="url(#goldSwooshGrad)"
                opacity="0.98"
              />

              {/* Right Top Royal Navy Blue Sweeping Arc matching L head hrc.png */}
              <path
                d="M 680 0 C 820 90, 1100 80, 1440 32 L 1440 0 Z"
                fill="url(#blueSwooshGrad)"
              />

              {/* Golden Ribbon Curve Under the Blue Arc matching L head hrc.png */}
              <path
                d="M 1020 78 C 1180 92, 1340 82, 1440 76 L 1440 82 C 1340 88, 1180 98, 1020 78 Z"
                fill="#F4C400"
              />
            </svg>
          </div>

          {/* Header Content Container */}
          <div className="px-2.5 sm:px-6 lg:px-7 py-1.5 sm:py-2.5 flex items-center justify-between relative z-10 gap-1.5 sm:gap-4">
            {/* Left: Authentic HRC Letterhead Brand Logo & Text */}
            <a href="#home" className="group flex items-center transition-transform hover:opacity-95 shrink-0 min-w-0">
              <HRCLogo size="md" theme="light" />
            </a>

            {/* Right: Lahore Plant Info, Hotlines, Gmail Hub, and Quote CTA */}
            <div className="flex items-center gap-1 sm:gap-2.5 md:gap-3.5 shrink-0">
              {/* Plant Quality Seal */}
              <div className="hidden 2xl:flex items-center gap-2 bg-slate-50/90 hover:bg-slate-100/90 border border-slate-200 px-3 py-1.5 rounded-xl transition-all shadow-xs">
                <Award className="w-4 h-4 text-[#002D72]" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-[#002D72] leading-tight">ASTM C94 CERTIFIED</span>
                  <span className="text-[9px] text-slate-500 font-mono-tech leading-tight">Rohi Nala, Lahore</span>
                </div>
              </div>

              {/* Booking Hotlines */}
              <div className="hidden lg:flex items-center gap-2 bg-slate-50/95 border border-slate-200/90 px-3 py-1.5 rounded-xl shadow-xs hover:border-[#002D72]/40 transition-all">
                <div className="w-7 h-7 rounded-lg bg-[#002D72] flex items-center justify-center text-[#F4C400] shadow-xs">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-bold uppercase text-slate-500 font-mono-tech tracking-wider">BOOKING HOTLINE:</span>
                  <div className="flex items-center gap-1.5 font-bold font-mono-tech text-xs text-[#002D72]">
                    <a href="tel:03000751574" className="hover:text-[#C92323] transition-colors">0300-0751574</a>
                    <span className="text-slate-300">/</span>
                    <a href="tel:03084311505" className="hover:text-[#C92323] transition-colors">0308-4311505</a>
                  </div>
                </div>
              </div>

              {/* Gmail Hub Button */}
              <button
                onClick={onOpenGmailHub}
                className="hidden md:inline-flex items-center gap-1.5 bg-[#EA4335]/10 text-[#EA4335] hover:bg-[#EA4335] hover:text-white px-3 py-1.5 md:px-3.5 md:py-2 text-xs font-bold font-mono-tech rounded-lg sm:rounded-xl border border-[#EA4335]/30 transition-all cursor-pointer shadow-xs active:scale-98"
                title="Open Gmail Quotation & Dispatch Hub"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Gmail Hub</span>
              </button>

              {/* Quick Call Button on Mobile */}
              <a
                href="tel:03000751574"
                className="inline-flex lg:hidden items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-[#002D72] text-[#F4C400] rounded-lg shadow-xs active:scale-95 transition-transform"
                title="Call 03000751574"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>

              {/* Get Rate Quote CTA Button */}
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-1 sm:gap-2 bg-[#F4C400] text-[#001F52] px-2.5 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-[10px] sm:text-xs font-black uppercase tracking-wider border-b-2 sm:border-b-3 border-[#D4AB00] hover:bg-[#FFDE59] hover:-translate-y-0.5 active:translate-y-0 transition-all rounded-lg sm:rounded-xl shadow-sm cursor-pointer active:scale-98"
              >
                <span className="hidden xs:inline">Get Rate</span>
                <span className="xs:hidden">Quote</span>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-1 sm:p-1.5 text-[#002D72] hover:text-[#C92323] hover:bg-slate-100 rounded-lg transition-all focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* 2. Navigation Link Bar (Desktop Only) */}
        <nav className="hidden xl:flex bg-white/95 backdrop-blur-md px-3.5 sm:px-6 lg:px-7 py-1.5 sm:py-2 items-center justify-between border-t border-slate-100">
          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1.5 2xl:gap-2.5 text-[12px] font-bold uppercase tracking-wider text-[#002D72]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1 rounded-lg hover:text-[#C92323] hover:bg-slate-100/90 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Lahore Plant Location Tag */}
          <div className="hidden xl:flex items-center gap-2 text-xs text-slate-600 font-medium bg-slate-50 border border-slate-200/70 px-3 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-[#C92323] shrink-0" />
            <span className="truncate">Gajjumatta Metro Station, Rohi Nala Near Sabzi Mandi, Lahore</span>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-[#E8EDF3] px-4 py-4 transition-all max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#002D72] hover:text-[#C92323] font-bold text-xs uppercase tracking-wider py-2 px-3 rounded-lg hover:bg-slate-50 border-b border-slate-100 flex items-center justify-between transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
              
              <div className="pt-2 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenGmailHub) onOpenGmailHub();
                  }}
                  className="w-full bg-[#EA4335] hover:bg-[#D93025] text-white py-2.5 text-center font-black uppercase tracking-widest text-xs rounded-xl shadow-sm cursor-pointer flex items-center justify-center gap-2 active:scale-98 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Gmail Dispatch Hub</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full bg-[#F4C400] text-[#001F52] py-2.5 text-center font-black uppercase tracking-widest text-xs border-b-3 border-[#D4AB00] rounded-xl shadow-sm cursor-pointer active:scale-98 transition-all"
                >
                  Request HRC Concrete Rate
                </button>
              </div>

              <div className="pt-2 text-[11px] sm:text-xs text-slate-700 flex flex-col gap-1 font-mono-tech bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="font-bold text-[#002D72]">Hassan ReadyMix Concrete (HRC)</div>
                <div>📍 Gajjumatta Metro Bus Station, Rohi Nala Near Sabzi Mandi, Lahore</div>
                <div>📞 0300-0751574 / 0308-4311505 / 0306-4186863</div>
                <div>✉️ hassanreadymix@gmail.com</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
