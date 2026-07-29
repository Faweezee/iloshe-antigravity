import React from 'react';
import { ASSETS } from '../../data/assetsManifest';

export default function WhatsAppWidget() {
  const whatsappUrl = `https://wa.me/${ASSETS.contact.whatsapp}?text=${encodeURIComponent("Hello Iloshe Properties, I would like to inquire about your verified land offerings.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#111318] text-[#FAF9F5] border border-white/20 hover:border-[#C5A059] px-4 py-2 text-xs font-mono-data uppercase tracking-wider shadow-lg transition-all"
      aria-label="Contact via WhatsApp"
    >
      WhatsApp Inquiry
    </a>
  );
}
