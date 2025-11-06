import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    let scrollY = window.scrollY || 0;
    const lock = () => {
      scrollY = window.scrollY || 0;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.documentElement.style.overflowX = "hidden";
    };
    const unlock = () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.documentElement.style.overflowX = "";
      window.scrollTo(0, scrollY);
    };
    lock();
    closeRef.current?.focus();
    return () => unlock();
  }, [isMenuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!isMenuOpen) return;
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const nodes = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])'
      );
      const list = Array.from(nodes);
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (active === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => {
    setIsMenuOpen(false);
    triggerRef.current?.focus();
  };
  const toggleMenu = () => (isMenuOpen ? closeMenu() : openMenu());

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-white/95 border-b border-slate-200/80 shadow-sm">
      <div className="mx-auto max-w-7xl px-3">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <a href="#home" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Alpha Fish"
              className="h-9 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            <a
              href="#services"
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Services
            </a>
            <a
              href="#quality"
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Quality
            </a>
            <a
              href="#infrastructure"
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Infrastructure
            </a>
            <a
              href="#clients"
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Clients
            </a>
            <a
              href="#contact"
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-md bg-[#1375bc] px-4 md:px-5 py-2 text-sm md:text-base font-medium leading-5 text-white hover:bg-[#0f5d94] hover:shadow-lg hover:shadow-[#1375bc]/30 transition"
            >
              Get a Quote
            </a>
            <button
              type="button"
              ref={triggerRef}
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
      </div>

      {isMenuOpen && (
        <>
          <button
            aria-hidden="true"
            onClick={closeMenu}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40"
          />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            ref={panelRef}
            className="fixed inset-y-0 right-0 z-50 w-[88vw] max-w-[320px] bg-white shadow-2xl border-l border-slate-200 transform transition-transform duration-300 ease-in-out translate-x-0"
          >
            <div className="sticky top-0 flex items-center justify-between p-4 border-b border-slate-200 bg-white">
              <img src="/logo.png" alt="Alpha Fish" className="h-8 w-auto" />
              <button
                type="button"
                ref={closeRef}
                onClick={closeMenu}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
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

            <nav className="h-full flex flex-col">
              <div className="px-3 py-4 space-y-2 overflow-y-auto grow">
                <a
                  href="#services"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-slate-800 bg-slate-50 hover:bg-slate-100 transition"
                >
                  Services
                </a>
                <a
                  href="#quality"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-slate-800 bg-slate-50 hover:bg-slate-100 transition"
                >
                  Quality
                </a>
                <a
                  href="#infrastructure"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-slate-800 bg-slate-50 hover:bg-slate-100 transition"
                >
                  Infrastructure
                </a>
                <a
                  href="#clients"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-slate-800 bg-slate-50 hover:bg-slate-100 transition"
                >
                  Clients
                </a>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-slate-800 bg-slate-50 hover:bg-slate-100 transition"
                >
                  Contact
                </a>
              </div>

              <div className="p-4 border-t border-slate-200 shrink-0 bg-white">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block w-full rounded-lg px-4 py-3 text-center font-medium text-white bg-[#1375bc] hover:bg-[#0f5d94] shadow-sm hover:shadow-md transition"
                >
                  Get a Quote
                </a>
                <p className="mt-3 text-xs text-center text-slate-500">
                  Need help? Contact our support team
                </p>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
