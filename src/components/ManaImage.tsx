import { useState } from "react";

interface ManaImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}

export function ManaImage({
  src,
  alt,
  className = "",
  fallbackClassName = "",
  loading = "lazy",
  fetchPriority,
}: ManaImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-espresso via-espresso-light to-warm-brown/30 ${fallbackClassName || className}`}
      >
        <div className="text-center">
          <span className="block font-serif text-2xl tracking-[0.2em] text-cream/30 sm:text-3xl">
            MANA
          </span>
          <span className="mt-2 block font-sans text-[10px] tracking-[0.15em] uppercase text-cream/15">
            {alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      {!isLoaded && (
        <div
          className={`absolute inset-0 animate-pulse bg-gradient-to-br from-espresso via-espresso-light to-warm-brown/20 ${fallbackClassName}`}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        className={`${className} ${isLoaded ? "" : "invisible absolute inset-0"}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </>
  );
}

/* Updated ParallaxImage with error handling */
export function ParallaxImageSafe({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-espresso via-espresso-light to-warm-brown/30 ${className}`}
      >
        <div className="text-center">
          <span className="block font-serif text-2xl tracking-[0.2em] text-cream/30 sm:text-3xl">
            MANA
          </span>
          <span className="mt-2 block font-sans text-[10px] tracking-[0.15em] uppercase text-cream/15">
            {alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-espresso via-espresso-light to-warm-brown/20" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${isLoaded ? "" : "invisible"}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
