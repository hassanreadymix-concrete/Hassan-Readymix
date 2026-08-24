import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Building2, User, FileSpreadsheet } from 'lucide-react';
import { QuoteFormData } from '../types';

interface ContactProps {
  initialEquipment?: string;
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactProps> = ({ initialEquipment, initialMessage }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: 'Commercial Construction',
    plantCapacity: initialEquipment || 'Ready-Mix Concrete Supply (3000 PSI / RCC)',
    location: '',
    message: initialMessage || ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email required';
    if (!formData.phone.trim()) errs.phone = 'Contact phone number required';
    if (!formData.companyName.trim()) errs.companyName = 'Company / Project name is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const generatedTicket = `HRC-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedTicket);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F5F7FA] relative overflow-hidden border-b border-[#E8EDF3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Contact & Company Headquarter Details */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-[#002D72] text-xs font-black tracking-[0.25em] uppercase mb-3">
              <span className="w-5 h-[2px] bg-[#F4C400]" />
              <span>DIRECT INQUIRY & DISPATCH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-black text-[#061C3D] font-heading uppercase tracking-tight mb-6">
              Contact Hassan ReadyMix Concrete
            </h2>

            <p className="text-[#667085] text-base leading-relaxed mb-8 font-normal">
              Need certified ready-mix concrete pouring for your project in Lahore, or looking for batching plant machinery? Contact our dispatch and engineering desk for immediate rates and pour schedules.
            </p>

            {/* Contact Details Cards matching User Spec */}
            <div className="space-y-4 mb-8">
              
              <div className="p-4 bg-white border border-[#E8EDF3] rounded-xs flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-xs bg-[#002D72] text-[#F4C400] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tech uppercase text-[#667085]">DIRECT CALL & WHATSAPP DISPATCH</div>
                  <div className="flex flex-col gap-0.5 font-mono-tech mt-0.5">
                    <a href="tel:03000751574" className="text-base font-black text-[#061C3D] hover:text-[#002D72] transition-colors">
                      0300-0751574
                    </a>
                    <a href="tel:03084311505" className="text-sm font-bold text-[#002D72] hover:text-[#C92323] transition-colors">
                      0308-4311505
                    </a>
                    <a href="tel:03064186863" className="text-xs text-slate-500 hover:text-[#002D72] transition-colors">
                      0306-4186863
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#E8EDF3] rounded-xs flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-xs bg-[#002D72] text-[#F4C400] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tech uppercase text-[#667085]">OFFICIAL INQUIRIES & ORDERS</div>
                  <a href="mailto:hassanreadymix@gmail.com" className="text-sm sm:text-base font-bold text-[#061C3D] hover:text-[#002D72] transition-colors block">
                    hassanreadymix@gmail.com
                  </a>
                  <a href="mailto:readymixhassan@gmail.com" className="text-xs text-slate-500 hover:text-[#002D72] transition-colors block mt-0.5">
                    readymixhassan@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#E8EDF3] rounded-xs flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-xs bg-[#002D72] text-[#F4C400] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tech uppercase text-[#667085]">PLANT & HEAD OFFICE LOCATION</div>
                  <div className="text-sm font-bold text-[#061C3D] leading-snug">
                    Gajjumatta Metro Bus Station, Rohi Nala Near Sabzi Mandi, Lahore, Pakistan.
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    (2-km, Ferozepur off Road, Main Gajumata)
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#E8EDF3] rounded-xs flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-xs bg-[#002D72] text-[#F4C400] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tech uppercase text-[#667085]">OPERATIONAL HOURS & DISPATCH</div>
                  <div className="text-sm font-bold text-[#061C3D]">
                    Concrete Dispatch: 24/7 (Day & Night Shift)
                  </div>
                  <div className="text-xs text-slate-500">
                    Office: Mon – Sat | 8:30 AM – 7:00 PM (PKT)
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Turnaround Commitment Note */}
            <div className="p-4 bg-[#002D72] text-white rounded-xs border-l-4 border-[#F4C400] text-xs font-mono-tech">
              <span className="text-[#F4C400] font-bold block mb-1">LAHORE FAST RESPONSE GUARANTEE</span>
              <span>Rates, mix design certifications, and site inspection team dispatched same day.</span>
            </div>

          </div>

          {/* RIGHT: High-Conversion RFQ Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-[#E8EDF3] p-6 sm:p-10 rounded-xs shadow-xl">
              
              <div className="border-b border-[#E8EDF3] pb-4 mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black font-heading uppercase text-[#061C3D] tracking-tight">
                    Request Ready-Mix Concrete Quotation
                  </h3>
                  <p className="text-xs text-[#667085] mt-1">
                    Fill in your pouring volume or machinery requirements for an official per m³ / cft rate.
                  </p>
                </div>
                <FileSpreadsheet className="w-6 h-6 text-[#002D72] shrink-0 hidden sm:block" />
              </div>

              {submitted ? (
                <div className="py-12 px-6 text-center bg-[#F5F7FA] border border-emerald-200 rounded-xs">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black font-heading text-[#061C3D] uppercase mb-2">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-sm text-[#667085] max-w-md mx-auto mb-4">
                    Thank you, <strong className="text-[#061C3D]">{formData.fullName}</strong>. Your quotation request has been routed to our Hassan ReadyMix Concrete Dispatch Desk.
                  </p>
                  <div className="inline-block bg-[#002D72] text-[#F4C400] font-mono-tech text-xs px-4 py-2 rounded-xs mb-6">
                    REFERENCE TRACKING ID: <strong>{ticketId}</strong>
                  </div>
                  <br />
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        email: '',
                        phone: '',
                        projectType: 'Commercial Construction',
                        plantCapacity: 'Ready-Mix Concrete Supply (3000 PSI / RCC)',
                        location: '',
                        message: ''
                      });
                    }}
                    className="bg-[#002D72] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#061C3D] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Row 1: Full Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#002D72] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Malik Usman / Engr. Tariq"
                        className={`w-full bg-[#F5F7FA] border rounded-xs px-3.5 py-2.5 text-xs text-[#172033] focus:bg-white focus:outline-none focus:ring-1 ${
                          errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-[#CBD5E1] focus:border-[#F4C400] focus:ring-[#F4C400]'
                        }`}
                      />
                      {errors.fullName && <span className="text-[10px] text-red-500 mt-1 block">{errors.fullName}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#002D72] mb-1.5">
                        Company / Contractor / Owner *
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. DHA Phase 6 Construction / Builders"
                        className={`w-full bg-[#F5F7FA] border rounded-xs px-3.5 py-2.5 text-xs text-[#172033] focus:bg-white focus:outline-none focus:ring-1 ${
                          errors.companyName ? 'border-red-500 focus:ring-red-500' : 'border-[#CBD5E1] focus:border-[#F4C400] focus:ring-[#F4C400]'
                        }`}
                      />
                      {errors.companyName && <span className="text-[10px] text-red-500 mt-1 block">{errors.companyName}</span>}
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#002D72] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@gmail.com"
                        className={`w-full bg-[#F5F7FA] border rounded-xs px-3.5 py-2.5 text-xs text-[#172033] focus:bg-white focus:outline-none focus:ring-1 ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-[#CBD5E1] focus:border-[#F4C400] focus:ring-[#F4C400]'
                        }`}
                      />
                      {errors.email && <span className="text-[10px] text-red-500 mt-1 block">{errors.email}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#002D72] mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0300-0751574"
                        className={`w-full bg-[#F5F7FA] border rounded-xs px-3.5 py-2.5 text-xs text-[#172033] focus:bg-white focus:outline-none focus:ring-1 ${
                          errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-[#CBD5E1] focus:border-[#F4C400] focus:ring-[#F4C400]'
                        }`}
                      />
                      {errors.phone && <span className="text-[10px] text-red-500 mt-1 block">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Row 3: Concrete Grade / Equipment & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#002D72] mb-1.5">
                        Concrete Grade / Solution
                      </label>
                      <select
                        value={formData.plantCapacity}
                        onChange={(e) => setFormData({ ...formData, plantCapacity: e.target.value })}
                        className="w-full bg-[#F5F7FA] border border-[#CBD5E1] rounded-xs px-3.5 py-2.5 text-xs text-[#172033] focus:bg-white focus:outline-none focus:border-[#F4C400]"
                      >
                        <option value="Ready-Mix Concrete Supply (3000 PSI / 1:2:4)">RCC 3000 PSI (1:2:4 Mix)</option>
                        <option value="High-Strength Concrete (4000 - 5000 PSI)">High-Strength (4000 – 5000 PSI)</option>
                        <option value="Lean Concrete (1:4:8 / 1:3:6)">Lean Concrete (1:4:8 / 1:3:6)</option>
                        <option value="Self-Compacting Concrete (SCC)">Self-Compacting Concrete (SCC)</option>
                        <option value="Sulfate Resistant Concrete (SRC)">Sulfate Resistant (SRC Cement)</option>
                        <option value="CM-120 Pro Batching Plant">CM-120 Pro Batching Plant (120 m³/h)</option>
                        <option value="CM-60 Compact Batching Plant">CM-60 Compact Batching Plant (60 m³/h)</option>
                        <option value="Transit Mixer Truck Hire & Dispatch">Transit Mixer Fleet Hire</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#002D72] mb-1.5">
                        Project Sector
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-[#F5F7FA] border border-[#CBD5E1] rounded-xs px-3.5 py-2.5 text-xs text-[#172033] focus:bg-white focus:outline-none focus:border-[#F4C400]"
                      >
                        <option value="Residential House / Villa Foundation">Residential House / Basement / Slab</option>
                        <option value="Commercial Plaza / High-Rise">Commercial Plaza / Multi-Story</option>
                        <option value="Industrial Factory Floor / Yard">Industrial Factory Floor / Pavement</option>
                        <option value="Road Paving / Bridge Structure">Road Paving / Bridge Infrastructure</option>
                        <option value="Precast Fabrication">Precast Fabrication Yard</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Location / Site */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#002D72] mb-1.5">
                      Pouring Site Address in Lahore / Punjab
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. DHA Phase 8, Ring Road, Ferozepur Road, Raiwind, Kasur"
                      className="w-full bg-[#F5F7FA] border border-[#CBD5E1] rounded-xs px-3.5 py-2.5 text-xs text-[#172033] focus:bg-white focus:outline-none focus:border-[#F4C400]"
                    />
                  </div>

                  {/* Project Message / Requirements */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#002D72] mb-1.5">
                      Pour Volume (m³ or cubic feet) & Pump Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention estimated concrete volume (e.g. 1500 cubic feet / 50 m³), pump boom requirement, slab pour date..."
                      className="w-full bg-[#F5F7FA] border border-[#CBD5E1] rounded-xs px-3.5 py-2.5 text-xs text-[#172033] focus:bg-white focus:outline-none focus:border-[#F4C400]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#F4C400] text-[#061C3D] hover:bg-[#002D72] hover:text-white py-4 font-black text-xs uppercase tracking-widest transition-all rounded-xs border-b-4 border-[#D4AB00] hover:border-[#001F52] shadow-md flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <span>Request Hassan ReadyMix Rate & Dispatch Schedule</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="text-center text-[11px] text-slate-500 font-mono-tech">
                    📍 Direct Dispatch from Gajjumatta Rohi Nala Plant • Fast 24/7 Delivery
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
