import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import {
  SLOT_ORDER,
  useSiteImages,
  getSlotInfo,
  type SlotKey,
} from "@/hooks/use-site-images";
import { ImageUploader } from "@/components/ImageUploader";
import {
  Images,
  LogOut,
  Utensils,
  Wine,
  LayoutGrid,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

type Filter = "all" | "hero" | "food" | "space";

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const images = useSiteImages();
  const [filter, setFilter] = useState<Filter>("all");
  const [refreshKey, setRefreshKey] = useState(0);
  const clearAll = useMutation(api.siteImages.clearAll);
  const [isClearing, setIsClearing] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleUploaded = () => {
    setRefreshKey((k) => k + 1);
  };

  const handleClearAll = async () => {
    if (!confirm("Delete ALL uploaded images? This cannot be undone.")) return;
    setIsClearing(true);
    try {
      await clearAll();
      setRefreshKey((k) => k + 1);
    } catch (err) {
      console.error("Clear failed:", err);
    }
    setIsClearing(false);
  };

  const filteredSlots = SLOT_ORDER.filter((slot) => {
    if (filter === "all") return true;
    if (filter === "hero")
      return (
        slot === "hero" ||
        slot === "intro" ||
        slot === "story" ||
        slot.startsWith("experience")
      );
    if (filter === "food") {
      const info = getSlotInfo(slot);
      return info.category === "food";
    }
    if (filter === "space") {
      const info = getSlotInfo(slot);
      return info.category === "space";
    }
    return true;
  });

  const uploadedCount = images
    ? SLOT_ORDER.filter((s) => images.has(s)).length
    : 0;

  const filters: { key: Filter; label: string; icon: React.ReactNode }[] = [
    { key: "all", label: "All", icon: <LayoutGrid className="size-3.5" /> },
    {
      key: "hero",
      label: "Hero & Intro",
      icon: <Images className="size-3.5" />,
    },
    {
      key: "food",
      label: "Food",
      icon: <Utensils className="size-3.5" />,
    },
    {
      key: "space",
      label: "Space",
      icon: <Wine className="size-3.5" />,
    },
  ];

  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              MANA Restaurant
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight">
              Image Manager
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Click or drag photos into the boxes below. Uploaded images
              automatically appear on the website.
            </p>
          </div>
          <div className="flex gap-2 self-start">
            <Button
              type="button"
              variant="destructive"
              className="cursor-pointer gap-2"
              onClick={handleClearAll}
              disabled={isClearing}
            >
              <Trash2 className="size-4" />
              {isClearing ? "Clearing…" : "Clear All"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="cursor-pointer gap-2"
              onClick={handleSignOut}
            >
              <LogOut className="size-4" />
              Sign out
            </Button>
          </div>
        </header>

        <Card className="border-border/70 shadow-none">
          <CardContent className="py-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-muted-foreground">
                {uploadedCount}/{SLOT_ORDER.length} images uploaded
              </span>
              <div className="h-4 w-px bg-border" />
              {filters.map((f) => (
                <Button
                  key={f.key}
                  size="sm"
                  variant={filter === f.key ? "default" : "outline"}
                  className="gap-1.5 cursor-pointer"
                  onClick={() => setFilter(f.key)}
                >
                  {f.icon}
                  {f.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {images === null ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-pulse text-muted-foreground">
              Loading images…
            </div>
          </div>
        ) : (
          <div
            key={refreshKey}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {filteredSlots.map((slot) => (
              <ImageUploader
                key={slot}
                slot={slot}
                image={images.get(slot)}
                onUploaded={handleUploaded}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
