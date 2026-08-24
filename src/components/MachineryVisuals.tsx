import React from 'react';
import { HRC_IMAGES } from '../data/hrcImages';

interface VisualProps {
  type:
    | 'hrc-transit-mixer'
    | 'hrc-batching-plant'
    | 'rmc-plant'
    | 'dha-lahore-site'
    | 'bahria-town-site'
    | 'ferozepur-road-cbd'
    | 'lda-city-site'
    | 'concrete-test-lab'
    | 'concrete-boom-pump'
    | 'commercial-tower'
    | 'highway-bridge'
    | 'industrial-port'
    | 'engineers-inspecting';
  className?: string;
}

interface PhotoConfig {
  src: string;
  title: string;
  badge: string;
  location: string;
  spec: string;
}

export const MachineryVisual: React.FC<VisualProps> = ({ type, className = '' }) => {
  const getPhotoConfig = (): PhotoConfig => {
    switch (type) {
      case 'hrc-transit-mixer':
        return {
          src: HRC_IMAGES.transitMixer,
          title: 'HRC Heavy Transit Mixer (10m³ Drum)',
          badge: 'HRC FLEET 2025',
          location: 'Gajjumatta Dispatch Yard',
          spec: 'High-Torque Continuous Agitation • ASTM C94 Slump Retention',
        };

      case 'hrc-batching-plant':
      case 'rmc-plant':
        return {
          src: HRC_IMAGES.batchingPlant,
          title: 'HRC Automated Batching Plant & Silos',
          badge: 'CAPACITY: 120 m³/h',
          location: 'Gajjumatta, Ferozepur Road Lahore',
          spec: '4-Bin Aggregate Hoppers • Automated Admixture Dosing System',
        };

      case 'concrete-boom-pump':
        return {
          src: HRC_IMAGES.transitMixer,
          title: 'HRC Mobile Concrete Boom Pump & Fleet',
          badge: '42M BOOM REACH',
          location: 'Active Lahore Pour Site',
          spec: 'High-Pressure Hydraulic Concrete Pumping (80-100 m³/h)',
        };

      case 'dha-lahore-site':
        return {
          src: HRC_IMAGES.roadDelivery,
          title: 'DHA Lahore Foundation & Raft Pours',
          badge: 'DHA PHASES 5, 6, 7 & 9',
          location: 'DHA Lahore Sector Pour',
          spec: '3000 – 4000 PSI High-Density RCC Concrete Mix',
        };

      case 'bahria-town-site':
        return {
          src: HRC_IMAGES.fleetYard,
          title: 'Bahria Town Commercial Plazas & Basements',
          badge: 'BAHRIA SECTOR C & F',
          location: 'Bahria Town Lahore',
          spec: 'Waterproof & SRC Concrete Mix for Underground Basements',
        };

      case 'ferozepur-road-cbd':
        return {
          src: HRC_IMAGES.batchingLoading,
          title: 'Gulberg & CBD High-Rise Core Columns',
          badge: '5000 - 6000 PSI',
          location: 'Central Business District Lahore',
          spec: 'Superplasticized Self-Compacting Flow Mix (SCC)',
        };

      case 'lda-city-site':
        return {
          src: HRC_IMAGES.roadDelivery,
          title: 'LDA City & Ring Road Mega Infrastructure',
          badge: 'INFRASTRUCTURE',
          location: 'LDA City & Southern Loop',
          spec: 'Heavy Pavement Quality Concrete (PQC M40 Grade)',
        };

      case 'concrete-test-lab':
      case 'engineers-inspecting':
        return {
          src: HRC_IMAGES.siteOffice,
          title: 'HRC Site Office & ASTM Quality Testing',
          badge: 'ASTM C39 & C143',
          location: 'HRC Central Field Laboratory',
          spec: '7 & 28-Day Hydraulic Compression Crushing Strength Testing',
        };

      case 'commercial-tower':
        return {
          src: HRC_IMAGES.fleetYard,
          title: 'Commercial Multi-Story Plaza Slab',
          badge: 'COMMERCIAL RCC',
          location: 'Main Boulevard Lahore',
          spec: '4000 PSI Structural Beam & Slab Mix Design',
        };

      case 'highway-bridge':
      case 'industrial-port':
        return {
          src: HRC_IMAGES.batchingPlant,
          title: 'Heavy Industrial & Pavement Quality Mix',
          badge: 'RIGID PAVEMENT',
          location: 'Lahore Industrial Zone',
          spec: 'High-Flexural Strength Concrete for Heavy Axle Loads',
        };

      default:
        return {
          src: HRC_IMAGES.transitMixer,
          title: 'Hassan ReadyMix Concrete (HRC)',
          badge: 'HRC CERTIFIED',
          location: 'Lahore, Pakistan',
          spec: 'Certified Ready-Mix Concrete Batching & Supply',
        };
    }
  };

  const config = getPhotoConfig();

  return (
    <div
      className={`relative w-full h-full min-h-[220px] bg-[#00112C] overflow-hidden rounded-xs flex items-center justify-center group ${className}`}
    >
      {/* Authentic High Resolution Photo */}
      <img
        src={config.src}
        alt={config.title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark Vignette & Tech Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00183F] via-transparent to-black/30 pointer-events-none" />

      {/* Top Left Badge */}
      <div className="absolute top-2.5 left-2.5 bg-[#001F52]/90 backdrop-blur-xs border border-[#F4C400]/60 text-[#F4C400] text-[10px] font-mono-tech font-bold uppercase px-2.5 py-1 rounded-xs shadow-md flex items-center gap-1.5 z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-[#F4C400] animate-pulse" />
        <span>{config.badge}</span>
      </div>

      {/* Top Right Location Badge */}
      <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-xs border border-white/20 text-white text-[9px] font-mono-tech font-bold uppercase px-2 py-0.5 rounded-xs z-10 hidden sm:block">
        {config.location}
      </div>

      {/* Bottom Information Glass Card */}
      <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#00183F]/90 backdrop-blur-xs border border-[#002D72] p-2.5 rounded-xs z-10">
        <h4 className="text-white font-bold text-xs uppercase tracking-wide truncate">
          {config.title}
        </h4>
        <p className="text-[10px] text-slate-300 font-mono-tech truncate mt-0.5">
          {config.spec}
        </p>
      </div>
    </div>
  );
};
