import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle, Sliders, HardHat, Truck, Layers, Zap } from 'lucide-react';

interface CalculatorProps {
  onTransferToQuote: (details: { model: string; dailyVolume: number; plantSpecs: string }) => void;
}

export const BatchingCalculator: React.FC<CalculatorProps> = ({ onTransferToQuote }) => {
  const [dailyVolume, setDailyVolume] = useState<number>(800);
  const [operatingHours, setOperatingHours] = useState<number>(10);
  const [projectType, setProjectType] = useState<string>('Commercial High-Rise');
  const [truckCapacity, setTruckCapacity] = useState<number>(8); // 8 m³ per transit truck

  // Calculate required throughput
  const requiredHourlyRate = Math.ceil(dailyVolume / operatingHours);

  // Determine optimal plant model
  let plantModel = 'CM-60 Compact';
  let mixerModel = 'TS-1500 Twin Shaft (1.0 m³)';
  let totalPower = '110 kW';
  let aggregateStorage = '120 m³ (4 x 30 m³)';
  let cementSilos = '2 x 100 Ton Silos';

  if (requiredHourlyRate > 180) {
    plantModel = 'CM-240 Heavy Industrial Dual';
    mixerModel = '2x TS-3000 Twin Shaft (2x 2.0 m³)';
    totalPower = '340 kW';
    aggregateStorage = '240 m³ (6 x 40 m³)';
    cementSilos = '4 x 300 Ton Silos';
  } else if (requiredHourlyRate > 120) {
    plantModel = 'CM-180 Pro Stationary';
    mixerModel = 'TS-4500 Twin Shaft (3.0 m³)';
    totalPower = '245 kW';
    aggregateStorage = '200 m³ (5 x 40 m³)';
    cementSilos = '3 x 200 Ton Silos';
  } else if (requiredHourlyRate > 75) {
    plantModel = 'CM-120 Pro Stationary';
    mixerModel = 'TS-3000 Twin Shaft (2.0 m³)';
    totalPower = '185 kW';
    aggregateStorage = '160 m³ (4 x 40 m³)';
    cementSilos = '2 x 150 Ton Silos';
  } else if (requiredHourlyRate > 45) {
    plantModel = 'CM-90 Modular';
    mixerModel = 'TS-2250 Twin Shaft (1.5 m³)';
    totalPower = '145 kW';
    aggregateStorage = '140 m³ (4 x 35 m³)';
    cementSilos = '2 x 100 Ton Silos';
  }

  const truckLoadsPerDay = Math.ceil(dailyVolume / truckCapacity);
  const trucksPerHour = (truckLoadsPerDay / operatingHours).toFixed(1);

  const handleApplySpecs = () => {
    onTransferToQuote({
      model: plantModel,
      dailyVolume,
      plantSpecs: `Project: ${projectType} | Target: ${dailyVolume} m³/day | Required Output: ${requiredHourlyRate} m³/h | Recommended: ${plantModel} with ${mixerModel}`
    });
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-white border-b border-[#E8EDF3] relative overflow-hidden">
      {/* Blueprint decorative pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#09295B] text-xs font-black tracking-[0.25em] uppercase mb-3">
            <Calculator className="w-4 h-4 text-[#F4C400]" />
            <span>ENGINEERING UTILITY</span>
            <span className="w-5 h-[2px] bg-[#F4C400]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#061C3D] font-heading uppercase tracking-tight mb-4">
            Interactive Concrete Batching & Plant Sizing Calculator
          </h2>
          <p className="text-[#667085] text-base leading-relaxed">
            Estimate the exact hourly capacity, mixer specifications, storage hoppers, and powder silo tonnage needed for your construction output.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Input Parameter Controls */}
          <div className="lg:col-span-6 bg-[#F5F7FA] border border-[#E8EDF3] p-6 sm:p-8 rounded-xs shadow-sm">
            <h3 className="text-xl font-black font-heading text-[#061C3D] uppercase tracking-tight mb-6 pb-3 border-b border-[#E8EDF3] flex items-center justify-between">
              <span>Project Parameters</span>
              <Sliders className="w-5 h-5 text-[#09295B]" />
            </h3>

            <div className="space-y-6">
              
              {/* Project Type Select */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#09295B] mb-2">
                  1. Project Classification
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-white border border-[#CBD5E1] rounded-xs px-4 py-3 text-sm font-semibold text-[#172033] focus:outline-none focus:border-[#09295B] focus:ring-1 focus:ring-[#09295B]"
                >
                  <option value="Commercial High-Rise">Commercial High-Rise / Raft Pouring</option>
                  <option value="Highway & Expressways">Highway Paving & Girder Bridges</option>
                  <option value="Marine & Port Infrastructure">Marine Port & Deep Water Works</option>
                  <option value="Precast Concrete Factory">Precast Beam / Segment Yard</option>
                  <option value="Residential Mega Community">Residential Housing Infrastructure</option>
                </select>
              </div>

              {/* Daily Output Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-[#09295B]">
                    2. Required Daily Concrete Volume
                  </label>
                  <span className="text-base font-black font-mono-tech text-[#061C3D] bg-[#F4C400] px-2.5 py-0.5 rounded-xs">
                    {dailyVolume} m³ / Day
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="3000"
                  step="50"
                  value={dailyVolume}
                  onChange={(e) => setDailyVolume(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-[#09295B]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono-tech mt-1">
                  <span>200 m³ (Compact)</span>
                  <span>1,500 m³ (Major)</span>
                  <span>3,000 m³ (Mega Project)</span>
                </div>
              </div>

              {/* Operating Shift Hours */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-[#09295B]">
                    3. Daily Operating Shift
                  </label>
                  <span className="text-sm font-black font-mono-tech text-[#09295B]">
                    {operatingHours} Hours / Day
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[8, 10, 14, 20].map((hrs) => (
                    <button
                      key={hrs}
                      type="button"
                      onClick={() => setOperatingHours(hrs)}
                      className={`py-2.5 text-xs font-bold font-mono-tech uppercase transition-all rounded-xs border cursor-pointer ${
                        operatingHours === hrs
                          ? 'bg-[#09295B] text-white border-[#09295B]'
                          : 'bg-white text-[#172033] border-[#CBD5E1] hover:bg-slate-100'
                      }`}
                    >
                      {hrs} Hours
                    </button>
                  ))}
                </div>
              </div>

              {/* Transit Truck Capacity Selection */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#09295B] mb-2">
                  4. Transit Mixer Truck Drum Volume
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[6, 8, 10].map((cap) => (
                    <button
                      key={cap}
                      type="button"
                      onClick={() => setTruckCapacity(cap)}
                      className={`py-2 text-xs font-bold font-mono-tech uppercase transition-all rounded-xs border cursor-pointer ${
                        truckCapacity === cap
                          ? 'bg-[#F4C400] text-[#061C3D] border-[#D4AB00] font-black'
                          : 'bg-white text-[#172033] border-[#CBD5E1] hover:bg-slate-100'
                      }`}
                    >
                      {cap} m³ Truck
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Engineered Output Specs Card */}
          <div className="lg:col-span-6 bg-[#002D72] text-white p-6 sm:p-8 rounded-xs border-2 border-[#09295B] shadow-xl">
            <div className="flex items-center justify-between border-b border-[#123D78] pb-4 mb-6">
              <div className="flex items-center gap-2">
                <HardHat className="w-5 h-5 text-[#F4C400]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#F4C400]">
                  Hassan ReadyMix Concrete Recommendation
                </span>
              </div>
              <span className="text-[11px] font-mono-tech bg-[#001F52] text-emerald-400 px-2.5 py-1 rounded-xs border border-[#123D78]">
                CALIBRATED
              </span>
            </div>

            {/* Main Recommended Model Banner */}
            <div className="bg-[#001F52] border border-[#123D78] p-5 rounded-xs mb-6">
              <div className="text-[10px] font-mono-tech uppercase text-slate-300 tracking-wider mb-1">
                RECOMMENDED HRC PRODUCTION SIZING
              </div>
              <div className="text-2xl sm:text-3xl font-black font-heading text-[#F4C400] uppercase tracking-tight">
                {plantModel}
              </div>
              <div className="text-xs text-slate-300 font-mono-tech mt-1">
                Calculated Requirement: <strong className="text-white">{requiredHourlyRate} m³/Hour</strong> continuous throughput
              </div>
            </div>

            {/* Calculated Subsystems Specs Table */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6 text-xs font-mono-tech">
              <div className="p-3 bg-[#001F52]/80 border-l-2 border-[#F4C400]">
                <div className="text-[10px] text-slate-400 uppercase">CORE MIXER</div>
                <div className="text-white font-bold mt-0.5">{mixerModel}</div>
              </div>

              <div className="p-3 bg-[#001F52]/80 border-l-2 border-[#F4C400]">
                <div className="text-[10px] text-slate-400 uppercase">TOTAL POWER RATING</div>
                <div className="text-white font-bold mt-0.5">{totalPower}</div>
              </div>

              <div className="p-3 bg-[#001F52]/80 border-l-2 border-[#F4C400]">
                <div className="text-[10px] text-slate-400 uppercase">AGGREGATE STORAGE</div>
                <div className="text-white font-bold mt-0.5">{aggregateStorage}</div>
              </div>

              <div className="p-3 bg-[#001F52]/80 border-l-2 border-[#F4C400]">
                <div className="text-[10px] text-slate-400 uppercase">POWDER SILOS</div>
                <div className="text-white font-bold mt-0.5">{cementSilos}</div>
              </div>
            </div>

            {/* Fleet Logistics Estimate */}
            <div className="p-4 bg-[#001F52]/80 border border-[#123D78] rounded-xs mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-[#F4C400]" />
                <div>
                  <div className="text-xs font-bold text-white uppercase">Daily Transit Mixer Fleet Dispatch</div>
                  <div className="text-[11px] text-slate-300 font-mono-tech">
                    {truckLoadsPerDay} truckloads/day (~{trucksPerHour} trucks/hr)
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold font-mono-tech text-[#F4C400]">
                {truckCapacity} m³ DRUM
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleApplySpecs}
                className="w-full bg-[#F4C400] text-[#001F52] hover:bg-[#FFE066] py-4 text-center font-black uppercase tracking-widest text-xs border-b-4 border-[#D4AB00] rounded-xs shadow-md flex items-center justify-center gap-3 transition-all cursor-pointer"
              >
                <span>Transfer Sizing To Quotation Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:03000751574"
                  className="bg-[#00183F] hover:bg-[#002D72] text-white py-3 text-center text-xs font-bold font-mono-tech uppercase rounded-xs border border-[#F4C400]/40 flex items-center justify-center gap-1.5"
                >
                  <span className="text-[#F4C400]">📞</span>
                  <span>0300-0751574</span>
                </a>
                <a
                  href="tel:03084311505"
                  className="bg-[#00183F] hover:bg-[#002D72] text-white py-3 text-center text-xs font-bold font-mono-tech uppercase rounded-xs border border-[#F4C400]/40 flex items-center justify-center gap-1.5"
                >
                  <span className="text-[#F4C400]">📞</span>
                  <span>0308-4311505</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
