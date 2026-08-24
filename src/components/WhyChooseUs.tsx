import React from 'react';
import { Target, Zap, Shield, Headphones, Check, X, Truck, Award, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      num: '01',
      icon: Target,
      title: 'CERTIFIED PSI STRENGTH',
      desc: 'Precision computerized batching ensures exact cement-to-aggregate proportions with zero batch deviation and guaranteed 28-day target strength.',
      highlight: 'ASTM C94 & C39 Quality Compliant'
    },
    {
      num: '02',
      icon: Truck,
      title: 'FAST TRANSIT FLEET',
      desc: 'Dedicated heavy transit mixer trucks stationed at Gajjumatta provide rapid transit with zero slump loss across Lahore sectors.',
      highlight: '30-45 Min Fast Site Arrival'
    },
    {
      num: '03',
      icon: Shield,
      title: 'IN-HOUSE ASTM LAB',
      desc: 'Every batch is verified through slump cone and 7/28-day hydraulic compressive cube crushing tests with official lab reports.',
      highlight: '100% Verified Test Reports'
    },
    {
      num: '04',
      icon: Award,
      title: '8+ YEARS TRUST',
      desc: 'Supplying over 500,000+ cubic meters of ready-mix concrete to landmark high-rises, DHA villas, commercial plazas, and LDA City infrastructure.',
      highlight: '500+ Projects Completed in Lahore'
    },
  ];

  const comparisonRows = [
    {
      feature: 'Cement & Aggregate Quality',
      hrc: 'Grade 53 OPC + Washed Margalla / Chenab Sand & Graded Stone',
      standard: 'Unwashed local sand and uncalibrated river gravel'
    },
    {
      feature: 'Batching Accuracy & Weighing',
      hrc: 'Computerized Digital Load Cells with ±0.5% Precise Dosing',
      standard: 'Manual shovel batching or rough mechanical scale'
    },
    {
      feature: 'Quality Assurance & Lab Reports',
      hrc: 'In-House Digital Compression Lab (7 & 28 Days Report Provided)',
      standard: 'No formal testing or third-party delayed verification'
    },
    {
      feature: 'Delivery & Pump Deployment',
      hrc: 'Dedicated GPS-Monitored Transit Mixers + Mobile Boom Pumps',
      standard: 'Hired third-party trucks with unpredictable arrival delays'
    },
    {
      feature: 'Pour Consistency & Slump',
      hrc: 'Chemical plasticizer dosing prevents cold joints & segregation',
      standard: 'Water-diluted mixes causing honeycombing & cracks'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#001F52] text-white relative overflow-hidden border-b border-[#0A3E8C]">
      {/* Subtle diagonal engineering lines in background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #F4C400 0, #F4C400 2px, transparent 0, transparent 40px)' }} />
      <div className="absolute top-0 right-0 w-80 h-80 blueprint-dots-dark opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#F4C400] text-xs font-black tracking-[0.25em] uppercase mb-3">
            <span className="w-5 h-[2px] bg-[#F4C400]" />
            <span>THE HRC CONCRETE ADVANTAGE</span>
            <span className="w-5 h-[2px] bg-[#F4C400]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white font-heading uppercase tracking-tight mb-4">
            Why Lahore Builders Trust Hassan ReadyMix
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            From basement raft slabs to multi-storey slabs and industrial floors, HRC provides reliable, high-grade ready-mix concrete with zero delays.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className="bg-[#00183F] border border-[#002D72] p-6 rounded-xs hover:border-[#F4C400] transition-all duration-300 flex flex-col justify-between group shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-mono-tech text-[#F4C400] group-hover:scale-110 transition-transform">
                      {card.num}
                    </span>
                    <div className="w-10 h-10 rounded-xs bg-[#002D72] border border-[#0A3E8C] flex items-center justify-center text-[#F4C400]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-white font-heading uppercase tracking-wide mb-3">
                    {card.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#002D72] text-[10px] font-mono-tech font-bold text-[#F4C400] uppercase tracking-wider">
                  {card.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Concrete Specification Comparison Matrix Table */}
        <div className="bg-[#00183F] border border-[#002D72] rounded-xs p-6 sm:p-8 shadow-xl">
          <div className="border-b border-[#002D72] pb-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <h4 className="text-lg font-black font-heading text-white uppercase tracking-wider">
              Concrete Supply Comparison Matrix
            </h4>
            <span className="text-[11px] font-mono-tech text-[#F4C400] uppercase">
              Hassan ReadyMix Concrete (HRC) vs Ordinary Site Mixers
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#002D72] text-[11px] font-mono-tech text-slate-400 uppercase">
                  <th className="py-3 px-4">Quality & Delivery Parameter</th>
                  <th className="py-3 px-4 text-[#F4C400] font-bold bg-[#002D72]/80">HRC Certified Ready-Mix</th>
                  <th className="py-3 px-4">Manual / Traditional Site Mix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#002D72]/60 font-medium">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#002D72]/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white uppercase tracking-wider">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 text-white font-bold bg-[#002D72]/70 border-x border-[#002D72]">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#22C55E] shrink-0" />
                        <span>{row.hrc}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>{row.standard}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

