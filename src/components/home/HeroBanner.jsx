import React from 'react';
import { ASSETS } from '../../data/assetsManifest';

export default function HeroBanner({ setActivePage, onOpenInspection }) {
  return (
    <section className="bg-[#FAF9F5] text-[#121824] pt-16 pb-24 border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 space-y-8">
            <span className="text-xs font-mono-data uppercase tracking-widest text-[#D96B27] block">
              Iloshe Properties & Investment Limited
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-medium leading-[1.12] text-[#121824]">
              Build Wealth Through Genuine Real Estate
            </h1>

            <p className="text-[#5E6A7B] text-base sm:text-lg leading-relaxed font-sans-body max-w-xl">
              We help individuals, families, and institutional investors acquire verified land and residential properties across Nigeria with absolute legal transparency and structured payment plans.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => {
                  setActivePage('estates');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                <span>Explore Our Estates</span>
              </button>

              <button
                onClick={() => onOpenInspection()}
                className="btn-secondary"
              >
                <span>Book Site Inspection</span>
              </button>
            </div>

            {/* Minimal Credentials */}
            <div className="pt-8 border-t border-[#E5E2DC] grid grid-cols-3 gap-6 text-xs text-[#5E6A7B] font-sans-body">
              <div>
                <span className="block font-serif-display text-xl text-[#0B3B2B]">100%</span>
                <span>Verified Titles</span>
              </div>
              <div>
                <span className="block font-serif-display text-xl text-[#D96B27]">₦10B+</span>
                <span>Land Value Secured</span>
              </div>
              <div>
                <span className="block font-serif-display text-xl text-[#0B3B2B]">1,500+</span>
                <span>Landowners Allocated</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Architectural Photography */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden border border-[#E5E2DC]">
              <img 
                src={ASSETS.brand.heroBg} 
                alt="Iloshe Property Development" 
                className="w-full h-[420px] sm:h-[480px] object-cover filter contrast-[1.02]"
              />
              <div className="mt-3 flex justify-between text-xs text-[#5E6A7B] font-mono-data px-1">
                <span>Featured Property: Imperial Haven</span>
                <span className="text-[#D96B27]">Ketu-Epe Expressway, Lagos</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
