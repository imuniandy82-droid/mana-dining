import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { ChevronDown } from "lucide-react";
import { restaurant } from "@/data/restaurant";

function HeroImage({ src }: { src: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-[120%] w-full items-center justify-center bg-gradient-to-br from-espresso via-espresso-light to-warm-brown/30">
        <div className="text-center">
          <span className="block font-serif text-4xl tracking-[0.3em] text-cream/30 sm:text-6xl">
            MANA
          </span>
          <span className="mt-4 block font-sans text-xs tracking-[0.15em] uppercase text-cream/15">
            Dining in Kuala Lumpur
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[120%] w-full img-fallback">
      <img
        src={src}
        alt="Mana restaurant interior"
        className="h-full w-full object-cover img-warm"
        fetchPriority="high"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

function HeroWithUpload() {
  const image = useQuery(api.siteImages.getBySlot, { slot: "hero" });
  const src =
    image && "data" in image
      ? `data:${image.mimeType};base64,${image.data}`
      : restaurant.heroImage;
  return <HeroImage src={src} />;
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -40]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <HeroWithUpload />
      </motion.div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/40 to-espresso/80" />

      {/* Grain Texture */}
      <div className="grain-overlay absolute inset-0" />

      {/* Content */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        {/* Small decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8 h-px w-16 bg-gold/60"
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-7xl font-light tracking-[0.3em] text-cream sm:text-8xl md:text-9xl"
        >
          {restaurant.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 max-w-md font-serif text-lg italic text-cream/70 sm:text-xl"
        >
          {restaurant.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#menu"
            className="border border-gold/50 bg-gold/10 px-10 py-3.5 font-sans text-[11px] tracking-[0.25em] uppercase text-gold backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-espresso"
          >
            Explore Menu
          </a>
          <a
            href="#find-us"
            className="px-10 py-3.5 font-sans text-[11px] tracking-[0.25em] uppercase text-cream/60 transition-all duration-300 hover:text-gold"
          >
            Find Us
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 lg:bottom-12"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-cream/40">
            Scroll
          </span>
          <ChevronDown size={16} className="text-cream/40" />
        </motion.div>
      </motion.div>

      {/* Mobile bottom padding for sticky CTA */}
      <div className="h-14 lg:hidden" />
    </section>
  );
}
