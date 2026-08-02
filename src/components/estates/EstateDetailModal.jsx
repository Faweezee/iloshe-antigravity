import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, MessageSquare, MapPin } from 'lucide-react';
import { ASSETS } from '../../data/assetsManifest';

export default function EstateDetailModal({ estate, isOpen, onClose, onNavigateToInspection }) {
  const [activePhoto, setActivePhoto] = useState('');

  useEffect(() => {
    if (estate) {
      setActivePhoto(estate.image);
    }
  }, [estate]);

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

  if (!isOpen || !estate) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Iloshe Properties, I am interested in ${estate.name} (${estate.location}). Please share complete pricing and available inspection dates.`
    );
    window.open(`https://wa.me/${ASSETS.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    /* Outer Backdrop with click-to-close */
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111318]/70 backdrop-blur-sm animate-fadeIn"
    >
      {/* Inner Modal Box with stopPropagation */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[88vh] bg-[#FAF9F5] border border-[#E5E2DC] shadow-2xl overflow-y-auto p-6 sm:p-8 text-[#121824]"
      >
        
        {/* Header Bar */}
        <div className="flex justify-between items-start pb-4 border-b border-[#E5E2DC]">
          <div>
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block">
              {estate.category} Estate Listing
            </span>
            <h2 className="text-2xl font-serif-display font-medium text-[#121824]">
              {estate.name}
            </h2>
            <span className="text-xs text-[#5E6A7B] font-sans-body flex items-center gap-1 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-[#D96B27]" /> {estate.location}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-[#5E6A7B] hover:text-[#121824] focus:outline-none border border-[#E5E2DC] rounded-full hover:border-[#121824]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gallery Image Display */}
        <div className="mt-6 space-y-3">
          <div className="relative h-64 sm:h-80 overflow-hidden bg-[#111318] border border-[#E5E2DC]">
            <img 
              src={activePhoto || estate.image} 
              alt={estate.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 right-3 bg-[#111318]/90 text-[#FAF9F5] text-xs font-serif-display font-semibold px-3 py-1">
              {estate.price}
            </div>
          </div>

          {/* Photo Thumbnails */}
          {estate.gallery && estate.gallery.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {estate.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhoto(img)}
                  className={`w-20 h-14 shrink-0 overflow-hidden border ${
                    activePhoto === img ? 'border-[#0B3B2B]' : 'border-[#E5E2DC] opacity-70'
                  }`}
                >
                  <img src={img} alt={`Gallery thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Estate Specs Grid */}
        <div className="my-6 border-t border-b border-[#E5E2DC] py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans-body">
          <div>
            <span className="text-[10px] text-[#5E6A7B] uppercase block font-mono-data">Price</span>
            <span className="font-serif-display font-semibold text-[#121824] text-base">{estate.price}</span>
          </div>
          <div>
            <span className="text-[10px] text-[#5E6A7B] uppercase block font-mono-data">Legal Title</span>
            <span className="font-medium text-[#121824]">{estate.title}</span>
          </div>
          <div>
            <span className="text-[10px] text-[#5E6A7B] uppercase block font-mono-data">Plot Size</span>
            <span className="font-medium text-[#121824]">{estate.plotSize}</span>
          </div>
          <div>
            <span className="text-[10px] text-[#5E6A7B] uppercase block font-mono-data">Initial Deposit</span>
            <span className="font-medium text-[#D96B27] font-mono-data">{estate.initialDeposit}</span>
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-2 mb-6 text-xs font-sans-body">
          <h4 className="text-sm font-serif-display font-medium text-[#121824]">Property Description</h4>
          <p className="text-[#5E6A7B] leading-relaxed">
            {estate.overview}
          </p>
        </div>

        {/* Infrastructure Checklist */}
        {estate.infrastructure && (
          <div className="space-y-3 mb-8 text-xs font-sans-body">
            <h4 className="text-sm font-serif-display font-medium text-[#121824]">Estate Infrastructure & Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#5E6A7B]">
              {estate.infrastructure.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0B3B2B] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-[#E5E2DC]">
          <button
            onClick={() => {
              onClose();
              onNavigateToInspection(estate.name);
            }}
            className="btn-primary flex-1 text-center"
          >
            <Calendar className="w-4 h-4" /> Book Inspection For This Estate
          </button>
          <button
            onClick={handleWhatsAppInquiry}
            className="btn-secondary flex-1 text-center"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" /> Chat on WhatsApp
          </button>
        </div>

      </div>
    </div>
  );
}
