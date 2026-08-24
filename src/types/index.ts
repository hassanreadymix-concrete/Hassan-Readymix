export interface ProductSpec {
  psiStrength: string;
  mixRatio: string;
  slumpRange: string;
  aggregateSize: string;
  curingTime: string;
  waterCementRatio: string;
  testingStandards: string;
  transitDelivery: string;
  recommendedUse: string;
  batchAccuracy: string;
}

export interface ProductItem {
  id: string;
  category: 'rcc-structural' | 'high-strength' | 'lean-concrete' | 'self-compacting' | 'specialized' | 'fleet-pumps';
  categoryLabel: string;
  title: string;
  modelCode: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  specs: ProductSpec;
  imageType: 'hrc-transit-mixer' | 'hrc-batching-plant' | 'dha-lahore-site' | 'bahria-town-site' | 'ferozepur-road-cbd' | 'lda-city-site' | 'concrete-test-lab' | 'concrete-boom-pump' | 'commercial-tower' | 'highway-bridge';
  isFlagship?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Infrastructure' | 'Industrial';
  location: string;
  volumeOutput: string;
  equipmentUsed: string;
  description: string;
  year: string;
  clientType: string;
  badge: string;
  imageType: 'dha-lahore-site' | 'bahria-town-site' | 'ferozepur-road-cbd' | 'lda-city-site' | 'commercial-tower' | 'highway-bridge';
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  duration: string;
  shortDesc: string;
  detail: string;
  deliverable: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: string;
  plantCapacity: string;
  location: string;
  message: string;
}

