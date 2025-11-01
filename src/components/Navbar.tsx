import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-slate-200/80 shadow-sm">
      <div className="mx-auto max-w-7xl px-3">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Alpha Fish Logo" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <a 
              href="#services" 
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#1375bc] transition-colors duration-200 rounded-lg hover:bg-slate-50"
            >
              Services
            </a>
            <a 
              href="#quality" 
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#1375bc] transition-colors duration-200 rounded-lg hover:bg-slate-50"
            >
              Quality
            </a>
            <a 
              href="#infrastructure" 
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#1375bc] transition-colors duration-200 rounded-lg hover:bg-slate-50"
            >
              Infrastructure
            </a>
            <a 
              href="#clients" 
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#1375bc] transition-colors duration-200 rounded-lg hover:bg-slate-50"
            >
              Clients
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#1375bc] transition-colors duration-200 rounded-lg hover:bg-slate-50"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center rounded-xl bg-[#1375bc] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#1375bc]/20 hover:bg-[#0f5d94] hover:shadow-lg hover:shadow-[#1375bc]/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Get a Quote
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
