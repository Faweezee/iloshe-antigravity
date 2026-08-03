import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import TrustMetrics from '../components/home/TrustMetrics';
import FixedRevealBanner from '../components/home/FixedRevealBanner';
import PromiseChecklist from '../components/home/PromiseChecklist';
import FeaturedEstates from '../components/home/FeaturedEstates';
import ProcessSteps from '../components/home/ProcessSteps';
import TestimonialSlider from '../components/home/TestimonialSlider';

export default function HomePage({ setActivePage, onNavigateToInspection, onSelectEstate }) {
  return (
    <div className="relative">
      {/* 1. Hero Banner + Trust Metrics */}
      <div className="relative z-10 bg-[#FAF9F5]">
        <HeroBanner setActivePage={setActivePage} onNavigateToInspection={onNavigateToInspection} />
        <TrustMetrics />
      </div>

      {/* 2. Parallax Fixed Background Window — Featured Estate Parcel (Moved above Curated Portfolio) */}
      <FixedRevealBanner />

      {/* 3. Sliding Content Curtain */}
      <div className="relative z-10 bg-[#FAF9F5]">
        <FeaturedEstates setActivePage={setActivePage} onOpenInspection={onNavigateToInspection} onSelectEstate={onSelectEstate} />
        <PromiseChecklist />
        <ProcessSteps onOpenInspection={onNavigateToInspection} />
        <TestimonialSlider />
      </div>
    </div>
  );
}
