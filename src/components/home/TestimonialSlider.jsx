import React, { useState } from 'react';
import { getCMSTestimonials } from '../../utils/cmsLoader';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialSlider() {
  const testimonials = getCMSTestimonials();
  const [current, setCurrent] = useState(0);

  if (!testimonials || testimonials.length === 0) return null;

  const activeIndex = current % testimonials.length;

  const prev = () => setCurrent((activeIndex - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((activeIndex + 1) % testimonials.length);

  return (
    <section className="py-24 bg-[#FAF9F5] border-b border-[#E5E2DC]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center space-y-8">
        
        <span className="text-xs font-mono-data uppercase tracking-widest text-[#D96B27] block font-semibold">
          CLIENT SUCCESS STORIES
        </span>

        {/* Client Headshot Avatar — Green border removed */}
        {testimonials[activeIndex].image && (
          <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden shadow-md border border-[#E5E2DC]">
            <img 
              src={testimonials[activeIndex].image} 
              alt={testimonials[activeIndex].name} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Minimal Editorial Quote */}
        <blockquote className="text-2xl sm:text-3xl font-serif-display font-medium text-[#121824] leading-relaxed italic max-w-3xl mx-auto">
          "{testimonials[activeIndex].text}"
        </blockquote>

        {/* Author Metadata */}
        <div className="pt-2 space-y-1">
          <cite className="not-italic font-serif-display text-lg text-[#121824] font-medium block">
            {testimonials[activeIndex].name}
          </cite>
          <span className="text-xs text-[#5E6A7B] font-sans-body block">
            {testimonials[activeIndex].role} — <strong className="text-[#0B3B2B]">{testimonials[activeIndex].location}</strong>
          </span>
        </div>

        {/* Minimal Controls */}
        <div className="flex justify-center items-center gap-4 pt-4">
          <button 
            onClick={prev} 
            className="p-2 border border-[#E5E2DC] rounded-full text-[#121824] hover:border-[#121824] hover:bg-white transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono-data text-[#5E6A7B]">
            0{activeIndex + 1} / 0{testimonials.length}
          </span>
          <button 
            onClick={next} 
            className="p-2 border border-[#E5E2DC] rounded-full text-[#121824] hover:border-[#121824] hover:bg-white transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
