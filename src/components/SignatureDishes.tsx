import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { restaurant } from "@/data/restaurant";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const DISH_SLOTS: Record<string, string> = {
  "Angus Short Ribs": "dish-angus-short-ribs",
  "Spanish Mun Fan (Paella)": "dish-paella",
};

function DishImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);
  const slot = DISH_SLOTS[alt] || "";
  const image = useQuery(api.siteImages.getBySlot, slot ? { slot } : "skip");
  const resolved = image?.url ?? src;

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-espresso via-espresso-light to-warm-brown/30">
        <div className="text-center">
          <span className="block font-serif text-xl tracking-[0.15em] text-cream/25 sm:text-2xl">
            {alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full img-fallback">
      <img
        src={resolved}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 img-warm"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

export function SignatureDishes() {
  return (
    <section className="relative overflow-hidden bg-espresso-light py-24 lg:py-32">
      <div className="grain-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center">
            <div className="vintage-divider mx-auto mb-8 max-w-xs">
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold/60">
                Signature
              </span>
            </div>
            <h2 className="font-serif text-4xl text-cream sm:text-5xl lg:text-6xl">
              Standout Dishes
            </h2>
            <p className="mx-auto mt-6 max-w-lg font-sans text-base text-cream/50">
              Two dishes that define the Mana experience — crafted with care,
              served with pride.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {restaurant.signatureDishes.map((dish, i) => (
            <ScrollReveal key={dish.name} delay={i * 0.2}>
              <div className="group relative overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
                  <DishImage src={dish.image} alt={dish.name} />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="mb-3 h-px w-10 bg-gold/50 transition-all duration-500 group-hover:w-16" />
                  <h3 className="font-serif text-3xl text-cream sm:text-4xl">
                    {dish.name}
                  </h3>
                  <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-cream/60">
                    {dish.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <a
              href="#menu"
              className="inline-block border border-gold/40 px-10 py-3.5 font-sans text-[11px] tracking-[0.25em] uppercase text-gold transition-all duration-300 hover:bg-gold hover:text-espresso"
            >
              View Full Menu
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
