import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function ArticleDetailModal({ article, isOpen, onClose, onOpenInspection }) {
  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  // Clean Markdown Renderer helper
  const renderFormattedBody = (rawText) => {
    if (!rawText) return null;

    const lines = rawText.split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={idx} className="h-3" />;

      // Subheading: ###
      if (trimmed.startsWith('###')) {
        const headingText = trimmed.replace(/^###\s*/, '').replace(/\*\*/g, '');
        return (
          <h4 key={idx} className="text-base font-serif-display font-semibold text-[#121824] pt-4 pb-1">
            {headingText}
          </h4>
        );
      }

      // Heading: ##
      if (trimmed.startsWith('##')) {
        const headingText = trimmed.replace(/^##\s*/, '').replace(/\*\*/g, '');
        return (
          <h3 key={idx} className="text-lg font-serif-display font-medium text-[#0B3B2B] pt-5 pb-1">
            {headingText}
          </h3>
        );
      }

      // Bullet Point: - or *
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const bulletContent = trimmed.replace(/^[-*]\s*/, '');
        // Check for bold title in bullet: **Title:** rest
        const parts = bulletContent.split('**');
        if (parts.length >= 3) {
          return (
            <div key={idx} className="flex items-start gap-2.5 my-1.5 pl-2 text-xs sm:text-sm text-[#5E6A7B]">
              <span className="text-[#0B3B2B] font-bold mt-1">•</span>
              <span>
                <strong className="text-[#121824] font-medium">{parts[1]}</strong>
                {parts.slice(2).join('')}
              </span>
            </div>
          );
        }
        return (
          <div key={idx} className="flex items-start gap-2.5 my-1.5 pl-2 text-xs sm:text-sm text-[#5E6A7B]">
            <span className="text-[#0B3B2B] font-bold mt-1">•</span>
            <span>{bulletContent.replace(/\*\*/g, '')}</span>
          </div>
        );
      }

      // Paragraph with potential inline **bold**
      const inlineParts = trimmed.split('**');
      if (inlineParts.length >= 3) {
        return (
          <p key={idx} className="text-xs sm:text-sm text-[#5E6A7B] leading-relaxed my-2 font-sans-body">
            {inlineParts.map((part, i) => (
              i % 2 === 1 ? <strong key={i} className="text-[#121824] font-medium">{part}</strong> : part
            ))}
          </p>
        );
      }

      return (
        <p key={idx} className="text-xs sm:text-sm text-[#5E6A7B] leading-relaxed my-2 font-sans-body">
          {trimmed}
        </p>
      );
    });
  };

  return (
    /* Outer Backdrop overlay with click-to-close */
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111318]/70 backdrop-blur-sm animate-fadeIn"
    >
      {/* Inner Modal Content Container - Stop Propagation */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[85vh] bg-[#FAF9F5] border border-[#E5E2DC] shadow-2xl overflow-y-auto p-6 sm:p-10 text-[#121824]"
      >
        
        {/* Header */}
        <div className="flex justify-between items-start pb-5 border-b border-[#E5E2DC]">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-mono-data">
              <span className="text-[#D96B27] uppercase tracking-wider">{article.category}</span>
              <span className="text-[#5E6A7B]">• {article.readTime}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-[#121824] leading-snug">
              {article.title}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-[#5E6A7B] hover:text-[#121824] focus:outline-none transition-colors border border-[#E5E2DC] rounded-full hover:border-[#121824]"
            aria-label="Close article reader"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Clean Formatted Article Content */}
        <div className="my-6">
          {renderFormattedBody(article.body || article.summary)}
        </div>

        {/* Key Takeaways Box */}
        {article.takeaways && article.takeaways.length > 0 && (
          <div className="bg-white border border-[#E5E2DC] p-6 my-8 space-y-3">
            <span className="text-xs font-mono-data text-[#0B3B2B] uppercase tracking-wider block font-semibold">
              Key Takeaways
            </span>
            <div className="space-y-2 text-xs sm:text-sm text-[#121824] font-sans-body">
              {article.takeaways.map((t, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0B3B2B] shrink-0 mt-0.5" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Action */}
        <div className="pt-6 border-t border-[#E5E2DC] flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs text-[#5E6A7B] font-sans-body">Have legal questions regarding land titles or verification?</span>
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
