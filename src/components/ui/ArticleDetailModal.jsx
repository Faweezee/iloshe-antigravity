import React from 'react';
import { X, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ArticleDetailModal({ article, isOpen, onClose, onOpenInspection }) {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111318]/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#FAF9F5] border border-[#E5E2DC] shadow-2xl overflow-y-auto p-6 sm:p-8 text-[#121824]">
        
        {/* Header */}
        <div className="flex justify-between items-start pb-4 border-b border-[#E5E2DC]">
          <div className="space-y-1">
            <div className="flex items-center gap-3 text-xs font-mono-data">
              <span className="text-[#D96B27] uppercase">{article.category}</span>
              <span className="text-[#5E6A7B]">• {article.readTime}</span>
            </div>
            <h2 className="text-2xl font-serif-display font-medium text-[#121824] leading-snug">
              {article.title}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-[#5E6A7B] hover:text-[#121824] focus:outline-none"
            aria-label="Close article reader"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="my-6 space-y-4 text-xs sm:text-sm font-sans-body leading-relaxed text-[#5E6A7B] whitespace-pre-line">
          {article.body || article.summary}
        </div>

        {/* Key Takeaways Box */}
        {article.takeaways && article.takeaways.length > 0 && (
          <div className="bg-white border border-[#E5E2DC] p-5 mb-6 space-y-3">
            <span className="text-xs font-mono-data text-[#0B3B2B] uppercase tracking-wider block font-semibold">
              Key Takeaways
            </span>
            <div className="space-y-2 text-xs text-[#121824] font-sans-body">
              {article.takeaways.map((t, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0B3B2B] shrink-0 mt-0.5" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action CTA */}
        <div className="pt-4 border-t border-[#E5E2DC] flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs text-[#5E6A7B] font-sans-body">Have legal questions regarding land titles?</span>
          <button
            onClick={() => {
              onClose();
              onOpenInspection();
            }}
            className="btn-primary"
          >
            Speak With Legal Advisor
          </button>
        </div>

      </div>
    </div>
  );
}
