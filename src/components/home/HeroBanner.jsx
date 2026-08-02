import React from 'react';
import { ASSETS } from '../../data/assetsManifest';

export default function HeroBanner({ setActivePage }) {
  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] flex items-center overflow-hidden border-b border-[#E5E2DC] z-10 bg-[#111318] text-[#FAF9F5]">
      
      {/* Full-Bleed High-Res Architectural Background Photo */}
      <div className="absolute inset-0 z-0">
        <img 
          src={ASSETS.hero.bannerBg} 
          alt="Verified Real Estate Development in Lagos Nigeria" 
          className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.08]"
        />
        
        {/* Full-Bleed Rich Dark Architectural Translucent Layer covering entire perimeter */}
        <div className="absolute inset-0 bg-[#111318]/75 backdrop-blur-[4px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 sm:py-28 w-full">
        <div className="max-w-4xl space-y-8">
          
          {/* Section Tag — Orange border tick removed as requested */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono-data uppercase tracking-[0.2em] text-[#D96B27] block font-semibold">
              01 — ILOSHE PROPERTIES & INVESTMENT LIMITED
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-medium leading-[1.12] text-white tracking-tight">
              Build Wealth Through Genuine Real Estate
            </h1>
          </div>

          <p className="text-slate-200/90 text-base sm:text-lg leading-relaxed font-sans-body max-w-2xl">
            We guide individuals, families, and institutional investors to acquire verified land in Lagos' highest appreciation corridors with 100% legal transparency and structured payment options.
          </p>

          {/* Action Buttons with High Contrast Visibility */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => {
                setActivePage('estates');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-orange text-xs py-3.5 px-7 shadow-md"
            >
              Explore Available Estates
            </button>

            <button
              onClick={() => {
                setActivePage('inspection');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-primary text-xs py-3.5 px-7 shadow-md"
            >
              Book Site Inspection
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
