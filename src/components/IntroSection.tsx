import { ScrollReveal, ParallaxImage } from "./ScrollReveal";
import { restaurant } from "@/data/restaurant";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

function IntroImage() {
  const image = useQuery(api.siteImages.getBySlot, { slot: "intro" });
  return (
    <ParallaxImage
      src={image?.url ?? null}
      alt="Elegant plated dish at Mana restaurant"
      className="aspect-[4/5] w-full"
    />
  );
}

export function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-espresso py-24 lg:py-32">
      <div className="grain-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="order-2 lg:order-1">
          <ScrollReveal>
            <div className="vintage-divider mb-8">
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold/60">
                About Mana
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h2 className="font-serif text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
              {restaurant.introHeading}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="mt-8 max-w-lg font-sans text-base leading-relaxed text-cream/60">
              {restaurant.introText}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.45}>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-12 bg-gold/30" />
              <span className="font-serif text-sm italic text-gold/50">
                Kuala Lumpur
              </span>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="right" delay={0.2} className="relative order-1 lg:order-2">
          <IntroImage />
          <div className="pointer-events-none absolute -bottom-3 -right-3 h-20 w-20 border-b border-r border-gold/20" />
        </ScrollReveal>
      </div>
    </section>
  );
}
