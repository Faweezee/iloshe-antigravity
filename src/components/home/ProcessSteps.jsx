import React from 'react';

export default function ProcessSteps({ onNavigateToInspection }) {
  const steps = [
    { num: "01", title: "Step One: Choose Your Estate", desc: "Select a verified property that matches your long-term wealth goals and preferred location corridor." },
    { num: "02", title: "Step Two: Schedule Inspection", desc: "Book a guided physical site visit or remote video walkthrough with our dedicated land coordinators." },
    { num: "03", title: "Step Three: Complete Documentation", desc: "Choose flexible installment options and complete transparent legal title verification." },
    { num: "04", title: "Step Four: Become a Landowner", desc: "Receive physical plot pegging, registered survey plan, Deed of Assignment, and instant allocation." },
  ];

  return (
    <section className="py-24 bg-[#0B3B2B] text-[#FAF9F5] border-b border-[#1E4D3E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header matching website-brief.md */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block font-semibold">
            ACQUISITION JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#FAF9F5] tracking-tight">
            Investment Made Simple
          </h2>
          <p className="text-[#D2E3DB] text-sm font-sans-body leading-relaxed">
            Owning genuine property should be simple, secure, and rewarding. Follow four transparent steps from selection to allocation.
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
            onClick={() => onNavigateToInspection()}
            className="btn-orange"
          >
            Book a Site Inspection
          </button>
        </div>

      </div>
    </section>
  );
}
