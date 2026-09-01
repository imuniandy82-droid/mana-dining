import { useCallback, useRef, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Trash2, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SiteImage, SlotKey } from "@/hooks/use-site-images";
import { getSlotInfo } from "@/hooks/use-site-images";

interface ImageUploaderProps {
  slot: SlotKey;
  image: SiteImage | undefined;
  onUploaded?: () => void;
}

function fileToBase64(file: File): Promise<{ data: string; mimeType: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const mimeType = file.type || "image/jpeg";
      const base64 = result.split(",")[1] || result;
      resolve({ data: base64, mimeType });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const SLOT_ORDER_MAP: Record<string, number> = {
  hero: 0,
  intro: 1,
  story: 2,
  "experience-1": 10,
  "experience-2": 11,
  "experience-3": 12,
  "dish-angus-short-ribs": 20,
  "dish-paella": 21,
  "food-1": 30,
  "food-2": 31,
  "food-3": 32,
  "food-4": 33,
  "food-5": 34,
  "food-6": 35,
  "food-7": 36,
  "food-8": 37,
  "food-9": 38,
  "food-10": 39,
  "food-11": 40,
  "food-12": 41,
  "food-13": 42,
  "space-1": 50,
  "space-2": 51,
  "space-3": 52,
  "space-4": 53,
  "space-5": 54,
  "space-6": 55,
};

export function ImageUploader({ slot, image, onUploaded }: ImageUploaderProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadMutation = useMutation(api.siteImages.upload);
  const removeMutation = useMutation(api.siteImages.remove);

  const info = getSlotInfo(slot);
  const hasImage = !!image || !!preview;

  const handleFile = useCallback(
    async (file: File) => {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }
      setIsUploading(true);
      try {
        const { data, mimeType } = await fileToBase64(file);
        setPreview(`data:${mimeType};base64,${data}`);
        await uploadMutation({
          slot,
          alt: info.label,
          category: info.category,
          data,
          mimeType,
          order: SLOT_ORDER_MAP[slot] ?? 99,
        });
        setPreview(null);
        onUploaded?.();
      } catch (err) {
        console.error("Upload failed:", err);
        setPreview(null);
      } finally {
        setIsUploading(false);
      }
    },
    [slot, info, uploadMutation, onUploaded],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragOver(false);
  }, []);

  const handleDelete = useCallback(async () => {
    await removeMutation({ slot });
    onUploaded?.();
  }, [slot, removeMutation, onUploaded]);

  const imageUrl =
    preview || (image ? `data:${image.mimeType};base64,${image.data}` : null);

  return (
    <div className="group relative">
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden rounded-lg border-2 border-dashed transition-all duration-200",
          isDragOver
            ? "border-primary bg-primary/5"
            : hasImage
              ? "border-border"
              : "border-muted-foreground/25 hover:border-muted-foreground/50",
        )}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => inputRef.current?.click()}
      >
        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt={info.label}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
              <Button
                size="sm"
                variant="secondary"
                className="gap-1.5"
                onClick={(e) => {
                  e.stopPropagation();
                  inputRef.current?.click();
                }}
              >
                <Upload className="size-3.5" />
                Replace
              </Button>
              <Button
                size="sm"
                variant="destructive"
                className="gap-1.5"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete();
                }}
              >
                <Trash2 className="size-3.5" />
              </Button>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
            <Upload className="size-6 text-muted-foreground/40" />
            <span className="text-center text-xs text-muted-foreground/60">
              {isDragOver ? "Drop here" : "Click or drag"}
            </span>
          </div>
        )}

        {isUploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80">
            <div className="animate-pulse text-sm text-muted-foreground">
              Uploading…
            </div>
          </div>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
            e.target.value = "";
          }}
        />
      </div>

      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs font-medium text-foreground">{info.label}</span>
        <span className="text-[10px] text-muted-foreground">{slot}</span>
      </div>
    </div>
  );
}
