# Client CMS & Admin User Guide — Iloshe Properties

Welcome to your **Iloshe Properties Content Management System (CMS)**. This comprehensive guide provides step-by-step instructions for company administrators, land coordinators, and staff to manage property listings, blog articles, client testimonials, and inspection bookings.

---

## 1. Accessing the CMS Admin Portal & Account Setup

### A. Accessing the Portal
1. Open your web browser and navigate to:
   ```text
   https://ilosheproperties.com.ng/admin/
   ```
   *(For local development testing: `http://localhost:5173/admin/index.html`)*

### B. Setting Up Admin User Accounts (Netlify Identity Authentication)
When your website is deployed on Netlify / Vercel, access is secured via **Netlify Identity**:

1. **Step 1 — Enable Netlify Identity:**
   - Log into your Netlify Admin Dashboard at [app.netlify.com](https://app.netlify.com).
   - Select the `iloshe-properties` site project.
   - Navigate to **Site Configuration** → **Identity** and click **Enable Identity**.

2. **Step 2 — Configure Git Gateway:**
   - In **Identity Services**, scroll to **Services** → **Git Gateway** and click **Enable Git Gateway**. This authorizes Decap CMS to publish changes directly to your site repository.

3. **Step 3 — Invite Team Members & Create Accounts:**
   - Go to the **Identity** tab in your Netlify dashboard and click **Invite Users**.
   - Enter your company email addresses (e.g. `info@ilosheproperties.com.ng`, `admin@ilosheproperties.com.ng`).
   - Invited team members will receive an automated email with an **Accept Invite & Set Password** link.
   - Once a team member sets their password, they can immediately log into `https://ilosheproperties.com.ng/admin/`!

### C. Local Development Login (`local_backend: true`)
During local development, Decap CMS automatically runs in **Local Backend Mode**:
- Access `http://localhost:5173/admin/index.html` in your browser.
- Click the **Login** button. It will automatically authorize local editing without requiring an internet connection or password!

---

## 2. Managing Estate Property Listings

### How to Add a New Estate Listing:
1. Click **Estate Property Listings** on the left sidebar menu.
2. Click the green **New Estates** button at the top right.
3. Fill in the property details:
   - **Estate Name**: (e.g. *Iloshe Imperial Haven*)
   - **Location**: (e.g. *Ketu-Epe Expressway, Lagos State*)
   - **Region Corridor**: Select *Epe*, *Ibeju-Lekki*, *Magboro*, etc.
   - **Category**: Select *Residential*, *Commercial*, or *Waterfront*.
   - **Display Price**: (e.g. *₦5,500,000 / plot*)
   - **Numeric Price**: (e.g. *5500000* for the budget range slider)
   - **Legal Title**: (e.g. *Certificate of Occupancy (C of O)*)
   - **Plot Size**: (e.g. *500 SQM*)
   - **Initial Deposit**: (e.g. *₦500,000*)
   - **Cover Image**: Upload a high-resolution property photograph.
   - **Infrastructure List**: Add key features (*Perimeter Fencing*, *Solar Lighting*, *Instant Physical Allocation*).
4. Click **Publish** (or **Save as Draft**). The website will automatically update live in 1–2 minutes!

---

## 3. Managing Form Submissions & Site Inspection Requests

### How Site Inspection Requests Are Received & Managed:

1. **Instant WhatsApp Notifications (Primary for Client Coordinators):**
   - Whenever an investor submits a site inspection request on `/#/inspection` or books via WhatsApp, a pre-formatted message is automatically generated and sent directly to Iloshe's official WhatsApp line (`+234 911 277 7778`).
   - **Notification Format:**
     ```text
     📌 Estate: Iloshe Imperial Haven
     📅 Preferred Date: 2026-08-15 (10:00 AM Morning)
     👤 Name: Chief Adeleke Johnson
     📞 Phone: +234 801 234 5678
     ✉️ Email: adeleke@investor.com
     ```

2. **Data Backup Logs:**
   - Every submitted booking is logged into local browser storage (`iloshe_inspection_bookings`) and can be exported as a JSON/CSV spreadsheet for record keeping.

3. **Time Slot & Availability Management:**
   - Site inspection dates enforcement (`min={today}`) prevents past-date submissions.
   - Coordinators receive preferred time slots (*10:00 AM*, *01:00 PM*, *04:00 PM*) as requests and confirm driver/plot coordinator availability directly with the client.

---

## 4. Publishing Blog & Market Insights Articles

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

## 5. Technical Support & Image Guidelines

- **Image Formats**: Use `.jpg`, `.png`, or `.webp`.
- **Recommended Resolutions**:
  - Property Cover Photos: `800 x 600 px`
  - Blog Header Images: `1200 x 800 px`
  - Client Testimonial Headshots: `400 x 400 px` (Square)
- **Automatic Site Deployment**: Every time you click **Publish**, the website automatically commits the changes to GitHub and deploys the live update!
