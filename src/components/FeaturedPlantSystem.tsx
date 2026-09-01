import React, { useState } from 'react';
import { SUB_SYSTEMS_DATA } from '../data/equipmentData';
import { HRC_IMAGES } from '../data/hrcImages';
import { PhoneCall, CheckCircle2, ChevronRight, Cpu, Layers, Activity } from 'lucide-react';

interface FeaturedProps {
  onOpenQuoteModal: (product?: string) => void;
}

export const FeaturedPlantSystem: React.FC<FeaturedProps> = ({ onOpenQuoteModal }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeSystem = SUB_SYSTEMS_DATA[activeStepIndex] || SUB_SYSTEMS_DATA[0];

  const stageImages = [
    { src: HRC_IMAGES.batchingPlant, title: 'HRC Central Automated Batching Plant & 4-Bin Aggregate Hoppers' },
    { src: HRC_IMAGES.batchingLoading, title: 'Central Computerized Twin-Shaft Loading Tower' },
    { src: HRC_IMAGES.batchingPlant, title: 'Grade 53 Bulk Cement Silo & High-Volume Storage' },
    { src: HRC_IMAGES.transitMixer, title: 'HRC Heavy-Duty 10m³ Transit Mixer Chute Loading' },
    { src: HRC_IMAGES.fleetYard, title: 'HRC ReadyMix Mixer Fleet Dispatched for Megapours' },
  ];

  const currentStageImg = stageImages[activeStepIndex] || stageImages[0];

  return (
    <section id="batching-system" className="py-20 lg:py-28 bg-[#00183F] text-white relative overflow-hidden border-b border-[#002D72]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#F4C400] text-xs font-black tracking-[0.25em] uppercase mb-3">
              <span className="w-5 h-[2px] bg-[#F4C400]" />
              <span>HRC GAJJUMATTA BATCHING OPERATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white font-heading uppercase tracking-tight">
              Automated Ready-Mix Batching Plant & Silos
            </h2>
          </div>
          <p className="text-slate-300 text-sm sm:text-base max-w-lg leading-relaxed">
            HRC operates fully computerized 120 m³/hr batching plants at Gajjumatta Lahore, synchronizing 4-bin aggregates, Grade 53 cement silos, chemical admixtures, and rapid transit mixer loading.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT: Authentic Plant Photo Visualization */}
          <div className="lg:col-span-7">
            <div className="bg-[#001F52] border-2 border-[#002D72] rounded-xs p-3 sm:p-5 shadow-2xl relative">
              
              {/* Plant Model Header */}
              <div className="flex items-center justify-between border-b border-[#002D72] pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#F4C400] animate-pulse" />
                  <span className="font-mono-tech text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                    HRC GAJJUMATTA CENTRAL PLANT PROCESS
                  </span>
                </div>
                <span className="text-[11px] font-mono-tech bg-[#00183F] text-[#F4C400] px-3 py-1 border border-[#002D72] rounded-xs">
                  STAGE: {activeSystem.id} / 05
                </span>
              </div>

              {/* Machinery Authentic Photo Frame */}
              <div className="relative h-[340px] sm:h-[400px] w-full overflow-hidden rounded-xs bg-[#00112C] group">
                <img
                  src={currentStageImg.src}
                  alt={currentStageImg.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00183F] via-transparent to-black/30 pointer-events-none" />

                {/* Active Subsystem Indicator Callout */}
                <div className="absolute top-4 left-4 bg-[#00183F]/95 border-2 border-[#F4C400] p-3 rounded-xs max-w-[300px] shadow-xl backdrop-blur-xs">
                  <div className="text-[10px] font-mono-tech text-[#F4C400] uppercase font-bold tracking-wider mb-1">
                    STAGE {activeSystem.id} • PRODUCTION COMPONENT
                  </div>
                  <div className="text-sm font-bold text-white font-heading uppercase mb-1">
                    {activeSystem.name}
                  </div>
                  <div className="text-[11px] text-slate-300 leading-tight">
                    {activeSystem.subtitle}
                  </div>
                </div>

                {/* Bottom photo badge */}
                <div className="absolute bottom-3 right-3 bg-[#001F52]/90 border border-[#002D72] text-[10px] font-mono-tech text-[#F4C400] px-2.5 py-1 rounded-xs">
                  HRC PLANT LAHORE
                </div>
              </div>

              {/* Subsystem Live Specs Grid */}
              <div className="mt-4 bg-[#00183F] p-4 border border-[#002D72] rounded-xs grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono-tech">
                <div className="p-2.5 bg-[#001F52] border-l-2 border-[#F4C400]">
                  <div className="text-[10px] text-slate-400 uppercase">SPECIFICATION 1</div>
                  <div className="text-white font-bold mt-0.5">{activeSystem.spec1}</div>
                </div>
                <div className="p-2.5 bg-[#001F52] border-l-2 border-[#F4C400]">
                  <div className="text-[10px] text-slate-400 uppercase">SPECIFICATION 2</div>
                  <div className="text-white font-bold mt-0.5">{activeSystem.spec2}</div>
                </div>
                <div className="p-2.5 bg-[#001F52] border-l-2 border-[#F4C400]">
                  <div className="text-[10px] text-slate-400 uppercase">SPECIFICATION 3</div>
                  <div className="text-white font-bold mt-0.5">{activeSystem.spec3}</div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: 01 to 05 Process List */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-3 mb-8">
              {SUB_SYSTEMS_DATA.map((sys, idx) => {
                const isActive = activeStepIndex === idx;
                return (
                  <div
                    key={sys.id}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`p-4 rounded-xs border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#002D72] border-[#F4C400] shadow-lg translate-x-1'
                        : 'bg-[#00183F]/80 border-[#002D72] hover:bg-[#001F52] hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Step Number */}
                      <span
                        className={`text-xl font-black font-mono-tech leading-none ${
                          isActive ? 'text-[#F4C400]' : 'text-slate-400'
                        }`}
                      >
                        {sys.id}
                      </span>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-bold text-white font-heading uppercase tracking-wide">
                            {sys.name}
                          </h4>
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-[#F4C400] animate-ping" />
                          )}
                        </div>

                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          {sys.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Section CTA Hotline */}
            <div className="p-6 bg-[#001F52] border border-[#002D72] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-black font-heading uppercase text-white">
                  Order Concrete From Gajjumatta Plant
                </div>
                <div className="text-xs text-slate-300">
                  Call directly for live batching schedule & mixer allocation:
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="tel:03000751574"
                  className="bg-[#F4C400] text-[#001F52] hover:bg-[#FFE066] px-4 py-2.5 text-xs font-black uppercase tracking-wider transition-all rounded-xs shadow-sm flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>0300-0751574</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

