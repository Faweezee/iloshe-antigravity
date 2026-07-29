import React from 'react';

export default function AboutPage({ setActivePage, onOpenInspection }) {
  const values = [
    { title: "Integrity", desc: "Absolute honesty and truthfulness in every property representation, contract, and price quote." },
    { title: "Transparency", desc: "Zero hidden charges or fine prints. Complete clarity on legal documentation and survey fees." },
    { title: "Professionalism", desc: "Expert guidance from certified real estate consultants throughout your property acquisition journey." },
    { title: "Innovation", desc: "Modern digital property solutions, remote diaspora purchasing, and streamlined allocation pegging." },
    { title: "Customer Focus", desc: "Your long-term financial security and peace of mind are at the heart of everything we build." },
    { title: "Excellence", desc: "Consistently delivering high-value, verified estates in Lagos' prime growth corridors." },
  ];

  return (
    <div className="py-20 bg-[#FAF9F5] text-[#121824]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Editorial Title Banner & Executive Team Photography Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono-data uppercase tracking-widest text-[#D96B27] block">
              About Iloshe Properties & Investment Ltd
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-medium leading-[1.12] text-[#121824]">
              Every Great Investment Begins With Trust
            </h1>
            <p className="text-[#5E6A7B] text-base sm:text-lg leading-relaxed font-sans-body">
              Iloshe Properties & Investment Limited was founded to make genuine property ownership accessible, transparent, and highly rewarding for smart investors worldwide.
            </p>
          </div>
          
          <div className="lg:col-span-5 border border-[#E5E2DC] overflow-hidden bg-white shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
              alt="Iloshe Properties Executive Leadership Team & Property Advisors" 
              className="w-full h-80 object-cover filter contrast-[1.02]"
            />
            <div className="p-3 bg-white text-[11px] text-[#5E6A7B] font-mono-data border-t border-[#E5E2DC] flex justify-between">
              <span>Executive Leadership & Advisory Team</span>
              <span className="text-[#D96B27]">Certified Experts</span>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-16 border-t border-b border-[#E5E2DC] items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-[#121824]">
              Our Foundation & Philosophy
            </h2>
            <p className="text-[#5E6A7B] text-sm sm:text-base leading-relaxed font-sans-body">
              We understand that acquiring land is far more than a financial transaction. It's about securing your family's future, creating generational wealth, and leaving a lasting legacy.
            </p>
            <p className="text-[#5E6A7B] text-sm sm:text-base leading-relaxed font-sans-body">
              That's why we combine deep industry expertise with legal integrity, ensuring every client receives guidance they can trust from initial inquiry to final plot pegging.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenInspection()}
                className="btn-primary"
              >
                Schedule Site Inspection
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2 border-l-2 border-[#0B3B2B] pl-6 py-1">
              <span className="text-xs font-mono-data uppercase tracking-widest text-[#D96B27] block">Our Vision</span>
              <p className="text-base sm:text-lg font-serif-display text-[#121824] leading-snug">
                To become Nigeria's most trusted real estate investment company by helping people build wealth through genuine property ownership.
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-[#D96B27] pl-6 py-1">
              <span className="text-xs font-mono-data uppercase tracking-widest text-[#D96B27] block">Our Mission</span>
              <p className="text-base sm:text-lg font-serif-display text-[#121824] leading-snug">
                To deliver secure, transparent, and rewarding real estate solutions while creating lasting value for our clients and stakeholders.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="py-20">
          <div className="max-w-2xl mb-14 space-y-2">
            <span className="text-xs font-mono-data uppercase tracking-widest text-[#D96B27] block">Principles</span>
            <h2 className="text-3xl font-serif-display font-medium text-[#121824]">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((v, idx) => (
              <div key={idx} className="space-y-3 border-t border-[#E5E2DC] pt-6">
                <span className="text-xs font-mono-data text-[#D96B27] block">0{idx + 1}</span>
                <h3 className="text-lg font-serif-display font-medium text-[#121824]">{v.title}</h3>
                <p className="text-xs text-[#5E6A7B] leading-relaxed font-sans-body">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
