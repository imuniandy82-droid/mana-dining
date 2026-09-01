import { ScrollReveal, ParallaxImage } from "./ScrollReveal";
import { restaurant } from "@/data/restaurant";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { resolveSiteImageUrl } from "@/components/SiteImage"

function ExperienceImage({
  slot,
  src,
  alt,
  className,
}: {
  slot: string;
  src: string;
  alt: string;
  className?: string;
}) {
  const images = useQuery(api.siteImages.list);
  const imageMap = images ? new Map(images    .map((i: any) => [i.slot, i]))
    : null;
  const resolved = resolveSiteImageUrl(slot, src, imageMap as any);
  return (
    <ParallaxImage
      src={resolved}
      alt={alt}
      className={className}
    />
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-espresso py-24 lg:py-32"
    >
      <div className="grain-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 text-center lg:mb-20">
            <div className="vintage-divider mx-auto mb-8 max-w-xs">
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold/60">
                Atmosphere
              </span>
            </div>
            <h2 className="font-serif text-4xl text-cream sm:text-5xl lg:text-6xl">
              The Experience
            </h2>
          </div>
        </ScrollReveal>

        {/* Images Grid with staggered reveal */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {restaurant.experienceImages.map((img, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.15}
              direction={i === 0 ? "left" : i === 2 ? "right" : "up"}
            >
              <div
                className={`relative overflow-hidden img-fallback ${
                  i === 1
                    ? "aspect-[3/4] sm:-mt-8"
                    : "aspect-[3/4]"
                }`}
              >
                <ExperienceImage
                  slot={`experience-${i + 1}`}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full"
                />
                {/* Warm amber overlay to match Mana's actual orange-glow atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-amber-800/10 to-espresso/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-amber-700/10" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Description */}
        <ScrollReveal delay={0.3}>
          <div className="mx-auto mt-16 max-w-2xl text-center lg:mt-20">
            <p className="font-serif text-xl leading-relaxed text-cream/70 italic sm:text-2xl">
              {restaurant.experienceText}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
