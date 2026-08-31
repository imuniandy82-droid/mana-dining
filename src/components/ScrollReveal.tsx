import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  threshold?: number;
}

const directionMap: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 40,
  once = true,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const offset = directionMap[direction];
  const factor = distance / 40;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        x: offset.x !== undefined ? offset.x * factor : 0,
        y: offset.y !== undefined ? offset.y * factor : 0,
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : {
              opacity: 0,
              x: offset.x !== undefined ? offset.x * factor : 0,
              y: offset.y !== undefined ? offset.y * factor : 0,
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* Parallax image wrapper with error handling */
export function ParallaxImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        ref={ref}
        className={`overflow-hidden ${className}`}
      >
        <div className="flex h-[120%] w-full items-center justify-center bg-gradient-to-br from-espresso via-espresso-light to-warm-brown/30">
          <div className="text-center">
            <span className="block font-serif text-2xl tracking-[0.2em] text-cream/30 sm:text-3xl">
              MANA
            </span>
            <span className="mt-2 block font-sans text-[10px] tracking-[0.15em] uppercase text-cream/15">
              {alt}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-[120%] w-full object-cover img-warm"
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
