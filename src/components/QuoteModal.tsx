import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Building2 } from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillProduct?: string;
  prefillMessage?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefillProduct,
  prefillMessage,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: 'Commercial High-Rise',
    plantCapacity: prefillProduct || 'HRC Structural RCC Concrete (3000 - 4000 PSI)',
    location: 'Lahore (DHA / Bahria / Gulberg)',
    message: prefillMessage || ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.companyName.trim()) errs.companyName = 'Company / Project name is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const generated = `HRC-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketNumber(generated);
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00183F]/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-xs border-2 border-[#002D72] max-w-2xl w-full shadow-2xl overflow-hidden my-8 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#001F52] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#F4C400]">
          <div>
            <span className="text-[10px] font-mono-tech uppercase text-[#F4C400] font-bold block">
              HASSAN READYMIX CONCRETE (HRC) • LAHORE
            </span>
            <h3 className="text-lg sm:text-xl font-black font-heading uppercase text-white">
              Request Concrete Rate Quote / Booking
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 hover:bg-[#002D72] rounded transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black font-heading text-[#001F52] uppercase mb-2">
                Concrete Order Request Registered
              </h4>
              <p className="text-xs text-[#667085] max-w-md mx-auto mb-4">
                Our Gajjumatta dispatch division has received your concrete supply inquiry for <strong>{formData.plantCapacity}</strong>.
              </p>
              <div className="bg-[#00183F] text-[#F4C400] text-xs font-mono-tech py-2 px-4 rounded-xs inline-block mb-6">
                ORDER TRACKING ID: <strong>{ticketNumber}</strong>
              </div>
              <div className="text-xs text-[#475467] mb-6">
                For urgent concrete pour scheduling, please call our direct hotline: <br />
                <a href="tel:03000751574" className="font-bold text-[#002D72] text-sm">0300-0751574</a> or <a href="tel:03084311505" className="font-bold text-[#002D72] text-sm">0308-4311505</a>
              </div>
              <br />
              <button
                onClick={onClose}
                className="bg-[#002D72] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#001F52] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#002D72] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Eng. Tariq Mehmood"
                    className={`w-full bg-[#F5F7FA] border rounded-xs px-3.5 py-2.5 text-xs text-[#172033] focus:bg-white focus:outline-none ${
                      errors.fullName ? 'border-red-500' : 'border-[#CBD5E1] focus:border-[#F4C400]'
                    }`}
                  />
                  {errors.fullName && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.fullName}</span>}
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#002D72] mb-1">
                    Company / Site Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Al-Rehman Builders / DHA Villa Project"
                    className={`w-full bg-[#F5F7FA] border rounded-xs px-3.5 py-2.5 text-xs text-[#172033] focus:bg-white focus:outline-none ${
                      errors.companyName ? 'border-red-500' : 'border-[#CBD5E1] focus:border-[#F4C400]'
                    }`}
                  />
                  {errors.companyName && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.companyName}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#002D72] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="yourname@gmail.com"
                    className={`w-full bg-[#F5F7FA] border rounded-xs px-3.5 py-2.5 text-xs text-[#172033] focus:bg-white focus:outline-none ${
                      errors.email ? 'border-red-500' : 'border-[#CBD5E1] focus:border-[#F4C400]'
                    }`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.email}</span>}
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#002D72] mb-1">
                    Contact Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0300-XXXXXXX"
                    className={`w-full bg-[#F5F7FA] border rounded-xs px-3.5 py-2.5 text-xs text-[#172033] focus:bg-white focus:outline-none ${
                      errors.phone ? 'border-red-500' : 'border-[#CBD5E1] focus:border-[#F4C400]'
                    }`}
                  />
                  {errors.phone && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.phone}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#002D72] mb-1">
                    Concrete Grade / PSI Required
                  </label>
                  <select
                    value={formData.plantCapacity}
                    onChange={(e) => setFormData({ ...formData, plantCapacity: e.target.value })}
                    className="w-full bg-[#F5F7FA] border border-[#CBD5E1] rounded-xs px-3.5 py-2.5 text-xs text-[#172033] focus:bg-white focus:outline-none focus:border-[#F4C400]"
                  >
                    <option value="HRC 3000 PSI Standard Structural RCC">HRC 3000 PSI Standard Structural RCC (1:2:4)</option>
                    <option value="HRC 3500 PSI High Performance RCC">HRC 3500 PSI High Performance RCC</option>
                    <option value="HRC 4000 PSI Heavy Duty RCC">HRC 4000 PSI Heavy Duty RCC (1:1.5:3)</option>
                    <option value="HRC 5000+ PSI Commercial Grade">HRC 5000+ PSI Commercial Raft & Columns</option>
                    <option value="HRC Lean Concrete (1:4:8 / 1:3:6)">HRC Lean Concrete (1:4:8 / 1:3:6 Bedding)</option>
                    <option value="HRC Self-Compacting Concrete (SCC)">HRC Self-Compacting Concrete (SCC)</option>
                    <option value="HRC Sulfate Resistant Cement Concrete (SRC)">HRC Sulfate Resistant Concrete (SRC)</option>
                    <option value="Concrete Mobile Boom Pump Rental">Concrete Mobile Boom Pump Rental</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#002D72] mb-1">
                    Pour Site Location in Lahore
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. DHA Phase 6 / Bahria Town / Gulberg"
                    className="w-full bg-[#F5F7FA] border border-[#CBD5E1] rounded-xs px-3.5 py-2.5 text-xs text-[#172033] focus:bg-white focus:outline-none focus:border-[#F4C400]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#002D72] mb-1">
                  Estimated Quantity (m³ or CFT) & Pour Date
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Estimated volume (e.g. 150 m³ slab pour), target date/time, whether concrete pump is needed..."
                  className="w-full bg-[#F5F7FA] border border-[#CBD5E1] rounded-xs px-3.5 py-2.5 text-xs text-[#172033] focus:bg-white focus:outline-none focus:border-[#F4C400]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#F4C400] text-[#001F52] hover:bg-[#001F52] hover:text-white py-3.5 font-black text-xs uppercase tracking-widest transition-all rounded-xs border-b-4 border-[#D4AB00] hover:border-[#002D72] shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Concrete Quote Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Direct Telephone Call bar */}
              <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-mono-tech">
                <span className="text-[#667085]">Direct Booking:</span>
                <div className="flex gap-3">
                  <a href="tel:03000751574" className="font-bold text-[#002D72] hover:text-[#F4C400]">0300-0751574</a>
                  <span className="text-slate-300">|</span>
                  <a href="tel:03084311505" className="font-bold text-[#002D72] hover:text-[#F4C400]">0308-4311505</a>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

