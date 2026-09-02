import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export type SiteImage = {
  slot: string;
  alt: string;
  category: string;
  order: number;
  url: string | null;
};

const IMAGE_SLOTS = {
  hero: { label: "Hero / Banner", category: "space" },
  intro: { label: "Introduction", category: "space" },
  story: { label: "Story Section", category: "food" },
  "experience-1": { label: "Experience Photo 1", category: "space" },
  "experience-2": { label: "Experience Photo 2", category: "space" },
  "experience-3": { label: "Experience Photo 3", category: "space" },
  "dish-angus-short-ribs": { label: "Angus Short Ribs Dish", category: "food" },
  "dish-paella": { label: "Paella Dish", category: "food" },
  "food-1": { label: "Food Photo 1", category: "food" },
  "food-2": { label: "Food Photo 2", category: "food" },
  "food-3": { label: "Food Photo 3", category: "food" },
  "food-4": { label: "Food Photo 4", category: "food" },
  "food-5": { label: "Food Photo 5", category: "food" },
  "food-6": { label: "Food Photo 6", category: "food" },
  "food-7": { label: "Food Photo 7", category: "food" },
  "food-8": { label: "Food Photo 8", category: "food" },
  "food-9": { label: "Food Photo 9", category: "food" },
  "food-10": { label: "Food Photo 10", category: "food" },
  "food-11": { label: "Food Photo 11", category: "food" },
  "food-12": { label: "Food Photo 12", category: "food" },
  "food-13": { label: "Food Photo 13", category: "food" },
  "space-1": { label: "Space Photo 1", category: "space" },
  "space-2": { label: "Space Photo 2", category: "space" },
  "space-3": { label: "Space Photo 3", category: "space" },
  "space-4": { label: "Space Photo 4", category: "space" },
  "space-5": { label: "Space Photo 5", category: "space" },
  "space-6": { label: "Space Photo 6", category: "space" },
} as const;

export type SlotKey = keyof typeof IMAGE_SLOTS;

export const SLOT_ORDER: SlotKey[] = [
  "hero", "intro", "story",
  "experience-1", "experience-2", "experience-3",
  "dish-angus-short-ribs", "dish-paella",
  ...Array.from({ length: 13 }, (_, i) => `food-${i + 1}` as SlotKey),
  ...Array.from({ length: 6 }, (_, i) => `space-${i + 1}` as SlotKey),
];

export function getSlotInfo(slot: SlotKey) {
  return IMAGE_SLOTS[slot] ?? { label: slot, category: "food" };
}

export function useSiteImages() {
  const raw = useQuery(api.siteImages.list);
  if (!raw) return null;
  const map = new Map<string, SiteImage>();
  for (const img of raw) {
    const d = img as any;
    const url = d.data && d.mimeType ? `data:${d.mimeType};base64,${d.data}` : null;
    map.set(img.slot, { slot: img.slot, alt: img.alt, category: img.category, order: img.order, url });
  }
  return map;
}

export function useSiteImage(slot: string) {
  return useQuery(api.siteImages.getBySlot, { slot });
}
