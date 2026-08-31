import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { restaurant } from "@/data/restaurant";

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br from-espresso via-espresso-light to-warm-brown/30">
        <div className="text-center px-4">
          <span className="block font-serif text-sm tracking-[0.1em] text-cream/25 sm:text-base">
            {alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="img-fallback">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 img-warm"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

const categories = ["ALL", "FOOD", "SPACE"] as const;
type Category = (typeof categories)[number];

export function GallerySection() {
  const [active, setActive] = useState<Category>("ALL");

  const filtered =
    active === "ALL"
      ? restaurant.galleryImages
      : restaurant.galleryImages.filter(
          (img) => img.category === active.toLowerCase(),
        );

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-espresso py-24 lg:py-32"
    >
      <div className="grain-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12 text-center">
            <div className="vintage-divider mx-auto mb-8 max-w-xs">
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold/60">
                Gallery
              </span>
            </div>
            <h2 className="font-serif text-4xl text-cream sm:text-5xl lg:text-6xl">
              A Visual Story
            </h2>
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="mb-10 flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 font-sans text-[10px] tracking-[0.25em] uppercase transition-all duration-300 ${
                  active === cat
                    ? "border border-gold/40 bg-gold/10 text-gold"
                    : "text-cream/40 hover:text-cream/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 gap-4 sm:columns-2 lg:columns-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="mb-4 break-inside-avoid"
              >
                <div className="group relative overflow-hidden">
                  <GalleryImage src={img.src} alt={img.alt} />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-espresso/0 transition-all duration-500 group-hover:bg-espresso/40" />
                  <div className="absolute inset-0 flex items-end p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="font-serif text-sm italic text-cream/80">
                      {img.alt}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
