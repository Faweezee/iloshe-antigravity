import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: "Dr. Emmanuel Adeleke",
      role: "Diaspora Investor (United Kingdom)",
      text: "Buying land in Lagos from London used to carry immense risk. Iloshe Properties managed everything with legal clarity. The site inspection was detailed, and my plot was allocated on schedule.",
      location: "Iloshe Imperial Haven, Epe",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Mrs. Blessing Okonkwo",
      role: "Commercial Enterprise CEO",
      text: "What set Iloshe apart was their flexible 12-month payment structure. I didn't have to strain business liquidity. Today I hold verified title documents safely.",
      location: "Iloshe Crest Court, Ibeju-Lekki",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Engr. Tunde Bakare",
      role: "Infrastructure Consultant",
      text: "Their documentation team walked me through verifying land coordinates directly with the Lagos Surveyor General's office. Professionalism at its peak with zero hidden fees.",
      location: "Iloshe Sovereign Bay, Alaro Axis",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section className="py-24 bg-[#FAF9F5] border-b border-[#E5E2DC]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center space-y-8">
        
        <span className="text-xs font-mono-data uppercase tracking-widest text-[#D96B27] block font-semibold">
          CLIENT SUCCESS STORIES
        </span>

        {/* Client Headshot Avatar */}
        <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#0B3B2B] shadow-md">
          <img 
            src={testimonials[current].image} 
            alt={testimonials[current].name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Minimal Editorial Quote */}
        <blockquote className="text-2xl sm:text-3xl font-serif-display font-medium text-[#121824] leading-relaxed italic max-w-3xl mx-auto">
          "{testimonials[current].text}"
        </blockquote>

        {/* Author Metadata */}
        <div className="pt-2 space-y-1">
          <cite className="not-italic font-serif-display text-lg text-[#121824] font-medium block">
            {testimonials[current].name}
          </cite>
          <span className="text-xs text-[#5E6A7B] font-sans-body block">
            {testimonials[current].role} — <strong className="text-[#0B3B2B]">{testimonials[current].location}</strong>
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
            0{current + 1} / 0{testimonials.length}
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
