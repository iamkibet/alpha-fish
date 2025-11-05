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

  const qualityFeatures = [
    ["HACCP Program", "Validated & audited"],
    ["Traceability", "End-to-end, batch based"],
    ["Product Specs", "Tight tolerances"],
    ["Shelf-Life", "Validated protocols"],
  ];

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
        className="relative overflow-hidden py-14"
        aria-labelledby="quality-title"
      >
        {/* decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl bg-linear-to-br from-sky-400/30 to-blue-600/20" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-linear-to-tr from-cyan-300/20 to-sky-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(56,189,248,0.10),rgba(255,255,255,0))]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 ">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Left: Copy */}
            <div>
              <h2 id="quality-title" className="section-heading">
                Quality &amp; Food Safety
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                Our system is engineered around HACCP principles, supplier
                audits, and continuous cold-chain monitoring. From catch to
                customer, we maintain full batch traceability with digital logs
                and routine laboratory testing—so every shipment is verified,
                documented, and release-gated.
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  "Hazard analysis with CCP verification and corrective-action workflows",
                  "Microbiological & organoleptic checks, metal detection, allergen controls",
                  "Digital temperature logs with automated alerts and shipment release gates",
                ].map((item, i) => (
                  <li key={i} className="group flex gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-sky-600/10 ring-1 ring-sky-200 transition group-hover:bg-sky-600/15">
                      {/* check icon */}
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-sky-700"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Cards */}
            <div className="relative">
              <div className="absolute -inset-2 -z-10 rounded-3xl bg-linear-to-tr from-sky-100 to-white blur-sm" />
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-2">
                  {(
                    qualityFeatures ?? [
                      ["Cold-chain variance", "< 0.5°C over route avg"],
                      ["Batch traceability", "100% lots linked to COA"],
                      ["Swab pass rate", "≥ 98% weekly average"],
                      ["Release compliance", "4-eye sign-off on CCP"],
                    ]
                  ).map(([k, v]: any, i: number) => (
                    <div
                      key={i}
                      className="group relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                          {k}
                        </p>
                        {/* spark icon */}
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-4 w-4 text-sky-600/70 transition group-hover:text-sky-700"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                      </div>
                      <p className="mt-1 text-base font-semibold text-slate-900">
                        {v}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-sky-600/10 ring-1 ring-sky-200">
                      {/* shield icon */}
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-sky-700"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Private audits &amp; market access
                      </p>
                      <p className="mt-1 text-sm text-slate-700">
                        Need specific certificates? We arrange customer-specific
                        audits and provide documentation packs for priority
                        markets.
                      </p>
                    </div>
                  </div>
                </div>

                {/* subtle footnote */}
                <p className="mt-3 text-xs text-slate-500">
                  * Metrics available per lot and shipment; full COA &amp; trace
                  docs on request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Infrastructure */}
      <section id="infrastructure" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Infrastructure
            </h2>
            <p className="mt-3 text-lg text-slate-700">
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
      {/* Clients / Logos */}
      <section id="clients" className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Trusted by Buyers & Distributors
              </h2>
              <p className="mt-2 text-lg text-slate-700">
                Supplying wholesale, retail, and HoReCa channels.
              </p>
            </div>
            <a
              href="#contact"
              className="hidden sm:inline-flex rounded-xl px-4 py-2 ring-1 ring-slate-300 hover:bg-slate-50 text-sm transition-colors"
            >
              Request references
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-16 rounded-xl bg-slate-100 ring-1 ring-slate-200 grid place-content-center text-slate-500 text-sm font-medium hover:bg-slate-200 transition-colors"
              >
                Logo {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-linear-to-r from-sky-600 to-sky-700 px-6 py-10 sm:px-10 sm:py-14 text-white shadow-xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold sm:text-3xl">
                  Looking for reliable seafood supply?
                </h3>
                <p className="mt-2 text-white/90 leading-relaxed">
                  Share your target species, specs, and volumes — we'll propose
                  a program with pricing, QC checkpoints, and delivery
                  timelines.
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="#contact"
                  className="rounded-xl bg-white px-5 py-3 font-semibold text-sky-700 ring-1 ring-white/20 hover:bg-slate-50 transition-colors"
                >
                  Get a Quote
                </a>
                <a
                  href="#quality"
                  className="rounded-xl bg-white/10 px-5 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/20 transition-colors"
                >
                  See Our Standards
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Contact
            </h2>
            <p className="mt-2 text-lg text-slate-700">
              Tell us about your needs and schedule a call.
            </p>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 w-full rounded-xl border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 w-full rounded-xl border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                    placeholder="jane@company.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 w-full rounded-xl border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 resize-none"
                    placeholder="Species, cuts, volumes, delivery windows..."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex items-center rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white hover:bg-sky-700 transition-colors shadow-sm"
              >
                Send Inquiry
              </button>
            </form>
            <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
              <h3 className="text-lg font-semibold text-slate-900">
                Head Office
              </h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Ocean Park, Dock Road
                <br />
                Harbor District
              </p>
              <div className="mt-4 grid gap-3 text-sm">
                <p>
                  <span className="font-medium text-slate-900">Phone:</span>{" "}
                  <a
                    href="tel:+22244445588"
                    className="text-slate-700 hover:text-sky-700"
                  >
                    +222 44 44 55 88
                  </a>
                </p>
                <p>
                  <span className="font-medium text-slate-900">Email:</span>{" "}
                  <a
                    href="mailto:sales@alphafish.example"
                    className="text-slate-700 hover:text-sky-700"
                  >
                    sales@alphafish.example
                  </a>
                </p>
                <p>
                  <span className="font-medium text-slate-900">Hours:</span>{" "}
                  Mon–Sat, 08:00–18:00
                </p>
              </div>
              <div className="mt-6 rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-sm text-slate-700">
                  Looking for documentation? We can share certificates, product
                  specs, and packing lists upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-slate-200 py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} Alpha Fish — All rights reserved.
            </p>
            <nav className="flex items-center gap-6 text-sm">
              <a
                href="#quality"
                className="hover:text-sky-700 transition-colors"
              >
                Quality
              </a>
              <a
                href="#services"
                className="hover:text-sky-700 transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className="hover:text-sky-700 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
