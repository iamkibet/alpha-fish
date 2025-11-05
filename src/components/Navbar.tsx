import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/95 border-b border-slate-200/80 shadow-sm">
      <div className="mx-auto max-w-7xl px-3">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center  group">
            <img
              src="/logo.png"
              alt="Alpha Fish Logo"
              className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#services" className="nav-link hover:nav-link-hover">
              Services
            </a>
            <a href="#quality" className="nav-link hover:nav-link-hover">
              Quality
            </a>
            <a href="#infrastructure" className="nav-link hover:nav-link-hover">
              Infrastructure
            </a>
            <a href="#clients" className="nav-link hover:nav-link-hover">
              Clients
            </a>
            <a href="#contact" className="nav-link hover:nav-link-hover">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center rounded-sm bg-[#1375bc] px-4 md:px-6 py-2 md:py-4 text-[14px] md:text-[18px] font-medium leading-[18px] text-white  hover:bg-[#0f5d94] hover:shadow-lg hover:shadow-[#1375bc]/30 "
          >
            Get a Quote
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Slide-in Mobile Menu */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 z-50
          w-[280px] bg-white
          shadow-2xl border-l border-slate-200
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Mobile Menu Header */}
        <div className="sticky top-0 flex items-center justify-between p-4 border-b border-slate-200 bg-white">
          <img src="/logo.png" alt="Alpha Fish Logo" className="h-8 w-auto" />
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <nav className="relative h-[calc(100vh-5rem)] bg-white px-3 py-4 space-y-3 overflow-y-auto">
          <a
            href="#services"
            className="block py-3 px-4 text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#quality"
            className="block py-3 px-4 text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all"
            onClick={toggleMenu}
          >
            Quality
          </a>
          <a
            href="#infrastructure"
            className="block py-3 px-4 text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all"
            onClick={toggleMenu}
          >
            Infrastructure
          </a>
          <a
            href="#clients"
            className="block py-3 px-4 text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all"
            onClick={toggleMenu}
          >
            Clients
          </a>
          <a
            href="#contact"
            className="block py-3 px-4 text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all"
            onClick={toggleMenu}
          >
            Contact
          </a>

          {/* CTA Section */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200">
            <a
              href="#contact"
              className="block py-3 px-4 text-white bg-[#1375bc] hover:bg-[#0f5d94] rounded-xl text-center font-medium shadow-sm hover:shadow-md transition-all"
              onClick={toggleMenu}
            >
              Get a Quote
            </a>
            <p className="mt-4 text-xs text-center text-slate-500">
              Need help? Contact our support team
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
