import React, { useState, useEffect } from 'react';
import { ASSETS } from '../../data/assetsManifest';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // If user is within 350px of page bottom (footer region), lift widget up
      if (documentHeight - (scrollTop + windowHeight) < 350) {
        setIsNearFooter(true);
      } else {
        setIsNearFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${ASSETS.contact.whatsapp}?text=${encodeURIComponent("Hello Iloshe Properties, I would like to inquire about your verified land offerings.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed right-4 sm:right-6 z-30 bg-[#0B3B2B] text-white border border-white/10 hover:bg-[#0F543F] px-3.5 sm:px-4 py-2.5 rounded-full text-xs font-mono-data uppercase tracking-wider shadow-2xl transition-all duration-300 flex items-center gap-2 ${
        isNearFooter ? 'bottom-24 sm:bottom-28' : 'bottom-3 sm:bottom-4'
      }`}
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-4 h-4 text-white" />
      <span>WhatsApp Inquiry</span>
    </a>
  );
}
