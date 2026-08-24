import { ProductItem } from '../types';

export const EQUIPMENT_LIST: ProductItem[] = [
  {
    id: 'rcc-structural-3000psi',
    category: 'rcc-structural',
    categoryLabel: 'Structural RCC',
    title: 'Standard RCC Concrete (3000 PSI)',
    modelCode: 'HRC-3000 / 1:2:4 MIX',
    tagline: 'Standard Reinforced Cement Concrete for Slabs, Beams & Rafts',
    description: 'High-workability certified ready-mix concrete engineered for multi-story slab casting, columns, foundation footings, and retaining structures. Produced with premium cement and graded Margalla/Chenab aggregates.',
    keyFeatures: [
      'Guaranteed 3000 PSI 28-day compressive strength',
      'Slump retained during transit for effortless concrete pumping',
      'Homogeneous mix prevents segregation and honeycombing in dense steel rebar',
      'Computerized batching calibration ±0.5% with official lab test cylinder reports'
    ],
    specs: {
      psiStrength: '3000 - 3500 PSI (21 - 24 MPa)',
      mixRatio: '1 : 2 : 4 Nominal Mix (Engineered Grade M20/M25)',
      slumpRange: '125mm - 175mm (Pumpable)',
      aggregateSize: '20mm down (Grade A Crushed Aggregate)',
      curingTime: 'Initial set: 90 mins | Final set: 6-8 hrs',
      waterCementRatio: '0.45 - 0.50 (Water-reducing plasticizer)',
      testingStandards: 'ASTM C39 / ASTM C143 / ACI 318 Standard',
      transitDelivery: 'Transit Mixers (8m³ - 10m³) Direct to Site',
      recommendedUse: 'House roofs, commercial slabs, columns, foundation rafts & basements',
      batchAccuracy: '±0.5% Digital Load Cell Batching at Gajjumatta Plant'
    },
    imageType: 'dha-lahore-site',
    isFlagship: true
  },
  {
    id: 'high-strength-5000psi',
    category: 'high-strength',
    categoryLabel: 'High-Strength Concrete',
    title: 'High-Strength Commercial Concrete (4000 - 6000 PSI)',
    modelCode: 'HRC-5000 PRO / M35-M50',
    tagline: 'Heavy Load Structural Mix for High-Rise Plazas & Bridge Piers',
    description: 'Specialized high-density structural concrete designed for mega towers in Gulberg, CBD Lahore, and high-rise commercial basements requiring extreme load-bearing strength and minimal column footprints.',
    keyFeatures: [
      '4000 to 6000+ PSI ultimate compressive capacity',
      'Micro-silica & superplasticizer polymer technology',
      'Ultra-dense matrix resists high hydrostatic water pressure and chloride ingress',
      'Rapid strength gain allows early formwork stripping and floor cycling'
    ],
    specs: {
      psiStrength: '4000 - 6000 PSI (28 - 42 MPa)',
      mixRatio: 'Design Mix (High Cement Factor + Silica Fume Admixture)',
      slumpRange: '150mm - 200mm (Superplasticized High Flow)',
      aggregateSize: '10mm - 20mm Specially Graded Coarse Aggregate',
      curingTime: 'High Early 7-day Strength (>75% of 28-day target)',
      waterCementRatio: '0.36 - 0.40 with 3rd Gen Superplasticizers',
      testingStandards: 'ASTM C39 / BS EN 12390-3 / ACI 211',
      transitDelivery: 'Dedicated GPS-Monitored HRC Transit Mixers',
      recommendedUse: 'High-rise towers in Gulberg/CBD, deep foundation piles, transfer girders & heavy shear walls',
      batchAccuracy: 'Automated Micro-Dosing with Continuous Slump Control'
    },
    imageType: 'commercial-tower'
  },
  {
    id: 'lean-blinding-concrete',
    category: 'lean-concrete',
    categoryLabel: 'Lean & Blinding',
    title: 'Lean & Bedding Concrete (1:4:8 & 1:3:6)',
    modelCode: 'HRC-LEAN / 1500-2000 PSI',
    tagline: 'Uniform Leveling Sub-Base for Foundations & Underground Flooring',
    description: 'Cost-effective, uniform blinding concrete delivered in bulk to seal excavations, prevent soil contamination of reinforcement steel, and provide a perfectly level base for raft foundations and basement flooring.',
    keyFeatures: [
      'Uniform ground sealing and moisture barrier under raft slabs',
      'Rapid delivery in bulk for fast excavation coverage',
      'Exact batch consistency prevents mud mixing during rainy spells',
      'Economical per cubic meter / cft rates with zero on-site mixing mess'
    ],
    specs: {
      psiStrength: '1500 - 2000 PSI (10 - 15 MPa)',
      mixRatio: '1 : 4 : 8 / 1 : 3 : 6 Volumetric Blinding Proportion',
      slumpRange: '75mm - 100mm (Firm Workable Consistency)',
      aggregateSize: '25mm - 40mm Well-Graded Gravel / Stone',
      curingTime: 'Initial set: 2 hours | Traffic ready in 24 hours',
      waterCementRatio: '0.55 - 0.60',
      testingStandards: 'ASTM C143 / Standard Blinding Specs',
      transitDelivery: 'Direct Chute Pouring or Wheelbarrow Placement',
      recommendedUse: 'Foundation bedding, plinth leveling, floor sub-base, trench fillings',
      batchAccuracy: '±0.5% Computerized Batching at Gajjumatta Plant'
    },
    imageType: 'lda-city-site'
  },
  {
    id: 'self-compacting-concrete',
    category: 'self-compacting',
    categoryLabel: 'Self-Compacting (SCC)',
    title: 'Self-Compacting Concrete (SCC Flow Mix)',
    modelCode: 'HRC-SCC FLOW / 4500 PSI',
    tagline: 'Zero-Vibration Self-Leveling Concrete for Congested Reinforcements',
    description: 'Advanced rheology flowable concrete that settles completely under its own self-weight without mechanical vibrators. Perfect for heavily congested rebar cages, fair-faced architectural concrete, and complex column nodes.',
    keyFeatures: [
      'Self-consolidating flow eliminates honeycombing and air voids',
      'Zero manual vibration required — cuts labor costs and noise on night pours',
      'Mirror-smooth fair-faced architectural concrete surface finish',
      'High passing ability around densely packed structural rebar meshes'
    ],
    specs: {
      psiStrength: '4000 - 5000 PSI (28 - 35 MPa)',
      mixRatio: 'Engineered Viscosity Modifying Agent (VMA) Mix',
      slumpRange: 'Slump Flow 650mm - 750mm (Self-Flowing)',
      aggregateSize: '10mm - 12mm Fine Matrix Aggregates',
      curingTime: 'Standard ASTM Capping & Water Curing',
      waterCementRatio: '0.38 - 0.42 with High-Range Polycarboxylate Ethers',
      testingStandards: 'ASTM C1611 (Slump Flow) / ASTM C1621 (J-Ring)',
      transitDelivery: 'Continuous Slow-Agitation Transit Drum Mixers',
      recommendedUse: 'Complex shear walls, fair-faced architectural facades, congested pile caps & beam-column joints',
      batchAccuracy: 'Computerized Viscosity Measurement & Precision Admixture Dosing'
    },
    imageType: 'bahria-town-site'
  },
  {
    id: 'specialized-sulfate-waterproof',
    category: 'specialized',
    categoryLabel: 'Specialized Concrete',
    title: 'Waterproof & Sulfate Resistant Concrete (SRC / Aquaproof)',
    modelCode: 'HRC-SRC & AQUA / 3500-4500 PSI',
    tagline: 'Anti-Chloride & Salinity Shield for Basements & Underground Tanks',
    description: 'Formulated with certified Sulfate Resistant Cement (SRC) and crystalline integral capillary waterproofing polymers. Protects concrete structures in Rohi Nala, Ferozepur Road, and low-lying Lahore areas from ground salinity.',
    keyFeatures: [
      '100% Sulfate Resistant Cement (SRC) formulation for aggressive soils',
      'Crystalline waterproofing technology seals micro-cracks permanently',
      'Resists underground water pressure, chemical effluents, and salt dampness',
      'Prevents steel rebar rusting and spalling for 50+ years of durability'
    ],
    specs: {
      psiStrength: '3500 - 4500 PSI (25 - 32 MPa)',
      mixRatio: 'Sulfate Resistant Cement (SRC) + Integral Hydrophobic Agents',
      slumpRange: '130mm - 180mm (Pumpable)',
      aggregateSize: '20mm Down Dense Sieve Grading',
      curingTime: 'Strict 14-day wet water curing recommended',
      waterCementRatio: '0.42 Maximum (Low Permeability Matrix)',
      testingStandards: 'ASTM C150 Type V (SRC) / DIN 1048 Permeability / ASTM C1202',
      transitDelivery: 'Dedicated HRC Transit Mixers with Direct Chute / Pump',
      recommendedUse: 'Deep basements in DHA & Bahria Town, underground water tanks, swimming pools, effluent drains & sewerage sumps',
      batchAccuracy: 'Precise Chemical Admixture Micro-Batching'
    },
    imageType: 'ferozepur-road-cbd'
  },
  {
    id: 'pqc-heavy-pavement',
    category: 'specialized',
    categoryLabel: 'Pavements & Industrial',
    title: 'Pavement Quality Concrete (PQC Heavy Pavement)',
    modelCode: 'HRC-PQC ROAD / 4000 PSI',
    tagline: 'High Flexural Strength for Factory Floors, Warehouses & Roadways',
    description: 'High flexural strength concrete engineered for heavy transit traffic, container yards, industrial factory floors in Sundar and Rohi Nala industrial estates, and commercial petrol pump forecourts.',
    keyFeatures: [
      'High flexural strength (> 4.5 MPa) resists heavy axle wheel loads',
      'Abrasion-resistant top surface stands up to forklift and truck traffic',
      'Low shrinkage design minimizes drying shrinkage cracking',
      'Suitable for laser screed leveling, power floating, and slipform paving'
    ],
    specs: {
      psiStrength: '3500 - 4500 PSI Compressive | 4.5 MPa Flexural',
      mixRatio: 'Coarse Sand + 20mm/40mm Hard Blue Stone Aggregates',
      slumpRange: '50mm - 100mm for Slipform / 120mm for Laser Screed',
      aggregateSize: '20mm to 40mm Heavy-Duty Stone',
      curingTime: 'Membrane curing compound + 7-day wet burlap',
      waterCementRatio: '0.42 - 0.45 with Air-Entraining & Plasticizer Agents',
      testingStandards: 'ASTM C78 (Flexural Strength) / ASTM C39',
      transitDelivery: 'High-Volume Continuous Transit Mixer Fleet',
      recommendedUse: 'Heavy factory flooring, warehousing yards, highway slipform paving, fuel stations & loading docks',
      batchAccuracy: 'Rigid ±0.5% Sieve & Moisture Control'
    },
    imageType: 'hrc-transit-mixer'
  }
];

