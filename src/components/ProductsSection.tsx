import React, { useState } from 'react';
import { ProductItem } from '../types';
import { EQUIPMENT_LIST } from '../data/equipmentData';
import { ArrowRight, PhoneCall, ShieldCheck, CheckCircle2, Truck } from 'lucide-react';
import { MachineryVisual } from './MachineryVisuals';

interface ProductsProps {
  onSelectProduct: (product: ProductItem) => void;
  onOpenQuoteModal: (prefillProduct?: string) => void;
}

export const ProductsSection: React.FC<ProductsProps> = ({ onSelectProduct, onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Concrete Mixes' },
    { id: 'rcc-structural', label: 'RCC Structural (3000 PSI)' },
    { id: 'high-strength', label: 'High Strength (4000-6000 PSI)' },
    { id: 'self-compacting', label: 'Self-Compacting (SCC)' },
    { id: 'lean-concrete', label: 'Lean & Blinding (1:4:8)' },
    { id: 'specialized', label: 'Waterproof & Sulfate (SRC)' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? EQUIPMENT_LIST
    : EQUIPMENT_LIST.filter(item => item.category === selectedCategory);

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#F5F7FA] relative border-b border-[#E8EDF3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#002D72] text-xs font-black tracking-[0.25em] uppercase mb-3">
            <span className="w-5 h-[2px] bg-[#F4C400]" />
            <span>CERTIFIED READY-MIX CONCRETE SOLUTIONS</span>
            <span className="w-5 h-[2px] bg-[#F4C400]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#001F52] font-heading uppercase tracking-tight mb-4">
            Certified Concrete Mixes for Every Construction Need
          </h2>
          <p className="text-[#667085] text-base leading-relaxed">
            Hassan ReadyMix Concrete (HRC) manufactures and delivers certified high-performance concrete mixes with guaranteed PSI strength, zero slump loss, and on-time transit mixer dispatch across Lahore.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all rounded-xs border cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#002D72] text-white border-[#002D72] shadow-sm'
                  : 'bg-white text-[#172033] border-[#E8EDF3] hover:bg-slate-50 hover:border-[#CBD5E1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 Concrete Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-[#E8EDF3] rounded-xs shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Visual Container */}
                <div className="relative h-60 bg-[#001F52] overflow-hidden">
                  <div className="transition-transform duration-500 group-hover:scale-105 w-full h-full">
                    <MachineryVisual type={product.imageType} className="h-full" />
                  </div>

                  {/* Category Pill Over Image */}
                  <div className="absolute top-3 left-3 bg-[#002D72]/95 backdrop-blur-xs border border-[#38BDF8]/40 text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-xs">
                    {product.categoryLabel}
                  </div>

                  {/* Model / Mix Code Over Image */}
                  <div className="absolute bottom-3 right-3 bg-[#F4C400] text-[#001F52] px-2.5 py-0.5 text-[11px] font-black font-mono-tech uppercase tracking-tight rounded-xs shadow-xs">
                    {product.modelCode}
                  </div>
                </div>

                {/* Animated Yellow Expanding Accent Line */}
                <div className="h-1 bg-[#E8EDF3] w-full overflow-hidden">
                  <div className="h-full bg-[#F4C400] w-14 group-hover:w-full transition-all duration-500" />
                </div>

                {/* Card Text Content */}
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-black text-[#001F52] font-heading uppercase tracking-tight mb-2 group-hover:text-[#002D72] transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#002D72] uppercase tracking-wider mb-3">
                    {product.tagline}
                  </p>

                  <p className="text-xs text-[#667085] line-clamp-2 leading-relaxed mb-5">
                    {product.description}
                  </p>

                  {/* Core Technical Metric Badge */}
                  <div className="bg-[#F5F7FA] border border-[#E8EDF3] p-3 rounded-xs mb-4">
                    <div className="flex items-center justify-between text-[11px] font-mono-tech mb-1">
                      <span className="text-[#667085]">TARGET STRENGTH</span>
                      <span className="font-bold text-[#001F52]">{product.specs.psiStrength}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono-tech mb-1">
                      <span className="text-[#667085]">MIX RATIO / GRADE</span>
                      <span className="font-bold text-[#002D72]">{product.specs.mixRatio}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono-tech">
                      <span className="text-[#667085]">SLUMP WORKABILITY</span>
                      <span className="font-bold text-[#C92323]">{product.specs.slumpRange}</span>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-1.5 mb-2">
                    {product.keyFeatures.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[11px] text-[#172033]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F4C400] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-[#E8EDF3] bg-white flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#002D72] hover:text-[#C92323] transition-colors cursor-pointer"
                >
                  <span>Mix Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href="tel:03000751574"
                    className="inline-flex items-center gap-1.5 bg-[#002D72] hover:bg-[#001F52] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors"
                  >
                    <PhoneCall className="w-3 h-3 text-[#F4C400]" />
                    <span>0300-0751574</span>
                  </a>
                  <button
                    onClick={() => onOpenQuoteModal(product.title)}
                    className="bg-[#F4C400] hover:bg-[#E5B700] text-[#001F52] px-3 py-1.5 text-[11px] font-black uppercase tracking-wider rounded-xs border border-[#E5B700] transition-colors cursor-pointer"
                  >
                    Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fast Order Hotline Banner */}
        <div className="mt-14 bg-[#002D72] rounded-xs border border-[#F4C400]/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#F4C400] rounded-xs flex items-center justify-center text-[#001F52] shrink-0 font-black shadow-md">
              <Truck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl font-black font-heading uppercase text-white tracking-wide">
                Need Fast Concrete Pouring in Lahore Today?
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 mt-1">
                Same-day & scheduled transit mixer delivery across DHA, Bahria Town, LDA City, Gulberg, CBD, & Ferozepur Road.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:03000751574"
              className="inline-flex items-center gap-2 bg-[#F4C400] hover:bg-[#FFE066] text-[#001F52] font-black px-5 py-3 rounded-xs text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#001F52]" />
              <span>Call: 0300-0751574</span>
            </a>
            <a
              href="tel:03084311505"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-5 py-3 rounded-xs text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#F4C400]" />
              <span>0308-4311505</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

