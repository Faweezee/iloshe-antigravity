import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import PromiseChecklist from '../components/home/PromiseChecklist';
import FeaturedEstates from '../components/home/FeaturedEstates';
import ProcessSteps from '../components/home/ProcessSteps';
import TestimonialSlider from '../components/home/TestimonialSlider';

export default function HomePage({ setActivePage, onOpenInspection, onSelectEstate }) {
  return (
    <div>
      <HeroBanner setActivePage={setActivePage} onOpenInspection={onOpenInspection} />
      <PromiseChecklist />
      <FeaturedEstates setActivePage={setActivePage} onOpenInspection={onOpenInspection} onSelectEstate={onSelectEstate} />
      <ProcessSteps onOpenInspection={onOpenInspection} />
      <TestimonialSlider />
    </div>
  );
}
