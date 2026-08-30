import { ScrollReveal } from "./ScrollReveal";
import { restaurant } from "@/data/restaurant";

export function ReviewsSection() {
  return (
    <section className="relative overflow-hidden bg-espresso-light py-24 lg:py-32">
      <div className="grain-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
        <ScrollReveal>
          <div className="vintage-divider mx-auto mb-12 max-w-xs">
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold/60">
              Reviews
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mb-4 font-serif text-7xl text-gold sm:text-8xl">
            {restaurant.rating}
            <span className="ml-1 text-5xl sm:text-6xl">★</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="font-sans text-sm text-cream/40">
            {restaurant.ratingSource}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          {restaurant.reviewsUrl ? (
            <a
              href={restaurant.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block border border-gold/30 px-8 py-3 font-sans text-[11px] tracking-[0.2em] uppercase text-gold/70 transition-all duration-300 hover:border-gold/50 hover:text-gold"
            >
              See More Reviews
            </a>
          ) : (
            <p className="mt-8 font-serif text-sm italic text-cream/30">
              Reviews link coming soon
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
