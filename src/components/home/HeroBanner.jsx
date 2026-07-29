import React from 'react';

export default function HeroBanner({ setActivePage, onOpenInspection }) {
  return (
    <section className="bg-[#FAF9F5] text-[#121824] pt-20 sm:pt-28 pb-20 border-b border-[#E5E2DC] relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Asymmetric Editorial Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Main Editorial Headline (8 Columns) */}
          <div className="lg:col-span-8 space-y-6">
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block">
              01 — ILOSHE PROPERTIES & INVESTMENT LIMITED
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-medium leading-[1.1] text-[#121824] tracking-tight">
              Build Wealth Through Genuine Real Estate
            </h1>
          </div>

          {/* Editorial Subtext & Action Controls (4 Columns) */}
          <div className="lg:col-span-4 space-y-6 lg:pb-1">
            <p className="text-[#5E6A7B] text-sm sm:text-base leading-relaxed font-sans-body">
              We guide individuals, families, and institutional investors to acquire verified land in Lagos' highest appreciation corridors with 100% legal transparency.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => {
                  setActivePage('estates');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                <span>Explore Estates</span>
              </button>

              <button
                onClick={() => onOpenInspection()}
                className="btn-secondary"
              >
                <span>Book Inspection</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
