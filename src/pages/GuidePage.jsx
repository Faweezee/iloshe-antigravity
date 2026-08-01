import React, { useState } from 'react';
import { ARTICLES_DATA, FAQ_DATA } from '../data/guidesData';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export default function GuidePage({ onOpenInspection, onSelectArticle }) {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="py-20 bg-[#FAF9F5] text-[#121824]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4" id="guides">
          <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block">
            01 — KNOWLEDGE BASE & ADVISORY
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif-display font-medium leading-[1.12] text-[#121824] tracking-tight">
            Smart Property Investments Start With Knowledge
          </h1>
          <p className="text-[#5E6A7B] text-base sm:text-lg leading-relaxed font-sans-body">
            Acquiring real estate shouldn't feel complex. Explore practical guides on land titles, survey verifications, and payment strategies.
          </p>
        </div>

        {/* Featured Guides Section & CMS Blog Hub */}
        <div className="border-t border-[#E5E2DC] pt-12" id="blog">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-[10px] font-mono-data uppercase text-[#D96B27] tracking-widest block mb-1">
                02 — MARKET INSIGHTS & BLOG
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-[#121824] tracking-tight">
                Featured Real Estate Guides
              </h2>
            </div>
            <span className="text-[10px] font-mono-data uppercase text-[#5E6A7B] tracking-widest hidden sm:block">
              CLICK ARTICLE TO READ FULL GUIDE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {ARTICLES_DATA.map((art) => (
              <div 
                key={art.id} 
                onClick={() => onSelectArticle && onSelectArticle(art)}
                className="space-y-4 border-t border-[#E5E2DC] pt-6 group cursor-pointer"
              >
                <div className="flex justify-between items-center text-xs text-[#5E6A7B] font-mono-data">
                  <span className="text-[#D96B27] uppercase font-semibold">{art.category}</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="text-lg font-serif-display font-medium text-[#121824] group-hover:text-[#0B3B2B] transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-[#5E6A7B] leading-relaxed font-sans-body">
                  {art.summary}
                </p>
                <div className="pt-1 flex items-center gap-1.5 text-xs text-[#0B3B2B] font-mono-data font-medium uppercase tracking-wider group-hover:text-[#D96B27] transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Masterplan Photography Callout Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-b border-[#E5E2DC] py-16 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block">
              03 — LEGAL TITLE & VERIFICATION SUPPORT
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#121824] tracking-tight">
              Verified Documentation Guaranteed
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6A7B] leading-relaxed font-sans-body">
              Every property in our directory is independently charted with state land registries, ensuring zero omonile disputes and immediate physical plot pegging.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenInspection()}
                className="btn-primary"
              >
                Consult With Our Legal Team
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 border border-[#E5E2DC] bg-[#111318] overflow-hidden group">
            <div className="relative h-72 sm:h-80 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" 
                alt="Architectural masterplan layout and official land survey charting document" 
                className="w-full h-full object-cover filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-[#D96B27] text-white text-[10px] font-mono-data uppercase tracking-widest px-2.5 py-1">
                SURVEY CHARTED
              </div>
            </div>
            <div className="p-3.5 bg-white text-xs font-mono-data text-[#5E6A7B] border-t border-[#E5E2DC] flex justify-between items-center">
              <span>LAGOS SURVEYOR GENERAL RECORD</span>
              <span className="text-[#0B3B2B] font-semibold">100% VERIFIED</span>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="border-t border-[#E5E2DC] pt-8 max-w-3xl space-y-10" id="faq">
          <div className="space-y-2">
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block">
              04 — CLEAR ANSWERS
            </span>
            <h2 className="text-3xl font-serif-display font-medium text-[#121824]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="border-b border-[#E5E2DC] pb-4"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                    className="w-full text-left py-2 flex justify-between items-center font-serif-display text-lg text-[#121824] focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#0B3B2B]" /> : <ChevronDown className="w-4 h-4 text-[#5E6A7B]" />}
                  </button>
                  {isOpen && (
                    <div className="pt-2 text-xs text-[#5E6A7B] leading-relaxed font-sans-body">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4">
            <button
              onClick={() => onOpenInspection()}
              className="btn-primary"
            >
              Speak With Our Legal Advisors
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
