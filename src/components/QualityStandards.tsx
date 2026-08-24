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

              {/* 3 Circular Seal Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-center">
                
                {/* Badge 1: ASTM C94 */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border-4 border-[#F4C400] bg-[#002D72] flex flex-col items-center justify-center p-2 shadow-lg relative">
                    <div className="w-20 h-20 rounded-full border border-dashed border-[#F4C400] flex flex-col items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-[#F4C400] mb-0.5" />
                      <span className="text-[9px] font-black uppercase text-white font-mono-tech">ASTM</span>
                      <span className="text-[8px] font-bold text-[#F4C400]">C94 SPEC</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-200 uppercase mt-3">ASTM C94</span>
                  <span className="text-[10px] text-slate-400">Ready-Mix Standard</span>
                </div>

                {/* Badge 2: Compressive Strength */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border-4 border-white bg-[#002D72] flex flex-col items-center justify-center p-2 shadow-lg relative">
                    <div className="w-20 h-20 rounded-full border border-dashed border-white/60 flex flex-col items-center justify-center">
                      <Award className="w-6 h-6 text-[#F4C400] mb-0.5" />
                      <span className="text-[9px] font-black uppercase text-white font-mono-tech">STRENGTH</span>
                      <span className="text-[8px] font-bold text-white">TESTED</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-200 uppercase mt-3">ASTM C39</span>
                  <span className="text-[10px] text-slate-400">28-Day Strength Lab</span>
                </div>

                {/* Badge 3: ISO 9001 */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border-4 border-[#C92323] bg-[#002D72] flex flex-col items-center justify-center p-2 shadow-lg relative">
                    <div className="w-20 h-20 rounded-full border border-dashed border-[#C92323] flex flex-col items-center justify-center">
                      <FileCheck className="w-6 h-6 text-[#F4C400] mb-0.5" />
                      <span className="text-[9px] font-black uppercase text-white font-mono-tech">ISO</span>
                      <span className="text-[8px] font-bold text-[#C92323]">9001:2015</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-200 uppercase mt-3">ISO 9001</span>
                  <span className="text-[10px] text-slate-400">Quality Management</span>
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

