import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const bookingHref = restaurant.bookingUrl || restaurant.phoneTel;

  return (
    <>
      {/* ── Desktop & Mobile Top Nav ──────────────────── */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-espresso/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <a
            href="#home"
            className="font-serif text-2xl tracking-[0.25em] text-cream transition-colors hover:text-gold lg:text-3xl"
          >
            {restaurant.name}
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-10 lg:flex">
            {restaurant.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-[11px] tracking-[0.2em] uppercase text-cream/70 transition-colors duration-300 hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={bookingHref}
            target={restaurant.bookingUrl ? "_blank" : undefined}
            rel={restaurant.bookingUrl ? "noopener noreferrer" : undefined}
            className="hidden border border-gold/40 px-6 py-2.5 font-sans text-[11px] tracking-[0.2em] uppercase text-gold transition-all duration-300 hover:bg-gold hover:text-espresso lg:inline-block"
          >
            Book a Table
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center text-cream lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* ── Mobile Slide-Down Menu ────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-espresso/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {restaurant.nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-3xl tracking-widest text-cream/80 transition-colors hover:text-gold"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-6"
              >
                <a
                  href={bookingHref}
                  target={restaurant.bookingUrl ? "_blank" : undefined}
                  rel={restaurant.bookingUrl ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className="inline-block border border-gold/50 px-8 py-3 font-sans text-xs tracking-[0.25em] uppercase text-gold transition-all duration-300 hover:bg-gold hover:text-espresso"
                >
                  Book a Table
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile Sticky Bottom CTA ──────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gold/10 bg-espresso/95 backdrop-blur-md lg:hidden">
        <a
          href={bookingHref}
          target={restaurant.bookingUrl ? "_blank" : undefined}
          rel={restaurant.bookingUrl ? "noopener noreferrer" : undefined}
          className="flex items-center justify-center gap-2 py-3.5 font-sans text-[11px] tracking-[0.25em] uppercase text-gold"
        >
          <Phone size={14} />
          Book a Table
        </a>
      </div>
    </>
  );
}
