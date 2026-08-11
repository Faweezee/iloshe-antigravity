import { ESTATES_DATA as defaultEstates } from '../data/estatesData';
import { ARTICLES_DATA as defaultArticles } from '../data/guidesData';

// Simple Frontmatter Parser for Markdown files
function parseFrontmatter(rawContent) {
  if (!rawContent || typeof rawContent !== 'string') return { data: {}, body: '' };

  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: rawContent.trim() };

  const frontmatterStr = match[1];
  const body = match[2].trim();
  const data = {};

  let currentKey = null;
  let isList = false;

  frontmatterStr.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;

    // List item: - "Value" or - photo: "Value"
    if (trimmed.startsWith('- ') && currentKey && isList) {
      let listVal = trimmed.replace(/^-\s*/, '');
      if (listVal.startsWith('photo:')) {
        listVal = listVal.replace(/^photo:\s*/, '');
      }
      listVal = listVal.replace(/^["']|["']$/g, '');

      if (Array.isArray(data[currentKey])) {
        data[currentKey].push(listVal);
      }
      return;
    }

    // Key-value pair: key: value
    const colonIdx = line.indexOf(':');
    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim();
      let value = line.slice(colonIdx + 1).trim();

      // Clean quotes
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      if (value === 'true') value = true;
      else if (value === 'false') value = false;
      else if (!isNaN(Number(value)) && value !== '') value = Number(value);

      if (value === '') {
        currentKey = key;
        isList = true;
        data[key] = [];
      } else {
        currentKey = key;
        isList = false;
        data[key] = value;
      }
    }
  });

  return { data, body };
}

// 1. Get All Dynamic CMS Estates
export function getCMSEstates() {
  try {
    const modules = import.meta.glob('/public/content/estates/*.md', { query: '?raw', import: 'default', eager: true });
    const cmsEstates = Object.entries(modules).map(([path, content]) => {
      const { data, body } = parseFrontmatter(content);
      const filename = path.split('/').pop().replace(/\.md$/, '');
      const defaultMatch = defaultEstates.find(e => e.id === data.id || e.id === filename) || {};

      const parsedGallery = Array.isArray(data.gallery) && data.gallery.length > 0
        ? data.gallery.map(item => typeof item === 'object' && item?.photo ? item.photo : item)
        : defaultMatch.gallery || [data.image];

      const hasValidPricingGrid = Array.isArray(data.pricingGrid) && 
        data.pricingGrid.length > 0 && 
        typeof data.pricingGrid[0] === 'object' && 
        data.pricingGrid[0]?.size && 
        data.pricingGrid[0]?.outright;

      const validPricingGrid = hasValidPricingGrid
        ? data.pricingGrid
        : (defaultMatch.pricingGrid || null);

      const hasValidFaqs = Array.isArray(data.faqs) && 
        data.faqs.length > 0 && 
        typeof data.faqs[0] === 'object' && 
        data.faqs[0]?.question;

      const validFaqs = hasValidFaqs
        ? data.faqs
        : (defaultMatch.faqs || null);

      return {
        id: data.id || filename,
        name: data.name || defaultMatch.name || filename,
        tagline: data.tagline || defaultMatch.tagline || '',
        location: data.location || defaultMatch.location || '',
        region: data.region || defaultMatch.region || 'Ibeju-Lekki',
        category: data.category || defaultMatch.category || 'Residential',
        price: data.price || defaultMatch.price || '₦6,000,000 - ₦18,000,000',
        numericPrice: data.numericPrice || defaultMatch.numericPrice || 6000000,
        title: data.title || defaultMatch.title || 'Excision',
        verificationBadge: data.verificationBadge || defaultMatch.verificationBadge || 'Excision Title',
        plotSize: data.plotSize || defaultMatch.plotSize || '300 SQM & 500 SQM',
        paymentPlan: data.paymentPlan || defaultMatch.paymentPlan || 'Outright (1-3 Mos), 6 Mos & 12 Mos Plans',
        initialDeposit: data.initialDeposit || defaultMatch.initialDeposit || 'Flexible Monthly Installments',
        status: data.status || defaultMatch.status || 'Selling Fast',
        featured: data.featured !== undefined ? data.featured : (defaultMatch.featured !== undefined ? defaultMatch.featured : true),
        image: data.image || defaultMatch.image || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        gallery: parsedGallery,
        pricingGrid: validPricingGrid,
        faqs: validFaqs,
        overview: body || data.overview || defaultMatch.overview || '',
        infrastructure: Array.isArray(data.infrastructure) ? data.infrastructure : (defaultMatch.infrastructure || ["Instant Physical Allocation", "Verified Survey"])
      };
    });

    return cmsEstates.length > 0 ? cmsEstates : defaultEstates;
  } catch (err) {
    console.warn('Falling back to default estates:', err);
    return defaultEstates;
  }
}

// 2. Get All Dynamic CMS Articles / Blog Posts
export function getCMSArticles() {
  try {
    const modules = import.meta.glob('/public/content/blog/*.md', { query: '?raw', import: 'default', eager: true });
    const cmsArticles = Object.entries(modules).map(([path, content]) => {
      const { data, body } = parseFrontmatter(content);
      const filename = path.split('/').pop().replace(/\.md$/, '');
      return {
        id: data.id || filename,
        title: data.title || filename,
        category: data.category || 'Land Verification',
        readTime: data.readTime || '5 min read',
        summary: data.summary || '',
        body: body || data.body || '',
        takeaways: Array.isArray(data.takeaways) ? data.takeaways : [],
        featuredImage: data.featuredImage || ''
      };
    });

    return cmsArticles.length > 0 ? cmsArticles : defaultArticles;
  } catch (err) {
    console.warn('Falling back to default articles:', err);
    return defaultArticles;
  }
}

// 3. Get All Dynamic CMS Testimonials
export function getCMSTestimonials() {
  try {
    const modules = import.meta.glob('/public/content/testimonials/*.md', { query: '?raw', import: 'default', eager: true });
    const cmsTestimonials = Object.entries(modules).map(([path, content]) => {
      const { data, body } = parseFrontmatter(content);
      const filename = path.split('/').pop().replace(/\.md$/, '');
      return {
        name: data.name || filename,
        role: data.role || 'Property Investor',
        text: data.quote || body || '',
        location: data.location || 'Lagos State',
        image: data.photo || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
      };
    });

    const defaultTestimonialsList = [
      {
        name: "Dr. Emmanuel Adeleke",
        role: "Diaspora Investor (United Kingdom)",
        text: "Buying land in Lagos from London used to carry immense risk. Iloshe Properties managed everything with legal clarity. The site inspection was detailed, and my plot was allocated on schedule.",
        location: "Zenith Gardens, Magboro",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Mrs. Blessing Okonkwo",
        role: "Commercial Enterprise CEO",
        text: "What set Iloshe apart was their flexible 12-month payment structure. I didn't have to strain business liquidity. Today I hold verified title documents safely.",
        location: "Garden Of Praise, Eleko Ibeju-Lekki",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Engr. Tunde Bakare",
        role: "Infrastructure Consultant",
        text: "Their documentation team walked me through verifying land coordinates directly with the Lagos Surveyor General's office. Professionalism at its peak with zero hidden fees.",
        location: "Iloshe's Garden, Abule Pan",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
      }
    ];

    return cmsTestimonials.length > 0 ? cmsTestimonials : defaultTestimonialsList;
  } catch (err) {
    console.warn('Falling back to default testimonials:', err);
    return [];
  }
}
