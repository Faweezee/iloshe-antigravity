import React, { useState } from 'react';
import { ASSETS } from '../data/assetsManifest';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent("Hello Iloshe Properties, I would like to make a property inquiry.");
    window.open(`https://wa.me/${ASSETS.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="py-20 bg-[#FAF9F5] text-[#121824]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header & Photo Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono-data uppercase tracking-widest text-[#D96B27] block">
              Direct Contact
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif-display font-medium leading-[1.12] text-[#121824]">
              Connect With Our Advisory Team
            </h1>
            <p className="text-[#5E6A7B] text-base sm:text-lg leading-relaxed font-sans-body">
              Whether you are acquiring your first land plot or expanding an institutional portfolio, our team is available to assist.
            </p>
          </div>

          <div className="lg:col-span-5 border border-[#E5E2DC] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" 
              alt="Iloshe Properties Corporate Office Headquarters Lagos" 
              className="w-full h-72 object-cover filter contrast-[1.02]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-[#E5E2DC] pt-12">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8 font-sans-body">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono-data text-[#D96B27] block">Headquarters</span>
              <p className="text-sm text-[#121824] leading-relaxed">{ASSETS.contact.address}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono-data text-[#D96B27] block">Telephone</span>
              <div className="text-sm text-[#121824] font-mono-data space-y-1">
                {ASSETS.contact.phones.map((p, i) => (
                  <a key={i} href={`tel:${p}`} className="block hover:text-[#0B3B2B] transition-colors">{p}</a>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono-data text-[#D96B27] block">Email</span>
              <a href={`mailto:${ASSETS.contact.email}`} className="text-sm text-[#121824] font-mono-data block hover:text-[#0B3B2B] transition-colors">
                {ASSETS.contact.email}
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono-data text-[#D96B27] block">Hours</span>
              <p className="text-sm text-[#121824]">{ASSETS.contact.hours}</p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleWhatsAppChat}
                className="btn-secondary w-full"
              >
                WhatsApp Direct Message
              </button>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7 font-sans-body">
            {submitted ? (
              <div className="py-12 space-y-4">
                <h3 className="text-2xl font-serif-display font-medium text-[#121824]">Message Received</h3>
                <p className="text-xs text-[#5E6A7B] leading-relaxed">
                  Thank you for reaching out to Iloshe Properties. Our advisory team will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                <div>
                  <label className="block text-[10px] uppercase font-mono-data text-[#5E6A7B] mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Chief Adeleke Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-[#E5E2DC] text-[#121824] focus:outline-none focus:border-[#121824]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-mono-data text-[#5E6A7B] mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="08012345678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#FAF9F5] border border-[#E5E2DC] text-[#121824] focus:outline-none focus:border-[#121824]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-mono-data text-[#5E6A7B] mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="investor@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#FAF9F5] border border-[#E5E2DC] text-[#121824] focus:outline-none focus:border-[#121824]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono-data text-[#5E6A7B] mb-1">Inquiry / Message</label>
                  <textarea
                    rows={4}
                    placeholder="Specify property type, preferred area, or budget..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#FAF9F5] border border-[#E5E2DC] text-[#121824] focus:outline-none focus:border-[#121824]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
