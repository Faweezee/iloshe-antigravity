import React, { useEffect } from 'react';
import { ARTICLES_DATA } from '../data/guidesData';
import { CheckCircle2, ArrowLeft, ShieldCheck, Clock } from 'lucide-react';

export default function ArticleDetailPage({ articleId, article: propArticle, onOpenLegalAdvisory, setActivePage }) {
  const article = propArticle || ARTICLES_DATA.find(a => a.id === articleId) || ARTICLES_DATA[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article]);

  if (!article) return null;

  // Clean Formatted Body Renderer
  const renderFormattedBody = (rawText) => {
    if (!rawText) return null;

    const lines = rawText.split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={idx} className="h-4" />;

      // Subheading: ###
      if (trimmed.startsWith('###')) {
        const headingText = trimmed.replace(/^###\s*/, '').replace(/\*\*/g, '');
        return (
          <h4 key={idx} className="text-lg font-serif-display font-semibold text-[#121824] pt-6 pb-2">
            {headingText}
          </h4>
        );
      }

      // Heading: ##
      if (trimmed.startsWith('##')) {
        const headingText = trimmed.replace(/^##\s*/, '').replace(/\*\*/g, '');
        return (
          <h3 key={idx} className="text-xl font-serif-display font-medium text-[#0B3B2B] pt-8 pb-2">
            {headingText}
          </h3>
        );
      }

      // Bullet Point: - or *
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const bulletContent = trimmed.replace(/^[-*]\s*/, '');
        const parts = bulletContent.split('**');
        if (parts.length >= 3) {
          return (
            <div key={idx} className="flex items-start gap-3 my-2 pl-2 text-sm text-[#5E6A7B]">
              <span className="text-[#0B3B2B] font-bold mt-1">•</span>
              <span>
                <strong className="text-[#121824] font-medium">{parts[1]}</strong>
                {parts.slice(2).join('')}
              </span>
            </div>
          );
        }
        return (
          <div key={idx} className="flex items-start gap-3 my-2 pl-2 text-sm text-[#5E6A7B]">
            <span className="text-[#0B3B2B] font-bold mt-1">•</span>
            <span>{bulletContent.replace(/\*\*/g, '')}</span>
          </div>
        );
      }

      // Paragraph with inline bold
      const inlineParts = trimmed.split('**');
      if (inlineParts.length >= 3) {
        return (
          <p key={idx} className="text-sm sm:text-base text-[#5E6A7B] leading-relaxed my-3 font-sans-body">
            {inlineParts.map((part, i) => (
              i % 2 === 1 ? <strong key={i} className="text-[#121824] font-medium">{part}</strong> : part
            ))}
          </p>
        );
      }

      return (
        <p key={idx} className="text-sm sm:text-base text-[#5E6A7B] leading-relaxed my-3 font-sans-body">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="py-16 bg-[#FAF9F5] text-[#121824]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-10">
        
        {/* Back Navigation Link */}
        <div>
          <button
            onClick={() => {
              setActivePage('guide');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-mono-data uppercase tracking-wider text-[#5E6A7B] hover:text-[#0B3B2B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#D96B27]" />
            <span>Back to Investment Guide & Blog</span>
          </button>
        </div>

        {/* Article Header */}
        <div className="space-y-4 border-b border-[#E5E2DC] pb-8">
          <div className="flex items-center gap-3 text-xs font-mono-data">
            <span className="bg-[#D96B27] text-white px-2.5 py-0.5 uppercase tracking-widest text-[10px] font-semibold">
              {article.category}
            </span>
            <span className="text-[#5E6A7B] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium text-[#121824] leading-snug tracking-tight">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-[#5E6A7B] font-sans-body leading-relaxed italic border-l-2 border-[#D96B27] pl-4">
            {article.summary}
          </p>
        </div>

        {/* Article Body Content */}
        <div className="my-8">
          {renderFormattedBody(article.body || article.summary)}
        </div>

        {/* Key Takeaways Highlight Box */}
        {article.takeaways && article.takeaways.length > 0 && (
          <div className="bg-white border border-[#E5E2DC] p-8 space-y-4 shadow-sm my-10">
            <span className="text-xs font-mono-data text-[#0B3B2B] uppercase tracking-wider block font-semibold">
              Key Takeaways & Due Diligence Checklist
            </span>
            <div className="space-y-3 text-xs sm:text-sm text-[#121824] font-sans-body">
              {article.takeaways.map((t, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0B3B2B] shrink-0 mt-0.5" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Legal Advisory CTA Strip */}
        <div className="pt-8 border-t border-[#E5E2DC] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-white p-8 border border-[#E5E2DC] shadow-sm">
          <div className="space-y-1">
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block font-semibold">
              LEGAL TITLE ADVISORY
            </span>
            <h3 className="text-xl font-serif-display font-medium text-[#121824]">
              Have questions regarding property titles or survey charting?
            </h3>
            <p className="text-xs text-[#5E6A7B]">Speak directly with our legal advisory team for title due diligence.</p>
          </div>
          <button
            onClick={() => onOpenLegalAdvisory()}
            className="btn-primary whitespace-nowrap py-3 px-6 text-xs"
          >
            Speak With Legal Advisor
          </button>
        </div>

      </div>
    </div>
  );
}
