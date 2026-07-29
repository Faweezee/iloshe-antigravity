import React from 'react';

export default function PromiseChecklist() {
  const promises = [
    { title: "Verified Title Documentation", desc: "Every plot is thoroughly surveyed and verified with government land registries before offer." },
    { title: "Transparent Cost Structure", desc: "Complete clarity on land cost, survey fees, and documentation with zero hidden charges." },
    { title: "Flexible Installment Plans", desc: "Acquire property comfortably with structured zero-interest or 12-month payment options." },
    { title: "Dedicated Advisory", desc: "Expert real estate specialists guiding you from inquiry to physical plot pegging." },
    { title: "Strategic Growth Corridors", desc: "Estates situated in rapid appreciation zones including Epe, Ibeju-Lekki, and Alaro City." },
    { title: "Guaranteed Physical Pegging", desc: "Instant plot allocation, perimeter security, and legal Deed of Assignment upon completion." },
  ];

  return (
    <section className="py-24 bg-[#FAF9F5] border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-xs font-mono-data uppercase tracking-widest text-[#D96B27] block">
            Why Choose Iloshe
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#121824]">
            Our Commitment to Every Buyer
          </h2>
          <p className="text-[#5E6A7B] text-base font-sans-body leading-relaxed">
            Property acquisition should be built on certainty. Every plot in our portfolio is backed by legal transparency and professional execution.
          </p>
        </div>

        {/* Clean Un-Carded Text Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 pt-4">
          {promises.map((p, idx) => (
            <div key={idx} className="space-y-3 border-t border-[#E5E2DC] pt-6">
              <span className="text-xs font-mono-data text-[#D96B27] block">0{idx + 1}</span>
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
