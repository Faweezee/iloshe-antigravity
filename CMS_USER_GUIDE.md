# Client CMS & Admin User Guide — Iloshe Properties

Welcome to your **Iloshe Properties Content Management System (CMS)**. This comprehensive guide provides step-by-step instructions for company administrators, land coordinators, and staff to manage property listings, blog articles, client testimonials, and inspection bookings.

---

## 1. Accessing the CMS Admin Portal & Account Setup

### A. Accessing the Portal
Navigate to:
```text
https://ilosheproperties.com.ng/admin/
```
*(Or your active deployment URL: `https://ilosheproperties.netlify.app/admin/`)*

### B. Decap CMS Publishing Buttons Explained

When creating or editing content in Decap CMS, you will see a top **Publish** dropdown with three options:

1. **Publish Now**:
   - Immediately saves the entry, commits it to GitHub, and publishes it live to the website.
2. **Publish and Create New**:
   - Saves and publishes the current entry, then opens a fresh blank form so you can immediately add another property listing, blog post, or testimonial.
3. **Publish and Duplicate**:
   - Saves and publishes the current entry, then creates an exact duplicate copy of it — ideal for quickly adding another estate listing in the same region without re-typing infrastructure or legal details!

---

## 2. Managing Content Collections (Estates, Blog, Testimonials)

### A. Estate Property Listings (`estates`)

#### How to Add / Edit an Estate Listing:
1. Click **Estate Property Listings** on the left menu.
2. Click **+ New Estates** (or select an existing estate to edit).
3. **Field Examples:**
   - **Estate Name**: `Iloshe Imperial Haven`
   - **Tagline**: `High-Yield Residential & Investment Plots in Fast-Growing Epe Corridor`
   - **Location**: `Ketu-Epe Expressway, Lagos State`
   - **Region Corridor**: Select `Epe`
   - **Category**: Select `Residential`
   - **Display Price**: `₦5,500,000`
   - **Numeric Price (for filters)**: `5500000`
   - **Legal Title**: `Certificate of Occupancy (C of O)`
   - **Verification Badge**: `Verified C of O`
   - **Plot Size**: `500 SQM`
   - **Payment Plan**: `Up to 12 Months Flexible Plan`
   - **Initial Deposit**: `₦500,000`
   - **Status Badge**: `Selling Fast`
   - **Cover Image**: Upload property photograph (`.jpg`, `.png`, or `.webp`)
   - **Infrastructure List**: Add items (`Perimeter Fencing & Gatehouse`, `Interlocked Roads`, `Instant Physical Allocation`)
4. Click **Publish Now**.

#### How to Delete an Estate Listing:
- Select the estate listing, click **Delete entry** at the top right. It will be removed live from the site!

---

### B. Blog & Market Insights (`blog`)

#### How to Add / Edit a Blog Article:
1. Click **Blog & Market Insights** on the left menu.
2. Click **+ New Blog & Market Insights**.
3. **Field Examples:**
   - **Article Title**: `5 Critical Questions Before Buying Land in Epe`
   - **Category**: Select `Land Verification`
   - **Read Time**: `5 min read`
   - **Publish Date**: Select current date
   - **Summary**: `A practical guide for everyday buyers on inspecting land coordinates...`
   - **Full Body Content**: Write or paste article text. Supports `# Headings`, `**bold text**`, and `- bullet points`.
   - **Key Takeaways**: Add key bullet points for the summary box.
4. Click **Publish Now**.

---

### C. Client Testimonials (`testimonials`)

#### How to Add / Edit a Client Review:
1. Click **Client Testimonials** on the left menu.
2. Click **+ New Client Testimonials**.
3. **Field Examples:**
   - **Client Name**: `Dr. Emmanuel Adeleke`
   - **Role & Location**: `Diaspora Investor (United Kingdom)`
   - **Estate Purchased**: `Iloshe Imperial Haven, Epe`
   - **Testimonial Quote**: `"Buying land in Lagos from London used to carry immense risk. Iloshe Properties managed everything with legal clarity..."`
   - **Client Photo**: Upload square headshot (`400 x 400 px`).
4. Click **Publish Now**.

---

## 3. Hosting & Domain Setup (Netlify / Vercel / Hostinger)

### Will the CMS work if we deploy to Vercel or connect a custom Hostinger domain (`ilosheproperties.com.ng`)?
- **YES!**
- Decap CMS operates directly via your GitHub repository (`Faweezee/iloshe-antigravity`).
- Even if you host your domain (`ilosheproperties.com.ng`) on Vercel or Hostinger, your Decap CMS admin portal at `https://ilosheproperties.com.ng/admin/` will authenticate securely and push updates directly to GitHub, automatically updating your live site!

---

## 4. Technical Support & Image Guidelines

- **Image Formats**: Use `.jpg`, `.png`, or `.webp`.
- **Recommended Resolutions**:
  - Property Cover Photos: `800 x 600 px`
  - Blog Header Images: `1200 x 800 px`
  - Client Testimonial Headshots: `400 x 400 px` (Square)
- **Automatic Live Updates**: Every time you click **Publish**, the website automatically commits the changes to GitHub and updates your live site within 1–2 minutes!
