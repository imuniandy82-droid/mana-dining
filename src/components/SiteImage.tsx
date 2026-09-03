import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";

interface SiteImageProps {
  slot: string;
  alt?: string;
  className?: string;
  loading?: "lazy" | "eager";
}

export function SiteImage({
  slot,
  alt,
  className,
  loading = "lazy",
}: SiteImageProps) {
  const image = useQuery(api.siteImages.getBySlot, { slot });
  const [hasError, setHasError] = useState(false);

  const url = image?.url ?? null;
  const showPlaceholder = image === undefined || hasError || !url;

  if (showPlaceholder) {
    return (
      <div
        className={cn(
          "flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br from-espresso via-espresso-light to-warm-brown/30",
          className,
        )}
      >
        <span className="font-serif text-xl tracking-[0.2em] text-cream/30">
          MANA
        </span>
      </div>
    );
  }

  return (
    <img
      src={url}
      alt={alt ?? ""}
      loading={loading}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}