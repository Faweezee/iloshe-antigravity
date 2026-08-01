import React from 'react';
import { ASSETS } from '../../data/assetsManifest';

export default function HeroBanner({ setActivePage }) {
  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] flex items-center overflow-hidden border-b border-[#E5E2DC] z-10">
      
      {/* Full-Bleed High-Res Architectural Background Photo */}
      <div className="absolute inset-0 z-0">
        <img 
          src={ASSETS.hero.bannerBg} 
          alt="Verified Real Estate Development in Lagos Nigeria" 
          className="w-full h-full object-cover filter contrast-[1.05]"
        />
        
        {/* Full-Bleed Light Cream/Alabaster Translucent Layer covering entire perimeter */}
        <div className="absolute inset-0 bg-[#FAF9F5]/85 backdrop-blur-[3px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 sm:py-28 w-full">
        <div className="max-w-4xl space-y-8">
          
          {/* Section Tag */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono-data uppercase tracking-[0.2em] text-[#5E6A7B] border-l-2 border-[#D96B27] pl-2.5 block font-semibold">
              01 — ILOSHE PROPERTIES & INVESTMENT LIMITED
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-medium leading-[1.12] text-[#121824] tracking-tight">
              Build Wealth Through Genuine Real Estate
            </h1>
          </div>

          <p className="text-[#5E6A7B] text-base sm:text-lg leading-relaxed font-sans-body max-w-2xl">
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
