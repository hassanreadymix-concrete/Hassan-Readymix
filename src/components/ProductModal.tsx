import React from 'react';
import { ProductItem } from '../types';
import { MachineryVisual } from './MachineryVisuals';
import { X, Check, ArrowRight, ShieldCheck, PhoneCall, CheckCircle2, Award } from 'lucide-react';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenQuote: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onOpenQuote }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001F52]/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-xs border-2 border-[#002D72] max-w-4xl w-full shadow-2xl overflow-hidden my-8 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Header */}
        <div className="bg-[#002D72] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#F4C400]">
          <div className="flex items-center gap-3">
            <div className="bg-[#F4C400] text-[#001F52] px-2.5 py-0.5 text-xs font-black font-mono-tech uppercase rounded-xs">
              {product.modelCode}
            </div>
            <h3 className="text-lg sm:text-xl font-black font-heading uppercase text-white">
              {product.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 hover:bg-[#001F52] rounded transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          
          {/* Top Layout Grid: Visual + Description */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8 items-center">
            <div className="md:col-span-6 bg-[#001F52] rounded-xs overflow-hidden border border-[#0A3E8C] h-64">
              <MachineryVisual type={product.imageType} className="h-full" />
            </div>

            <div className="md:col-span-6">
              <span className="text-[11px] font-mono-tech font-bold uppercase text-[#002D72] block mb-1">
                {product.categoryLabel}
              </span>
              <h4 className="text-xl font-black text-[#001F52] font-heading uppercase tracking-tight mb-3">
                {product.tagline}
              </h4>
              <p className="text-xs text-[#667085] leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Key Features List */}
              <div className="space-y-1.5 bg-[#F5F7FA] p-3.5 border border-[#E8EDF3] rounded-xs text-xs">
                <span className="text-[10px] font-black uppercase text-[#002D72] tracking-wider block mb-1">
                  CONCRETE MIX HIGHLIGHTS & QUALITY:
                </span>
                {product.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[#172033]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#002D72] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Full Technical Specifications Concrete Table */}
          <div className="mb-8">
            <div className="flex items-center justify-between border-b border-[#E8EDF3] pb-2 mb-4">
              <h5 className="text-sm font-black font-heading uppercase text-[#001F52] tracking-wider">
                Certified Concrete Specification Schedule (ASTM C94)
              </h5>
              <span className="text-[10px] font-mono-tech text-[#002D72] bg-blue-50 px-2 py-0.5 border border-blue-200 rounded-xs">
                LAHORE SITE CERTIFIED
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-tech">
              <div className="p-3 bg-[#F5F7FA] border border-[#E8EDF3] flex justify-between">
                <span className="text-[#667085]">TARGET 28-DAY PSI:</span>
                <span className="font-bold text-[#001F52]">{product.specs.psiStrength}</span>
              </div>
              <div className="p-3 bg-[#F5F7FA] border border-[#E8EDF3] flex justify-between">
                <span className="text-[#667085]">MIX RATIO / CLASS:</span>
                <span className="font-bold text-[#001F52]">{product.specs.mixRatio}</span>
              </div>
              <div className="p-3 bg-[#F5F7FA] border border-[#E8EDF3] flex justify-between">
                <span className="text-[#667085]">SLUMP WORKABILITY:</span>
                <span className="font-bold text-[#C92323]">{product.specs.slumpRange}</span>
              </div>
              <div className="p-3 bg-[#F5F7FA] border border-[#E8EDF3] flex justify-between">
                <span className="text-[#667085]">MAX AGGREGATE SIZE:</span>
                <span className="font-bold text-[#001F52]">{product.specs.maxAggregateSize}</span>
              </div>
              <div className="p-3 bg-[#F5F7FA] border border-[#E8EDF3] flex justify-between">
                <span className="text-[#667085]">CURING & STRENGTH GAIN:</span>
                <span className="font-bold text-[#001F52]">{product.specs.curingTime}</span>
              </div>
              <div className="p-3 bg-[#F5F7FA] border border-[#E8EDF3] flex justify-between">
                <span className="text-[#667085]">WATER-CEMENT (W/C) RATIO:</span>
                <span className="font-bold text-[#001F52]">{product.specs.waterCementRatio}</span>
              </div>
              <div className="p-3 bg-[#F5F7FA] border border-[#E8EDF3] flex justify-between">
                <span className="text-[#667085]">QUALITY / ASTM CODE:</span>
                <span className="font-bold text-[#002D72]">{product.specs.testingStandards}</span>
              </div>
              <div className="p-3 bg-[#F5F7FA] border border-[#E8EDF3] flex justify-between">
                <span className="text-[#667085]">TRANSIT DELIVER TIME:</span>
                <span className="font-bold text-[#001F52]">{product.specs.transitDelivery}</span>
              </div>
              <div className="p-3 bg-[#F5F7FA] border border-[#E8EDF3] sm:col-span-2 flex justify-between">
                <span className="text-[#667085]">RECOMMENDED APPLICATION:</span>
                <span className="font-bold text-[#002D72]">{product.specs.recommendedUse}</span>
              </div>
            </div>
          </div>

          {/* Contact Direct Hotlines */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-xs mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs">
              <div className="w-8 h-8 rounded-full bg-[#002D72] text-[#F4C400] flex items-center justify-center shrink-0">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-[#001F52]">Direct Batching Plant Dispatch Lines (Gajjumatta LHR):</p>
                <p className="text-[#667085]">Call for instant per-cubic-meter rate & pump allocation</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="tel:03000751574"
                className="bg-[#002D72] hover:bg-[#001F52] text-white px-3.5 py-2 text-xs font-black uppercase tracking-wider rounded-xs transition-colors"
              >
                0300-0751574
              </a>
              <a
                href="tel:03084311505"
                className="bg-[#F4C400] hover:bg-[#E5B700] text-[#001F52] px-3.5 py-2 text-xs font-black uppercase tracking-wider rounded-xs transition-colors"
              >
                0308-4311505
              </a>
            </div>
          </div>

          {/* Modal Action Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E8EDF3]">
            <div className="text-xs text-[#667085] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#002D72]" />
              <span>Includes certified 7-day and 28-day cube compression test lab reports.</span>
            </div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-bold uppercase text-[#667085] hover:text-[#001F52] transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote(product.title);
                }}
                className="flex-1 sm:flex-none bg-[#F4C400] text-[#001F52] hover:bg-[#001F52] hover:text-white px-6 py-2.5 text-xs font-black uppercase tracking-wider rounded-xs border-b-2 border-[#D4AB00] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Concrete Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

