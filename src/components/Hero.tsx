export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-2">
          {/* Left Side - Text Content */}
          <div className="bg-linear-to-br from-[#1375bc] via-[#0f5d94] to-[#0a4a75] flex items-center justify-center px-8 sm:px-12 lg:px-16 py-12 lg:py-16 min-h-[400px] lg:min-h-[500px] relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>
            <div className="max-w-2xl relative z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Frozen and Chilled <span className="block">Fish Products</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
                Welcome to Alpha Fish, your trusted partner in premium frozen
                and chilled fish products. We are committed to supplying
                high-quality, sustainably sourced seafood that meets the highest
                standards of freshness and taste.
              </p>

              <a
                href="#services"
                className="inline-block bg-white text-[#1375bc] px-8 py-4 rounded-lg font-semibold text-base shadow-lg hover:bg-slate-50 hover:shadow-xl transition-all duration-200"
              >
                View Products
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative min-h-[400px] lg:min-h-[500px] bg-slate-900">
            <img
              src="/images/6.jpg"
              alt="Premium fresh seafood from Alpha Fish"
              className="h-full w-full object-cover"
            />
            {/* Optional subtle overlay for depth */}
            <div className="absolute inset-0 bg-linear-to-r from-black/10 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
