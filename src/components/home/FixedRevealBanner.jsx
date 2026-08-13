import React from 'react';

export default function FixedRevealBanner() {
  const zenithGrassImage = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80";

  return (
    <div className="relative z-0 overflow-hidden border-t border-b border-[#E5E2DC] bg-[#111318]">
      
      {/* 
        Fixed Parallax Background Reveal Window:
        `bg-fixed` keeps the image fixed in the background as you scroll.
        `bg-cover` & `bg-center` displays the rich golden grass landscape of Zenith Gardens.
      */}
      <div 
        className="w-full h-[420px] sm:h-[540px] lg:h-[620px] bg-fixed bg-cover bg-center relative flex items-end"
        style={{ backgroundImage: `url(${zenithGrassImage})` }}
      >
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/90 via-[#111318]/40 to-transparent pointer-events-none" />

        {/* Technical Editorial Caption Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 text-[#FAF9F5]">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-display font-medium text-white tracking-tight">
              Zenith Gardens — Magboro Growth Corridor
            </h2>
          </div>

          <div className="text-xs font-mono-data text-slate-300 space-y-0.5 sm:text-right">
            <span className="block text-[#D96B27] font-semibold">REGISTERED SURVEY TITLE</span>
            <span className="block text-[11px] text-slate-300">100% DRY LAND • INSTANT PHYSICAL ALLOCATION</span>
          </div>
        </div>
      </div>

    </div>
  );
}
