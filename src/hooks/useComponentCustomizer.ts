"use client";

import { useState, useCallback, useMemo } from "react";
import { CustomizerState, StyleId } from "@/types";
import { hexToRgba } from "@/lib/utils";

const stylePresets: Record<StyleId, CustomizerState> = {
  glassmorphism: {
    blur: 14,
    opacity: 18,
    shadowX: 0,
    shadowY: 4,
    shadowBlur: 24,
    shadowSpread: 0,
    shadowColor: "#000000",
    shadowOpacity: 8,
    borderRadius: 18,
    bgColor: "#ffffff",
    borderColor: "#ffffff",
    borderWidth: 1,
  },
  "liquid-glass": {
    blur: 40,
    opacity: 10,
    shadowX: 0,
    shadowY: 12,
    shadowBlur: 40,
    shadowSpread: 0,
    shadowColor: "#000000",
    shadowOpacity: 30,
    borderRadius: 24,
    bgColor: "#ffffff",
    borderColor: "#ffffff",
    borderWidth: 1,
  },
  neobrutalism: {
    blur: 0,
    opacity: 100,
    shadowX: 4,
    shadowY: 4,
    shadowBlur: 0,
    shadowSpread: 0,
    shadowColor: "#000000",
    shadowOpacity: 100,
    borderRadius: 8,
    bgColor: "#fde68a",
    borderColor: "#000000",
    borderWidth: 3,
  },
  claymorphism: {
    blur: 0,
    opacity: 100,
    shadowX: 8,
    shadowY: 8,
    shadowBlur: 16,
    shadowSpread: 0,
    shadowColor: "#d1d5db",
    shadowOpacity: 80,
    borderRadius: 24,
    bgColor: "#f3e8ff",
    borderColor: "#e9d5ff",
    borderWidth: 0,
  },
  "metal-liquid": {
    blur: 0,
    opacity: 100,
    shadowX: 0,
    shadowY: 4,
    shadowBlur: 24,
    shadowSpread: 0,
    shadowColor: "#8b5cf6",
    shadowOpacity: 20,
    borderRadius: 16,
    bgColor: "#18181b",
    borderColor: "#3f3f46",
    borderWidth: 1,
  },
  minimalism: {
    blur: 0,
    opacity: 100,
    shadowX: 0,
    shadowY: 0,
    shadowBlur: 0,
    shadowSpread: 0,
    shadowColor: "#000000",
    shadowOpacity: 0,
    borderRadius: 8,
    bgColor: "#ffffff",
    borderColor: "#e4e4e7",
    borderWidth: 1,
  },
  neomorphism: {
    blur: 0,
    opacity: 100,
    shadowX: 6,
    shadowY: 6,
    shadowBlur: 12,
    shadowSpread: 0,
    shadowColor: "#b8bec7",
    shadowOpacity: 100,
    borderRadius: 16,
    bgColor: "#e0e5ec",
    borderColor: "#e0e5ec",
    borderWidth: 0,
  },
  skeuomorphism: {
    blur: 0,
    opacity: 100,
    shadowX: 0,
    shadowY: 2,
    shadowBlur: 4,
    shadowSpread: 0,
    shadowColor: "#000000",
    shadowOpacity: 20,
    borderRadius: 12,
    bgColor: "#f4f4f5",
    borderColor: "#d4d4d8",
    borderWidth: 1,
  },
};

export function useComponentCustomizer(styleId: StyleId) {
  const defaults = stylePresets[styleId];
  const [state, setState] = useState<CustomizerState>(defaults);

  const updateProperty = useCallback(
    <K extends keyof CustomizerState>(key: K, value: CustomizerState[K]) => {
      setState((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const resetToDefaults = useCallback(() => {
    setState(stylePresets[styleId]);
  }, [styleId]);

  const cssStyles = useMemo((): React.CSSProperties => {
    const opacity = state.opacity / 100;
    const shadowOpacity = state.shadowOpacity / 100;

    return {
      backdropFilter: state.blur > 0 ? `blur(${state.blur}px)` : undefined,
      WebkitBackdropFilter: state.blur > 0 ? `blur(${state.blur}px)` : undefined,
      backgroundColor: hexToRgba(state.bgColor, opacity),
      borderRadius: `${state.borderRadius}px`,
      border:
        state.borderWidth > 0
          ? `${state.borderWidth}px solid ${state.borderColor}`
          : "none",
      boxShadow:
        state.shadowBlur > 0 || state.shadowX !== 0 || state.shadowY !== 0
          ? `${state.shadowX}px ${state.shadowY}px ${state.shadowBlur}px ${state.shadowSpread}px ${hexToRgba(state.shadowColor, shadowOpacity)}`
          : "none",
    };
  }, [state]);

  const codeString = useMemo(() => {
    const lines: string[] = [];
    if (state.blur > 0) lines.push(`backdrop-filter: blur(${state.blur}px);`);
    const opacity = state.opacity / 100;
    lines.push(`background: ${hexToRgba(state.bgColor, opacity)};`);
    lines.push(`border-radius: ${state.borderRadius}px;`);
    if (state.borderWidth > 0) {
      lines.push(`border: ${state.borderWidth}px solid ${state.borderColor};`);
    }
    if (state.shadowBlur > 0 || state.shadowX !== 0 || state.shadowY !== 0) {
      const so = state.shadowOpacity / 100;
      lines.push(
        `box-shadow: ${state.shadowX}px ${state.shadowY}px ${state.shadowBlur}px ${state.shadowSpread}px ${hexToRgba(state.shadowColor, so)};`
      );
    }
    return lines.join("\n");
  }, [state]);

  return {
    state,
    updateProperty,
    resetToDefaults,
    cssStyles,
    codeString,
    defaults,
  };
}
