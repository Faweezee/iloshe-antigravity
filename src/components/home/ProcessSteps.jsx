import React from 'react';

export default function ProcessSteps({ onOpenInspection }) {
  const steps = [
    { num: "01", title: "Select Preferred Estate", desc: "Choose a verified residential or commercial land parcel that matches your investment budget and location goals." },
    { num: "02", title: "Schedule Site Visit", desc: "Book a guided physical site inspection or request an interactive live video walk-through with our coordinators." },
    { num: "03", title: "Legal Due Diligence", desc: "Review survey plans, verify title documentation with state land registries, and select flexible payment terms." },
    { num: "04", title: "Physical Plot Allocation", desc: "Receive immediate physical plot pegging, corner beacon installation, and registered Deed of Assignment." },
  ];

  return (
    <section className="py-24 bg-[#0B3B2B] text-[#FAF9F5] border-b border-[#1E4D3E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block font-semibold">
            INVESTMENT MADE SIMPLE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#FAF9F5] tracking-tight">
            4-Step Property Acquisition Journey
          </h2>
          <p className="text-[#D2E3DB] text-sm font-sans-body leading-relaxed">
            Acquiring land with Iloshe Properties is structured, transparent, and hassle-free from your first inquiry to physical plot allocation.
          </p>
        </div>

        {/* Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-[#1E4D3E] pt-10">
          {steps.map((s, idx) => (
            <div key={idx} className="space-y-3">
              <span className="text-2xl font-serif-display text-[#D96B27] block font-semibold">
                {s.num}
              </span>
              <h3 className="text-lg font-serif-display font-medium text-white">
                {s.title}
              </h3>
              <p className="text-xs text-[#D2E3DB]/80 leading-relaxed font-sans-body">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-16">
          <button
            onClick={() => onOpenInspection()}
            className="btn-orange"
          >
            Start Your Property Acquisition
          </button>
        </div>

      </div>
    </section>
  );
}
