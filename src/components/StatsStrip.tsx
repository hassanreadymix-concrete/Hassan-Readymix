import React, { useEffect, useState } from 'react';
import { Award, Building2, ThumbsUp, Truck } from 'lucide-react';

export const StatsStrip: React.FC = () => {
  const [counts, setCounts] = useState({ years: 0, projects: 0, cubicMeters: 0, satisfaction: 0 });

  useEffect(() => {
    // Smooth counting animation effect
    const interval = setInterval(() => {
      setCounts((prev) => ({
        years: prev.years < 8 ? prev.years + 1 : 8,
        projects: prev.projects < 500 ? prev.projects + 25 : 500,
        cubicMeters: prev.cubicMeters < 500 ? prev.cubicMeters + 25 : 500,
        satisfaction: prev.satisfaction < 100 ? prev.satisfaction + 5 : 100,
      }));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: Award,
      value: `${counts.years}+`,
      label: 'Years in Lahore',
      subtext: 'Continuous concrete manufacturing excellence since 2016'
    },
    {
      icon: Building2,
      value: `${counts.projects}+`,
      label: 'Projects Poured',
      subtext: 'High-rises, DHA villas, CBD, LDA City & Bahria Town'
    },
    {
      icon: Truck,
      value: `${counts.cubicMeters}k+ m³`,
      label: 'Concrete Delivered',
      subtext: 'Poured with dedicated transit mixers & boom pumps'
    },
    {
      icon: ThumbsUp,
      value: `${counts.satisfaction}%`,
      label: 'Lab Tested Quality',
      subtext: 'Guaranteed 28-day target PSI compressive strength'
    }
  ];

  return (
    <section className="bg-[#00183F] border-y border-[#002D72] relative overflow-hidden font-sans">
      {/* Background Subtle Blueprint Accent */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-15" />
      <div className="absolute top-0 left-0 w-24 h-1 bg-[#F4C400]" />
      <div className="absolute bottom-0 right-0 w-24 h-1 bg-[#C92323]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#002D72]/80">
          
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label} 
                className={`flex flex-col justify-between ${idx !== 0 ? 'pt-6 sm:pt-0 sm:pl-6 lg:pl-8' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono-tech font-bold uppercase tracking-widest text-[#F4C400] bg-[#001F52] px-2 py-0.5 rounded-xs border border-[#002D72]">
                      0{idx + 1} HRC STAT
                    </span>
                    <Icon className="w-5 h-5 text-[#F4C400]/80" />
                  </div>
                  
                  {/* Large Numbers */}
                  <div className="text-4xl sm:text-5xl lg:text-[46px] font-black text-white font-heading tracking-tight mb-2">
                    {stat.value}
                  </div>

                  {/* Metric Label */}
                  <div className="text-sm font-bold uppercase tracking-wider text-slate-100 mb-1">
                    {stat.label}
                  </div>
                </div>

                {/* Subtext */}
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {stat.subtext}
                </p>

                {/* Yellow Accent Bar */}
                <div className="w-10 h-1 bg-[#F4C400] mt-4" />
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

