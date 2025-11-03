import { useMemo, useState, useEffect, useRef, useCallback } from "react";

type CatalogueItem = {
  commonName: string;
  size: string;
  scientificName: string;
  blurb: string;
  image: string;
};

type Category = (typeof CATEGORIES)[number];
type CatalogueType = {
  [K in Category]: readonly CatalogueItem[];
};

const CATEGORIES = [
  "SOLES & CEPHALOPODS",
  "FRESH PRODUCTS",
  "FILLETS & CUTS",
  "WHOLE FISH",
];

const CATALOGUE: CatalogueType = {
  "SOLES & CEPHALOPODS": [
    {
      commonName: "Langouste (Spiny Lobster)",
      size: "500–2 Kg",
      scientificName: "Palinuridae",
      blurb: "Prestigious crustacean with delicate flesh and exquisite taste.",
      image: "/images/fish/1.jpg",
    },
    {
      commonName: "Crevette (Shrimp)",
      size: "25–30 g",
      scientificName: "Penaeidae",
      blurb: "Fresh, delicate shrimp — perfect as an appetizer or main.",
      image: "/images/fish/lobster.jpg",
    },
    {
      commonName: "Lemon Sole",
      size: "14–30 cm",
      scientificName: "Dicologlossa cuneata",
      blurb: "Elegant selection with a bright, delicate profile.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Senegal Sole",
      size: "200 g – 2 kg",
      scientificName: "Solea senegalensis",
      blurb: "Clean flavor and firm texture; versatile in the kitchen.",
      image: "/images/fish/1.jpg",
    },
    {
      commonName: "Tiger Sole",
      size: "200 g – 1 kg",
      scientificName: "Synaptura cadenati",
      blurb: "Distinctive taste and appealing presentation.",
      image: "/images/fish/1.jpg",
    },
    {
      commonName: "Tongue Sole",
      size: "200 g – 2 kg",
      scientificName: "Cynoglossus cynoglossus",
      blurb: "Subtle flavor, great with gentle cooking methods.",
      image: "/images/fish/1.jpg",
    },
    {
      commonName: "Octopus",
      size: "300 g – 5 kg",
      scientificName: "Octopus vulgaris",
      blurb: "Luxurious texture — ideal grilled, braised, or sous-vide.",
      image: "/images/fish/1.jpg",
    },
    {
      commonName: "Squid",
      size: "10–50 cm",
      scientificName: "Loligo vulgaris",
      blurb: "Tender rings/tubes; perfect for quick, high heat.",
      image: "/images/fish/1.jpg",
    },
    {
      commonName: "Cuttlefish",
      size: "100 g – 5 kg",
      scientificName: "Sepia officinalis",
      blurb: "Rich flavor with meaty bite; takes marinades well.",
      image: "/images/fish/1.jpg",
    },
  ],

  "FRESH PRODUCTS": [
    {
      commonName: "Corvina Drum",
      size: "500 g+",
      scientificName: "Pseudotolithus senegalensis",
      blurb: "Distinct taste and broad culinary versatility.",
      image: "/images/fish/tigersole.jpg",
    },
    {
      commonName: "Meagre (Courbine)",
      size: "1 kg+",
      scientificName: "Argyrosomus regius",
      blurb: "Tender, flaky flesh; premium centerpiece fillets.",
      image: "/images/fish/senegalsole.jpg",
    },
    {
      commonName: "Scorpionfish (Rascasse)",
      size: "300 g+",
      scientificName: "Scorpaena elongata",
      blurb: "Flavorful, exciting addition to seafood menus.",
      image: "/images/fish/captainfish.jpeg",
    },
    {
      commonName: "Roquera",
      size: "500 g+",
      scientificName: "Pagrus auriga",
      blurb: "Harmonious taste and delicate texture.",
      image: "/images/fish/captainfish.jpeg",
    },
    {
      commonName: "Pampano",
      size: "1 kg+",
      scientificName: "Hyperoglyphe moselli",
      blurb: "Unique flavor; tender, succulent flesh.",
      image: "/images/fish/captainfish.jpeg",
    },
    {
      commonName: "Black Grouper",
      size: "1 kg+",
      scientificName: "Epinephelus caninus",
      blurb: "Rich flavors that bring depth to seafood dishes.",
      image: "/images/fish/captainfish.jpeg",
    },
    {
      commonName: "Yellow Grouper",
      size: "1 kg+",
      scientificName: "Epinephelus guaza",
      blurb: "Bold taste and distinctive character.",
      image: "/images/fish/barracuda.jpeg",
    },
    {
      commonName: "White Grouper",
      size: "1 kg+",
      scientificName: "Epinephelus aeneus",
      blurb: "Subtle elegance and smooth texture.",
      image: "/images/fish/captainfish.jpeg",
    },
    {
      commonName: "Pagre",
      size: "200 g+",
      scientificName: "Pagrus caeruleostictus",
      blurb: "Tender texture; versatile nature.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Deep Water Snapper (Sompat)",
      size: "500 g+",
      scientificName: "Pomadasys jubelini",
      blurb: "Robust flavors and unique taste.",
      image: "/images/fish/captainfish.jpeg",
    },
    {
      commonName: "Pescadilla",
      size: "300 g+",
      scientificName: "Merluccius polli",
      blurb: "Delicate flavors; tender, flaky texture.",
      image: "/images/fish/captainfish.jpeg",
    },
    {
      commonName: "White Seabream (Sar Commun)",
      size: "300 g+",
      scientificName: "Diplodus sargus",
      blurb: "Balanced flavors and delightful dining experience.",
      image: "/images/fish/captainfish.jpeg",
    },
    {
      commonName: "Blackbelly Rosefish",
      size: "150–300 g+",
      scientificName: "Helicolenus dactylopterus",
      blurb: "Tender meat and unique flavors.",
      image: "/images/fish/captainfish.jpeg",
    },
    {
      commonName: "John Dory (Saint Pierre)",
      size: "500 g+",
      scientificName: "Zeus faber / Z. faber mauritanicus",
      blurb: "Distinctive taste and delicate texture.",
      image: "/images/fish/captainfish.jpeg",
    },
    {
      commonName: "Tilapia",
      size: "500 g+",
      scientificName: "Oreochromis niloticus",
      blurb: "Mild, tender flesh for wide menu appeal.",
      image: "/images/fish/captainfish.jpeg",
    },
    {
      commonName: "Canary Drum (Ombrine)",
      size: "300 g+",
      scientificName: "Umbrina canariensis",
      blurb: "Exceptional taste and rich, tender meat.",
      image: "/images/fish/captainfish.jpeg",
    },
    {
      commonName: "European Sea Bass (Baila)",
      size: "300–600 g+",
      scientificName: "Dicentrarchus punctatus",
      blurb: "Elegant flavors; versatile for gourmet dishes.",
      image: "/images/fish/captainfish.jpeg",
    },
    {
      commonName: "Liche Lirio",
      size: "300 g+",
      scientificName: "Campogramma glaycos",
      blurb: "Distinct flavor profile that captivates the senses.",
      image: "/images/fish/captainfish.jpeg",
    },
    {
      commonName: "Atlantic Bumper (Plat)",
      size: "100–300 g",
      scientificName: "Chloroscombrus chrysurus",
      blurb: "Great utility fish for varied preparations.",
      image: "/images/fish/captainfish.jpeg",
    },
    {
      commonName: "Decapitated Rata",
      size: "400 g+",
      scientificName: "Uranoscopus polli",
      blurb: "Bold, distinctive flavor in convenient head-off format.",
      image: "/images/fish/captainfish.jpeg",
    },
    {
      commonName: "Decapitated Turbot",
      size: "1 kg+",
      scientificName: "Psedottes belcheri",
      blurb: "Luxurious texture; head-off convenience.",
      image: "/images/fish/captainfish.jpeg",
    },
    {
      commonName: "Decapitated John Dory",
      size: "90 g+",
      scientificName: "Zeus faber mauritanicus",
      blurb: "Remarkable flavor with tender flesh, pre-trimmed.",
      image: "/images/fish/captainfish.jpeg",
    },
  ],

  "FILLETS & CUTS": [
    {
      commonName: "Red Porgy Fillet",
      size: "50–70 g",
      scientificName: "Pagellus bellottii",
      blurb: "Delectable fillet bringing oceanic excellence.",
      image: "/images/fish/fillet.jpg",
    },
    {
      commonName: "Turbot Fillet",
      size: "100 g+",
      scientificName: "Psedottes belcheri",
      blurb: "Luxury fillet with rich flavor and fine flake.",
      image: "/images/fish/fillet.jpg",
    },
    {
      commonName: "John Dory Fillet",
      size: "300 g+",
      scientificName: "Zeus faber mauritanicus",
      blurb: "Delicate taste and superb tenderness.",
      image: "/images/fish/fillet.jpg",
    },
    {
      commonName: "Diagram Grouper Fillet",
      size: "95 g+",
      scientificName: "Plectorhinchus mediterraneus",
      blurb: "Exquisite flavor and succulent texture.",
      image: "/images/fish/fillet.jpg",
    },
    {
      commonName: "Rata Fillet",
      size: "90 g+",
      scientificName: "Uranoscopus polli",
      blurb: "Distinctive flavor in a convenient fillet.",
      image: "/images/fish/fillet.jpg",
    },
  ],

  "WHOLE FISH": [
    {
      commonName: "Barracuda",
      size: "500 g+",
      scientificName: "Sphyraena sphyraena",
      blurb: "Unique blend of taste and texture.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Big-eye Dentex",
      size: "200 g+",
      scientificName: "Dentex macrophthalmus",
      blurb: "Substantial size with distinctive taste.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Yellow-eye Dentex",
      size: "300 g+",
      scientificName: "Dentex angolensis",
      blurb: "Culinary gem with distinct flavor.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Blue-Stripe Grunt (Fiatole)",
      size: "300–600 g+",
      scientificName: "Stromateus fiatola",
      blurb: "Delightful taste and striking appearance.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Atlantic Horse Mackerel (Chinchard)",
      size: "20–25 cm+",
      scientificName: "Trachurus trachurus",
      blurb: "Bold flavors; menu workhorse.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Dentex",
      size: "200 g",
      scientificName: "Dentex dentex",
      blurb: "Balanced flavors and versatility.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Pink Pagre",
      size: "200 g+",
      scientificName: "Pagrus caeruleostictus",
      blurb: "Tender meat and captivating hue.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Diagram Grouper",
      size: "300 g+",
      scientificName: "Plectorhinchus mediterraneus",
      blurb: "Exquisite flavors and memorable textures.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Red Porgy (Pageot / Besugo)",
      size: "200–500 g+",
      scientificName: "Pagellus bellottii",
      blurb: "Sweet, delicate flesh; versatile.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Black Mullet",
      size: "500 g+",
      scientificName: "Mugil capurrii",
      blurb: "Exceptional taste and versatility.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Turbot",
      size: "1 kg+",
      scientificName: "Psedottes belcheri",
      blurb: "Luxurious texture; delicate, distinctive flavor.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "European Sea Bass",
      size: "300 g+",
      scientificName: "Dicentrarchus punctatus",
      blurb: "Elegant flavors; highly versatile.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Red Mullet",
      size: "150 g+",
      scientificName: "Pseudupeneus prayensis",
      blurb: "Vibrant color with delicate, sweet meat.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Gray Gilt-head Bream",
      size: "500 g+",
      scientificName: "Plectorhinchus mediterraneus",
      blurb: "Subtle flavors and tender flesh.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Badeche Grouper",
      size: "500 g+",
      scientificName: "Epinephelus costae",
      blurb: "Remarkable flavor; versatile texture.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Abae Grouper",
      size: "1 kg+",
      scientificName: "Mycteroperca rubra",
      blurb: "Captivating flavors; premium whole fish.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Sipon",
      size: "500 g+",
      scientificName: "Orcynopsis unicolor",
      blurb: "Bold flavors; unforgettable dishes.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Rata",
      size: "400 g+",
      scientificName: "Uranoscopus polli",
      blurb: "Distinctive taste; versatile possibilities.",
      image: "/images/fish/friedpampano.webp",
    },
    {
      commonName: "Captain Fish (Capitaine)",
      size: "500 g+",
      scientificName: "Pseudotolithus senegalensis",
      blurb: "Distinctive taste and tender meat.",
      image: "/images/fish/captainfish.jpeg",
    },
  ],
} as const;

