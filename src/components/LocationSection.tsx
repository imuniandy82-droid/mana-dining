import { ScrollReveal } from "./ScrollReveal";
import { restaurant } from "@/data/restaurant";
import { MapPin, Phone, Clock } from "lucide-react";

export function LocationSection() {
  return (
    <section
      id="find-us"
      className="relative overflow-hidden aged-paper py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Left: Info */}
        <div>
          <ScrollReveal>
            <div className="vintage-divider mb-8">
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-warm-brown/50">
                Find Us
              </span>
            </div>
            <h2 className="font-serif text-4xl text-espresso sm:text-5xl lg:text-6xl">
              Visit Mana
            </h2>
          </ScrollReveal>

          {/* Address */}
          <ScrollReveal delay={0.15}>
            <div className="mt-10 flex gap-4">
              <MapPin
                size={18}
                className="mt-1 shrink-0 text-warm-brown/50"
              />
              <div>
                <p className="font-sans text-base leading-relaxed text-espresso/70">
                  {restaurant.address.street}
                  <br />
                  {restaurant.address.area},{" "}
                  {restaurant.address.postcode}
                  <br />
                  {restaurant.address.city}
                  <br />
                  {restaurant.address.state}
                  <br />
                  {restaurant.address.country}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Phone */}
          <ScrollReveal delay={0.25}>
            <div className="mt-8 flex gap-4">
              <Phone
                size={18}
                className="mt-1 shrink-0 text-warm-brown/50"
              />
              <a
                href={restaurant.phoneTel}
                className="font-sans text-base text-espresso/70 transition-colors hover:text-warm-brown"
              >
                {restaurant.phone}
              </a>
            </div>
          </ScrollReveal>

          {/* Action Buttons */}
          <ScrollReveal delay={0.35}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={restaurant.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-warm-brown/30 bg-warm-brown/10 px-8 py-3.5 text-center font-sans text-[11px] tracking-[0.2em] uppercase text-warm-brown transition-all duration-300 hover:bg-warm-brown hover:text-cream-light"
              >
                Get Directions
              </a>
              <a
                href={restaurant.phoneTel}
                className="inline-block px-8 py-3.5 text-center font-sans text-[11px] tracking-[0.2em] uppercase text-warm-brown/60 transition-all duration-300 hover:text-warm-brown"
              >
                Call Mana
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Opening Hours */}
        <div>
          <ScrollReveal direction="right">
            <div className="border border-warm-brown/10 bg-cream-light/50 p-8 sm:p-10">
              <div className="mb-8 flex items-center gap-3">
                <Clock size={18} className="text-warm-brown/50" />
                <h3 className="font-serif text-2xl text-espresso">
                  Opening Hours
                </h3>
              </div>

              <div className="space-y-3">
                {restaurant.openingHours.map((entry) => (
                  <div
                    key={entry.day}
                    className="flex items-baseline justify-between border-b border-warm-brown/8 pb-3"
                  >
                    <span className="font-sans text-sm font-medium text-espresso/70">
                      {entry.day}
                    </span>
                    <span className="ml-4 text-right font-sans text-sm text-espresso/45">
                      {entry.hours}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-center font-serif text-sm italic text-warm-brown/50">
                Please check our latest opening hours before visiting.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
