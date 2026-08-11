import React from 'react';

export default function AboutPage({ setActivePage, onOpenInspection }) {
  const whyIloshePoints = [
    { num: "01", title: "Professional Advisory Team", desc: "Expert land coordinators guiding you through survey verification, title search, and plot selection." },
    { num: "02", title: "Verified Title Documentation", desc: "100% litigation-free land backed by state government survey charting and registered title lineage." },
    { num: "03", title: "Flexible Payment Options", desc: "Structured 3, 6 to 12-month installment plans designed to protect liquidity and accommodate monthly budgets." },
    { num: "04", title: "Dedicated Customer Service", desc: "Transparent communication and ongoing post-allocation assistance for building approvals." },
    { num: "05", title: "Strategic Investment Locations", desc: "Estates situated in rapid capital appreciation corridors including Eleko Ibeju Lekki, Magboro, and Abule Pan." },
    { num: "06", title: "Growing Community", desc: "Join over 1,500 satisfied landowners and institutional investors building real estate equity with Iloshe." },
  ];

  const values = [
    { num: "01", title: "Integrity", desc: "Absolute honesty and truthfulness in every property representation, contract, and price quote." },
    { num: "02", title: "Transparency", desc: "Zero hidden charges or fine prints. Complete clarity on legal documentation and survey fees." },
    { num: "03", title: "Professionalism", desc: "Expert guidance from certified real estate consultants throughout your property acquisition journey." },
    { num: "04", title: "Innovation", desc: "Modern digital property solutions, remote diaspora purchasing, and streamlined allocation pegging." },
    { num: "05", title: "Customer Focus", desc: "Your long-term financial security and peace of mind are at the heart of everything we build." },
    { num: "06", title: "Excellence", desc: "Consistently delivering high-value, verified estates in Lagos and Ogun state growth corridors." },
  ];

  return (
    <div className="py-20 bg-[#FAF9F5] text-[#121824]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
        
        {/* Asymmetric Editorial Header & Executive Leadership Photo Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" id="story">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block">
              01 — ABOUT ILOSHE PROPERTIES & INVESTMENT LTD
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-medium leading-[1.12] text-[#121824] tracking-tight">
              Every Great Investment Begins With Trust
            </h1>
            <p className="text-[#5E6A7B] text-base sm:text-lg leading-relaxed font-sans-body max-w-2xl">
              Iloshe Properties & Investment Limited was founded to make genuine property ownership accessible, transparent, and highly rewarding for smart investors worldwide.
            </p>
          </div>
          
          {/* Framed Editorial Leadership Photograph */}
          <div className="lg:col-span-5 border border-[#E5E2DC] overflow-hidden bg-[#111318] group">
            <div className="relative overflow-hidden h-80 sm:h-96">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                alt="Iloshe Properties Executive Leadership Team" 
                className="w-full h-full object-cover filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-[#111318]/90 text-[#FAF9F5] text-[10px] font-mono-data uppercase tracking-widest px-2.5 py-1">
                EXECUTIVE BOARD
              </div>
            </div>
            <div className="p-3.5 bg-white text-xs font-mono-data text-[#5E6A7B] border-t border-[#E5E2DC] flex justify-between items-center">
              <span>EXECUTIVE LEADERSHIP & ADVISORY</span>
              <span className="text-[#D96B27]">HEADQUARTERS LAGOS</span>
            </div>
          </div>
        </div>

        {/* Story Section & Allocation Ceremony Gallery Frame — Floating Orange Badge Removed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-16 border-t border-b border-[#E5E2DC] items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block">
              02 — OUR ETHOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#121824] tracking-tight">
              Under-Promise & Over-Deliver
            </h2>
            <p className="text-[#5E6A7B] text-sm sm:text-base leading-relaxed font-sans-body">
              We understand that acquiring land is far more than a financial transaction. It is about securing your family's future, creating generational wealth, and leaving a lasting legacy.
            </p>
            <p className="text-[#5E6A7B] text-sm sm:text-base leading-relaxed font-sans-body">
              That's why we combine deep industry expertise with strict legal title verification, ensuring every client receives guidance they can trust from initial inquiry to physical plot pegging.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenInspection()}
                className="btn-primary"
              >
                Schedule Site Inspection
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 border border-[#E5E2DC] overflow-hidden bg-[#111318] group">
            <div className="relative overflow-hidden h-80 sm:h-96">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80" 
                alt="Client Physical Plot Allocation Ceremony" 
                className="w-full h-full object-cover filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-3.5 bg-white text-xs font-mono-data text-[#5E6A7B] border-t border-[#E5E2DC] flex justify-between items-center">
              <span>PHYSICAL PLOT PEGGING CEREMONY</span>
              <span className="text-[#0B3B2B] font-semibold">100% LITIGATION FREE</span>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="vision">
          <div className="p-8 border border-[#E5E2DC] bg-white space-y-3">
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block">CORPORATE VISION</span>
            <h3 className="text-2xl font-serif-display font-medium text-[#121824]">Democratizing Real Estate Across Africa</h3>
            <p className="text-xs sm:text-sm text-[#5E6A7B] leading-relaxed font-sans-body">
              To become Nigeria's most trusted real estate investment company by empowering 1,000,000 families to build wealth through genuine property ownership by 2050.
            </p>
          </div>
          <div className="p-8 border border-[#E5E2DC] bg-white space-y-3">
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block">CORPORATE MISSION</span>
            <h3 className="text-2xl font-serif-display font-medium text-[#121824]">Transparent & Accessible Land Banking</h3>
            <p className="text-xs sm:text-sm text-[#5E6A7B] leading-relaxed font-sans-body">
              To deliver secure, transparent, and rewarding real estate solutions while creating lasting value for our clients, Diaspora investors, and institutional partners.
            </p>
          </div>
        </div>

        {/* Merged "Why Iloshe" Section */}
        <div className="border-t border-b border-[#E5E2DC] py-16 space-y-12" id="why-iloshe">
          <div className="max-w-2xl space-y-3">
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block">
              03 — WHY CLIENTS CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#121824] tracking-tight">
              More Than Property. We Build Confidence.
            </h2>
            <p className="text-[#5E6A7B] text-sm sm:text-base leading-relaxed font-sans-body">
              The real estate market offers high growth opportunities, but requires careful due diligence. We eliminate risk through legal charting, transparent communication, and dedicated customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {whyIloshePoints.map((pt, idx) => (
              <div key={idx} className="space-y-3 border-t border-[#E5E2DC] pt-6">
                <span className="text-xs font-mono-data text-[#D96B27] block">{pt.num}</span>
                <h3 className="text-lg font-serif-display font-medium text-[#121824]">{pt.title}</h3>
                <p className="text-xs text-[#5E6A7B] leading-relaxed font-sans-body">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div>
          <div className="max-w-2xl mb-14 space-y-2">
            <span className="text-[10px] font-mono-data uppercase tracking-widest text-[#D96B27] block">04 — OPERATIONAL PRINCIPLES</span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#121824]">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((v, idx) => (
              <div key={idx} className="space-y-3 border-t border-[#E5E2DC] pt-6">
                <span className="text-xs font-mono-data text-[#D96B27] block">{v.num}</span>
                <h3 className="text-lg font-serif-display font-medium text-[#121824]">{v.title}</h3>
                <p className="text-xs text-[#5E6A7B] leading-relaxed font-sans-body">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
