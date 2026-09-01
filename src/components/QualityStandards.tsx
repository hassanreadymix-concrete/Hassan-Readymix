import React from 'react';
import { ShieldCheck, Award, FileCheck, CheckCircle2, CheckSquare } from 'lucide-react';

export const QualityStandards: React.FC = () => {
  const testingProtocols = [
    { name: 'ASTM C39 Hydraulic Compressive Strength Testing', desc: 'Every pour batch undergoes 7-day and 28-day hydraulic cylinder crushing to verify structural PSI.' },
    { name: 'ASTM C143 Slump Cone Workability Verification', desc: 'Conducted at both batching discharge and site delivery to guarantee exact pumpability and flow.' },
    { name: 'ASTM C33 Washed Aggregate Sieve Analysis', desc: 'Graded Margalla crush and Chenab sand tested for fineness modulus, clay content, and organic purity.' },
    { name: 'Computerized Batching Weight Telemetry', desc: 'Digital load cells calibrated regularly with certified deadweights to maintain ±0.5% dosing tolerance.' },
  ];

  return (
    <section id="quality" className="py-20 lg:py-28 bg-white border-b border-[#E8EDF3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Quality Narrative */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-[#002D72] text-xs font-black tracking-[0.25em] uppercase mb-4">
              <span className="w-5 h-[2px] bg-[#F4C400]" />
              <span>LAB TESTING & QUALITY ASSURANCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-black text-[#001F52] font-heading uppercase tracking-tight mb-6">
              Guaranteed Concrete Strength & Lab Verified
            </h2>

            <p className="text-[#667085] text-base leading-relaxed mb-6 font-normal">
              At Hassan ReadyMix Concrete (HRC), quality assurance is an unbroken engineering discipline embedded in raw material selection, Grade 53 cement sourcing, precise digital batching, and comprehensive in-house ASTM cube crushing tests.
            </p>

            <div className="space-y-4 mb-8">
              {testingProtocols.map((protocol, idx) => (
                <div key={idx} className="p-3.5 bg-[#F5F7FA] border border-[#E8EDF3] rounded-xs flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-[#002D72] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black text-[#001F52] uppercase tracking-wider">
                      {protocol.name}
                    </h4>
                    <p className="text-xs text-[#667085] mt-0.5">
                      {protocol.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Engineering Certification Seals & Badges */}
          <div className="lg:col-span-6">
            <div className="bg-[#001F52] p-8 rounded-xs border-2 border-[#002D72] text-white shadow-2xl relative">
              <div className="border-b border-[#002D72] pb-4 mb-8 text-center">
                <span className="text-xs font-mono-tech text-[#F4C400] font-bold uppercase tracking-widest block mb-1">
                  OFFICIAL HRC QUALITY COMPLIANCE
                </span>
                <h3 className="text-xl font-black font-heading uppercase text-white">
                  Certified Concrete Quality Seals
                </h3>
              </div>

              {/* 3 Modern Quality Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                
                {/* Badge 1: ASTM C94 */}
                <div className="bg-[#002D72] border-2 border-[#F4C400] p-4 rounded-xs text-center flex flex-col items-center justify-between shadow-md">
                  <div className="w-10 h-10 rounded-xs bg-[#001F52] border border-[#F4C400]/40 flex items-center justify-center mb-2">
                    <ShieldCheck className="w-5 h-5 text-[#F4C400]" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase text-[#F4C400] font-mono-tech block">ASTM C94</span>
                    <span className="text-[11px] font-bold text-white uppercase block mt-0.5">Ready-Mix Standard</span>
                    <span className="text-[9px] text-slate-300 font-mono-tech mt-1 block">Batched & Certified</span>
                  </div>
                </div>

                {/* Badge 2: Compressive Strength */}
                <div className="bg-[#002D72] border-2 border-white/60 p-4 rounded-xs text-center flex flex-col items-center justify-between shadow-md">
                  <div className="w-10 h-10 rounded-xs bg-[#001F52] border border-white/40 flex items-center justify-center mb-2">
                    <Award className="w-5 h-5 text-[#F4C400]" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase text-white font-mono-tech block">ASTM C39</span>
                    <span className="text-[11px] font-bold text-white uppercase block mt-0.5">Hydraulic Crushing</span>
                    <span className="text-[9px] text-slate-300 font-mono-tech mt-1 block">7 & 28 Day Lab Report</span>
                  </div>
                </div>

                {/* Badge 3: ISO 9001 */}
                <div className="bg-[#002D72] border-2 border-[#C92323] p-4 rounded-xs text-center flex flex-col items-center justify-between shadow-md">
                  <div className="w-10 h-10 rounded-xs bg-[#001F52] border border-[#C92323]/50 flex items-center justify-center mb-2">
                    <FileCheck className="w-5 h-5 text-[#F4C400]" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase text-[#C92323] font-mono-tech block">ISO 9001:2015</span>
                    <span className="text-[11px] font-bold text-white uppercase block mt-0.5">Quality Assured</span>
                    <span className="text-[9px] text-slate-300 font-mono-tech mt-1 block">Standard Operations</span>
                  </div>
                </div>

              </div>

              {/* Bottom Guarantee Banner */}
              <div className="p-4 bg-[#002D72] border border-[#0A3E8C] rounded-xs text-xs text-slate-300 font-mono-tech flex items-center justify-between">
                <div>
                  <span className="text-white font-bold block">ASTM LAB COMPRESSION CERTIFICATES</span>
                  <span className="text-[10px] text-slate-300">Provided for every commercial and structural pour</span>
                </div>
                <span className="text-[#22C55E] font-bold text-sm">100% VERIFIED</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

