/**
 * Assets Manifest Directory & Dynamic Fallback System
 * 
 * Centralized mapping of site graphics, logos, videos, estate catalogs, and team photos.
 * 
 * Automatic Fallback Rule:
 * If a custom client asset is dropped into `public/assets/...`, it loads directly.
 * If missing, it gracefully falls back to default high-definition placeholders without layout breaking.
 */

export const ASSETS = {
  brand: {
    logo: {
      src: "/assets/brand/logo.png",
      fallback: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=300&q=80",
      alt: "Iloshe Properties & Investment Ltd Official Logo"
    },
    favicon: {
      src: "/assets/brand/favicon.png",
      fallback: "/favicon.ico",
      alt: "Iloshe Properties Favicon"
    }
  },

  hero: {
    bannerBg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    inspectionVideo: {
      src: "/assets/hero/inspection-video.mp4",
      poster: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
      alt: "Real Estate Site Inspection Land Survey Video"
    }
  },

  estates: [
    {
      id: "iloshe-imperial-haven-epe",
      name: "Iloshe Imperial Haven",
      cover: "/assets/estates/imperial-haven-cover.jpg",
      fallbackCover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      alt: "Plot allocation at Iloshe Imperial Haven Epe"
    },
    {
      id: "zenith-gardens-magboro",
      name: "Zenith Gardens",
      cover: "/assets/estates/zenith-gardens-cover.jpg",
      fallbackCover: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      alt: "Residential plots at Zenith Gardens Magboro"
    },
    {
      id: "iloshe-crest-court-ibeju-lekki",
      name: "Iloshe Crest Court",
      cover: "/assets/estates/crest-court-cover.jpg",
      fallbackCover: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      alt: "Commercial plots near Lekki Free Trade Zone"
    }
  ],

  testimonials: [
    {
      id: "client-1",
      name: "Dr. Emmanuel Adeleke",
      photo: "/assets/testimonials/client-1.jpg",
      fallbackPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      alt: "Dr. Emmanuel Adeleke - Diaspora Investor UK"
    },
    {
      id: "client-2",
      name: "Mrs. Blessing Okonkwo",
      photo: "/assets/testimonials/client-2.jpg",
      fallbackPhoto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      alt: "Mrs. Blessing Okonkwo - Landowner"
    }
  ],

  team: {
    leadership: {
      src: "/assets/team/leadership.jpg",
      fallback: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      alt: "Iloshe Properties Executive Leadership Team"
    },
    advisory: {
      src: "/assets/team/advisory.jpg",
      fallback: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80",
      alt: "Client Real Estate Advisory Session"
    }
  },

  contact: {
    whatsapp: "2349112777778",
    phones: ["+234 911 277 7778", "+234 911 337 0535", "+234 805 880 0112", "+234 808 273 7645"],
    email: "Info@ilosheproperties.com.ng",
    address: "167 Iju Road, beside Union Bank, Fagba Bus Stop, Lagos, Nigeria",
    hours: "Monday - Saturday: 8:00 AM - 6:00 PM"
  }
};
