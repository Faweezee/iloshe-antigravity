import React, { useState, useEffect } from 'react';
import { ESTATES_DATA } from '../data/estatesData';
import { ASSETS } from '../data/assetsManifest';
import { MapPin, CheckCircle2, Calendar, MessageSquare, ArrowLeft, ShieldCheck, Layers, CreditCard, Clock } from 'lucide-react';

export default function EstateDetailPage({ estateId, estate: propEstate, onNavigateToInspection, setActivePage }) {
  // Find estate by prop or estateId
  const estate = propEstate || ESTATES_DATA.find(e => e.id === estateId) || ESTATES_DATA[0];
  const [activePhoto, setActivePhoto] = useState(estate?.image || '');

  useEffect(() => {
    if (estate) {
      setActivePhoto(estate.image);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [estate]);

  if (!estate) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Iloshe Properties, I am interested in ${estate.name} (${estate.location}). Please share complete pricing details and available inspection dates.`
    );
    window.open(`https://wa.me/${ASSETS.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="py-16 bg-[#FAF9F5] text-[#121824]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Back Navigation Link */}
        <div>
          <button
            onClick={() => {
              setActivePage('estates');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-mono-data uppercase tracking-wider text-[#5E6A7B] hover:text-[#0B3B2B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#D96B27]" />
            <span>Back to Property Directory</span>
          </button>
        </div>

        {/* Page Title & Main Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-[#E5E2DC] pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono-data">
              <span className="bg-[#0B3B2B] text-white px-2.5 py-0.5 uppercase tracking-widest text-[10px] font-semibold">
                {estate.category} Estate
              </span>
              <span className="bg-[#D96B27] text-white px-2.5 py-0.5 uppercase tracking-widest text-[10px] font-semibold">
                {estate.status}
              </span>
              <span className="text-[#0B3B2B] font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0B3B2B]" /> {estate.verificationBadge || '100% Charted & Verified'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif-display font-medium text-[#121824] tracking-tight">
              {estate.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#5E6A7B] font-sans-body flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#D96B27] shrink-0" /> {estate.location}
            </p>
          </div>

          {/* Pricing Box */}
          <div className="bg-white border border-[#E5E2DC] p-6 text-left lg:text-right min-w-[260px] shadow-sm">
            <span className="text-[10px] uppercase font-mono-data text-[#5E6A7B] block">Plot Selling Price</span>
            <span className="text-3xl font-serif-display font-semibold text-[#121824] block my-0.5">{estate.price}</span>
            <span className="text-xs font-mono-data text-[#D96B27] block">Initial Deposit: {estate.initialDeposit}</span>
          </div>
        </div>

        {/* High-Res Gallery Switcher Section */}
        <div className="space-y-4">
          <div className="relative h-[380px] sm:h-[480px] lg:h-[540px] overflow-hidden bg-[#111318] border border-[#E5E2DC] shadow-md">
            <img 
              src={activePhoto || estate.image} 
              alt={estate.name} 
              className="w-full h-full object-cover transition-all duration-300"
            />
            <div className="absolute bottom-4 right-4 bg-[#111318]/90 text-white text-xs font-serif-display font-semibold px-4 py-2 border border-white/20">
              {estate.name} — {estate.location}
            </div>
          </div>

          {/* Photo Thumbnails */}
          {estate.gallery && estate.gallery.length > 0 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {estate.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhoto(img)}
                  className={`w-28 h-20 shrink-0 overflow-hidden border-2 transition-all ${
                    activePhoto === img ? 'border-[#0B3B2B] opacity-100 scale-95' : 'border-[#E5E2DC] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Gallery snapshot ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Comprehensive Specifications Table & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
          
          {/* Left Column: Full Specifications & Description */}
          <div className="lg:col-span-8 space-y-10 font-sans-body">
            
            {/* Key Specs Matrix */}
            <div className="bg-white border border-[#E5E2DC] p-8 space-y-4 shadow-sm">
              <h3 className="text-xs font-mono-data text-[#D96B27] uppercase tracking-widest font-semibold border-b border-[#E5E2DC] pb-3">
                Property Specifications & Legal Parameters
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs pt-2">
                <div>
                  <span className="text-[10px] text-[#5E6A7B] uppercase block font-mono-data">Legal Title</span>
                  <span className="font-serif-display font-medium text-[#121824] text-base block mt-0.5">{estate.title}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#5E6A7B] uppercase block font-mono-data">Plot Size</span>
                  <span className="font-serif-display font-medium text-[#121824] text-base block mt-0.5">{estate.plotSize}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#5E6A7B] uppercase block font-mono-data">Initial Deposit</span>
                  <span className="font-mono-data font-semibold text-[#D96B27] text-base block mt-0.5">{estate.initialDeposit}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#5E6A7B] uppercase block font-mono-data">Payment Terms</span>
                  <span className="font-medium text-[#121824] block mt-0.5">{estate.paymentPlan}</span>
                </div>
              </div>
            </div>

            {/* Overview & Investment Potential */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif-display font-medium text-[#121824]">
                Property Overview & Investment Value
              </h3>
              <p className="text-xs sm:text-sm text-[#5E6A7B] leading-relaxed">
                {estate.overview}
              </p>
            </div>

            {/* Infrastructure & Amenities Checklist */}
            {estate.infrastructure && (
              <div className="space-y-4 bg-white border border-[#E5E2DC] p-8 shadow-sm">
                <h3 className="text-xl font-serif-display font-medium text-[#121824]">
                  Estate Infrastructure & Physical Allocation Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#5E6A7B]">
                  {estate.infrastructure.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 py-1">
                      <CheckCircle2 className="w-4 h-4 text-[#0B3B2B] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Sticky Action Box */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-white border border-[#E5E2DC] p-8 space-y-6 shadow-md">
              <div className="space-y-2 border-b border-[#E5E2DC] pb-4">
                <span className="text-[10px] font-mono-data text-[#D96B27] uppercase tracking-widest block font-semibold">
                  RESERVE YOUR PLOT
                </span>
                <h3 className="text-2xl font-serif-display font-medium text-[#121824]">
                  Schedule Inspection
                </h3>
                <p className="text-xs text-[#5E6A7B] leading-relaxed">
                  Book a physical site visit to inspect plot beacons or request a live video walkthrough with our land coordinators.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onNavigateToInspection(estate.name)}
                  className="btn-primary w-full text-center py-3.5 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" /> Book Inspection For This Estate
                </button>

                <button
                  onClick={handleWhatsAppInquiry}
                  className="btn-secondary w-full text-center py-3.5 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" /> Inquire via WhatsApp
                </button>
              </div>

              <div className="p-4 bg-[#FAF9F5] border border-[#E5E2DC] text-[11px] font-mono-data text-[#5E6A7B] space-y-1">
                <span className="text-[#0B3B2B] font-semibold block">INSTANT ALLOCATION GUARANTEE:</span>
                <p className="leading-relaxed">All coordinates are charted and ready for immediate physical pegging upon contract execution.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
