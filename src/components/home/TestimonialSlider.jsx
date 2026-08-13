import React, { useState, useRef } from 'react';
import { getCMSTestimonials } from '../../utils/cmsLoader';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialSlider() {
  const testimonials = getCMSTestimonials();
  const [current, setCurrent] = useState(0);

  // Drag & Touch Swipe Gesture States
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  if (!testimonials || testimonials.length === 0) return null;

  const activeIndex = current % testimonials.length;

  const prev = () => setCurrent((activeIndex - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((activeIndex + 1) % testimonials.length);

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    setDragOffset(delta);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    if (dragOffset < -50) {
      next();
    } else if (dragOffset > 50) {
      prev();
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      setIsDragging(true);
      setStartX(e.touches[0].clientX);
      setDragOffset(0);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !e.touches || e.touches.length === 0) return;
    const delta = e.touches[0].clientX - startX;
    setDragOffset(delta);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  return (
    <section className="py-24 bg-[#FAF9F5] border-b border-[#E5E2DC] select-none">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center space-y-8">
        
        <span className="text-xs font-mono-data uppercase tracking-widest text-[#D96B27] block font-semibold">
          CLIENT SUCCESS STORIES
        </span>

        {/* Hold & Drag Interactive Container (No Client Headshot Pictures) */}
        <div 
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ transform: `translateX(${dragOffset * 0.4}px)` }}
          className={`cursor-grab active:cursor-grabbing transition-transform ${
            isDragging ? 'duration-0' : 'duration-300 ease-out'
          } py-4`}
        >
          {/* Minimal Editorial Quote */}
          <blockquote className="text-2xl sm:text-3xl font-serif-display font-medium text-[#121824] leading-relaxed italic max-w-3xl mx-auto pointer-events-none">
            "{testimonials[activeIndex].text}"
          </blockquote>

          {/* Author Metadata */}
          <div className="pt-4 space-y-1 pointer-events-none">
            <cite className="not-italic font-serif-display text-lg text-[#121824] font-medium block">
              {testimonials[activeIndex].name}
            </cite>
            <span className="text-xs text-[#5E6A7B] font-sans-body block">
              {testimonials[activeIndex].role} — <strong className="text-[#0B3B2B]">{testimonials[activeIndex].location}</strong>
            </span>
          </div>
        </div>

        {/* Minimal Controls */}
        <div className="flex justify-center items-center gap-4 pt-2">
          <button 
            onClick={(e) => { e.stopPropagation(); prev(); }} 
            className="p-2.5 border border-[#E5E2DC] rounded-full text-[#121824] hover:border-[#121824] hover:bg-white transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <span className="text-xs font-mono-data text-[#5E6A7B]">
            0{activeIndex + 1} / 0{testimonials.length}
          </span>
          
          <button 
            onClick={(e) => { e.stopPropagation(); next(); }} 
            className="p-2.5 border border-[#E5E2DC] rounded-full text-[#121824] hover:border-[#121824] hover:bg-white transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[10px] font-mono-data text-[#5E6A7B]/70 uppercase tracking-widest pt-1">
          Hold & Drag or Swipe Left/Right to View Next Story
        </p>

      </div>
    </section>
  );
}
