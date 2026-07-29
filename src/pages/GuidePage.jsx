import React, { useState } from 'react';
import { ARTICLES_DATA, FAQ_DATA } from '../data/guidesData';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export default function GuidePage({ onOpenInspection, onSelectArticle }) {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="py-20 bg-[#FAF9F5] text-[#121824]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-mono-data uppercase tracking-widest text-[#D96B27] block">
            Knowledge Base
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif-display font-medium leading-[1.12] text-[#121824]">
            Smart Property Investments Start With Knowledge
          </h1>
          <p className="text-[#5E6A7B] text-base sm:text-lg leading-relaxed font-sans-body">
            Acquiring real estate shouldn't feel complex. Explore practical guides on land titles, survey verifications, and payment strategies.
          </p>
        </div>

        {/* Featured Guides Section (Clickable Cards) */}
        <div className="mb-24 border-t border-[#E5E2DC] pt-12">
          <h2 className="text-2xl font-serif-display font-medium text-[#121824] mb-10">
            Featured Real Estate Guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {ARTICLES_DATA.map((art) => (
              <div 
                key={art.id} 
                onClick={() => onSelectArticle && onSelectArticle(art)}
                className="space-y-4 border-t border-[#E5E2DC] pt-6 group cursor-pointer"
              >
                <div className="flex justify-between items-center text-xs text-[#5E6A7B] font-mono-data">
                  <span className="text-[#D96B27] uppercase">{art.category}</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="text-lg font-serif-display font-medium text-[#121824] group-hover:text-[#0B3B2B] transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-[#5E6A7B] leading-relaxed font-sans-body">
                  {art.summary}
                </p>
                <div className="pt-1 flex items-center gap-1.5 text-xs text-[#0B3B2B] font-medium uppercase font-sans-body tracking-wider group-hover:text-[#D96B27] transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photography Callout Strip */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-b border-[#E5E2DC] py-16 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono-data uppercase tracking-widest text-[#D96B27] block">Legal & Title Support</span>
            <h3 className="text-3xl font-serif-display font-medium text-[#121824]">Verified Documentation Guaranteed</h3>
            <p className="text-xs sm:text-sm text-[#5E6A7B] leading-relaxed font-sans-body">
              Every property in our directory is independently charted with state land registries, ensuring zero omonile disputes and immediate physical allocation.
            </p>
            <button
              onClick={() => onOpenInspection()}
              className="btn-primary"
            >
              Consult With Our Legal Team
            </button>
          </div>
          <div className="lg:col-span-6 overflow-hidden border border-[#E5E2DC]">
            <img 
              src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80" 
              alt="Real Estate Document Verification & Legal Consultation" 
              className="w-full h-72 object-cover filter contrast-[1.02]"
            />
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="border-t border-[#E5E2DC] pt-16 max-w-3xl">
          <div className="mb-10 space-y-2">
            <span className="text-xs font-mono-data uppercase tracking-widest text-[#D96B27] block">
              Clear Answers
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

          <div className="mt-12">
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
