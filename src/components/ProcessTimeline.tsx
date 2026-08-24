import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/processData';
import { FileSearch, Compass, Factory, Wrench, HeadphonesIcon, CheckCircle2, ChevronRight } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const icons = [FileSearch, Compass, Factory, Wrench, HeadphonesIcon];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E8EDF3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#09295B] text-xs font-black tracking-[0.25em] uppercase mb-3">
            <span className="w-5 h-[2px] bg-[#F4C400]" />
            <span>METHODICAL DELIVERY</span>
            <span className="w-5 h-[2px] bg-[#F4C400]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#061C3D] font-heading uppercase tracking-tight mb-4">
            From Requirement to Results
          </h2>
          <p className="text-[#667085] text-base leading-relaxed">
            Our disciplined 5-stage engineering lifecycle guarantees precise structural execution, reliable timelines, and zero batching surprises.
          </p>
        </div>

        {/* Desktop Horizontal Timeline Bar */}
        <div className="hidden lg:block mb-16 relative">
          {/* Yellow Connecting Line */}
          <div className="absolute top-1/2 left-10 right-10 h-1 bg-[#E8EDF3] -translate-y-1/2 z-0">
            <div 
              className="h-full bg-[#F4C400] transition-all duration-500" 
              style={{ width: `${(selectedStep / (PROCESS_STEPS.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = icons[idx];
              const isSelected = selectedStep === idx;
              const isPassed = idx <= selectedStep;

              return (
                <div
                  key={step.number}
                  onClick={() => setSelectedStep(idx)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Step Node Circle */}
                  <div
                    className={`w-14 h-14 rounded-xs flex items-center justify-center transition-all duration-300 border-2 ${
                      isSelected
                        ? 'bg-[#F4C400] text-[#061C3D] border-[#061C3D] shadow-lg scale-110'
                        : isPassed
                        ? 'bg-[#09295B] text-[#F4C400] border-[#09295B]'
                        : 'bg-white text-slate-400 border-[#E8EDF3] group-hover:border-[#09295B]'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Step Label */}
                  <div className="mt-4">
                    <span className="text-[11px] font-mono-tech font-bold uppercase text-[#09295B] block mb-1">
                      {step.number} — {step.duration}
                    </span>
                    <h4 className="text-sm font-black text-[#061C3D] font-heading uppercase tracking-wide">
                      {step.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Panel */}
        <div className="bg-[#061C3D] text-white rounded-xs border-2 border-[#123D78] p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 blueprint-grid-dark opacity-20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#F4C400] text-[#061C3D] px-3 py-1 text-xs font-black font-mono-tech uppercase rounded-xs">
                  {PROCESS_STEPS[selectedStep].step}
                </span>
                <span className="text-xs font-mono-tech text-slate-400">
                  DURATION: {PROCESS_STEPS[selectedStep].duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-heading uppercase text-white mb-4">
                {PROCESS_STEPS[selectedStep].title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {PROCESS_STEPS[selectedStep].detail}
              </p>

              <div className="bg-[#09295B] border-l-4 border-[#F4C400] p-4 rounded-xs flex items-center gap-3 text-xs font-mono-tech">
                <CheckCircle2 className="w-5 h-5 text-[#F4C400] shrink-0" />
                <div>
                  <span className="text-slate-400 uppercase block text-[10px]">VERIFIED DELIVERABLE:</span>
                  <span className="text-white font-bold">{PROCESS_STEPS[selectedStep].deliverable}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="text-xs font-mono-tech text-[#F4C400] uppercase font-bold tracking-wider mb-1">
                SELECT ENGINEERING STAGE:
              </div>
              {PROCESS_STEPS.map((s, idx) => (
                <button
                  key={s.number}
                  onClick={() => setSelectedStep(idx)}
                  className={`p-3 rounded-xs text-left text-xs font-bold uppercase transition-all flex items-center justify-between border cursor-pointer ${
                    selectedStep === idx
                      ? 'bg-[#F4C400] text-[#061C3D] border-[#D4AB00]'
                      : 'bg-[#09295B] text-slate-200 border-[#123D78] hover:bg-[#123D78]'
                  }`}
                >
                  <span>{s.number}. {s.title}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
