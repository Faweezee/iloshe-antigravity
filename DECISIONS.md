# Architectural Decision Log (ADR)

This document logs key architectural, structural, and design decisions made throughout the development of the Iloshe Properties web application.

---

## ADR-001: Technology Stack Selection (React 19 + Vite 6 + Tailwind CSS v4)

- **Date**: 2026-07-29
- **Status**: Approved & Implemented
- **Context**: Needed a fast, modern frontend application framework capable of delivering a luxury real estate experience with swift load times and responsive styling.
- **Decision**: Selected **React 19** bundled with **Vite 6** and **Tailwind CSS v4**.
- **Consequences**:
  - Extremely fast HMR during development.
  - Tailwind v4 provides efficient CSS variables and custom utility tokens without legacy config overhead.
  - Zero heavy backend runtime required for client-side evaluation.

---

## ADR-002: Client-Side Modal System for Property Details & Inspection Bookings

- **Date**: 2026-07-29
- **Status**: Approved & Implemented
- **Context**: Users inspecting real estate listings often want to view full details (title, landmarks, pricing) or book a site visit without navigating away from their current page position.
- **Decision**: Implemented global modal components (`EstateDetailModal.jsx`, `InspectionModal.jsx`, `ArticleDetailModal.jsx`) controlled via React state.
- **Consequences**:
  - Preserves user context and scroll position on catalog and guide pages.
  - Reduces page transitions and improves conversion rates for inspection bookings.

---

## ADR-003: Decoupled Data Modules in `src/data/`

- **Date**: 2026-07-29
- **Status**: Approved & Implemented
- **Context**: Needed structured property and article data without hardcoding strings inside JSX component files.
- **Decision**: Created standalone data files (`src/data/estatesData.js`, `src/data/guidesData.js`, `src/data/assetsManifest.js`).
- **Consequences**:
  - Clean separation of UI logic and static content.
  - Future developers can easily replace these JavaScript arrays with `fetch()` calls to a backend REST API or Headless CMS.

---

## ADR-004: Direct Floating WhatsApp Chat Integration

- **Date**: 2026-07-29
- **Status**: Approved & Implemented
- **Context**: Real estate transactions in West Africa / Nigeria heavily rely on instant direct messaging for client trust and quick inquiries.
- **Decision**: Embedded a floating, responsive `WhatsAppWidget.jsx` present on all page layouts.
- **Consequences**:
  - Provides an immediate low-friction communication channel for potential buyers.

---

## ADR-005: Git Branching Strategy & Merging Flow

- **Date**: 2026-07-31
- **Status**: Approved & Implemented
- **Context**: Design refinements and component polish were conducted on a separate experimental branch (`design-experiment`).
- **Decision**: Maintain `design-experiment` for feature & design iterations, then commit, push, and merge into `main` before pushing `main` to origin.
- **Consequences**:
  - Keeps the `main` branch clean and production-ready.
  - Ensures clean git history following Conventional Commits standards.
