import { ScrollReveal, ParallaxImage } from "./ScrollReveal";
import { restaurant } from "@/data/restaurant";

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
              <ParallaxImage
                src={img.src}
                alt={img.alt}
                className={`w-full ${
                  i === 1
                    ? "aspect-[3/4] sm:-mt-8"
                    : "aspect-[3/4]"
                }`}
              />
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
