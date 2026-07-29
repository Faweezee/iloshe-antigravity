import React from 'react';

export default function ServicesPage({ onOpenInspection }) {
  const services = [
    { title: "Verified Land Sales", desc: "Outright purchase and flexible installment land sales across prime residential and commercial corridors in Lagos." },
    { title: "Property Investment Advisory", desc: "Expert market guidance on high-appreciation corridors like Epe Expressway and Alaro City for maximum ROI." },
    { title: "Property Documentation Support", desc: "Comprehensive legal assistance with title verification, Governor's Consent, C of O processing, and survey filings." },
    { title: "Site Inspection Coordination", desc: "Free guided physical site visits and remote video walkthroughs for local and diaspora investors." },
    { title: "Real Estate Consultancy", desc: "Personalized consultations to align property acquisitions with your family wealth and portfolio goals." },
    { title: "Property Acquisition & Pegging", desc: "End-to-end support handling land search due diligence, perimeter fencing, and physical plot allocation." },
  ];

  return (
    <div className="py-20 bg-[#FAF9F5] text-[#121824]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header & Photo Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono-data uppercase tracking-widest text-[#D96B27] block">
              Core Advisory & Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif-display font-medium leading-[1.12] text-[#121824]">
              Helping You Make Smarter Property Decisions
            </h1>
            <p className="text-[#5E6A7B] text-base sm:text-lg leading-relaxed font-sans-body">
              From initial inquiry through legal due diligence to physical plot pegging, our expert team provides full-spectrum advisory.
            </p>
          </div>

          <div className="lg:col-span-5 border border-[#E5E2DC] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80" 
              alt="Iloshe Properties Senior Real Estate Consultant Advisory Session" 
              className="w-full h-80 object-cover filter contrast-[1.02]"
            />
            <div className="p-3 bg-white text-[11px] text-[#5E6A7B] font-mono-data border-t border-[#E5E2DC] flex justify-between">
              <span>Personalized Investment Advisory</span>
              <span className="text-[#D96B27]">1-on-1 Consultation</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 border-t border-[#E5E2DC] pt-12">
          {services.map((s, idx) => (
            <div key={idx} className="space-y-3">
              <span className="text-xs font-mono-data text-[#D96B27] block">0{idx + 1}</span>
              <h3 className="text-xl font-serif-display font-medium text-[#121824]">{s.title}</h3>
              <p className="text-xs text-[#5E6A7B] leading-relaxed font-sans-body">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Callout */}
        <div className="mt-20 border-t border-[#E5E2DC] pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="text-xs font-mono-data uppercase tracking-widest text-[#D96B27] block mb-1">
              Consultation
            </span>
            <h3 className="text-2xl font-serif-display font-medium text-[#121824]">
              Have questions about land acquisition in Lagos?
            </h3>
          </div>
          <button
            onClick={() => onOpenInspection()}
            className="btn-primary whitespace-nowrap"
          >
            Book Free Consultation
          </button>
        </div>

      </div>
    </div>
  );
}
