"use client";

import { useMemo } from "react";
import type { ExtractedPalette } from "@/types";
import { extractColors } from "@/lib/color/extractColors";

export function useColorExtraction(imgElement: HTMLImageElement | null): ExtractedPalette | null {
  return useMemo(() => {
    if (!imgElement) return null;

    try {
      return extractColors(imgElement);
    } catch {
      return null;
    }
  }, [imgElement]);
}
