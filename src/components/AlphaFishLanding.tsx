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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-sky-50 text-slate-800">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Catalogue /> {/* Quality & Certifications */}
      <section id="quality" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Quality & Food Safety
              </h2>
              <p className="mt-3 text-lg text-slate-700 leading-relaxed">
                Our quality system is built around HACCP principles, supplier
                audits, and continuous temperature monitoring. We maintain full
                batch traceability from catch to customer, supported by digital
                logs and routine laboratory testing.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-600 flex-shrink-0" />
                  <span>
                    Hazard analysis with CCP verification and corrective action
                    workflows
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-600 flex-shrink-0" />
                  <span>
                    Microbio & organoleptic checks, metal detection, allergen
                    controls
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-600 flex-shrink-0" />
                  <span>
                    Digital temperature logs with automated alerts and shipment
                    release gates
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl ring-1 ring-slate-200 bg-slate-50 p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {qualityFeatures.map(([k, v], i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                  >
                    <p className="text-xs text-slate-500 uppercase tracking-wide">
                      {k}
                    </p>
                    <p className="text-sm font-semibold text-slate-900 mt-1">
                      {v}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-white p-4 text-sm ring-1 ring-slate-200">
                Need specific certificates? Ask about private audits for key
                customers and markets.
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
          <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-sky-700 px-6 py-10 sm:px-10 sm:py-14 text-white shadow-xl">
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