export const SUB_SYSTEMS_DATA = [
  {
    id: '01',
    name: 'Automated Plant Batching',
    subtitle: 'Gajjumatta Lahore Hub',
    desc: 'Located at Gajjumatta Rohi Nala near Sabzi Mandi, our computerized batching plant ensures millimeter-accurate aggregate, cement, and chemical dosing.',
    spec1: 'Capacity: 120 m³/h continuous ready-mix output',
    spec2: 'Batching: ±0.5% digital load cell accuracy',
    spec3: 'Silos: 4x heavy cement & fly ash powder silos',
    color: '#F4C400'
  },
  {
    id: '02',
    name: 'Transit Mixer Fleet',
    subtitle: '8m³ to 10m³ HRC Drum Trucks',
    desc: 'Our fleet of high-capacity transit mixers guarantees continuous drum rotation during transit, preventing slump loss and ensuring fresh concrete delivery.',
    spec1: 'Fleet: 20+ dedicated HRC transit mixers',
    spec2: 'Speed: Express 24/7 delivery across all Lahore sectors',
    spec3: 'GPS: Real-time route tracking and timely dispatch',
    color: '#002D72'
  },
  {
    id: '03',
    name: 'Concrete Boom Pumps',
    subtitle: 'High-Elevation Placing & Raft Pours',
    desc: 'High-reach mobile concrete boom pumps (32m to 46m) and stationary line pumps place concrete directly onto high-rise roofs, basements, and raft slabs.',
    spec1: 'Pumping Reach: Up to 46m vertical & 200m horizontal',
    spec2: 'Pumping Rate: 80 - 100 m³/hour continuous flow',
    spec3: 'Crew: Experienced certified pump operators on site',
    color: '#C92323'
  },
  {
    id: '04',
    name: 'ASTM Quality Testing Lab',
    subtitle: 'In-House Crushing & Slump Checks',
    desc: 'Every concrete batch is sampled and tested. We conduct slump cone tests on-site and provide certified 7-day and 28-day cube/cylinder crushing test reports.',
    spec1: 'Testing: 7-day & 28-day compressive crushing strength',
    spec2: 'Equipment: Digital hydraulic compression testing machine',
    spec3: 'Certificates: Official lab reports for structural consultants',
    color: '#001F52'
  },
  {
    id: '05',
    name: '24/7 Pouring & Dispatch',
    subtitle: 'Day & Night Non-Stop Service',
    desc: 'Mega slab and raft pours require uninterrupted supply. Our dispatch desk operates 24/7 to coordinate day and night pours without delays.',
    spec1: 'Helpline: 0300-0751574 / 0308-4311505',
    spec2: 'Coverage: DHA, LDA City, Bahria Town, Gulberg, CBD, Ferozepur Rd',
    spec3: 'Service: 8+ Years of trusted concrete supply in Lahore',
    color: '#F4C400'
  }
];

