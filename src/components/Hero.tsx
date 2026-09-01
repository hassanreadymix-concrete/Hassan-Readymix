import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Truck, PhoneCall, CheckCircle2, Activity, MapPin, Eye } from 'lucide-react';
import { HRC_IMAGES } from '../data/hrcImages';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [activePhoto, setActivePhoto] = useState<'mixer' | 'plant' | 'fleet' | 'loading'>('mixer');

  const photoMap = {
    mixer: {
      src: HRC_IMAGES.transitMixer,
      title: 'HRC Heavy-Duty Transit Mixer (10m³)',
      subtitle: 'High-Torque Continuous Agitation Drum • ASTM Slump Retention',
      badge: 'FLEET UNIT: HRC-2025',
    },
    plant: {
      src: HRC_IMAGES.batchingPlant,
      title: 'HRC Central Computerized Batching Plant',
      subtitle: '120 m³/h Twin-Shaft Mixer • 4-Bin Aggregate Hoppers • Blue Silo',
      badge: 'GAJJUMATTA PLANT • LAHORE',
    },
    fleet: {
      src: HRC_IMAGES.fleetYard,
      title: 'HRC Concrete Transit Fleet & Wheel Loaders',
      subtitle: 'Dedicated Mixer Trucks Ready For Synchronized Mega Pours',
      badge: 'DISPATCH DEPOT',
    },
    loading: {
      src: HRC_IMAGES.batchingLoading,
      title: 'Automated Rapid Batching & Chute Loading',
      subtitle: 'Precision ±0.5% Computerized Aggregate & Cement Weight Batcher',
      badge: 'BATCHING TOWER',
    },
  };

  const current = photoMap[activePhoto];

  return (
    <section id="home" className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-24 bg-[#F8FAFC] overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#001F52] via-[#F4C400] to-[#001F52]" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Technical Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 bg-[#001F52] text-white text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.18em] uppercase rounded-full mb-4 sm:mb-5 w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F4C400] animate-pulse" />
              <span>Hassan ReadyMix Concrete • 8+ Years In Lahore</span>
            </div>

            {/* Heavy Engineering Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[54px] xl:text-[62px] leading-[1.1] sm:leading-[0.98] font-black text-[#001F52] uppercase font-heading mb-4 sm:mb-5 tracking-tight">
              Lahore's Trusted <br />
              <span className="relative inline-block text-[#001F52] pr-2">
                Ready-Mix Concrete<span className="text-[#C92323]">.</span>
                <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#F4C400]/40 -z-10 rounded-xs" />
              </span><br />
              Poured for <br />
              <span className="bg-[#F4C400] text-[#001F52] px-2.5 sm:px-3 py-0.5 inline-block shadow-sm rounded-lg">
                Maximum Strength.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-[#475467] text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed mb-6 sm:mb-7 font-normal">
              Supplying high-strength certified RCC concrete, automated computerized batching, dedicated transit mixer fleet, and mobile boom pumps from our central plant at Gajjumatta Metro Bus Station, Ferozepur Road Lahore.
            </p>

            {/* Direct Phone Number & CTA Group */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 mb-7 sm:mb-8">
              <a
                href="tel:03000751574"
                className="bg-[#F4C400] text-[#001F52] hover:bg-[#FFE066] px-5 sm:px-7 py-3 sm:py-3.5 font-black text-xs sm:text-sm uppercase tracking-wider transition-all rounded-xl border-b-3 border-[#D4AB00] shadow-md flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
              >
                <PhoneCall className="w-4 h-4 text-[#001F52]" />
                <span>0300-0751574</span>
              </a>

              <a
                href="tel:03084311505"
                className="bg-[#002D72] text-white hover:bg-[#001F52] px-5 sm:px-7 py-3 sm:py-3.5 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all rounded-xl border-b-3 border-[#00183F] shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <PhoneCall className="w-4 h-4 text-[#F4C400]" />
                <span>0308-4311505</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="bg-white text-[#001F52] hover:bg-[#001F52] hover:text-white border border-[#CBD5E1] px-4 sm:px-5 py-3 sm:py-3.5 font-bold text-xs uppercase tracking-wider transition-all rounded-xl shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Get HRC Rate</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F4C400]" />
              </button>
            </div>

            {/* Trust Badges Row */}
            <div className="pt-4 sm:pt-5 border-t border-[#E8EDF3] grid grid-cols-3 gap-2 sm:gap-3">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#E8EDF3] flex items-center justify-center text-[#002D72] shadow-xs shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#002D72]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-black text-[#001F52] uppercase leading-tight">ASTM C94 & C39</span>
                  <span className="text-[9px] sm:text-[10px] text-[#667085]">Lab Tested</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#E8EDF3] flex items-center justify-center text-[#002D72] shadow-xs shrink-0">
                  <Truck className="w-4 h-4 text-[#F4C400]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-black text-[#001F52] uppercase leading-tight">Transit Fleet</span>
                  <span className="text-[9px] sm:text-[10px] text-[#667085]">Fast On-Site</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#E8EDF3] flex items-center justify-center text-[#002D72] shadow-xs shrink-0">
                  <MapPin className="w-4 h-4 text-[#C92323]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] font-black text-[#001F52] uppercase leading-tight">All Lahore</span>
                  <span className="text-[9px] sm:text-[10px] text-[#667085]">DHA, Bahria</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visualizer & Fleet Telemetry Panel */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-[#00183F] p-2.5 sm:p-3.5 rounded-2xl md:rounded-3xl border border-[#002D72] shadow-2xl overflow-hidden">
              
              {/* Top Status Bar in Visualizer */}
              <div className="bg-[#001F52] px-4 py-2.5 flex items-center justify-between border-b border-[#002D72] text-white text-xs mb-2 rounded-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
                  <span className="font-mono-tech font-bold uppercase tracking-wider text-[#F4C400] text-[11px]">
                    HRC LIVE DISPATCH • GAJJUMATTA PLANT
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[10px] font-mono-tech text-slate-300">
                  <span>CAPACITY: 120 m³/h</span>
                  <span className="bg-[#002D72] px-2 py-0.5 rounded-full text-white font-bold">ACTIVE</span>
                </div>
              </div>

              {/* Authentic Photo Viewer Container */}
              <div className="relative h-[280px] sm:h-[350px] lg:h-[390px] w-full overflow-hidden rounded-xl bg-[#00112C] group">
                <img
                  src={current.src}
                  alt={current.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00183F] via-transparent to-black/30 pointer-events-none" />

                {/* Top Badge on Photo */}
                <div className="absolute top-3 left-3 bg-[#001F52]/90 backdrop-blur-xs border border-[#F4C400]/50 text-[#F4C400] text-[10px] font-mono-tech font-bold uppercase px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C400]" />
                  <span>{current.badge}</span>
                </div>

                {/* Bottom Caption on Photo */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#00183F]/90 backdrop-blur-xs p-3 border border-[#002D72] rounded-xl">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide flex items-center justify-between">
                    <span>{current.title}</span>
                    <span className="text-[10px] font-mono-tech text-[#F4C400] font-normal">HRC LAHORE</span>
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-0.5 font-normal">
                    {current.subtitle}
                  </p>
                </div>
              </div>

              {/* Photo Switcher Tabs */}
              <div className="grid grid-cols-4 gap-1 bg-[#00183F] p-1.5 border-t border-[#002D72] text-[11px] font-mono-tech mt-2">
                <button
                  onClick={() => setActivePhoto('mixer')}
                  className={`py-2 px-1 text-center font-bold uppercase transition-colors rounded-xs cursor-pointer ${
                    activePhoto === 'mixer'
                      ? 'bg-[#F4C400] text-[#001F52]'
                      : 'bg-[#001F52] text-slate-300 hover:text-white'
                  }`}
                >
                  01. Transit Mixer
                </button>
                <button
                  onClick={() => setActivePhoto('plant')}
                  className={`py-2 px-1 text-center font-bold uppercase transition-colors rounded-xs cursor-pointer ${
                    activePhoto === 'plant'
                      ? 'bg-[#F4C400] text-[#001F52]'
                      : 'bg-[#001F52] text-slate-300 hover:text-white'
                  }`}
                >
                  02. Batching Plant
                </button>
                <button
                  onClick={() => setActivePhoto('fleet')}
                  className={`py-2 px-1 text-center font-bold uppercase transition-colors rounded-xs cursor-pointer ${
                    activePhoto === 'fleet'
                      ? 'bg-[#F4C400] text-[#001F52]'
                      : 'bg-[#001F52] text-slate-300 hover:text-white'
                  }`}
                >
                  03. Mixer Fleet
                </button>
                <button
                  onClick={() => setActivePhoto('loading')}
                  className={`py-2 px-1 text-center font-bold uppercase transition-colors rounded-xs cursor-pointer ${
                    activePhoto === 'loading'
                      ? 'bg-[#F4C400] text-[#001F52]'
                      : 'bg-[#001F52] text-slate-300 hover:text-white'
                  }`}
                >
                  04. Loading Tower
                </button>
              </div>

              {/* Technical Information Panel Overlapping bottom */}
              <div className="mt-2 bg-[#001F52] border border-[#002D72] p-3 text-white">
                <div className="flex items-center justify-between border-b border-[#002D72] pb-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#F4C400]" />
                    <span className="text-xs font-black uppercase tracking-widest text-[#F4C400]">
                      HRC Concrete Delivery Standards
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-tech text-emerald-400 bg-emerald-950/80 px-2 py-0.5 border border-emerald-500/30 rounded">
                    ASTM VERIFIED
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="flex items-start gap-2 bg-[#00183F] p-2 border-l-2 border-[#F4C400]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F4C400] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white uppercase text-[11px]">Exact Slump & Mix</div>
                      <div className="text-[10px] text-slate-300 font-mono-tech">ASTM C143 Slump Cone</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 bg-[#00183F] p-2 border-l-2 border-[#F4C400]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F4C400] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white uppercase text-[11px]">Rapid Transit Fleet</div>
                      <div className="text-[10px] text-slate-300 font-mono-tech">8m³ - 10m³ Drum Capacity</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 bg-[#00183F] p-2 border-l-2 border-[#F4C400]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F4C400] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white uppercase text-[11px]">Crushing Strength</div>
                      <div className="text-[10px] text-slate-300 font-mono-tech">7 & 28-Day Lab Report</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Geometric decorative corner badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#F4C400] text-[#001F52] font-black text-xs px-4 py-1.5 uppercase tracking-widest shadow-md hidden sm:block border border-[#D4AB00]">
              HRC LAHORE • 8+ YEARS EXCELLENCE
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

