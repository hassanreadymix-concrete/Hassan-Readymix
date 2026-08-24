import { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 'STAGE 01',
    number: '01',
    title: 'Consultation & Mix Sizing',
    duration: 'Step 1',
    shortDesc: 'Comprehensive project feasibility, daily pour volume sizing, and site access review.',
    detail: 'Our senior concrete engineers evaluate your target PSI strength (3000 to 6000 PSI), slump requirement, truck turnaround route from Gajjumatta, and pumping logistics to recommend the optimal mix design.',
    deliverable: 'Custom Concrete Sizing Report & Mix Design Proposal'
  },
  {
    step: 'STAGE 02',
    number: '02',
    title: 'Quality Lab Verification',
    duration: 'Step 2',
    shortDesc: 'Aggregates sieve analysis, cement grade testing, and computerized recipe formulation.',
    detail: 'Computerized batching formula setup, sand moisture compensation, slump test benchmarking, and ASTM-certified test cube casting before initiating mega pours.',
    deliverable: 'Certified Lab Strength Test Report & Calibration Sheet'
  },
  {
    step: 'STAGE 03',
    number: '03',
    title: 'Automated Batching & Loading',
    duration: 'Step 3',
    shortDesc: 'Precision load-cell dosing, synchronized twin-shaft mixing, and transit mixer charging.',
    detail: 'Aggregates, cement, water, and retarder admixtures are metered with ±0.5% digital accuracy in our high-capacity Gajjumatta batching plant for rapid transit drum loading.',
    deliverable: 'Automated Batch Ticket with Weight Telemetry Log'
  },
  {
    step: 'STAGE 04',
    number: '04',
    title: 'On-Site Dispatch & Continuous Pouring',
    duration: 'Step 4',
    shortDesc: 'Dedicated transit mixer fleet dispatch, mobile concrete pump setup, and smooth placing.',
    detail: 'Dedicated HRC transit mixers arrive on schedule with continuous drum rotation, supported by stationary and boom concrete pumps for rapid, seamless slab/foundation pouring.',
    deliverable: 'Site Delivery Chalan & Real-Time Slump Confirmation'
  },
  {
    step: 'STAGE 05',
    number: '05',
    title: 'Quality Assurance & Field Support',
    duration: 'Continuous',
    shortDesc: '7-day & 28-day cylinder crushing strength verification and technical consultation.',
    detail: 'Continuous technical support from our Lahore engineering desk, cylinder test certificates for structural consultant approval, and dedicated account manager for ongoing projects.',
    deliverable: '28-Day Strength Certificate & Quality Compliance Guarantee'
  }
];

export const FAQ_LIST = [
  {
    q: 'Where is Hassan ReadyMix Concrete located and what areas do you deliver to?',
    a: 'Our main batching plant and head office are located at Gajjumatta Metro Bus Station, Rohi Nala near Sabzi Mandi, Ferozepur Road, Lahore. We deliver across Lahore (DHA, Gulberg, Bahria Town, Ring Road corridors, Model Town, Johar Town, Raiwind Road, Sundar) and surrounding Punjab regions 24/7.'
  },
  {
    q: 'What concrete grades and PSI strengths does Hassan ReadyMix provide?',
    a: 'We supply standard and high-strength concrete mixes from Lean Concrete (1:4:8, 1:3:6) to structural RCC (3000 PSI, 3500 PSI, 4000 PSI, 5000+ PSI), Self-Compacting Concrete (SCC), and Sulfate Resistant Cement (SRC) mixes tailored to your structural engineer’s specifications.'
  },
  {
    q: 'How long has Hassan ReadyMix Concrete been serving the construction sector?',
    a: 'Hassan ReadyMix Concrete has over 8+ years of dedicated operational excellence in Lahore, serving leading commercial builders, residential developers, industrial projects, and government contractors.'
  },
  {
    q: 'Do you provide concrete boom pumps and transit mixers for high-elevation pours?',
    a: 'Yes. We operate our own fleet of heavy transit mixer trucks (8m³ to 10m³) and mobile concrete boom pumps capable of reaching multi-story roofs, raft basements, and narrow street sites.'
  },
  {
    q: 'How can I place an order or get a rate quotation?',
    a: 'You can contact our direct dispatch desk at 0300-0751574 or 0308-4311505, email hassanreadymix@gmail.com, or use the online Request a Quote form on this website. Our team will provide an official per m³ / cft rate within hours.'
  },
  {
    q: 'Do you provide batch quality certificates and lab test reports?',
    a: 'Yes, every batch is dispatched with computerized batch weights, and we provide certified 7-day and 28-day cube/cylinder crushing test reports conducted in our dedicated ASTM testing laboratory for client and consultant approval.'
  }
];
