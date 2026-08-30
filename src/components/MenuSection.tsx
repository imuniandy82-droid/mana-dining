import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { restaurant } from "@/data/restaurant";

export function MenuSection() {
  const categories = restaurant.menuCategories;
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeftArrow(el.scrollLeft > 10);
    setShowRightArrow(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };

  const selectTab = (idx: number) => {
    setActiveIdx(idx);
    // Scroll the active tab into view
    const el = scrollRef.current;
    if (!el) return;
    const btn = el.children[idx] as HTMLElement;
    if (btn) {
      btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  return (
    <section
      id="menu"
      className="relative overflow-hidden aged-paper py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
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

        {/* Scrollable Category Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="relative mb-12">
            {/* Left arrow */}
            {showLeftArrow && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-0 z-10 flex h-full w-10 items-center justify-center bg-gradient-to-r from-[#f2e8d5] via-[#f2e8d5] to-transparent lg:hidden"
                aria-label="Scroll tabs left"
              >
                <ChevronLeft size={18} className="text-warm-brown/60" />
              </button>
            )}

            {/* Right arrow */}
            {showRightArrow && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-0 z-10 flex h-full w-10 items-center justify-center bg-gradient-to-l from-[#f2e8d5] via-[#f2e8d5] to-transparent lg:hidden"
                aria-label="Scroll tabs right"
              >
                <ChevronRight size={18} className="text-warm-brown/60" />
              </button>
            )}

            {/* Tabs */}
            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="no-scrollbar flex gap-1 overflow-x-auto sm:flex-wrap sm:justify-center sm:gap-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {categories.map((cat, i) => (
                <button
                  key={cat.name}
                  onClick={() => selectTab(i)}
                  className={`shrink-0 px-4 py-2.5 font-sans text-[10px] tracking-[0.2em] uppercase transition-all duration-300 sm:px-5 ${
                    activeIdx === i
                      ? "border border-warm-brown/30 bg-warm-brown/10 text-espresso"
                      : "text-espresso/40 hover:text-espresso/70"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Active Category Title */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`title-${activeIdx}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mb-8 border-b border-warm-brown/15 pb-4"
          >
            <h3 className="font-serif text-2xl text-espresso sm:text-3xl">
              {categories[activeIdx].name}
            </h3>
          </motion.div>
        </AnimatePresence>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="min-h-[150px]"
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
                  {restaurant.menuNote}
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
      </div>
    </section>
  );
}
