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
      {/* 1. First Viewport Fold: Editorial Hero + Pure Typography Trust Metrics */}
      <div className="relative z-10 bg-[#FAF9F5]">
        <HeroBanner setActivePage={setActivePage} onOpenInspection={onOpenInspection} />
        <TrustMetrics />
      </div>

      {/* 2. Parallax Fixed Background Window (Revealed Deliberately On Scroll) */}
      <FixedRevealBanner />

      {/* 3. Sliding Content Curtain (Slides over Fixed Background Image on Scroll) */}
      <div className="relative z-10 bg-[#FAF9F5]">
        <PromiseChecklist />
        <FeaturedEstates setActivePage={setActivePage} onOpenInspection={onOpenInspection} onSelectEstate={onSelectEstate} />
        <ProcessSteps onOpenInspection={onOpenInspection} />
        <TestimonialSlider />
      </div>
    </div>
  );
}
