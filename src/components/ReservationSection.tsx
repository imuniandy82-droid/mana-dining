import { ScrollReveal } from "./ScrollReveal";
import { restaurant } from "@/data/restaurant";

export function ReservationSection() {
  const bookingHref = restaurant.bookingUrl || restaurant.phoneTel;

  return (
    <section className="relative overflow-hidden bg-espresso py-28 lg:py-36">
      <div className="grain-overlay absolute inset-0" />

      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-10">
        <ScrollReveal>
          <div className="vintage-divider mx-auto mb-10 max-w-xs">
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold/60">
              Reservations
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2 className="font-serif text-4xl text-cream sm:text-5xl lg:text-6xl">
            Your Table Awaits.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="mx-auto mt-6 max-w-md font-sans text-base text-cream/50">
            Planning a dinner, date night, or relaxed meal in KL?
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <div className="mt-10">
            <a
              href={bookingHref}
              target={restaurant.bookingUrl ? "_blank" : undefined}
              rel={restaurant.bookingUrl ? "noopener noreferrer" : undefined}
              className="inline-block border border-gold/50 bg-gold/10 px-12 py-4 font-sans text-[11px] tracking-[0.25em] uppercase text-gold backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-espresso"
            >
              Book a Table
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
