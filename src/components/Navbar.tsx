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
            className="inline-flex items-center rounded-sm bg-[#1375bc] px-6 py-4 text-[18px] font-medium leading-[18px] text-white  hover:bg-[#0f5d94] hover:shadow-lg hover:shadow-[#1375bc]/30 "
          >
            Get a Quote
          </a>

          {/* Mobile Menu Button */}
          <button
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
    </header>
  );
}
