import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

interface SiteImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  slot: string;
  fallbackSrc: string;
}

export function SiteImage({
  slot,
  fallbackSrc,
  alt,
  ...props
}: SiteImageProps) {
  const image = useQuery(api.siteImages.getBySlot, { slot }) as any;
  const src = image?.data && image?.mimeType
    ? `data:${image.mimeType};base64,${image.data}`
    : fallbackSrc;
  return <img src={src} alt={alt ?? ""} {...props} />;
}
