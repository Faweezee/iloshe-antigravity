import React from 'react';

export default function ProcessSteps({ onOpenInspection }) {
  const steps = [
    { num: "01", title: "Select Estate", desc: "Choose a verified property that matches your investment criteria and location preference." },
    { num: "02", title: "Schedule Inspection", desc: "Book a guided site visit or request a video walkthrough with our land coordinators." },
    { num: "03", title: "Legal Documentation", desc: "Select flexible payment terms and complete legal documentation." },
    { num: "04", title: "Physical Allocation", desc: "Receive physical plot pegging, survey plan, and registered Deed of Assignment." },
  ];

  return (
    <section className="py-24 bg-[#0B3B2B] text-[#FAF9F5] border-b border-[#1E4D3E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block">
            03 — ACQUISITION JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#FAF9F5] tracking-tight">
            Property Ownership in Four Steps
          </h2>
          <p className="text-[#D2E3DB] text-sm font-sans-body leading-relaxed">
            We have streamlined the acquisition process to ensure legal security from initial inquiry to final pegging.
          </p>
        </div>

        {/* Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-[#1E4D3E] pt-10">
          {steps.map((s, idx) => (
            <div key={idx} className="space-y-3">
              <span className="text-2xl font-serif-display text-[#D96B27] block">
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
            Schedule Site Inspection
          </button>
        </div>

      </div>
    </section>
  );
}
