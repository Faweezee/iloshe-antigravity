import React from 'react';
import { ESTATES_DATA } from '../../data/estatesData';
import { ArrowRight } from 'lucide-react';

export default function FeaturedEstates({ setActivePage, onNavigateToInspection, onSelectEstate }) {
  const featuredEstates = ESTATES_DATA.filter(est => est.featured !== false);

  return (
    <section className="py-28 bg-[#FAF9F5] border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-2">
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block font-semibold">
              CURATED REAL ESTATE PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#121824] tracking-tight">
              Featured Property Allocations
            </h2>
          </div>
          <button
            onClick={() => {
              setActivePage('estates');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-mono-data uppercase tracking-wider text-[#121824] hover:text-[#D96B27] group transition-colors"
          >
            <span>View Complete Directory</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D96B27] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Clean Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {featuredEstates.map((est) => (
            <div 
              key={est.id} 
              className="bg-white border border-[#E5E2DC] flex flex-col group transition-all duration-300 hover:border-[#121824] cursor-pointer"
              onClick={() => onSelectEstate && onSelectEstate(est)}
            >
              {/* Photo Frame */}
              <div className="relative h-60 overflow-hidden bg-[#111318]">
                <img 
                  src={est.image} 
                  alt={`${est.name} in ${est.location}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-[#D96B27] text-white text-[10px] font-mono-data uppercase tracking-widest px-2.5 py-0.5 font-semibold">
                  {est.category}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex justify-between items-baseline gap-2 mb-1">
                    <h3 className="text-lg font-serif-display font-medium text-[#121824] group-hover:text-[#0B3B2B] transition-colors">
                      {est.name}
                    </h3>
                    <span className="text-base font-serif-display font-semibold text-[#121824] whitespace-nowrap">
                      {est.price}
                    </span>
                  </div>
                  <span className="text-xs text-[#5E6A7B] font-sans-body block">
                    {est.location}
                  </span>
                </div>

                {/* Typography Metadata Grid */}
                <div className="border-t border-b border-[#E5E2DC] py-3 grid grid-cols-2 gap-3 text-xs font-sans-body">
                  <div>
                    <span className="text-[10px] text-[#5E6A7B] uppercase block font-mono-data">Legal Title</span>
                    <span className="font-medium text-[#121824]">{est.title}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#5E6A7B] uppercase block font-mono-data">Plot Size</span>
                    <span className="font-medium text-[#121824]">{est.plotSize}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-1" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => onNavigateToInspection(est.name)}
                    className="btn-primary flex-1 text-center"
                  >
                    Book Inspection
                  </button>
                  <button
                    onClick={() => onSelectEstate && onSelectEstate(est)}
                    className="btn-secondary"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
