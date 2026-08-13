import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import InspectionModal from './components/layout/InspectionModal';
import WhatsAppWidget from './components/layout/WhatsAppWidget';
import { ASSETS } from './data/assetsManifest';
import { ESTATES_DATA } from './data/estatesData';
import { getCMSEstates } from './utils/cmsLoader';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EstatesPage from './pages/EstatesPage';
import ServicesPage from './pages/ServicesPage';
import GuidePage from './pages/GuidePage';
import ContactPage from './pages/ContactPage';
import InspectionPage from './pages/InspectionPage';
import EstateDetailPage from './pages/EstateDetailPage';
import ArticleDetailPage from './pages/ArticleDetailPage';

export default function App() {
  // Parse page and sub-resource ID from URL Hash (e.g., #/estates/iloshe-garden-abule-pan)
  const parseHash = () => {
    const rawHash = window.location.hash.replace(/^#\/?/, '');
    const parts = rawHash.split('/');
    const route = parts[0] || 'home';
    const param = parts[1] || null;

    if (route === 'estates' && param) {
      return { page: 'estate-detail', id: param };
    }
    if (route === 'estate-detail') {
      const searchId = new URLSearchParams(window.location.hash.split('?')[1] || '').get('id') || param;
      return { page: 'estate-detail', id: searchId };
    }

    const validPages = ['home', 'about', 'estates', 'services', 'guide', 'contact', 'inspection', 'estate-detail', 'article-detail'];
    return { page: validPages.includes(route) ? route : 'home', id: null };
  };

  const initialRoute = parseHash();
  const [activePage, setActivePageState] = useState(initialRoute.page);
  const [activeEstateId, setActiveEstateId] = useState(initialRoute.id);
  const [activeEstateDetail, setActiveEstateDetail] = useState(null);
  
  const [inspectionModalOpen, setInspectionModalOpen] = useState(false);
  const [selectedEstateName, setSelectedEstateName] = useState('');
  const [activeArticleDetail, setActiveArticleDetail] = useState(null);

  // Redirect to CMS Admin Portal if /admin or #/admin is accessed directly
  useEffect(() => {
    const pathname = window.location.pathname;
    const hash = window.location.hash;
    if (pathname.includes('/admin') || hash.includes('admin')) {
      window.location.href = '/admin/index.html';
    }
  }, []);

  // Update estate detail object whenever activeEstateId or CMS data changes
  useEffect(() => {
    if (activeEstateId) {
      const allEstates = getCMSEstates();
      const match = allEstates.find(e => e.id === activeEstateId) || ESTATES_DATA.find(e => e.id === activeEstateId);
      if (match) {
        setActiveEstateDetail(match);
      }
    }
  }, [activeEstateId]);

  // Sync state with URL hash & listen to browser reload / back / forward navigation
  const setActivePage = (pageId) => {
    setActivePageState(pageId);
    if (pageId !== 'estate-detail') {
      setActiveEstateId(null);
      window.location.hash = `/${pageId}`;
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const routeInfo = parseHash();
      setActivePageState(routeInfo.page);
      if (routeInfo.id) {
        setActiveEstateId(routeInfo.id);
        const allEstates = getCMSEstates();
        const match = allEstates.find(e => e.id === routeInfo.id) || ESTATES_DATA.find(e => e.id === routeInfo.id);
        if (match) setActiveEstateDetail(match);
      }
    };

    if (!window.location.hash) {
      window.location.hash = `/${activePage}`;
    } else {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // 1. Direct Page Route Navigation to Dedicated Inspection Booking Page
  const handleNavigateToInspection = (estateName = '') => {
    setSelectedEstateName(estateName);
    setActivePage('inspection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 2. Direct Dedicated Page Route Navigation for Property Detail View (Preserves URL Hash for Refresh)
  const handleSelectEstate = (estate) => {
    setActiveEstateDetail(estate);
    setActiveEstateId(estate.id);
    setActivePageState('estate-detail');
    window.location.hash = `/estates/${estate.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 3. Direct Dedicated Page Route Navigation for Article Reader View
  const handleSelectArticle = (article) => {
    setActiveArticleDetail(article);
    setActivePage('article-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 4. Consultation & Legal Advisory Triggers (WhatsApp/Email)
  const handleOpenConsultation = () => {
    const text = encodeURIComponent("Hello Iloshe Properties, I would like to request a 1-on-1 Real Estate Investment Consultation.");
    window.open(`https://wa.me/${ASSETS.contact.whatsapp}?text=${text}`, '_blank');
  };

  const handleOpenLegalAdvisory = () => {
    const text = encodeURIComponent("Hello Iloshe Properties, I have an inquiry regarding Property Title Verification & Legal Due Diligence.");
    window.open(`https://wa.me/${ASSETS.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#121824]">
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onNavigateToInspection={handleNavigateToInspection}
      />

      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage 
            setActivePage={setActivePage} 
            onNavigateToInspection={handleNavigateToInspection}
            onSelectEstate={handleSelectEstate}
          />
        )}
        {activePage === 'about' && (
          <AboutPage 
            setActivePage={setActivePage} 
            onNavigateToInspection={handleNavigateToInspection}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
        {activePage === 'estates' && (
          <EstatesPage 
            onNavigateToInspection={handleNavigateToInspection}
            onSelectEstate={handleSelectEstate}
          />
        )}
        {activePage === 'services' && (
          <ServicesPage 
            onNavigateToInspection={handleNavigateToInspection}
            onOpenConsultation={handleOpenConsultation} 
          />
        )}
        {activePage === 'guide' && (
          <GuidePage 
            onNavigateToInspection={handleNavigateToInspection}
            onSelectArticle={handleSelectArticle}
            onOpenLegalAdvisory={handleOpenLegalAdvisory}
          />
        )}
        {activePage === 'contact' && (
          <ContactPage />
        )}
        {activePage === 'inspection' && (
          <InspectionPage initialEstateName={selectedEstateName} />
        )}
        {activePage === 'estate-detail' && (
          <EstateDetailPage 
            estateId={activeEstateId}
            estate={activeEstateDetail}
            onNavigateToInspection={handleNavigateToInspection}
            setActivePage={setActivePage}
          />
        )}
        {activePage === 'article-detail' && (
          <ArticleDetailPage 
            article={activeArticleDetail}
            onOpenLegalAdvisory={handleOpenLegalAdvisory}
            setActivePage={setActivePage}
          />
        )}
      </main>

      <Footer 
        setActivePage={setActivePage} 
        onNavigateToInspection={handleNavigateToInspection} 
      />
      
      {/* Inspection Booking Quick Modal */}
      <InspectionModal 
        isOpen={inspectionModalOpen} 
        onClose={() => setInspectionModalOpen(false)} 
        selectedEstateName={selectedEstateName} 
      />

      <WhatsAppWidget />
    </div>
  );
}
