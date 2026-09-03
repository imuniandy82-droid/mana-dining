import { useCallback, useEffect, useRef, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
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

const UPLOAD_TIMEOUT_MS = 30000;
const VALID_IMAGE_EXT = /\.(jpe?g|png|webp|gif|heic|heif|avif)$/i;

/** Resize and compress an image file before uploading to Convex storage.
 *  Falls back to the original file if the browser cannot decode it
 *  (e.g. HEIC from an iPhone). */
function compressImage(
  file: File,
  maxDim = 1600,
  quality = 0.75,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    const cleanup = () => URL.revokeObjectURL(url);

    img.onload = () => {
      cleanup();

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

      // White background first, so PNG/WEBP transparency doesn't turn black.
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (!blob) return reject(new Error("Compression failed"));
          resolve(blob);
        },
        "image/jpeg",
        quality,
      );
    };

    img.onerror = () => {
      cleanup();
      // Browser cannot decode this file (HEIC/HEIF on most devices).
      reject(new Error("Unsupported format"));
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
  // Immediate local preview while the upload is in flight. Revoked after use.
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const previewUrlRef = useRef<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const statusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const generateUploadUrl = useMutation(api.siteImages.generateUploadUrl);
  const saveSlot = useMutation(api.siteImages.saveSlot);
  const removeMutation = useMutation(api.siteImages.remove);

  const info = getSlotInfo(slot);
  const hasImage = !!image?.url;

  const replacePreview = useCallback((url: string | null) => {
    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current);
    }
    previewUrlRef.current = url;
    setPreviewUrl(url);
  }, []);

  const resetStatus = useCallback((status: UploadStatus, msg: string | null) => {
    if (statusTimerRef.current) {
      clearTimeout(statusTimerRef.current);
      statusTimerRef.current = null;
    }
    setStatus(status);
    setErrorMsg(msg);
  }, []);

  // Revoke any pending preview object URL when the component unmounts.
  useEffect(() => {
    return () => {
      if (previewUrlRef.current) {
        URL.revokeObjectURL(previewUrlRef.current);
      }
      if (statusTimerRef.current) {
        clearTimeout(statusTimerRef.current);
      }
    };
  }, []);

  const handleFile = useCallback(
    async (file: File) => {
      const isImage = file.type.startsWith("image/") || VALID_IMAGE_EXT.test(file.name);
      if (!isImage) {
        resetStatus("error", "Please select an image file (JPG, PNG, WEBP)");
        setTimeout(() => resetStatus("idle", null), 4000);
        return;
      }

      // Show the selected photo immediately — no waiting.
      replacePreview(URL.createObjectURL(file));
      resetStatus("compressing", null);

      // Safety net: whatever happens, never stay in a loading state forever.
      const safetyTimer = setTimeout(() => {
        if (statusTimerRef.current) statusTimerRef.current = null;
        replacePreview(null);
        setStatus("error");
        setErrorMsg("Upload timed out — please try again");
        setTimeout(() => resetStatus("idle", null), 5000);
      }, UPLOAD_TIMEOUT_MS + 15000);
      statusTimerRef.current = safetyTimer;

      try {
        // Compress; if the browser can't decode the file (HEIC etc.), upload
        // the original bytes instead — never fail silently.
        let blob: Blob;
        try {
          blob = await compressImage(file);
        } catch {
          blob = file;
        }
        setStatus("uploading");

        // 1. Get a one-time upload URL from Convex
        const uploadUrl = await generateUploadUrl();

        // 2. Upload the image bytes straight to Convex file storage with a
        //    hard timeout so a stalled network can never hang forever.
        const controller = new AbortController();
        const uploadTimer = setTimeout(() => controller.abort(), UPLOAD_TIMEOUT_MS);
        let result: Response;
        try {
          result = await fetch(uploadUrl, {
            method: "POST",
            headers: { "Content-Type": blob.type },
            body: blob,
            signal: controller.signal,
          });
        } finally {
          clearTimeout(uploadTimer);
        }
        if (!result.ok) {
          throw new Error(`Upload failed (${result.status})`);
        }
        const { storageId } = (await result.json()) as { storageId: string };

        // 3. Point the slot at the stored file
        await saveSlot({
          slot,
          alt: info.label,
          category: info.category,
          order: SLOT_ORDER_MAP[slot] ?? 99,
          storageId: storageId as Id<"_storage">,
        });

        // Upload finished — drop the local preview; the saved photo now
        // comes from the database and survives refreshes.
        replacePreview(null);
        resetStatus("success", null);
        onUploaded?.();
        setTimeout(() => resetStatus("idle", null), 2500);
      } catch (err) {
        console.error("Upload failed:", err);
        replacePreview(null);
        const timedOut =
          err instanceof DOMException && err.name === "AbortError";
        resetStatus(
          "error",
          timedOut
            ? "Upload timed out — check your connection and try again"
            : err instanceof Error
              ? err.message
              : "Upload failed. Try a smaller image.",
        );
        setTimeout(() => resetStatus("idle", null), 5000);
      }
    },
    [slot, info, generateUploadUrl, saveSlot, onUploaded, replacePreview, resetStatus],
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
      replacePreview(null);
      resetStatus("success", null);
      onUploaded?.();
      setTimeout(() => resetStatus("idle", null), 2000);
    } catch (err) {
      console.error("Delete failed:", err);
      resetStatus("error", "Failed to delete — please try again");
      setTimeout(() => resetStatus("idle", null), 4000);
    }
  }, [slot, removeMutation, onUploaded, replacePreview, resetStatus]);

  const statusLabel =
    status === "compressing"
      ? "Compressing…"
      : status === "uploading"
        ? "Uploading…"
        : status === "success"
          ? "Done!"
          : null;

  // Show the instant local preview while uploading, otherwise the saved photo.
  const shownSrc = previewUrl ?? image?.url ?? null;

  return (
    <div className="group relative">
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden rounded-lg border-2 border-dashed transition-all duration-200 cursor-pointer",
          isDragOver
            ? "border-primary bg-primary/5"
            : status === "error"
              ? "border-red-500/50"
              : hasImage || previewUrl
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
        {shownSrc ? (
          <>
            <img
              src={shownSrc}
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

        {(status === "compressing" || status === "uploading") && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-2">
              <div className="size-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              <span className="text-xs text-muted-foreground">{statusLabel}</span>
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

      {status === "error" && errorMsg && (
        <div className="mt-1.5 flex items-center gap-1.5 rounded-md bg-red-500/10 px-2 py-1.5">
          <AlertCircle className="size-3 shrink-0 text-red-500" />
          <span className="text-[11px] text-red-500">{errorMsg}</span>
        </div>
      )}

      {status === "success" && (
        <div className="mt-1.5 flex items-center gap-1.5 rounded-md bg-green-500/10 px-2 py-1.5">
          <Check className="size-3 shrink-0 text-green-500" />
          <span className="text-[11px] text-green-500">Uploaded!</span>
        </div>
      )}
    </div>
  );
}