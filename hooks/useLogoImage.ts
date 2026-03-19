"use client";

import { useState, useEffect } from "react";

interface LogoResult {
  file: File;
  imgElement: HTMLImageElement | null;
  objectUrl: string | null;
  error: string | null;
}

const EMPTY = { imgElement: null, objectUrl: null, error: null };

export function useLogoImage(file: File | null) {
  const [result, setResult] = useState<LogoResult | null>(null);

  useEffect(() => {
    if (!file) return;

    let cancelled = false;
    const url = URL.createObjectURL(file);
    const img = new Image();

    img.onload = () => {
      if (!cancelled) {
        setResult({ file, imgElement: img, objectUrl: url, error: null });
      }
    };
    img.onerror = () => {
      if (!cancelled) {
        setResult({ file, imgElement: null, objectUrl: null, error: "Failed to load image" });
      }
    };
    img.src = url;

    return () => {
      cancelled = true;
      URL.revokeObjectURL(url);
    };
  }, [file]);

  if (!file || result?.file !== file) return EMPTY;
  return result;
}
