import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { restaurant } from "@/data/restaurant";

export function MenuSection() {
  const categories = restaurant.menuCategories;
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="menu"
      className="relative overflow-hidden aged-paper py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <div className="vintage-divider mx-auto mb-8 max-w-xs">
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-warm-brown/50">
                Menu
              </span>
            </div>
            <h2 className="font-serif text-4xl text-espresso sm:text-5xl lg:text-6xl">
              Our Menu
            </h2>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="mb-12 flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveIdx(i)}
                className={`px-5 py-2.5 font-sans text-[10px] tracking-[0.25em] uppercase transition-all duration-300 ${
                  activeIdx === i
                    ? "border border-warm-brown/30 bg-warm-brown/10 text-espresso"
                    : "text-espresso/40 hover:text-espresso/70"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Menu Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="min-h-[200px]"
          >
            {categories[activeIdx].items ? (
              <div className="space-y-5">
                {categories[activeIdx].items!.map((item) => (
                  <div
                    key={item.name}
                    className="border-b border-warm-brown/10 pb-4"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="font-serif text-lg text-espresso sm:text-xl">
                        {item.name}
                      </h4>
                      {item.price && (
                        <span className="shrink-0 font-serif text-base text-warm-brown sm:text-lg">
                          {item.price}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="mt-1 max-w-2xl font-sans text-sm text-espresso/50">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="font-serif text-xl italic text-espresso/50">
                  {categories[activeIdx].name === "Desserts"
                    ? "Dessert menu coming soon."
                    : restaurant.menuNote}
                </p>
                <a
                  href={restaurant.phoneTel}
                  className="mt-8 inline-block border border-warm-brown/30 px-8 py-3 font-sans text-[11px] tracking-[0.2em] uppercase text-warm-brown transition-all duration-300 hover:bg-warm-brown hover:text-cream-light"
                >
                  Contact Mana
                </a>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Lunch Promo */}
        {restaurant.lunchPromo.length > 0 && (
          <ScrollReveal delay={0.2}>
            <div className="mt-20 border-t border-warm-brown/15 pt-12">
              <div className="mb-8 text-center">
                <span className="inline-block border border-warm-brown/20 bg-warm-brown/5 px-5 py-1.5 font-sans text-[10px] tracking-[0.25em] uppercase text-warm-brown/60">
                  Lunch Promo
                </span>
              </div>
              <div className="mx-auto max-w-2xl space-y-4">
                {restaurant.lunchPromo.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col gap-1 border-b border-warm-brown/8 pb-3 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <div>
                      <span className="font-serif text-base text-espresso">
                        {item.name}
                      </span>
                      {item.note && (
                        <span className="ml-2 font-sans text-xs text-espresso/40">
                          {item.note}
                        </span>
                      )}
                    </div>
                    <span className="shrink-0 font-serif text-base text-warm-brown">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
