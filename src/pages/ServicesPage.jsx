import React from 'react';

export default function ServicesPage({ onOpenInspection }) {
  const services = [
    { num: "01", title: "Verified Land Sales", desc: "Outright purchase and flexible installment land sales across prime residential and commercial corridors in Lagos." },
    { num: "02", title: "Property Investment Advisory", desc: "Expert market guidance on high-appreciation corridors like Epe Expressway and Alaro City for maximum ROI." },
    { num: "03", title: "Property Documentation Support", desc: "Comprehensive legal assistance with title verification, Governor's Consent, C of O processing, and survey filings." },
    { num: "04", title: "Site Inspection Coordination", desc: "Free guided physical site visits and remote video walkthroughs for local and diaspora investors." },
    { num: "05", title: "Real Estate Consultancy", desc: "Personalized consultations to align property acquisitions with your family wealth and portfolio goals." },
    { num: "06", title: "Property Acquisition & Pegging", desc: "End-to-end support handling land search due diligence, perimeter fencing, and physical plot allocation." },
  ];

  return (
    <div className="py-20 bg-[#FAF9F5] text-[#121824]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
        
        {/* Main Content Layout with Tall Vertical Photo Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Main Advisory Area (7 Columns) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block">
                01 — CORE ADVISORY & SERVICES
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif-display font-medium leading-[1.12] text-[#121824] tracking-tight">
                Helping You Make Smarter Property Decisions
              </h1>
              <p className="text-[#5E6A7B] text-base sm:text-lg leading-relaxed font-sans-body">
                From initial inquiry through legal title verification to physical plot pegging, our expert team provides full-spectrum real estate advisory.
              </p>
            </div>

            {/* Services Grid (2 Columns inside left area) */}
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

          {/* Right Vertical Photography Sidebar (5 Columns, Tall & Wide) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="border border-[#E5E2DC] bg-[#111318] overflow-hidden group">
              <div className="relative h-[520px] lg:h-[580px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80" 
                  alt="Two business partners shaking hands on a real estate investment transaction" 
                  className="w-full h-full object-cover filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-[#D96B27] text-white text-[10px] font-mono-data uppercase tracking-widest px-2.5 py-1">
                  1-ON-1 CONSULTATION
                </div>
              </div>
              <div className="p-4 bg-white text-xs font-mono-data text-[#5E6A7B] border-t border-[#E5E2DC] flex justify-between items-center">
                <span>CLIENT ADVISORY & EXECUTION</span>
                <span className="text-[#0B3B2B] font-semibold">VERIFIED DEALS</span>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Photography Strip (2 Asymmetric Service Frames) */}
        <div className="border-t border-b border-[#E5E2DC] py-16 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block">02 — IN-FIELD EXECUTION</span>
            <h2 className="text-3xl font-serif-display font-medium text-[#121824]">Hands-On Property Verification</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frame 1: Legal Document Verification */}
            <div className="border border-[#E5E2DC] bg-[#111318] overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80" 
                  alt="Legal Document Charting & Land Title Search" 
                  className="w-full h-full object-cover filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#111318]/90 text-white text-[10px] font-mono-data uppercase tracking-widest px-2.5 py-1">
                  TITLE CHARTING
                </div>
              </div>
              <div className="p-3.5 bg-white text-xs font-mono-data text-[#5E6A7B] border-t border-[#E5E2DC] flex justify-between items-center">
                <span>LAGOS SURVEYOR GENERAL SEARCH</span>
                <span className="text-[#D96B27]">100% C OF O / GAZETTE</span>
              </div>
            </div>

            {/* Frame 2: Physical Plot Pegging */}
            <div className="border border-[#E5E2DC] bg-[#111318] overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" 
                  alt="On-Site Land Survey Pegging & Boundary Inspection" 
                  className="w-full h-full object-cover filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0B3B2B] text-white text-[10px] font-mono-data uppercase tracking-widest px-2.5 py-1">
                  PHYSICAL PEGGING
                </div>
              </div>
              <div className="p-3.5 bg-white text-xs font-mono-data text-[#5E6A7B] border-t border-[#E5E2DC] flex justify-between items-center">
                <span>ON-SITE BOUNDARY DEMARCATION</span>
                <span className="text-[#0B3B2B] font-semibold">INSTANT ALLOCATION</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Callout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block mb-1">
              03 — GET STARTED
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
