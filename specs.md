# Iloshe Properties — Master Specifications & Asset Manifest (`specs.md`)

This document serves as the developer specifications, content mapping, asset pipeline directory, and CMS schema specification for **Iloshe Properties & Investment Limited**.

---

## 1. Executive Content & Page Architecture

The platform consists of 6 primary top-level navigation routes with quiet dropdown sub-menus mapping to all 10 pages in `website-brief.md`:

| Primary Nav Route | URL Hash | Included Subsections / Merged Pages | Key Content & Copy Specs |
| :--- | :--- | :--- | :--- |
| **Home** | `/#/home` | Hero Banner, Parallax Reveal, Pure Typography Trust Metrics, Promise, Featured Estates, Process, Testimonial Slider | Official Headline: *"Build Wealth Through Smart Real Estate Investments"*. Focus on legal security, C of O verification, and physical pegging. |
| **About Us** | `/#/about` | Our Story, Vision & Mission, Core Values + **Merged "Why Iloshe" Confidence Grid** (`#why-iloshe`) | Story: Founded to make genuine land ownership accessible and transparent. Zero omonile risk guarantee. |
| **Our Estates** | `/#/estates` | Catalog Directory, Filter Bar, Interactive Estate Detail Drawer | Displays verified plots with pricing, legal title, plot size, deposit, infrastructure checklist, and WhatsApp inquiry. |
| **Services** | `/#/services` | Autoplay Inspection Video Hero, Core Advisory Grid, In-Field Execution Strip | **Landing Video Hero:** Full-bleed muted looping background video (`/assets/hero/inspection-video.mp4`) with transparent overlay text. |
| **Investment Guide & Blog** | `/#/guide` | Property Guides, **CMS Blog Hub** (`#blog`), **Searchable FAQ Accordion** (`#faq`) | Guides & articles on land titles, survey charting, and micro-installments + CMS Blog Reader. |
| **Contact** | `/#/contact` | Office Info, Phone Lines, Direct WhatsApp Trigger, Contact Form | Headquarters: 167 Iju Road, Fagba Bus Stop, Lagos, Nigeria. Phone: +234 911 277 7778. |

---

## 2. Asset Pipeline Directory & Folder Structure

Client image assets should be placed in `public/assets/` using the following folder structure:

```
public/assets/
├── brand/           # Official Logo (PNG/SVG), Favicon (32x32px & 512x512px PNG)
├── hero/            # Hero Background (1920x1080px) & Inspection Video (inspection-video.mp4)
├── estates/         # Property cover photos (800x600px) & gallery images
├── testimonials/    # Client headshots & allocation ceremony photos (400x400px)
└── team/            # Executive staff & leadership advisory photos (1200x800px)
```

### Automatic Fallback Rules
- All component image references pass through `src/data/assetsManifest.js`.
- If a client drops a new file into `public/assets/brand/logo.png`, `public/assets/hero/inspection-video.mp4`, etc., the website automatically picks it up cleanly.
- If a file is missing, `assetsManifest.js` provides high-resolution default fallbacks so the UI never displays broken image icons.

---

## 3. Pre-Defined CMS Collections (`/public/admin/config.yml`)

The platform includes **Decap CMS** embedded at `/admin`. The fields below define the CMS collection schemas:

### A. Estate Listings (`estates`)
- `id` (String / Slug)
- `name` (String, e.g. "Iloshe Imperial Haven")
- `location` (String, e.g. "Ketu-Epe Expressway, Lagos State")
- `region` (Select: Epe | Ibeju-Lekki | Magboro | Ipaja | Ikorodu | Ota)
- `category` (Select: Residential | Commercial | Waterfront)
- `price` (String, e.g. "₦5,500,000")
- `numericPrice` (Number, for search filter slider)
- `title` (String, e.g. "Certificate of Occupancy (C of O)")
- `plotSize` (String, e.g. "500 SQM")
- `initialDeposit` (String, e.g. "₦500,000")
- `status` (String, e.g. "Selling Fast")
- `image` (Image Upload)
- `gallery` (List of Image Uploads)
- `overview` (Markdown Text)
- `infrastructure` (List of Strings)

### B. Blog Articles (`blog`)
- `id` (String / Slug)
- `title` (String)
- `category` (Select: Land Verification | Legal & Titles | Payment Strategy | Market Insights)
- `readTime` (String, e.g. "5 min read")
- `summary` (Text)
- `body` (Markdown Body Text)
- `takeaways` (List of Strings)
- `featuredImage` (Image Upload)

### C. Client Testimonials (`testimonials`)
- `name` (String)
- `role` (String, e.g. "Diaspora Investor (UK)")
- `location` (String, e.g. "Iloshe Imperial Haven, Epe")
- `quote` (Text)
- `photo` (Image Upload)

---

## 4. Developer Legal Protection & Guardrails

To protect developers and the client from legal liability:

1. **No Unauthorized Financial Guarantees:** Never state "100% money back guarantee", "guaranteed 50% returns", or binding financial promises unless explicitly authorized in official corporate documentation.
2. **Process-Oriented Claims Only:** Frame credibility on verifiable processes (e.g. *"Independent land registry survey charting"*, *" Litigated-free land titles"*, *"Structured payment plans"*).
3. **Legal Disclaimer Footer:** Every page includes the standard disclaimer:
   > *"Property details, pricing, and document availability are subject to contract and official verification at the time of inquiry."*
