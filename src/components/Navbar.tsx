import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, Menu, X, ChevronRight, ShieldCheck, MapPin } from 'lucide-react';
import { HRCLogo } from './HRCLogo';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans shadow-md">
      {/* Top Strip with Lahore Site Info & Emergency Contacts */}
      <div className="bg-[#002D72] text-white text-xs border-b border-[#123D78] hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6 text-[11px] font-medium tracking-wide">
            <div className="flex items-center gap-2 text-[#F4C400]">
              <ShieldCheck className="w-4 h-4 text-[#F4C400]" />
              <span className="font-bold uppercase tracking-wider text-white">8+ YEARS IN LAHORE</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-[#F4C400]" />
              <span>Gajjumatta Metro Bus Station, Rohi Nala Near Sabzi Mandi, LHR</span>
            </div>
            <div className="hidden xl:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>24/7 Concrete Transit & Pumping Dispatch</span>
            </div>
          </div>
          <div className="flex items-center gap-5 text-[12px]">
            <div className="flex items-center gap-2 font-mono-tech text-[#F4C400] font-bold">
              <Phone className="w-3.5 h-3.5 text-[#F4C400]" />
              <a href="tel:03000751574" className="hover:text-white transition-colors">0300-0751574</a>
              <span className="text-slate-400">/</span>
              <a href="tel:03084311505" className="hover:text-white transition-colors">0308-4311505</a>
            </div>
            <a 
              href="mailto:hassanreadymix@gmail.com" 
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#F4C400] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>hassanreadymix@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`bg-white transition-all duration-200 border-b border-[#E8EDF3] ${
          isScrolled ? 'py-2.5 shadow-lg' : 'py-3.5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Authentic HRC Brand Logo matching L head hrc.png */}
          <a href="#home" className="group">
            <HRCLogo size="md" theme="light" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-7 text-[12px] font-bold uppercase tracking-wider text-[#002D72]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#C92323] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F4C400] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:03000751574"
              className="hidden lg:inline-flex items-center gap-1.5 bg-[#002D72] text-white px-4 py-2 text-xs font-bold font-mono-tech rounded-xs hover:bg-[#061C3D] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#F4C400]" />
              <span>0300-0751574</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 bg-[#F4C400] text-[#001F52] px-5 py-2.5 text-xs font-black uppercase tracking-widest border-b-4 border-[#D4AB00] hover:bg-[#FFDE59] hover:-translate-y-0.5 active:translate-y-0 transition-all rounded-xs shadow-sm cursor-pointer"
            >
              <span>Get HRC Rate</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#061C3D] hover:text-[#002D72] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-[#E8EDF3] px-6 py-6 shadow-xl transition-all">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#002D72] hover:text-[#C92323] font-bold text-sm uppercase tracking-wider py-2 border-b border-slate-100 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full bg-[#F4C400] text-[#001F52] py-3 text-center font-black uppercase tracking-widest text-xs border-b-4 border-[#D4AB00] rounded-xs shadow-md cursor-pointer"
                >
                  Request HRC Concrete Rate
                </button>
              </div>
              <div className="pt-2 text-xs text-slate-600 flex flex-col gap-1.5 font-mono-tech bg-slate-50 p-3 rounded-xs border border-slate-200">
                <div className="font-bold text-[#002D72]">Hassan ReadyMix Concrete (HRC)</div>
                <div>📍 Gajjumatta Metro Bus Station, Rohi Nala Near Sabzi Mandi, Lahore</div>
                <div>📞 0300-0751574 / 0308-4311505 / 0306-4186863</div>
                <div>✉️ hassanreadymix@gmail.com</div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
