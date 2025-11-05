import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Catalogue from "./Catalogue";
import About from "./About";

export default function AlphaFishLanding() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  const infrastructureItems = [
    ["Processing Area", "1,200 m² hygienic workspace"],
    ["Blast Freezers", "High throughput, fast core chill"],
    ["Cold Rooms", "-18°C frozen, 0–2°C chilled"],
    ["ERP Portal", "Docs, alerts, and live status"],
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-sky-50 text-slate-800">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Catalogue /> {/* Quality & Certifications */}
      <section
        id="quality"
        className="relative py-3 overflow-hidden"
        aria-labelledby="quality-title"
      >
        {/* Enhanced background with subtle gradient mesh */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-sky-100/40 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />
          <div className="absolute inset-0 bg-linear-to-br from-white via-slate-50/50 to-sky-50/30" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 id="quality-title" className="section-heading pb-3">
                  Quality & Food Safety
                </h2>

                <p className="section-subheading">
                  Our system is engineered around HACCP principles, supplier
                  audits, and continuous cold-chain monitoring. From catch to
                  customer, we maintain full batch traceability with digital
                  logs and routine laboratory testing.
                </p>
              </div>

              {/* Feature List */}
              <ul className="space-y-4">
                {[
                  "Hazard analysis with CCP verification and corrective-action workflows",
                  "Microbiological & organoleptic checks, metal detection, allergen controls",
                  "Digital temperature logs with automated alerts and shipment release gates",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="shrink-0 w-6 h-6 mt-0.5 rounded-full bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/15 transition-colors">
                      <svg
                        className="w-3.5 h-3.5 text-sky-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-slate-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats Cards */}
            <div className="relative">
              {/* Card Container */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 p-6 lg:p-8 shadow-lg shadow-slate-200/20">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    ["HACCP Program", "Validated & audited"],
                    ["Traceability", "End-to-end, batch based"],
                    ["Product Specs", "Tight tolerances"],
                    ["Shelf-Life", "Validated protocols"],
                  ].map(([title, value], index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-white border border-slate-100 hover:border-slate-200 transition-all duration-200 hover:shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                          {title}
                        </span>
                        <svg
                          className="w-4 h-4 text-sky-500/70"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <p className="text-lg font-semibold text-slate-900">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Highlight Card */}
                <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200/40">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500/10 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-sky-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Private Audits & Market Access
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Need specific certificates? We arrange customer-specific
                        audits and provide documentation packs for priority
                        markets.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footnote */}
                <p className="text-xs text-slate-500 mt-4 text-center">
                  * Metrics available per lot and shipment; full COA & trace
                  docs on request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Infrastructure */}
      <section id="infrastructure" className="py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="section-heading">Infrastructure</h2>
            <p className="section-subheading">
              Modern processing floors, cold rooms, and a connected ERP for
              planning, traceability, and customer portals.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {infrastructureItems.map(([title, desc], i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-sky-700 px-6 py-12 sm:px-10 sm:py-14 lg:px-12 text-white shadow-xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left space-y-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  Looking for reliable seafood supply?
                </h3>
                <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Share your target species, specs, and volumes — we'll propose
                  a program with pricing, QC checkpoints, and delivery
                  timelines.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 justify-center lg:justify-end">
                <a
                  href="#contact"
                  className="inline-flex justify-center items-center rounded-xl bg-white px-6 py-4 font-semibold text-sky-700 hover:bg-slate-50 transition-colors duration-200 text-base sm:text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Get a Quote
                </a>
                <a
                  href="#quality"
                  className="inline-flex justify-center items-center rounded-xl bg-white/10 px-6 py-4 font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition-colors duration-200 text-base sm:text-lg hover:shadow-lg hover:-translate-y-0.5"
                >
                  See Our Standards
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="py-4 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="section-heading">Contact</h2>
            <p className="section-subheading">
              Tell us about your needs and schedule a call.
            </p>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-200"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-200"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-200 resize-none"
                    placeholder="Tell us about your needs: species, cuts, volumes, delivery windows, quality requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex justify-center items-center rounded-xl bg-sky-600 px-8 py-4 font-semibold text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  Send Inquiry
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>

            {/* Contact Information */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Head Office
                  </h3>
                  <div className="mt-3 w-12 h-1 bg-sky-500 rounded-full"></div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 mt-0.5 text-sky-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-700 leading-relaxed">
                      Ocean Park, Dock Road
                      <br />
                      Harbor District
                      <br />
                      <span className="text-sm text-slate-500">
                        Open in Maps
                      </span>
                    </p>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-6 h-6 text-sky-600">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-slate-900">Phone:</span>{" "}
                      <a
                        href="tel:+22244445588"
                        className="text-slate-700 hover:text-sky-700 transition-colors"
                      >
                        +222 44 44 55 88
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-6 h-6 text-sky-600">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-slate-900">Email:</span>{" "}
                      <a
                        href="mailto:sales@alphafish.example"
                        className="text-slate-700 hover:text-sky-700 transition-colors"
                      >
                        sales@alphafish.example
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-6 h-6 text-sky-600">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-slate-900">Hours:</span>{" "}
                      <span className="text-slate-700">
                        Mon–Sat, 08:00–18:00
                      </span>
                    </div>
                  </div>
                </div>

                {/* Documentation Note */}
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-5 h-5 mt-0.5 text-sky-600">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-slate-700">
                      <span className="font-semibold">
                        Documentation available:
                      </span>{" "}
                      We can share certificates, product specs, and packing
                      lists upon request.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-8 lg:mb-12">
            {/* Brand Section */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="flex items-center gap-3 mb-4 h-8 w-32">
                <img src="/public/logo.png" alt="Alpha-fish-logo" />
              </div>
              <p className="text-slate-600 leading-relaxed max-w-md">
                Premium seafood solutions with uncompromising quality standards
                and full supply chain transparency.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-sky-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-sky-600 transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <nav className="flex flex-col space-y-3">
                <a
                  href="#quality"
                  className="text-slate-600 hover:text-sky-700 transition-colors text-sm"
                >
                  Quality & Safety
                </a>
                <a
                  href="#services"
                  className="text-slate-600 hover:text-sky-700 transition-colors text-sm"
                >
                  Our Services
                </a>
                <a
                  href="#species"
                  className="text-slate-600 hover:text-sky-700 transition-colors text-sm"
                >
                  Species & Products
                </a>
                <a
                  href="#contact"
                  className="text-slate-600 hover:text-sky-700 transition-colors text-sm"
                >
                  Get in Touch
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-4 lg:col-span-4">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                Legal
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-slate-600">
                  <a
                    href="tel:+22244445588"
                    className="hover:text-sky-700 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </p>

                <p className="text-slate-600 text-sm">Cookie Policy</p>
                <p className="text-slate-600">
                  <a
                    href="mailto:sales@alphafish.example"
                    className="hover:text-sky-700 transition-colors"
                  >
                    sales@alphafish.example
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500 text-center sm:text-left">
              © {new Date().getFullYear()} Alpha Fish International. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-slate-500">
              <a href="#" className="hover:text-slate-700 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-700 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-slate-700 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
