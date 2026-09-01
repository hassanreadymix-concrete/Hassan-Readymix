import React, { useState } from 'react';
import { HRC_GALLERY, HRCPhotoItem } from '../data/hrcImages';
import { Camera, MapPin, ZoomIn, X, PhoneCall, ChevronRight } from 'lucide-react';

interface PhotoGalleryProps {
  onOpenQuoteModal: () => void;
}

export const PhotoGallerySection: React.FC<PhotoGalleryProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightbox, setActiveLightbox] = useState<HRCPhotoItem | null>(null);

  const categories = ['All', 'Production Plant', 'Fleet & Transit', 'Headquarters & Admin'];

  const filteredPhotos =
    selectedCategory === 'All'
      ? HRC_GALLERY
      : HRC_GALLERY.filter((item) =>
          selectedCategory === 'Fleet & Transit'
            ? item.category.includes('Fleet') || item.category.includes('Transit') || item.category.includes('Delivery')
            : item.category.includes(selectedCategory)
        );

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#00183F] text-white relative overflow-hidden border-b border-[#002D72]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#F4C400] text-xs font-black tracking-[0.25em] uppercase mb-3">
              <Camera className="w-4 h-4 text-[#F4C400]" />
              <span>AUTHENTIC ON-SITE PHOTOGRAPHY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white font-heading uppercase tracking-tight">
              HRC Plant, Fleet & Operations Gallery
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-2">
              Real photographs of Hassan ReadyMix Concrete (HRC) production facilities, automated batching towers, cement silos, dedicated transit mixer fleet, and site operations office at Gajjumatta Lahore.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xs border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#F4C400] text-[#001F52] border-[#F4C400] shadow-md'
                    : 'bg-[#001F52] text-slate-300 border-[#002D72] hover:text-white hover:border-slate-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group bg-[#001F52] border-2 border-[#002D72] hover:border-[#F4C400] rounded-xs overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-lg flex flex-col justify-between cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#00112C]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#00183F] via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 bg-[#001F52]/90 backdrop-blur-xs border border-[#F4C400]/60 text-[#F4C400] text-[10px] font-mono-tech font-bold uppercase px-2.5 py-1 rounded-xs">
                  {item.category}
                </div>

                {/* Zoom Icon Button */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-xs bg-[#001F52]/80 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <ZoomIn className="w-4 h-4 text-[#F4C400]" />
                </div>

                {/* Location Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-white bg-[#00183F]/90 backdrop-blur-xs px-2.5 py-1.5 rounded-xs border border-[#002D72]">
                  <MapPin className="w-3.5 h-3.5 text-[#F4C400] shrink-0" />
                  <span className="truncate text-[11px] font-mono-tech">{item.location}</span>
                </div>
              </div>

              {/* Text Card Body */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-bold text-white font-heading uppercase tracking-wide group-hover:text-[#F4C400] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#002D72] flex items-center justify-between text-[11px] font-mono-tech text-[#F4C400]">
                  <span>HRC CERTIFIED FACILITY</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View Photo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Callout */}
        <div className="mt-12 p-6 bg-[#001F52] border-2 border-[#002D72] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xs bg-[#F4C400] text-[#001F52] flex items-center justify-center shrink-0 shadow-md">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-black font-heading uppercase text-white">
                Book High-Grade Ready-Mix Concrete Direct From Our Gajjumatta Hub
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Visit our physical plant or call 0300-0751574 / 0308-4311505 for immediate dispatch scheduling.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="bg-[#F4C400] text-[#001F52] hover:bg-[#FFE066] px-6 py-3 text-xs font-black uppercase tracking-widest transition-all rounded-xs border-b-4 border-[#D4AB00] shadow-md shrink-0 cursor-pointer"
          >
            Get HRC Rate
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#001F52] border-2 border-[#F4C400] rounded-xs overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#C92323] text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image */}
            <div className="relative max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Modal Info Footer */}
            <div className="p-6 bg-[#00183F] border-t border-[#002D72] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#F4C400] font-mono-tech uppercase mb-1">
                  <span>{activeLightbox.category}</span>
                  <span>•</span>
                  <span>{activeLightbox.location}</span>
                </div>
                <h3 className="text-lg font-black text-white font-heading uppercase">
                  {activeLightbox.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  {activeLightbox.description}
                </p>
              </div>

              <a
                href="tel:03000751574"
                className="bg-[#F4C400] text-[#001F52] px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-xs flex items-center gap-2 shrink-0 justify-center hover:bg-[#FFE066] transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call 0300-0751574</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
