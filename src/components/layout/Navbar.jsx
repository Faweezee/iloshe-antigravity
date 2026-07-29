import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenInspection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'estates', label: 'Our Estates' },
    { id: 'services', label: 'Services' },
    { id: 'guide', label: 'Investment Guide' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E5E2DC] text-[#121824]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          
          {/* Brand Mark */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="text-left focus:outline-none group"
          >
            <span className="block text-lg font-serif-display font-medium tracking-tight text-[#121824] group-hover:text-[#0B3B2B] transition-colors">
              ILOSHE PROPERTIES
            </span>
            <span className="block text-[9px] tracking-widest text-[#5E6A7B] uppercase font-sans-body">
              & Investment Ltd
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-sans-body tracking-wider uppercase transition-all ${
                  activePage === item.id
                    ? 'text-[#0B3B2B] font-semibold border-b border-[#0B3B2B] pb-0.5'
                    : 'text-[#5E6A7B] hover:text-[#121824]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => onOpenInspection()}
              className="btn-primary"
            >
              Book Inspection
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#121824] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5E2DC] bg-[#FAF9F5] px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left py-2 text-xs font-sans-body tracking-wider uppercase ${
                activePage === item.id
                  ? 'text-[#0B3B2B] font-semibold'
                  : 'text-[#5E6A7B] hover:text-[#121824]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInspection();
              }}
              className="btn-primary w-full"
            >
              Book Inspection
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
