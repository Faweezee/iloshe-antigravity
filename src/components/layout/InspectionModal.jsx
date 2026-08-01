import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ESTATES_DATA } from '../../data/estatesData';
import { ASSETS } from '../../data/assetsManifest';

export default function InspectionModal({ isOpen, onClose, selectedEstateName = '' }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    estate: selectedEstateName || ESTATES_DATA[0].name,
    date: '',
    time: '10:00 AM',
    name: '',
    phone: '',
    email: '',
  });

  if (!isOpen) return null;

  // XSS Input Sanitizer Helper
  const sanitizeInput = (str) => {
    if (typeof str !== 'string') return '';
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanData = {
      estate: sanitizeInput(formData.estate),
      date: sanitizeInput(formData.date),
      time: sanitizeInput(formData.time),
      name: sanitizeInput(formData.name),
      phone: sanitizeInput(formData.phone),
      email: sanitizeInput(formData.email),
    };
    setFormData(cleanData);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Iloshe Properties, I would like to schedule a site inspection for ${formData.estate}.\n\nName: ${formData.name || 'Investor'}\nDate: ${formData.date || 'As soon as possible'}`
    );
    window.open(`https://wa.me/${ASSETS.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111318]/70 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-[#FAF9F5] border border-[#E5E2DC] shadow-2xl overflow-hidden p-8 text-[#121824]">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-6 border-b border-[#E5E2DC] pb-4">
          <div>
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block font-semibold">
              Inspection Scheduling
            </span>
            <h3 className="text-xl font-serif-display font-medium text-[#121824]">
              Book Site Inspection
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 text-[#5E6A7B] hover:text-[#121824]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="space-y-6 text-center py-6">
            <h4 className="text-xl font-serif-display text-[#121824]">Inspection Request Received</h4>
            <p className="text-xs text-[#5E6A7B] leading-relaxed font-sans-body">
              Thank you, {formData.name}. Our inspection coordinator will call you at {formData.phone} to confirm transport arrangements for {formData.estate}.
            </p>

            <div className="space-y-3 pt-2">
              <button
                onClick={handleWhatsAppBooking}
                className="btn-primary w-full"
              >
                Confirm via WhatsApp
              </button>
              <button
                onClick={handleReset}
                className="btn-secondary w-full"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans-body">
            <div>
              <label className="block text-[10px] uppercase font-mono-data text-[#5E6A7B] mb-1">
                Select Estate
              </label>
              <select
                value={formData.estate}
                onChange={(e) => setFormData({ ...formData, estate: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#E5E2DC] text-[#121824] focus:outline-none focus:border-[#121824]"
                required
              >
                {ESTATES_DATA.map((est) => (
                  <option key={est.id} value={est.name}>
                    {est.name} ({est.location})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] uppercase font-mono-data text-[#5E6A7B] mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#E5E2DC] text-[#121824] focus:outline-none focus:border-[#121824]"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-mono-data text-[#5E6A7B] mb-1">
                  Time Slot
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#E5E2DC] text-[#121824] focus:outline-none focus:border-[#121824]"
                >
                  <option value="10:00 AM">10:00 AM Morning</option>
                  <option value="01:00 PM">01:00 PM Afternoon</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-mono-data text-[#5E6A7B] mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#E5E2DC] text-[#121824] focus:outline-none focus:border-[#121824]"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] uppercase font-mono-data text-[#5E6A7B] mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#E5E2DC] text-[#121824] focus:outline-none focus:border-[#121824]"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-mono-data text-[#5E6A7B] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#E5E2DC] text-[#121824] focus:outline-none focus:border-[#121824]"
                  required
                />
              </div>
            </div>

            <div className="pt-3 space-y-2">
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Submit Inspection Booking
              </button>
              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="btn-secondary w-full"
              >
                Book via WhatsApp
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
