import React from 'react';
import { ASSETS } from '../../data/assetsManifest';

export default function HeroBanner({ setActivePage, onOpenInspection }) {
  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] flex items-center overflow-hidden bg-[#111318] text-[#FAF9F5] border-b border-[#E5E2DC] z-10">
      
      {/* Full-Bleed High-Res Architectural Background Photo */}
      <div className="absolute inset-0 z-0">
        <img 
          src={ASSETS.hero.bannerBg} 
          alt={ASSETS.hero.bannerBgAlt || "Verified Real Estate Development in Lagos Nigeria"} 
          className="w-full h-full object-cover filter brightness-[0.65] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111318]/90 via-[#111318]/70 to-[#111318]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 sm:py-28 w-full">
        
        {/* Architectural Editorial Translucent Glassmorphic Container */}
        <div className="bg-[#111318]/70 backdrop-blur-md border border-white/15 p-8 sm:p-12 max-w-4xl shadow-2xl space-y-8">
          
          {/* Section Tag */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono-data uppercase tracking-[0.2em] text-[#D96B27] border-l-2 border-[#D96B27] pl-2.5 block font-semibold">
              ILOSHE PROPERTIES & INVESTMENT LIMITED
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-medium leading-[1.12] text-white tracking-tight">
              Build Wealth Through Genuine Real Estate
            </h1>
          </div>

          <p className="text-slate-200/90 text-sm sm:text-base sm:leading-relaxed font-sans-body max-w-2xl">
            We guide individuals, families, and institutional investors to acquire verified land in Lagos' highest appreciation corridors with 100% legal transparency and structured micro-payment options.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => {
                setActivePage('estates');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-orange text-xs py-3 px-6"
            >
              <span>Explore Available Estates</span>
            </button>

            <button
              onClick={() => {
                setActivePage('inspection');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-secondary text-white border-white/40 hover:bg-white/10 text-xs py-3 px-6"
            >
              <span>Book Site Inspection</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
