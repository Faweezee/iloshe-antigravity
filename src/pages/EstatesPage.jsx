import React, { useState, useEffect } from 'react';
import { getCMSEstates } from '../utils/cmsLoader';
import { Search, X, MapPin } from 'lucide-react';

export default function EstatesPage({ onNavigateToInspection, onSelectEstate }) {
  const estatesData = getCMSEstates();

  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(70000000);
  const [searchQuery, setSearchQuery] = useState('');

  const regions = ['All', 'Magboro', 'Ibeju-Lekki'];
  const categories = ['All', 'Residential', 'Commercial'];

  // Listen to hash changes to filter by corridor if clicked from sub-nav
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes('magboro')) {
      setSelectedRegion('Magboro');
    } else if (hash.includes('ibeju-lekki')) {
      setSelectedRegion('Ibeju-Lekki');
    }
  }, []);

  const filteredEstates = estatesData.filter(est => {
    const regionMatch = selectedRegion === 'All' || est.region === selectedRegion;
    const categoryMatch = selectedCategory === 'All' || est.category === selectedCategory;
    const priceMatch = est.numericPrice <= maxPrice;
    const queryMatch = searchQuery === '' || 
      est.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      est.location.toLowerCase().includes(searchQuery.toLowerCase());
    return regionMatch && categoryMatch && priceMatch && queryMatch;
  });

  return (
    <div className="py-16 sm:py-20 bg-[#FAF9F5]" id="directory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Page Title Header */}
        <div className="max-w-2xl mb-12 sm:mb-14 space-y-3">
          <span className="text-xs font-mono-data uppercase tracking-widest text-[#D96B27] block font-semibold">
            Official Property Directory
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium text-[#121824] tracking-tight">
            Available Estates & Land Allocations
          </h1>
          <p className="text-[#5E6A7B] text-sm sm:text-base leading-relaxed font-sans-body">
            Explore our official portfolio of verified land plots and commercial parcels in Lagos and Ogun state growth corridors.
          </p>
        </div>

        {/* Clean Search & Filter Bar */}
        <div className="border-t border-b border-[#E5E2DC] py-6 sm:py-8 mb-12 sm:mb-16 space-y-6">
          
          {/* Row 1: Search Input & Price Slider */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <Search className="w-4 h-4 text-[#5E6A7B] absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search by estate name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 text-xs font-sans-body bg-white border border-[#E5E2DC] text-[#121824] focus:outline-none focus:border-[#0B3B2B]"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-[#5E6A7B] hover:text-[#121824]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Price Slider */}
            <div className="w-full lg:w-80 flex flex-col space-y-1.5">
              <div className="flex justify-between items-center text-xs font-sans-body">
                <span className="text-[10px] uppercase font-mono-data text-[#5E6A7B]">Maximum Budget</span>
                <span className="font-mono-data text-[#0B3B2B] font-semibold">₦{(maxPrice / 1000000).toFixed(1)} Million</span>
              </div>
              <input
                type="range"
                min="2000000"
                max="70000000"
                step="1000000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#0B3B2B] cursor-pointer"
              />
            </div>

          </div>

          {/* Row 2: Location Corridor & Category Filter Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-4 border-t border-[#E5E2DC]/60">
            
            {/* Location Corridor Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] uppercase font-mono-data text-[#5E6A7B] mr-2">Corridor:</span>
              {regions.map(r => (
                <button
                  key={r}
                  onClick={() => setSelectedRegion(r)}
                  className={`px-3.5 py-1.5 text-xs font-sans-body uppercase tracking-wider transition-colors ${
                    selectedRegion === r 
                      ? 'bg-[#0B3B2B] text-white font-medium' 
                      : 'bg-white text-[#5E6A7B] border border-[#E5E2DC] hover:text-[#121824]'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            {/* Category Type Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] uppercase font-mono-data text-[#5E6A7B] mr-2">Category:</span>
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-3.5 py-1.5 text-xs font-sans-body uppercase tracking-wider transition-colors ${
                    selectedCategory === c 
                      ? 'bg-[#D96B27] text-white font-medium' 
                      : 'bg-white text-[#5E6A7B] border border-[#E5E2DC] hover:text-[#121824]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

          </div>

          {/* Results Summary */}
          <div className="flex justify-between items-center text-xs font-mono-data text-[#5E6A7B] pt-2">
            <span>Showing {filteredEstates.length} {filteredEstates.length === 1 ? 'estate' : 'estates'}</span>
            {(selectedRegion !== 'All' || selectedCategory !== 'All' || searchQuery !== '' || maxPrice < 70000000) && (
              <button
                onClick={() => { setSelectedRegion('All'); setSelectedCategory('All'); setMaxPrice(70000000); setSearchQuery(''); }}
                className="text-[#D96B27] hover:underline font-semibold"
              >
                Clear all filters
              </button>
            )}
          </div>

        </div>

        {/* Property Listings Grid */}
        {filteredEstates.length === 0 ? (
          <div className="py-20 text-center border border-[#E5E2DC] bg-white space-y-3">
            <p className="text-xs text-[#5E6A7B] font-sans-body">No properties match your selected filter parameters.</p>
            <button 
              onClick={() => { setSelectedRegion('All'); setSelectedCategory('All'); setMaxPrice(70000000); setSearchQuery(''); }}
              className="btn-secondary text-xs py-2 px-4"
            >
              Reset Search Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredEstates.map(est => (
              <div 
                key={est.id} 
                className="bg-white border border-[#E5E2DC] flex flex-col group transition-all duration-300 hover:border-[#121824] cursor-pointer shadow-sm hover:shadow-md"
                onClick={() => onSelectEstate && onSelectEstate(est)}
              >
                {/* Image Frame */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-[#111318]">
                  <img 
                    src={est.image} 
                    alt={est.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-[#0B3B2B] text-white text-[10px] font-mono-data uppercase tracking-widest px-2.5 py-0.5">
                    {est.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#D96B27] text-white text-[10px] font-mono-data uppercase tracking-widest px-2.5 py-0.5">
                    {est.status}
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Header: Title & Price Stacked Responsive Layout */}
                  <div className="space-y-2">
                    <div className="flex flex-col xl:flex-row xl:items-baseline justify-between gap-1 border-b border-[#E5E2DC]/50 pb-2">
                      <h3 className="text-lg font-serif-display font-medium text-[#121824] group-hover:text-[#0B3B2B] transition-colors leading-snug">
                        {est.name}
                      </h3>
                      <span className="text-sm xl:text-base font-serif-display font-semibold text-[#0B3B2B] shrink-0 font-mono-data">
                        {est.price}
                      </span>
                    </div>
                    <span className="text-xs text-[#5E6A7B] font-sans-body flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#D96B27] shrink-0" /> {est.location}
                    </span>
                  </div>

                  {/* Comprehensive Specifications Grid */}
                  <div className="border-t border-b border-[#E5E2DC] py-3.5 grid grid-cols-2 gap-3 text-xs font-sans-body">
                    <div>
                      <span className="text-[10px] text-[#5E6A7B] uppercase block font-mono-data">Legal Title</span>
                      <span className="font-medium text-[#121824] truncate block">{est.title}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#5E6A7B] uppercase block font-mono-data">Plot Size</span>
                      <span className="font-medium text-[#121824] block">{est.plotSize}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#5E6A7B] uppercase block font-mono-data">Payment Terms</span>
                      <span className="font-medium text-[#D96B27] font-mono-data block truncate">{est.paymentPlan}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#5E6A7B] uppercase block font-mono-data">Verification</span>
                      <span className="font-medium text-[#0B3B2B] block truncate">{est.verificationBadge}</span>
                    </div>
                  </div>

                  {/* Infrastructure Highlights */}
                  {est.infrastructure && (
                    <div className="text-[11px] text-[#5E6A7B] font-sans-body space-y-1">
                      <span className="text-[10px] uppercase font-mono-data text-[#5E6A7B] block">Infrastructure</span>
                      <p className="line-clamp-1">✓ {est.infrastructure.slice(0, 2).join(' • ')}</p>
                    </div>
                  )}

                  <div className="pt-1 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => onNavigateToInspection(est.name)}
                      className="btn-primary flex-1 text-center text-xs py-2.5"
                    >
                      Book Inspection
                    </button>
                    <button
                      onClick={() => onSelectEstate && onSelectEstate(est)}
                      className="btn-secondary text-xs py-2.5 px-4"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
