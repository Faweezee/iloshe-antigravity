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
        
        {/* Main Content Layout with Vertical Photo Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Main Advisory Area (7 Columns) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-mono-data uppercase tracking-widest text-[#D96B27] block">
                Core Advisory & Services
              </span>
              <h1 className="text-4xl sm:text-5xl font-serif-display font-medium leading-[1.12] text-[#121824]">
                Helping You Make Smarter Property Decisions
              </h1>
              <p className="text-[#5E6A7B] text-base sm:text-lg leading-relaxed font-sans-body">
                From initial inquiry through legal due diligence to physical plot pegging, our expert team provides full-spectrum real estate advisory.
              </p>
            </div>

            {/* Services Grid (2 Columns inside left area) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[#E5E2DC] pt-10">
              {services.map((s, idx) => (
                <div key={idx} className="space-y-2 border-t border-[#E5E2DC] pt-4">
                  <span className="text-xs font-mono-data text-[#D96B27] block">0{idx + 1}</span>
                  <h3 className="text-lg font-serif-display font-medium text-[#121824]">{s.title}</h3>
                  <p className="text-xs text-[#5E6A7B] leading-relaxed font-sans-body">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Vertical Photography Sidebar (5 Columns, Tall & Wide) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="border border-[#E5E2DC] bg-white overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80" 
                alt="Two business partners shaking hands on a real estate investment transaction" 
                className="w-full h-[520px] lg:h-[580px] object-cover filter contrast-[1.02]"
              />
              <div className="p-4 bg-white text-xs font-sans-body border-t border-[#E5E2DC] space-y-1">
                <span className="font-serif-display text-sm font-medium text-[#121824] block">Trusted Real Estate Partnership</span>
                <span className="text-[#5E6A7B] text-[11px] block">1-on-1 Consultation & Deal Execution</span>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Callout */}
        <div className="border-t border-[#E5E2DC] pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
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
