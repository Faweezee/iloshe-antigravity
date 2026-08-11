import React from 'react';

export default function FixedRevealBanner() {
  const displayImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80";

  return (
    <div className="relative z-0 overflow-hidden border-t border-b border-[#E5E2DC] bg-[#111318]">
      
      {/* 
        Fixed Parallax Background Reveal Window:
        `bg-fixed` keeps the image fixed in the background as you scroll.
        `bg-cover` & `bg-center` ensures crisp HD architectural framing.
      */}
      <div 
        className="w-full h-[420px] sm:h-[540px] lg:h-[620px] bg-fixed bg-cover bg-center relative flex items-end"
        style={{ backgroundImage: `url(${displayImage})` }}
      >
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/90 via-[#111318]/40 to-transparent pointer-events-none" />

        {/* Technical Editorial Caption Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 text-[#FAF9F5]">
          <div className="space-y-1">
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block font-semibold">
              FEATURED ESTATE PARCEL
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-display font-medium text-white">
              Zenith Gardens — Magboro Growth Corridor
            </h3>
          </div>

          <div className="text-xs font-mono-data text-slate-300 space-y-0.5 sm:text-right">
            <span className="block text-[#D96B27]">VERIFIED REGISTERED SURVEY TITLE</span>
            <span className="block text-[11px] text-slate-400">100% DRY LAND • INSTANT PHYSICAL ALLOCATION</span>
          </div>
        </div>
      </div>

    </div>
  );
}
