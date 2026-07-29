import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import FixedRevealBanner from '../components/home/FixedRevealBanner';
import TrustMetrics from '../components/home/TrustMetrics';
import PromiseChecklist from '../components/home/PromiseChecklist';
import FeaturedEstates from '../components/home/FeaturedEstates';
import ProcessSteps from '../components/home/ProcessSteps';
import TestimonialSlider from '../components/home/TestimonialSlider';

export default function HomePage({ setActivePage, onOpenInspection, onSelectEstate }) {
  return (
    <div className="relative">
      <HeroBanner setActivePage={setActivePage} onOpenInspection={onOpenInspection} />
      <FixedRevealBanner />
      <div className="relative z-10 bg-[#FAF9F5]">
        <TrustMetrics />
        <PromiseChecklist />
        <FeaturedEstates setActivePage={setActivePage} onOpenInspection={onOpenInspection} onSelectEstate={onSelectEstate} />
        <ProcessSteps onOpenInspection={onOpenInspection} />
        <TestimonialSlider />
      </div>
    </div>
  );
}
