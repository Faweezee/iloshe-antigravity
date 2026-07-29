import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import InspectionModal from './components/layout/InspectionModal';
import EstateDetailModal from './components/estates/EstateDetailModal';
import ArticleDetailModal from './components/ui/ArticleDetailModal';
import WhatsAppWidget from './components/layout/WhatsAppWidget';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EstatesPage from './pages/EstatesPage';
import ServicesPage from './pages/ServicesPage';
import GuidePage from './pages/GuidePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  // Helper to read initial page from URL hash (e.g. #/estates -> 'estates')
  const getPageFromHash = () => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    const validPages = ['home', 'about', 'estates', 'services', 'guide', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [activePage, setActivePageState] = useState(getPageFromHash);
  const [inspectionModalOpen, setInspectionModalOpen] = useState(false);
  const [selectedEstateName, setSelectedEstateName] = useState('');
  const [activeEstateDetail, setActiveEstateDetail] = useState(null);
  const [activeArticleDetail, setActiveArticleDetail] = useState(null);

  // Sync state with URL hash & listen to browser back/forward & reload
  const setActivePage = (pageId) => {
    setActivePageState(pageId);
    window.location.hash = `/${pageId}`;
  };

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setActivePageState(page);
    };

    // If no hash is set initially, set default #/home
    if (!window.location.hash) {
      window.location.hash = `/${activePage}`;
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenInspection = (estateName = '') => {
    setSelectedEstateName(estateName);
    setInspectionModalOpen(true);
  };

  const handleSelectEstate = (estate) => {
    setActiveEstateDetail(estate);
  };

  const handleSelectArticle = (article) => {
    setActiveArticleDetail(article);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#121824]">
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onOpenInspection={handleOpenInspection} 
      />

      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage 
            setActivePage={setActivePage} 
            onOpenInspection={handleOpenInspection}
            onSelectEstate={handleSelectEstate}
          />
        )}
        {activePage === 'about' && (
          <AboutPage 
            setActivePage={setActivePage} 
            onOpenInspection={handleOpenInspection} 
          />
        )}
        {activePage === 'estates' && (
          <EstatesPage 
            onOpenInspection={handleOpenInspection}
            onSelectEstate={handleSelectEstate}
          />
        )}
        {activePage === 'services' && (
          <ServicesPage 
            onOpenInspection={handleOpenInspection} 
          />
        )}
        {activePage === 'guide' && (
          <GuidePage 
            onOpenInspection={handleOpenInspection}
            onSelectArticle={handleSelectArticle}
          />
        )}
        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      <Footer setActivePage={setActivePage} onOpenInspection={handleOpenInspection} />
      
      {/* Inspection Booking Modal */}
      <InspectionModal 
        isOpen={inspectionModalOpen} 
        onClose={() => setInspectionModalOpen(false)} 
        selectedEstateName={selectedEstateName} 
      />

      {/* Estate Detail Modal */}
      <EstateDetailModal 
        estate={activeEstateDetail}
        isOpen={!!activeEstateDetail}
        onClose={() => setActiveEstateDetail(null)}
        onOpenInspection={handleOpenInspection}
      />

      {/* Article Detail Reader Modal */}
      <ArticleDetailModal
        article={activeArticleDetail}
        isOpen={!!activeArticleDetail}
        onClose={() => setActiveArticleDetail(null)}
        onOpenInspection={handleOpenInspection}
      />

      <WhatsAppWidget />
    </div>
  );
}
