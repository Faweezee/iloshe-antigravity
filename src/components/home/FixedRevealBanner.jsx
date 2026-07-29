import React from 'react';
import { ASSETS } from '../../data/assetsManifest';

export default function FixedRevealBanner() {
  return (
    <div className="relative z-0 overflow-hidden border-t border-b border-[#E5E2DC]">
      
      {/* 
        Fixed Background Window:
        `bg-fixed bg-cover bg-center` locks the image in place relative to the viewport.
        As the user scrolls, the page content above and below slides over this fixed window.
      */}
      <div 
        className="w-full h-[460px] sm:h-[540px] lg:h-[600px] bg-fixed bg-cover bg-center relative flex items-end"
        style={{ backgroundImage: `url(${ASSETS.brand.heroBg})` }}
      >
        {/* Subtle Dark Gradient Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/80 via-[#111318]/20 to-transparent pointer-events-none" />

        {/* Minimalist Editorial Technical Overlay Tag */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 text-[#FAF9F5]">
          <div className="space-y-1">
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block">
              Architectural Portfolio Feature
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-display font-medium text-white">
              Iloshe Imperial Haven — Ketu-Epe Corridor
            </h3>
          </div>

          <div className="text-xs font-mono-data text-slate-300 space-y-0.5 sm:text-right">
            <span className="block text-[#D96B27]">VERIFIED CERTIFICATE OF OCCUPANCY</span>
            <span className="block text-[11px] text-slate-400">INSTANT PHYSICAL ALLOCATION READY</span>
          </div>
        </div>
      </div>

    </div>
  );
}
