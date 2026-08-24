// Authentic Photographic Assets for Hassan ReadyMix Concrete (HRC) Lahore
import hrcBatchingPlant from '../assets/images/hrc_clean_plant_batching_1787560642801.jpg';
import hrcTransitMixer from '../assets/images/hrc_clean_transit_mixer_1787560590342.jpg';
import hrcBatchingLoading from '../assets/images/hrc_clean_plant_batching_1787560642801.jpg';
import hrcFleetYard from '../assets/images/hrc_clean_fleet_lineup_1787560609595.jpg';
import hrcSiteOffice from '../assets/images/hrc_clean_site_office_1787560568998.jpg';
import hrcRoadDelivery from '../assets/images/hrc_clean_road_transit_1787560629803.jpg';

export const HRC_IMAGES = {
  batchingPlant: hrcBatchingPlant,
  transitMixer: hrcTransitMixer,
  batchingLoading: hrcBatchingLoading,
  fleetYard: hrcFleetYard,
  siteOffice: hrcSiteOffice,
  roadDelivery: hrcRoadDelivery,
};

export interface HRCPhotoItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
}

export const HRC_GALLERY: HRCPhotoItem[] = [
  {
    id: 'photo-1',
    title: 'HRC Central Automated Batching Plant',
    category: 'Production Plant',
    location: 'Gajjumatta, Ferozepur Road Lahore',
    image: hrcBatchingPlant,
    description: 'Fully automated 120 m³/h computer-controlled twin-shaft batching plant with 4-bin aggregate hoppers and blue cement storage silos.',
  },
  {
    id: 'photo-2',
    title: 'HRC Heavy-Duty Transit Mixer (10m³)',
    category: 'Fleet & Transit',
    location: 'HRC Plant Yard & Delivery Network',
    image: hrcTransitMixer,
    description: 'Heavy commercial chassis transit mixer featuring official HRC insignia, continuous drum agitation, and slump preservation.',
  },
  {
    id: 'photo-3',
    title: 'Automated Concrete Loading Tower',
    category: 'Plant Operations',
    location: 'Rohi Nala Batching Station',
    image: hrcBatchingLoading,
    description: 'High-speed computerized dispatch chute filling blue HRC transit mixer directly under the pressurized cement silo.',
  },
  {
    id: 'photo-4',
    title: 'HRC Dedicated Mixer Fleet & Heavy Loaders',
    category: 'Fleet & Equipment',
    location: 'Gajjumatta Dispatch Depot',
    image: hrcFleetYard,
    description: 'Lineup of robust transit mixers and front hydraulic wheel loaders ensuring non-stop ready-mix supply across Lahore.',
  },
  {
    id: 'photo-5',
    title: 'HRC Site Operations Office Container',
    category: 'Headquarters & Admin',
    location: 'Gajjumatta Metro Bus Station, Lahore',
    image: hrcSiteOffice,
    description: 'Central field operations cabin, quality testing sample registry, dispatch logistics coordination, and direct client booking office.',
  },
  {
    id: 'photo-6',
    title: 'Rapid On-Road Concrete Dispatch',
    category: 'Site Delivery',
    location: 'Lahore Arterials (DHA / Ring Road / Gulberg)',
    image: hrcRoadDelivery,
    description: 'Certified ready-mix concrete en route to high-rise foundation pours, commercial basements, and residential slabs.',
  },
];
