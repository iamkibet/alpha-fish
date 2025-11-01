export default function About() {
  return (
    <section className="py-8 lg:py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/5.jpg"
              alt="Alpha Fish Processing Facility"
              className="w-full h-[500px] object-cover"
            />
         \
            <div className="absolute inset-0 bg-linear-to-tr from-black/20 via-transparent to-transparent"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h2 className="section-heading pb-2">About Us</h2>
            <div className="space-y-4 text-slate-700">
              <p className="text-lg leading-relaxed">
                We specialize in the processing, packaging, and distribution of
                a wide variety of seafood, including freshwater fish, Indian
                Ocean marine fish, cephalopods, and crustaceans. Our products
                are available in both chilled and frozen formats, ensuring that
                they retain their natural flavor, texture, and nutritional
                value.
              </p>
              <p className="text-lg leading-relaxed">
                Our focus is on delivering freshness and quality in every
                product, whether you are a small retailer, a large distributor,
                or a hospitality business. We offer flexible order sizes and
                customized packaging to suit your specific needs.
              </p>
            </div>
            {/* Call to action */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-xl bg-[#1375bc] px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-[#0f5d94] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
