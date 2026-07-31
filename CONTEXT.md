# Project Context: Iloshe Properties & Investment Ltd

## Overview
**Iloshe Properties & Investment Ltd** is a premier real estate firm operating in Lagos, Nigeria. The company specializes in helping individuals, families, and institutional investors acquire verified, title-secured land and residential properties with transparent processes, flexible payment structures, and high investment return potential.

This web application serves as the primary digital portal for Iloshe Properties. It is built to deliver a luxury, trustworthy, and modern web experience that converts visitors into site inspection bookings and active real estate buyers.

---

## Target Audience & User Personas
1. **First-Time Land Buyers**: Looking for affordable, verified land with clear titles (C of O, Excision, Gazette) and flexible payment plans.
2. **Seasoned Property Investors**: Seeking high-yield strategic real estate opportunities (Ibeju-Lekki, Epe, Chevron/Lekki corridor) for capital appreciation.
3. **Diaspora Buyers**: Require transparent, remote-friendly property inspection booking and direct contact via WhatsApp/Email to eliminate fraud risks.
4. **Commercial & Institutional Clients**: Looking for larger acreage for commercial developments or joint ventures.

---

## Core Brand Values & Promises
- **Verified Property Documentation**: All listed estates undergo thorough legal title verification.
- **Transparent Transactions**: No hidden fees, clear payment terms, and direct ownership documentation.
- **Strategic Locations**: Properties situated in high-growth infrastructure corridors.
- **Customer Support**: Direct advisory access via structured contact forms, inspection scheduling, and interactive WhatsApp chat.

---

## Technical Stack & Architecture

### Core Technologies
- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool / Bundler**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (modern CSS engine with custom HSL theme tokens)
- **Icons**: [Lucide React](https://lucide.dev/) (`lucide-react`)
- **Version Control**: Git & GitHub (`Faweezee/iloshe-antigravity`)

### Architecture Pattern
- **Single Page Application (SPA)** with reactive state-driven navigation (`activePage` state).
- **Component Hierarchy**:
  - `src/components/layout/`: Global Shell (Navbar, Footer, WhatsAppWidget, InspectionModal).
  - `src/components/home/`: Dedicated sections for HomePage (HeroBanner, FeaturedEstates, ProcessSteps, PromiseChecklist, TestimonialSlider).
  - `src/components/estates/`: Property details modal & card grids.
  - `src/components/ui/`: Modal dialogs, article details reader, interactive widgets.
  - `src/pages/`: Main page views (`HomePage`, `EstatesPage`, `ServicesPage`, `AboutPage`, `ContactPage`, `GuidePage`).
  - `src/data/`: Centralized static data schemas (`estatesData.js`, `guidesData.js`, `assetsManifest.js`).

---

## Key Files & Entry Points
- `src/main.jsx`: React root mounting script.
- `src/App.jsx`: Global application state, routing controller, modal state provider.
- `src/index.css`: Design system tokens (colors, fonts, glassmorphism utilities, scroll behavior).
- `vite.config.js`: Vite configuration with `@tailwindcss/vite` plugin.
- `package.json`: Project scripts (`dev`, `build`, `preview`) and dependency declarations.
