import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: "Dr. Emmanuel Adeleke",
      role: "Diaspora Investor (United Kingdom)",
      text: "Buying land in Lagos from London used to carry immense risk. Iloshe Properties managed everything with legal clarity. The site inspection was detailed, and my plot was allocated on schedule.",
      location: "Iloshe Imperial Haven, Epe"
    },
    {
      name: "Mrs. Blessing Okonkwo",
      role: "Commercial Enterprise CEO",
      text: "What set Iloshe apart was their flexible 12-month payment structure. I didn't have to strain business liquidity. Today I hold verified title documents safely.",
      location: "Iloshe Crest Court, Ibeju-Lekki"
    },
    {
      name: "Engr. Tunde Bakare",
      role: "Infrastructure Consultant",
      text: "Their documentation team walked me through verifying land coordinates directly with the Lagos Surveyor General's office. Professionalism at its peak with zero hidden fees.",
      location: "Iloshe Sovereign Bay, Alaro Axis"
    }
  ];

  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section className="py-24 bg-[#FAF9F5] border-b border-[#E5E2DC]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center space-y-8">
        
        <span className="text-xs font-mono-data uppercase tracking-widest text-[#D96B27] block">
          Client Feedback
        </span>

        {/* Minimal Editorial Quote */}
        <blockquote className="text-2xl sm:text-3xl font-serif-display font-medium text-[#121824] leading-relaxed italic">
          "{testimonials[current].text}"
        </blockquote>

        {/* Author Metadata */}
        <div className="pt-4 space-y-1">
          <cite className="not-italic font-serif-display text-lg text-[#121824] block">
            {testimonials[current].name}
          </cite>
          <span className="text-xs text-[#5E6A7B] font-sans-body block">
            {testimonials[current].role} — {testimonials[current].location}
          </span>
        </div>

        {/* Minimal Controls */}
        <div className="flex justify-center items-center gap-4 pt-4">
          <button 
            onClick={prev} 
            className="p-2 border border-[#E5E2DC] rounded-full text-[#121824] hover:border-[#121824] transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono-data text-[#5E6A7B]">
            0{current + 1} / 0{testimonials.length}
          </span>
          <button 
            onClick={next} 
            className="p-2 border border-[#E5E2DC] rounded-full text-[#121824] hover:border-[#121824] transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
