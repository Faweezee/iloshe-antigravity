import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';

export default function Navbar({ activePage, setActivePage, onNavigateToInspection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHoverDropdown, setActiveHoverDropdown] = useState(null);

  const navItems = [
    { id: 'home', label: 'Home' },
    { 
      id: 'about', 
      label: 'About Us',
      subsections: [
        { label: 'Our Story', hash: 'story' },
        { label: 'Vision & Mission', hash: 'vision' },
        { label: 'Why Iloshe', hash: 'why-iloshe' }
      ]
    },
    { id: 'estates', label: 'Our Estates' },
    { 
      id: 'services', 
      label: 'Services',
      subsections: [
        { label: 'Core Advisory', hash: 'advisory' },
        { label: 'In-Field Execution', hash: 'execution' }
      ]
    },
    { 
      id: 'guide', 
      label: 'Investment Guide',
      subsections: [
        { label: 'Property Guides', hash: 'guides' },
        { label: 'Market Insights (Blog)', hash: 'blog' },
        { label: 'Common Questions (FAQ)', hash: 'faq' }
      ]
    },
    { id: 'contact', label: 'Contact' },
  ];

  // Helper to scroll to section with sticky navbar offset
  const scrollToAnchor = (hash) => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(hash);
    if (el) {
      const navbarOffset = 90; // Offset to clear sticky header
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (pageId, sectionHash = '') => {
    setActiveHoverDropdown(null);
    setMobileMenuOpen(false);
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }

    const pageChanged = activePage !== pageId;
    setActivePage(pageId);

    if (pageChanged) {
      setTimeout(() => {
        scrollToAnchor(sectionHash);
      }, 150);
    } else {
      scrollToAnchor(sectionHash);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E5E2DC] text-[#121824]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16 sm:h-20 gap-2">
          
          {/* Official Brand Logo & Typography */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2.5 text-left focus:outline-none group shrink-0"
          >
            <BrandLogo className="h-8 sm:h-9 lg:h-10 w-auto transition-transform group-hover:scale-105" />

            <div>
              <span className="block text-sm sm:text-base lg:text-base xl:text-lg font-serif-display font-semibold tracking-tight text-[#121824] group-hover:text-[#0B3B2B] transition-colors whitespace-nowrap">
                ILOSHE PROPERTIES
              </span>
              <span className="block text-[7px] sm:text-[8px] xl:text-[9px] tracking-widest text-[#5E6A7B] uppercase font-sans-body font-medium whitespace-nowrap">
                & Investment Ltd
              </span>
            </div>
          </button>

          {/* Desktop Nav Items (lg:flex restored with responsive gap scaling) */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-7 shrink-0">
            {navItems.map((item) => {
              const hasSub = item.subsections && item.subsections.length > 0;
              const isActive = activePage === item.id;
              const isDropdownOpen = activeHoverDropdown === item.id;

              return (
                <div 
                  key={item.id} 
                  className="relative py-2"
                  onMouseEnter={() => hasSub && setActiveHoverDropdown(item.id)}
                  onMouseLeave={() => hasSub && setActiveHoverDropdown(null)}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-0.5 lg:gap-1 text-[11px] xl:text-xs font-sans-body tracking-wider uppercase transition-all focus:outline-none whitespace-nowrap ${
                      isActive
                        ? 'text-[#0B3B2B] font-semibold border-b border-[#0B3B2B] pb-0.5'
                        : 'text-[#5E6A7B] hover:text-[#121824]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasSub && (
                      <ChevronDown className={`w-3 h-3 text-[#5E6A7B] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#0B3B2B]' : ''}`} />
                    )}
                  </button>

                  {/* Dropdown Panel */}
                  {hasSub && isDropdownOpen && (
                    <div 
                      className="absolute left-0 top-full w-52 bg-[#FAF9F5] border border-[#E5E2DC] shadow-xl py-2 z-50 transition-all duration-150 ease-out"
                    >
                      {item.subsections.map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNavClick(item.id, sub.hash);
                          }}
                          className="block w-full text-left px-4 py-2 text-xs font-sans-body text-[#5E6A7B] hover:text-[#121824] hover:bg-[#E5E2DC]/50 transition-colors"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={() => onNavigateToInspection()}
              className="btn-primary whitespace-nowrap text-[11px] xl:text-xs py-2 px-3.5 xl:px-5 shadow-sm"
            >
              Book Inspection
            </button>
          </div>

          {/* Mobile/Tablet Menu Toggle (for screens under 1024px) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#121824] focus:outline-none hover:text-[#0B3B2B]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile/Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5E2DC] bg-[#FAF9F5] px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-xl">
          {navItems.map((item) => (
            <div key={item.id} className="space-y-2 border-b border-[#E5E2DC]/50 pb-3">
              <button
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left py-1.5 text-xs font-sans-body tracking-wider uppercase font-semibold ${
                  activePage === item.id ? 'text-[#0B3B2B]' : 'text-[#121824]'
                }`}
              >
                {item.label}
              </button>

              {/* Sub-Items in Mobile Drawer */}
              {item.subsections && item.subsections.length > 0 && (
                <div className="pl-4 space-y-1.5 border-l border-[#E5E2DC]">
                  {item.subsections.map((sub, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavClick(item.id, sub.hash)}
                      className="block w-full text-left py-1 text-[11px] font-sans-body text-[#5E6A7B] hover:text-[#121824]"
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToInspection();
              }}
              className="btn-primary w-full text-center py-3"
            >
              Book Inspection
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
