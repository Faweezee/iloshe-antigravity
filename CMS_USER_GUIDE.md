# Client CMS & Admin User Guide — Iloshe Properties

Welcome to your official **Iloshe Properties Content Management System (CMS) Guide**. This comprehensive document provides step-by-step instructions for company administrators, management, land coordinators, and staff to log in, add new property listings, update pricing, post market articles, and manage client testimonials — all without writing code.

---

## 1. How Client Login Works (OAuth Authentication)

Your CMS is powered by **Decap CMS** connected directly to your GitHub repository (**`Faweezee/iloshe-site`**). 

When staff or admins navigate to the Admin Portal, they click **"Login with GitHub"** to authenticate securely.

### Accessing the Portal:
- **Active Vercel URL:** `https://iloshe-antigravity.vercel.app/admin/`
- **Custom Domain (When Live):** `https://ilosheproperties.com/admin/` *(or `https://ilosheproperties.com.ng/admin/`)*

### Adding Staff / Client Accounts to the CMS:
To grant a team member or client access to manage content:
1. Have the client create a free GitHub account at [github.com/signup](https://github.com/signup) using their email address.
2. Go to your repository settings at [github.com/Faweezee/iloshe-site/settings/access](https://github.com/Faweezee/iloshe-site/settings/access).
3. Click **"Add people"** and enter the client's GitHub username or email address.
4. Grant them **Write** access (or Collaborator role).
5. Once they accept the email invitation, they can immediately log in at `https://iloshe-antigravity.vercel.app/admin/`!

---

## 2. Decap CMS Publishing Buttons & Workflows

When editing or creating content in the CMS dashboard, you will see a top **Publish** button with three options:

1. **Publish Now**:
   - Immediately saves the entry, commits it to GitHub, and updates your live website in under 60 seconds.
2. **Publish and Create New**:
   - Saves and publishes the current entry, then opens a blank form so you can immediately add another property listing or blog post.
3. **Publish and Duplicate**:
   - Saves the current entry and creates an exact duplicate copy — perfect for quickly adding another estate listing in the same region without re-typing infrastructure or payment terms!

---

## 3. Managing Content Collections (Estates, Blog & Insights, Testimonials)

### A. Estate Property Listings (`estates`)

#### How to Add / Edit an Estate Listing:
1. Click **Estate Property Listings** on the left navigation menu.
2. Click **+ New Estates** (or select an existing estate to update prices/details).
3. **Key Fields to Fill:**
   - **Estate Name**: e.g., `Iloshe Imperial Haven`
   - **Tagline**: e.g., `High-Yield Residential & Investment Plots in Fast-Growing Epe Corridor`
   - **Location**: e.g., `Ketu-Epe Expressway, Lagos State`
   - **Region Corridor**: Select `Epe` (or `Magboro`, `Ibeju-Lekki`, `Ipaja`, `Ikorodu`, `Ota`)
   - **Category**: Select `Residential` or `Commercial`
   - **Display Price**: e.g., `₦5,500,000`
   - **Numeric Price (for filtering)**: `5500000`
   - **Legal Title**: e.g., `Certificate of Occupancy (C of O)`
   - **Verification Badge**: e.g., `100% Charted & Verified`
   - **Plot Size**: e.g., `300 SQM & 500 SQM`
   - **Payment Plan**: e.g., `Outright (1-3 Mos), 6 Mos & 12 Mos Plans`
   - **Initial Deposit**: e.g., `Flexible Monthly Installments`
   - **Status Badge**: e.g., `Selling Fast`
   - **Cover Image**: Upload property photograph (`.jpg`, `.png`, or `.webp`)
   - **Gallery Images**: Add secondary site inspection and allocation photos.
   - **Pricing Breakdown Grid**:
     - Plot Size: `500 SQM` | 1-3 Mos: `₦10,000,000` | 6 Mos: `₦14,000,000` | 12 Mos: `₦18,000,000`
   - **Infrastructure List**: Add features (`Perimeter Fencing & Gatehouse`, `Interlocked Roads`, `Instant Physical Allocation`)
4. Click **Publish Now**.

---

### B. Blog & Market Insights (`blog`)

#### How to Add / Edit a Market Guide / Article:
1. Click **Blog & Market Insights** on the left menu.
2. Click **+ New Blog & Market Insights**.
3. **Key Fields to Fill:**
   - **Article Title**: e.g., `5 Critical Questions Before Buying Land in Epe`
   - **Category**: Select `Land Verification`, `Legal & Titles`, `Payment Strategy`, or `Market Insights`
   - **Read Time**: e.g., `5 min read`
   - **Publish Date**: Select current date
   - **Summary**: `A practical guide for everyday buyers on inspecting land coordinates...`
   - **Full Body Content**: Write or paste article text. Supports headings, bold text, and bullet points.
   - **Key Takeaways**: Add key summary points for the sidebar callout box.
4. Click **Publish Now**.

---

### C. Client Testimonials (`testimonials`)

#### How to Add / Edit a Client Review:
1. Click **Client Testimonials** on the left menu.
2. Click **+ New Client Testimonials**.
3. **Key Fields to Fill:**
   - **Client Name**: e.g., `Dr. Emmanuel Adeleke`
   - **Role & Location**: e.g., `Diaspora Investor (United Kingdom)`
   - **Estate Purchased**: e.g., `Iloshe Imperial Haven, Epe`
   - **Testimonial Quote**: e.g., `"Buying land in Lagos from London used to carry immense risk. Iloshe Properties managed everything with legal clarity..."`
4. Click **Publish Now**.

---

## 4. Deploying Custom Domain (`ilosheproperties.com` / `ilosheproperties.com.ng`)

When you purchase your domain (`ilosheproperties.com` or `ilosheproperties.com.ng`), follow these simple steps to link it to Vercel:

1. Log in to [vercel.com](https://vercel.com) and open your `iloshe-site` project.
2. Go to **Settings** → **Domains**.
3. Type your domain (e.g., `ilosheproperties.com`) and click **Add**.
4. Vercel will display the exact DNS records:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME Record**: `www` → `cname.vercel-dns.com`
5. Log in to your domain registrar (e.g., Namecheap, Hostinger, Whogohost) and enter those two DNS records.
6. Vercel automatically generates a free SSL certificate (`https://`). Your CMS login will automatically work seamlessly at `https://ilosheproperties.com/admin/`!

---

## 5. Summary & Sharing Guide

To share this document with non-technical clients or staff via **Google Docs**:
1. Open [docs.google.com](https://docs.google.com) and click **Blank document**.
2. Copy and paste the contents of this file (`CMS_USER_GUIDE.md`) directly into Google Docs.
3. Click **Share** → Change access to *"Anyone with the link can view"* → Copy Link!
