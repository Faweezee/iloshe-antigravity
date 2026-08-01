# Client CMS User Guide — Iloshe Properties

Welcome to your **Iloshe Properties Content Management System (CMS)**. This guide provides step-by-step instructions for company administrators and staff to add, edit, or remove property listings, blog articles, and client testimonials without writing code.

---

## 1. Accessing the CMS Admin Portal

1. Open your web browser and navigate to:
   ```
   https://ilosheproperties.com.ng/admin/
   ```
   *(For local developer testing: `http://localhost:5173/admin/`)*
2. Click **Log In with Netlify Identity** (or your assigned admin credentials).
3. Once logged in, you will see the **Decap CMS Dashboard** displaying your content collections on the left sidebar:
   - **Estate Property Listings**
   - **Blog & Market Insights**
   - **Client Testimonials**

---

## 2. Managing Estate Property Listings

### How to Add a New Estate Listing:
1. Click **Estate Property Listings** on the left menu.
2. Click the green **New Estates** button at the top right.
3. Fill in the property details:
   - **Estate Name**: (e.g. *Iloshe Imperial Haven*)
   - **Location**: (e.g. *Ketu-Epe Expressway, Lagos State*)
   - **Region Corridor**: Select *Epe*, *Ibeju-Lekki*, etc.
   - **Category**: Select *Residential*, *Commercial*, or *Waterfront*.
   - **Display Price**: (e.g. *₦5,500,000 / plot*)
   - **Numeric Price**: (e.g. *5500000* for the budget range slider)
   - **Legal Title**: (e.g. *Certificate of Occupancy (C of O)*)
   - **Plot Size**: (e.g. *500 SQM*)
   - **Initial Deposit**: (e.g. *₦500,000*)
   - **Cover Image**: Upload a high-resolution property photograph.
   - **Infrastructure List**: Add key features (*Perimeter Fencing*, *Solar Lighting*, *Instant Allocation*).
4. Click **Publish** (or **Save as Draft**). The website will automatically update live!

---

## 3. Publishing Blog & Market Insights Articles

### How to Write a New Article:
1. Click **Blog & Market Insights** on the left menu.
2. Click **New Blog**.
3. Fill in the fields:
   - **Article Title**: (e.g. *5 Critical Questions Before Buying Land in Epe*)
   - **Category**: Select *Land Verification*, *Legal & Titles*, etc.
   - **Read Time**: (e.g. *4 min read*)
   - **Publish Date**: Choose date and time.
   - **Summary**: Enter a short 2-sentence summary.
   - **Full Body Content**: Write or paste your article text. Supports bold text, headings, and bullet points.
4. Click **Publish**.

---

## 4. Technical Support & Image Guidelines

- **Image Formats**: Use `.jpg`, `.png`, or `.webp`.
- **Recommended Resolutions**:
  - Property Cover Photos: `800 x 600 px`
  - Blog Header Images: `1200 x 800 px`
  - Client Testimonial Headshots: `400 x 400 px` (Square)
- **Automatic Site Updates**: Every time you click **Publish**, the website automatically commits the content to GitHub and rebuilds the live site within 1–2 minutes!
