import React, { useState } from 'react';
import { ESTATES_DATA } from '../data/estatesData';
import { ASSETS } from '../data/assetsManifest';
import { CheckCircle2, Calendar, Clock, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function InspectionPage({ initialEstateName = '' }) {
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    estate: initialEstateName || ESTATES_DATA[0].name,
    date: todayStr,
    time: '10:00 AM',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const sanitizeInput = (str) => {
    if (typeof str !== 'string') return '';
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Strict Date Validation — Prevent Past Dates
    if (formData.date < todayStr) {
      alert("Please select a valid future date for your site inspection.");
      return;
    }

    const cleanData = {
      estate: sanitizeInput(formData.estate),
      date: sanitizeInput(formData.date),
      time: sanitizeInput(formData.time),
      name: sanitizeInput(formData.name),
      phone: sanitizeInput(formData.phone),
      email: sanitizeInput(formData.email),
      notes: sanitizeInput(formData.notes),
      timestamp: new Date().toISOString()
    };

    // Store booking output in LocalStorage for client data retrieval
    try {
      const existing = JSON.parse(localStorage.getItem('iloshe_inspection_bookings') || '[]');
      existing.push(cleanData);
      localStorage.setItem('iloshe_inspection_bookings', JSON.stringify(existing));
    } catch (err) {
      console.log('Booking stored in session:', cleanData);
    }

    setSubmittedData(cleanData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookAnother = () => {
    setSubmitted(false);
    setFormData({
      estate: ESTATES_DATA[0].name,
      date: todayStr,
      time: '10:00 AM',
      name: '',
      phone: '',
      email: '',
      notes: '',
    });
  };

  const handleWhatsAppBooking = () => {
    if (!submittedData) return;
    const text = encodeURIComponent(
      `Hello Iloshe Properties, I have scheduled a site inspection via your website:\n\n` +
      `📌 Estate: ${submittedData.estate}\n` +
      `📅 Preferred Date: ${submittedData.date} (${submittedData.time})\n` +
      `👤 Name: ${submittedData.name}\n` +
      `📞 Phone: ${submittedData.phone}\n` +
      `✉️ Email: ${submittedData.email}\n` +
      `💬 Notes: ${submittedData.notes || 'None'}`
    );
    window.open(`https://wa.me/${ASSETS.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="py-20 bg-[#FAF9F5] text-[#121824]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="text-[10px] font-mono-data uppercase tracking-[0.2em] text-[#5E6A7B] border-l-2 border-[#D96B27] pl-2.5 block">
            SITE VISIT SCHEDULING
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif-display font-medium text-[#121824] tracking-tight">
            Schedule a Physical Site Inspection
          </h1>
          <p className="text-xs sm:text-sm text-[#5E6A7B] leading-relaxed font-sans-body">
            Book a guided site visit with our land coordinators or request an interactive video walkthrough. We arrange logistics and legal documentation verification on-site.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white border border-[#E5E2DC] p-8 sm:p-12 shadow-sm">
          {submitted ? (
            <div className="space-y-8 text-center py-6 animate-fadeIn">
              <div className="w-16 h-16 bg-[#0B3B2B]/10 rounded-full flex items-center justify-center mx-auto text-[#0B3B2B]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-3 max-w-lg mx-auto">
                <h3 className="text-2xl font-serif-display font-medium text-[#121824]">
                  Inspection Request Confirmed
                </h3>
                <p className="text-xs text-[#5E6A7B] leading-relaxed font-sans-body">
                  Thank you, <strong className="text-[#121824]">{submittedData?.name}</strong>. Your inspection booking for <strong className="text-[#0B3B2B]">{submittedData?.estate}</strong> on <strong className="text-[#121824]">{submittedData?.date} at {submittedData?.time}</strong> has been logged in our system.
                </p>
              </div>

              {/* Data Summary Box */}
              <div className="p-6 bg-[#FAF9F5] border border-[#E5E2DC] text-left text-xs font-mono-data space-y-2 max-w-md mx-auto">
                <span className="text-[10px] text-[#5E6A7B] uppercase tracking-wider block font-semibold mb-2">Booking Summary:</span>
                <p><strong>Property:</strong> {submittedData?.estate}</p>
                <p><strong>Date & Time:</strong> {submittedData?.date} ({submittedData?.time})</p>
                <p><strong>Contact Phone:</strong> {submittedData?.phone}</p>
                <p><strong>Email Address:</strong> {submittedData?.email}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <button
                  onClick={handleWhatsAppBooking}
                  className="btn-orange text-xs py-3 px-6"
                >
                  Send Confirmation to WhatsApp
                </button>
                <button
                  onClick={handleBookAnother}
                  className="btn-secondary text-xs py-3 px-6"
                >
                  Book Another Inspection
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-xs font-sans-body">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Select Estate */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] uppercase font-mono-data text-[#5E6A7B]">
                    Select Target Property *
                  </label>
                  <select
                    value={formData.estate}
                    onChange={(e) => setFormData({ ...formData, estate: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E5E2DC] text-[#121824] focus:outline-none focus:border-[#0B3B2B]"
                    required
                  >
                    {ESTATES_DATA.map((est) => (
                      <option key={est.id} value={est.name}>
                        {est.name} — {est.location} ({est.price})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date with Strict min={today} Validation */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] uppercase font-mono-data text-[#5E6A7B]">
                    Preferred Inspection Date *
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E5E2DC] text-[#121824] focus:outline-none focus:border-[#0B3B2B]"
                    required
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Time Slot */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] uppercase font-mono-data text-[#5E6A7B]">
                    Time Slot *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E5E2DC] text-[#121824] focus:outline-none focus:border-[#0B3B2B]"
                  >
                    <option value="10:00 AM">10:00 AM — Morning Inspection</option>
                    <option value="01:00 PM">01:00 PM — Afternoon Inspection</option>
                    <option value="04:00 PM">04:00 PM — Late Afternoon</option>
                  </select>
                </div>

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] uppercase font-mono-data text-[#5E6A7B]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E5E2DC] text-[#121824] focus:outline-none focus:border-[#0B3B2B]"
                    required
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] uppercase font-mono-data text-[#5E6A7B]">
                    Phone Number (WhatsApp Preferred) *
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E5E2DC] text-[#121824] focus:outline-none focus:border-[#0B3B2B]"
                    required
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] uppercase font-mono-data text-[#5E6A7B]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E5E2DC] text-[#121824] focus:outline-none focus:border-[#0B3B2B]"
                    required
                  />
                </div>

              </div>

              {/* Special Requests / Notes */}
              <div className="space-y-1.5">
                <label className="block text-[10px] uppercase font-mono-data text-[#5E6A7B]">
                  Special Requirements / Inspection Notes (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="E.g. I am a Diaspora buyer requesting a live WhatsApp video walk-through..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#E5E2DC] text-[#121824] focus:outline-none focus:border-[#0B3B2B]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="btn-primary flex-1 py-3"
                >
                  Submit Inspection Booking
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
