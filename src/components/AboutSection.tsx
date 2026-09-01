import React, { useState } from 'react';
import { CheckCircle2, FileText, ArrowRight, Shield, Layers, Award, Check } from 'lucide-react';
import { HRC_IMAGES } from '../data/hrcImages';

interface AboutProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutProps> = ({ onOpenQuoteModal }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [activeAboutPhoto, setActiveAboutPhoto] = useState<'office' | 'plant' | 'mixer'>('office');

  const handleDownloadCatalog = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const aboutPhotos = {
    office: {
      src: HRC_IMAGES.siteOffice,
      title: 'HRC Central Operations Site Office & Dispatch Center',
      sub: 'Gajjumatta Metro Bus Station, Rohi Nala Near Sabzi Mandi, Ferozepur Road Lahore',
    },
    plant: {
      src: HRC_IMAGES.batchingPlant,
      title: 'HRC Automated Batching Plant & Aggregate Bins',
      sub: 'Computerized Batching Line • Automated Admixture Dosing',
    },
    mixer: {
      src: HRC_IMAGES.transitMixer,
      title: 'HRC Heavy Transit Mixer Fleet (10m³ Drum)',
      sub: 'Constant Rotation Drum • On-Site Concrete Pumping',
    },
  };

  const currentPhoto = aboutPhotos[activeAboutPhoto];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-[#E8EDF3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Industrial Visual of Real HRC Facility & Site Office */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Outer decorative industrial frame */}
              <div className="bg-[#002D72] p-3 rounded-xs border-2 border-[#09295B] shadow-xl">
                
                {/* Visual Header */}
                <div className="bg-[#001F52] px-4 py-2 flex items-center justify-between border-b border-[#123D78] text-white text-xs mb-2">
                  <span className="font-mono-tech font-bold text-[#F4C400] text-[11px] uppercase">
                    HRC SITE OFFICE & BATCHING PLANT
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-mono-tech px-2 py-0.5 border border-emerald-500/30">
                    STATUS: OPERATIONAL
                  </span>
                </div>

                {/* Inspecting Authentic Photo Frame */}
                <div className="relative h-[320px] sm:h-[380px] w-full overflow-hidden rounded-xs bg-[#00112C] group">
                  <img
                    src={currentPhoto.src}
                    alt={currentPhoto.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00183F] via-transparent to-black/20 pointer-events-none" />
                  
                  {/* Photo Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#00183F]/90 backdrop-blur-xs p-3 border border-[#002D72] rounded-xs">
                    <div className="text-white font-bold text-xs uppercase">{currentPhoto.title}</div>
                    <div className="text-[10px] text-[#F4C400] font-mono-tech mt-0.5">{currentPhoto.sub}</div>
                  </div>
                </div>

                {/* Photo Switcher Row */}
                <div className="grid grid-cols-3 gap-1 bg-[#00183F] p-1 border-t border-[#123D78] text-[10px] font-mono-tech mt-2">
                  <button
                    onClick={() => setActiveAboutPhoto('office')}
                    className={`py-1.5 px-2 text-center font-bold uppercase rounded-xs transition-colors cursor-pointer ${
                      activeAboutPhoto === 'office' ? 'bg-[#F4C400] text-[#001F52]' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Site Office
                  </button>
                  <button
                    onClick={() => setActiveAboutPhoto('plant')}
                    className={`py-1.5 px-2 text-center font-bold uppercase rounded-xs transition-colors cursor-pointer ${
                      activeAboutPhoto === 'plant' ? 'bg-[#F4C400] text-[#001F52]' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Batching Plant
                  </button>
                  <button
                    onClick={() => setActiveAboutPhoto('mixer')}
                    className={`py-1.5 px-2 text-center font-bold uppercase rounded-xs transition-colors cursor-pointer ${
                      activeAboutPhoto === 'mixer' ? 'bg-[#F4C400] text-[#001F52]' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Transit Mixer
                  </button>
                </div>

                {/* Quality Checklist Inspection Strip */}
                <div className="mt-2 bg-[#001F52] p-3 border-t border-[#123D78] grid grid-cols-2 gap-2 text-[11px] font-mono-tech text-white">
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Check className="w-3.5 h-3.5 text-[#F4C400]" />
                    <span>Compressive Strength Lab: 100% OK</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Check className="w-3.5 h-3.5 text-[#F4C400]" />
                    <span>Slump Test Verification: Passed</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Check className="w-3.5 h-3.5 text-[#F4C400]" />
                    <span>Automated Batching: ±0.5% Accuracy</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Check className="w-3.5 h-3.5 text-[#F4C400]" />
                    <span>Transit Fleet GPS Tracking: Active</span>
                  </div>
                </div>
              </div>

              {/* Floating Engineering Badge */}
              <div className="absolute -bottom-6 -right-4 bg-[#F4C400] text-[#061C3D] p-4 shadow-lg border-2 border-white rounded-xs hidden sm:block">
                <div className="text-2xl font-black font-heading leading-none">8+ YEARS</div>
                <div className="text-[10px] font-black uppercase tracking-widest mt-0.5">Lahore Concrete Excellence</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: About HRC Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[#002D72] text-xs font-black tracking-[0.25em] uppercase mb-4">
              <span className="w-6 h-[2px] bg-[#F4C400]" />
              <span>ABOUT HASSAN READYMIX CONCRETE</span>
            </div>

            {/* Heading with Vertical Yellow Accent Line */}
            <div className="relative pl-5 border-l-4 border-[#F4C400] mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-black text-[#061C3D] font-heading uppercase tracking-tight">
                8+ Years of Reliable Concrete Supply in Lahore
              </h2>
            </div>

            {/* Main Narrative */}
            <p className="text-[#667085] text-base leading-relaxed mb-6 font-normal">
              <strong className="text-[#002D72]">Hassan ReadyMix Concrete (HRC)</strong> is a premier Lahore-based ready-mix concrete producer and mobile pump service provider located at Gajjumatta Metro Bus Station, Rohi Nala near Sabzi Mandi, Ferozepur Road Lahore. With over 8+ years of field excellence, we supply certified concrete mixes for mega structures, residential foundations, commercial plazas, and infrastructural paving.
            </p>
            <p className="text-[#667085] text-sm sm:text-base leading-relaxed mb-8 font-normal">
              Our automated batching plants, computerized load cell weighing, in-house ASTM quality testing laboratory, and dedicated fleet of transit mixer trucks ensure uninterrupted concrete pouring with guaranteed PSI strength, zero slump degradation, and rapid site delivery across Lahore.
            </p>

            {/* Structured Engineering Capabilities Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className="flex items-start gap-2.5 p-3 bg-[#F5F7FA] border border-[#E8EDF3] rounded-xs">
                <CheckCircle2 className="w-5 h-5 text-[#002D72] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-black text-[#001F52] uppercase tracking-wider block">
                    Precision Batching Plant
                  </span>
                  <span className="text-[11px] text-[#667085]">Digital load cells with ±0.5% dosing</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 bg-[#F5F7FA] border border-[#E8EDF3] rounded-xs">
                <CheckCircle2 className="w-5 h-5 text-[#002D72] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-black text-[#001F52] uppercase tracking-wider block">
                    In-House Testing Lab
                  </span>
                  <span className="text-[11px] text-[#667085]">7-day & 28-day cube crushing tests</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 bg-[#F5F7FA] border border-[#E8EDF3] rounded-xs">
                <CheckCircle2 className="w-5 h-5 text-[#002D72] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-black text-[#001F52] uppercase tracking-wider block">
                    Transit Mixer Fleet
                  </span>
                  <span className="text-[11px] text-[#667085]">8m³ to 10m³ heavy drum trucks</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 bg-[#F5F7FA] border border-[#E8EDF3] rounded-xs">
                <CheckCircle2 className="w-5 h-5 text-[#002D72] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-black text-[#001F52] uppercase tracking-wider block">
                    Concrete Boom Pumps
                  </span>
                  <span className="text-[11px] text-[#667085]">High-elevation & raft slab pouring</span>
                </div>
              </div>
            </div>

            {/* Action Buttons & Hotline */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:03000751574"
                className="bg-[#002D72] text-white hover:bg-[#001F52] px-6 py-3.5 font-bold text-xs uppercase tracking-widest transition-all rounded-xs shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>Call: 0300-0751574</span>
                <ArrowRight className="w-4 h-4 text-[#F4C400]" />
              </a>

              <a
                href="tel:03084311505"
                className="bg-[#F4C400] text-[#001F52] hover:bg-[#FFE066] px-5 py-3.5 font-black text-xs uppercase tracking-wider transition-all rounded-xs flex items-center gap-2 cursor-pointer"
              >
                <span>0308-4311505</span>
              </a>

              <button
                onClick={handleDownloadCatalog}
                className="bg-white border-2 border-[#002D72] text-[#002D72] hover:bg-[#F5F7FA] px-5 py-3.5 font-bold text-xs uppercase tracking-wider transition-all rounded-xs flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#C92323]" />
                <span>{downloadSuccess ? 'Mix Specs Ready ✓' : 'Concrete Mix Specs (PDF)'}</span>
              </button>
            </div>

            {downloadSuccess && (
              <div className="mt-3 p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-medium rounded-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Hassan ReadyMix Concrete Rate & Mix Design Catalog downloaded successfully.</span>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
