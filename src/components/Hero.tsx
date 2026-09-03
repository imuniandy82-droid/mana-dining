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

/** Shows nothing while the Convex query loads (the section gradient
 *  background is already visible), then the uploaded photo once ready. */
function HeroWithUpload() {
  const image = useQuery(api.siteImages.getBySlot, { slot: "hero" });

  // useQuery returns undefined while loading — show nothing during that
  // brief window so we never hit the broken /images/hero.jpg fallback.
  if (image === undefined) {
    return <div className="h-[120%] w-full bg-espresso/50" />;
  }

  // query resolved — either we have an uploaded photo or nothing
  return <HeroImage src={image?.url ?? restaurant.heroImage} />;
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
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <HeroWithUpload />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/40 to-espresso/80" />
      <div className="grain-overlay absolute inset-0" />

      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8 h-px w-16 bg-gold/60"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6 font-sans text-[11px] tracking-[0.45em] uppercase text-gold/70"
        >
          {restaurant.name} · Kuala Lumpur
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="whitespace-pre-line font-serif text-4xl font-light leading-snug text-cream sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {restaurant.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 max-w-xl font-sans text-sm leading-relaxed text-cream/65 sm:text-base"
        >
          {restaurant.description}
        </motion.p>

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

      <div className="h-14 lg:hidden" />
    </section>
  );
}
