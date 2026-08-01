import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import TrustMetrics from '../components/home/TrustMetrics';
import FixedRevealBanner from '../components/home/FixedRevealBanner';
import PromiseChecklist from '../components/home/PromiseChecklist';
import FeaturedEstates from '../components/home/FeaturedEstates';
import ProcessSteps from '../components/home/ProcessSteps';
import TestimonialSlider from '../components/home/TestimonialSlider';

export default function HomePage({ setActivePage, onOpenInspection, onSelectEstate }) {
  return (
    <div className="relative">
      {/* 1. Hero Banner + Trust Metrics */}
      <div className="relative z-10 bg-[#FAF9F5]">
        <HeroBanner setActivePage={setActivePage} onOpenInspection={onOpenInspection} />
        <TrustMetrics />
        
        {/* 2. Featured Estates (Moved above Curated Portfolio section) */}
        <FeaturedEstates setActivePage={setActivePage} onOpenInspection={onOpenInspection} onSelectEstate={onSelectEstate} />
      </div>

      {/* 3. Parallax Fixed Background Window */}
      <FixedRevealBanner />

      {/* 4. Sliding Content Curtain */}
      <div className="relative z-10 bg-[#FAF9F5]">
        <PromiseChecklist />
        <ProcessSteps onOpenInspection={onOpenInspection} />
        <TestimonialSlider />
      </div>
    </div>
  );
}
