import { restaurant } from "@/data/restaurant";

export function Footer() {
  const bookingHref = restaurant.bookingUrl || restaurant.phoneTel;

  return (
    <footer className="relative overflow-hidden bg-espresso border-t border-gold/10">
      <div className="grain-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="font-serif text-3xl tracking-[0.25em] text-cream transition-colors hover:text-gold lg:text-4xl"
            >
              {restaurant.name}
            </a>
            <div className="mt-6 space-y-1">
              <p className="font-sans text-sm text-cream/40">
                {restaurant.address.street}
              </p>
              <p className="font-sans text-sm text-cream/40">
                {restaurant.address.area} {restaurant.address.postcode}
              </p>
              <p className="font-sans text-sm text-cream/40">
                {restaurant.address.city}
              </p>
              <p className="font-sans text-sm text-cream/40">
                {restaurant.address.country}
              </p>
            </div>
            <a
              href={restaurant.phoneTel}
              className="mt-4 inline-block font-sans text-sm text-cream/40 transition-colors hover:text-gold"
            >
              {restaurant.phone}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 font-sans text-[10px] tracking-[0.3em] uppercase text-cream/30">
              Navigate
            </h4>
            <nav className="space-y-3">
              {restaurant.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block font-sans text-sm text-cream/50 transition-colors duration-300 hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="mb-6 font-sans text-[10px] tracking-[0.3em] uppercase text-cream/30">
              Follow Us
            </h4>
            <div className="space-y-3">
              <a
                href={restaurant.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-sans text-sm text-cream/50 transition-colors duration-300 hover:text-gold"
              >
                Instagram
              </a>
              <a
                href={restaurant.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-sans text-sm text-cream/50 transition-colors duration-300 hover:text-gold"
              >
                Facebook
              </a>
            </div>

            <a
              href={bookingHref}
              target={restaurant.bookingUrl ? "_blank" : undefined}
              rel={restaurant.bookingUrl ? "noopener noreferrer" : undefined}
              className="mt-8 inline-block border border-gold/30 px-8 py-3 font-sans text-[11px] tracking-[0.2em] uppercase text-gold/70 transition-all duration-300 hover:border-gold/50 hover:text-gold"
            >
              Book a Table
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gold/10 pt-8 text-center">
          <p className="font-sans text-xs text-cream/25">
            &copy; {restaurant.copyrightYear} {restaurant.name}. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* Bottom padding for mobile sticky CTA */}
      <div className="h-14 lg:hidden" />
    </footer>
  );
}
