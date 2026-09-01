import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

interface SiteImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  slot: string;
  fallbackSrc: string;
}

function toDataUrl(data: string, mimeType: string): string {
  return `data:${mimeType};base64,${data}`;
}

export function SiteImage({
  slot,
  fallbackSrc,
  alt,
  ...props
}: SiteImageProps) {
  const image = useQuery(api.siteImages.getBySlot, { slot });

  const src =
    image && "data" in image
      ? toDataUrl(image.data, image.mimeType)
      : fallbackSrc;

  return <img src={src} alt={alt ?? ""} {...props} />;
}

export function resolveSiteImageUrl(
  slot: string,
  staticPath: string,
  images: Map<string, { data: string; mimeType: string }> | null,
): string {
  const img = images?.get(slot);
  if (img && "data" in img) {
    return `data:${img.mimeType};base64,${img.data}`;
  }
  return staticPath;
}
