import React from 'react';
import { ASSETS } from '../data/assetsManifest';

export default function ServicesPage({ onNavigateToInspection, onOpenConsultation }) {
  const services = [
    { num: "01", title: "Verified Land Sales", desc: "Outright purchase and flexible installment land sales across prime residential and commercial corridors in Lagos." },
    { num: "02", title: "Property Investment Advisory", desc: "Expert market guidance on high-appreciation corridors like Epe Expressway and Alaro City for maximum ROI." },
    { num: "03", title: "Property Documentation Support", desc: "Comprehensive legal assistance with title verification, Governor's Consent, C of O processing, and survey filings." },
    { num: "04", title: "Site Inspection Coordination", desc: "Free guided physical site visits and remote video walkthroughs for local and diaspora investors." },
    { num: "05", title: "Real Estate Consultancy", desc: "Personalized consultations to align property acquisitions with your family wealth and portfolio goals." },
    { num: "06", title: "Property Acquisition & Pegging", desc: "End-to-end support handling land search due diligence, perimeter fencing, and physical plot allocation." },
  ];

  return (
    <div className="bg-[#FAF9F5] text-[#121824]">
      
      {/* 1. Full-Bleed Autoplay Video Landing Hero */}
      <section className="relative w-full h-[520px] sm:h-[600px] lg:h-[660px] overflow-hidden bg-[#111318] flex items-center">
        
        {/* Background Video Element with Fallback Poster Image */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster={ASSETS.hero.inspectionVideo.poster}
          className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05] brightness-90 pointer-events-none"
        >
          <source src={ASSETS.hero.inspectionVideo.src} type="video/mp4" />
        </video>

        {/* Translucent Dark Architectural Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111318]/90 via-[#111318]/65 to-[#111318]/40 pointer-events-none" />

        {/* Transparent Foreground Text Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-[#FAF9F5] space-y-6">
          <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block font-semibold">
            IN-FIELD SITE INSPECTION & ADVISORY
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-medium leading-[1.12] text-white tracking-tight max-w-3xl">
            Helping You Make Smarter Property Decisions
          </h1>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-sans-body max-w-2xl">
            Watch our land coordinators conduct physical site inspections, boundary pegging, and state land registry verification in real time.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigateToInspection()}
              className="btn-orange text-xs py-3.5 px-7 shadow-md"
            >
              Book Physical Site Visit
            </button>
            <button
              onClick={() => onOpenConsultation()}
              className="btn-primary bg-[#0B3B2B] text-white border border-white/30 hover:bg-[#0F543F] text-xs py-3.5 px-7 shadow-md"
            >
              Request 1-on-1 Consultation
            </button>
          </div>
        </div>
      </section>

      {/* 2. Core Advisory Services Grid */}
      <div className="py-24 max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="advisory">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block font-semibold">
                CORE ADVISORY SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#121824]">
                Complete Property Acquisition Support
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[#E5E2DC] pt-10">
              {services.map((s, idx) => (
                <div key={idx} className="space-y-2 border-t border-[#E5E2DC] pt-4">
                  <span className="text-xs font-mono-data text-[#D96B27] block">{s.num}</span>
                  <h3 className="text-lg font-serif-display font-medium text-[#121824]">{s.title}</h3>
                  <p className="text-xs text-[#5E6A7B] leading-relaxed font-sans-body">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Photography Sidebar */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="border border-[#E5E2DC] bg-[#111318] overflow-hidden group">
              <div className="relative h-[520px] lg:h-[580px] overflow-hidden">
                <img 
                  src="../../assets/team/advisory.jpeg" 
                  alt="Two business partners shaking hands on a real estate investment transaction" 
                  className="w-full h-full object-cover filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-[#D96B27] text-white text-[10px] font-mono-data uppercase tracking-widest px-2.5 py-1">
                  1-ON-1 CONSULTATION
                </div>
              </div>
              <div className="p-4 bg-white text-xs font-mono-data text-[#5E6A7B] border-t border-[#E5E2DC] flex justify-between items-center">
                <span>CLIENT ADVISORY & CONSULTATION</span>
                <span className="text-[#0B3B2B] font-semibold">VERIFIED DEALS</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Callout */}
        <div className="border-t border-[#E5E2DC] pt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block font-semibold mb-1">
              GET STARTED
            </span>
            <h3 className="text-2xl font-serif-display font-medium text-[#121824]">
              Have questions about land acquisition in Lagos?
            </h3>
          </div>
          <button
            onClick={() => onOpenConsultation()}
            className="btn-primary whitespace-nowrap"
          >
            Request 1-on-1 Consultation
          </button>
        </div>

      </div>
    </div>
  );
}
