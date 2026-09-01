import { useCallback, useRef, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Trash2, Upload, Check, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SiteImage, SlotKey } from "@/hooks/use-site-images";
import { getSlotInfo } from "@/hooks/use-site-images";

interface ImageUploaderProps {
  slot: SlotKey;
  image: SiteImage | undefined;
  onUploaded?: () => void;
}

/** Compress and resize an image file to fit within Convex's document size limit. */
function compressImage(
  file: File,
  maxDim = 1200,
  quality = 0.8,
): Promise<{ data: string; mimeType: string }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(url);

      let { width, height } = img;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height / width) * maxDim);
          width = maxDim;
        } else {
          width = Math.round((width / height) * maxDim);
          height = maxDim;
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("Canvas not supported"));

      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (!blob) return reject(new Error("Compression failed"));
          const reader = new FileReader();
          reader.onload = () => {
            const result = reader.result as string;
            const base64 = result.split(",")[1] || result;
            resolve({ data: base64, mimeType: "image/jpeg" });
          };
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(blob);
        },
        "image/jpeg",
        quality,
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load image"));
    };

    img.src = url;
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

type UploadStatus = "idle" | "compressing" | "uploading" | "success" | "error";

export function ImageUploader({ slot, image, onUploaded }: ImageUploaderProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadMutation = useMutation(api.siteImages.upload);
  const removeMutation = useMutation(api.siteImages.remove);

  const info = getSlotInfo(slot);
  const hasImage = !!image || !!preview;

  const handleFile = useCallback(
    async (file: File) => {
      if (!file.type.startsWith("image/")) {
        setErrorMsg("Please select an image file");
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
        return;
      }

      setStatus("compressing");
      setErrorMsg(null);

      try {
        // Compress the image to fit within Convex limits
        const { data, mimeType } = await compressImage(file);

        // Show preview while uploading
        setPreview(`data:${mimeType};base64,${data}`);
        setStatus("uploading");

        await uploadMutation({
          slot,
          alt: info.label,
          category: info.category,
          data,
          mimeType,
          order: SLOT_ORDER_MAP[slot] ?? 99,
        });

        setPreview(null);
        setStatus("success");
        onUploaded?.();

        // Clear success after 2s
        setTimeout(() => setStatus("idle"), 2000);
      } catch (err) {
        console.error("Upload failed:", err);
        setPreview(null);
        setStatus("error");
        setErrorMsg(
          err instanceof Error ? err.message : "Upload failed. Try a smaller image.",
        );
        setTimeout(() => {
          setStatus("idle");
          setErrorMsg(null);
        }, 4000);
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
    try {
      await removeMutation({ slot });
      setStatus("success");
      onUploaded?.();
      setTimeout(() => setStatus("idle"), 2000);
    } catch (err) {
      console.error("Delete failed:", err);
      setStatus("error");
      setErrorMsg("Failed to delete");
      setTimeout(() => {
        setStatus("idle");
        setErrorMsg(null);
      }, 3000);
    }
  }, [slot, removeMutation, onUploaded]);

  const imageUrl =
    preview || (image ? `data:${image.mimeType};base64,${image.data}` : null);

  const statusLabel =
    status === "compressing"
      ? "Compressing…"
      : status === "uploading"
        ? "Uploading…"
        : status === "success"
          ? "Done!"
          : null;

  return (
    <div className="group relative">
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden rounded-lg border-2 border-dashed transition-all duration-200",
          isDragOver
            ? "border-primary bg-primary/5"
            : status === "error"
              ? "border-red-500/50"
              : hasImage
                ? "border-border"
                : "border-muted-foreground/25 hover:border-muted-foreground/50",
        )}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => {
          if (status === "idle" || status === "success" || status === "error") {
            inputRef.current?.click();
          }
        }}
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
                disabled={status === "compressing" || status === "uploading"}
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
                disabled={status === "compressing" || status === "uploading"}
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

        {/* Status overlay */}
        {(status === "compressing" || status === "uploading") && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-2">
              <div className="size-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              <span className="text-xs text-muted-foreground">{statusLabel}</span>
            </div>
          </div>
        )}

        {/* Success overlay */}
        {status === "success" && !imageUrl && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80">
            <Check className="size-8 text-green-500" />
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

      {/* Error message */}
      {status === "error" && errorMsg && (
        <div className="mt-1.5 flex items-center gap-1.5 rounded-md bg-red-500/10 px-2 py-1.5">
          <AlertCircle className="size-3 shrink-0 text-red-500" />
          <span className="text-[11px] text-red-500">{errorMsg}</span>
        </div>
      )}

      {/* Success flash */}
      {status === "success" && (
        <div className="mt-1.5 flex items-center gap-1.5 rounded-md bg-green-500/10 px-2 py-1.5">
          <Check className="size-3 shrink-0 text-green-500" />
          <span className="text-[11px] text-green-500">Uploaded!</span>
        </div>
      )}
    </div>
  );
}