export default function Catalogue() {
  const [activeTab, setActiveTab] = useState<(typeof CATEGORIES)[number]>(
    CATEGORIES[0]
  );

  const items = useMemo(() => {
    const catalogueItems = CATALOGUE[activeTab as keyof typeof CATALOGUE] || [];
    return [...catalogueItems];
  }, [activeTab]);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardsPerSlide = useResponsiveCards(containerRef);
  const slides = useMemo(
    () => chunk(items, cardsPerSlide),
    [items, cardsPerSlide]
  );
  const [index, setIndex] = useState(0);

  useEffect(() => setIndex(0), [activeTab]);

  const go = useCallback(
    (dir: "next" | "prev") => {
      if (!slides.length) return;
      setIndex((i) =>
        dir === "next"
          ? (i + 1) % slides.length
          : (i - 1 + slides.length) % slides.length
      );
    },
    [slides.length]
  );

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go("next");
      if (e.key === "ArrowLeft") go("prev");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <section id="catalogue" className="py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-8">
          <h2 className="section-heading">Product Catalogue</h2>
          <p className="section-subheading">
            Browse our featured species by category. Use arrows or swipe.
          </p>
        </header>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Catalogue categories"
          className="flex flex-wrap gap-2 sm:gap-3"
        >
          {CATEGORIES.map((cat) => {
            const active = cat === activeTab;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={active}
                aria-controls={`panel-${cat}`}
                onClick={() => setActiveTab(cat)}
                className={[
                  "rounded-xl px-4 py-2 text-sm font-semibold ring-1 transition",
                  active
                    ? "bg-[#1375bc] text-white ring-[#1375bc]"
                    : "bg-white text-slate-700 ring-slate-300 hover:bg-slate-50",
                ].join(" ")}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={activeTab}
          className="mt-6"
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-slate-600">
              {items.length} items • {cardsPerSlide} per slide
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => go("prev")}
                className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-50"
                aria-label="Previous"
              >
                ←
              </button>
              <button
                onClick={() => go("next")}
                className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-50"
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((slide, sIdx) => (
                <div key={sIdx} className="w-full shrink-0 px-4 py-6">
                  <div className={`grid gap-6 ${gridColsClass(cardsPerSlide)}`}>
                    {slide.map((item, i) => (
                      <Card key={`${item.commonName}-${i}`} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  "h-2.5 w-2.5 rounded-full",
                  i === index
                    ? "bg-[#1375bc]"
                    : "bg-slate-300 hover:bg-slate-400",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  item: {
    commonName: string;
    scientificName: string;
    size: string;
    blurb: string;
    image: string;
  };
}

function Card({ item }: CardProps) {
  const { commonName, scientificName, size, blurb, image } = item;
  return (
    <article className="group h-full rounded-2xl border border-slate-200 p-4 shadow-sm transition hover:shadow-md">
      {/* image */}
      <div className="aspect-4/3 w-full overflow-hidden rounded-xl bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={commonName}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-slate-400 text-sm">
            No image
          </div>
        )}
      </div>

      <header className="mt-3">
        <h3 className="text-base font-semibold text-slate-900">
          {commonName} <span className="text-slate-400">•</span>{" "}
          <span className="text-[#1375bc]">{size}</span>
        </h3>
        <p className="text-xs text-slate-500 italic">{scientificName}</p>
      </header>
      <p className="mt-2 text-sm text-slate-700">{blurb}</p>

      <div className="mt-3 flex items-center gap-3">
        <button className="rounded-lg bg-[#1375bc] px-3 py-2 text-xs font-semibold text-white hover:bg-[#0f5d94]">
          Request
        </button>
      </div>
    </article>
  );
}

// helpers
function chunk<T>(arr: T[], n: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / n) }, (_, i) =>
    arr.slice(i * n, i * n + n)
  );
}

function useResponsiveCards(
  containerRef: React.RefObject<HTMLDivElement | null>
) {
  const [n, setN] = useState(3);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      if (w < 520) setN(1);
      else if (w < 900) setN(2);
      else setN(3);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [containerRef]);
  return n;
}

function gridColsClass(n: number): string {
  if (n === 1) return "grid-cols-1";
  if (n === 2) return "sm:grid-cols-2";
  return "sm:grid-cols-2 lg:grid-cols-3";
}
