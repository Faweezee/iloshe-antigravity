import React from 'react';

export default function TrustMetrics() {
  const metrics = [
    { value: "₦10B+", label: "Land Equity Secured", subtext: "Across Lagos growth corridors" },
    { value: "100%", label: "Verified Titles", subtext: "C of O, Gazette & Governor's Consent" },
    { value: "1,500+", label: "Plot Allocations", subtext: "Landowners physically allocated" },
    { value: "15+", label: "Estate Communities", subtext: "Developed & active projects" },
  ];

  return (
    <section className="bg-[#FAF9F5] border-t border-b border-[#E5E2DC] py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((m, idx) => (
            <div 
              key={idx} 
              className={`space-y-1.5 ${
                idx !== 0 ? 'lg:border-l lg:border-[#E5E2DC] lg:pl-10' : ''
              }`}
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium text-[#121824] block tracking-tight">
                {m.value}
              </span>
              <span className="text-xs font-mono-data uppercase tracking-wider text-[#D96B27] block font-semibold">
                {m.label}
              </span>
              <span className="text-[11px] text-[#5E6A7B] font-sans-body block">
                {m.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
