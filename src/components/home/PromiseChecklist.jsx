import React from 'react';

export default function PromiseChecklist() {
  const promises = [
    { num: "01", title: "Verified Title Documentation", desc: "Every plot is thoroughly surveyed and verified with government land registries before offer." },
    { num: "02", title: "Transparent Cost Structure", desc: "Complete clarity on land cost, survey fees, and documentation with zero hidden charges." },
    { num: "03", title: "Flexible Installment Plans", desc: "Acquire property comfortably with structured zero-interest or 12-month payment options." },
    { num: "04", title: "Dedicated Advisory", desc: "Expert real estate specialists guiding you from inquiry to physical plot pegging." },
    { num: "05", title: "Strategic Growth Corridors", desc: "Estates situated in rapid appreciation zones including Epe, Ibeju-Lekki, and Alaro City." },
    { num: "06", title: "Guaranteed Physical Pegging", desc: "Instant plot allocation, perimeter security, and legal Deed of Assignment upon completion." },
  ];

  return (
    <section className="py-28 bg-[#FAF9F5] border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block font-semibold">
              OUR PROMISE & ETHOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#121824] tracking-tight">
              Built on Institutional Certainty
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[#5E6A7B] text-sm sm:text-base leading-relaxed font-sans-body">
              Property acquisition should be grounded in legal security. Every parcel in our portfolio is backed by thorough land title verification and disciplined execution.
            </p>
          </div>
        </div>

        {/* Clean Architectural 3-Column Text Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 pt-4">
          {promises.map((p, idx) => (
            <div key={idx} className="space-y-3 border-t border-[#E5E2DC] pt-8">
              <span className="text-xs font-mono-data text-[#D96B27] block font-semibold">{p.num}</span>
              <h3 className="text-xl font-serif-display font-medium text-[#121824]">
                {p.title}
              </h3>
              <p className="text-xs text-[#5E6A7B] leading-relaxed font-sans-body">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
