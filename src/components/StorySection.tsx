import { ScrollReveal, ParallaxImage } from "./ScrollReveal";
import { restaurant } from "@/data/restaurant";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

function StoryImage() {
  const image = useQuery(api.siteImages.getBySlot, { slot: "story" });
  return (
    <ParallaxImage
      src={image?.url ?? null}
      alt="Mana restaurant atmosphere"
      className="aspect-[4/5] w-full"
    />
  );
}

export function StorySection() {
  return (
    <section className="relative overflow-hidden aged-paper py-24 lg:py-32">
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <ScrollReveal direction="left">
          <StoryImage />
        </ScrollReveal>

        <div>
          <ScrollReveal delay={0.15}>
            <div className="vintage-divider mb-8">
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-warm-brown/60">
                Our Story
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <h2 className="whitespace-pre-line font-serif text-4xl leading-tight text-espresso sm:text-5xl lg:text-6xl">
              {restaurant.storyHeading}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="mt-8 max-w-lg font-sans text-base leading-relaxed text-espresso/65">
              {restaurant.storyText}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-12 bg-warm-brown/30" />
              <span className="font-serif text-sm italic text-warm-brown/50">
                Since day one
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
