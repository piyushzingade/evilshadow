"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Color conversion utilities ── */

interface HSV {
  h: number; // 0-360
  s: number; // 0-100
  v: number; // 0-100
}

interface RGB {
  r: number; // 0-255
  g: number; // 0-255
  b: number; // 0-255
}

function hsvToRgb({ h, s, v }: HSV): RGB {
  const s1 = s / 100;
  const v1 = v / 100;
  const c = v1 * s1;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v1 - c;

  let r1 = 0,
    g1 = 0,
    b1 = 0;
  if (h < 60) {
    r1 = c;
    g1 = x;
  } else if (h < 120) {
    r1 = x;
    g1 = c;
  } else if (h < 180) {
    g1 = c;
    b1 = x;
  } else if (h < 240) {
    g1 = x;
    b1 = c;
  } else if (h < 300) {
    r1 = x;
    b1 = c;
  } else {
    r1 = c;
    b1 = x;
  }

  return {
    r: Math.round((r1 + m) * 255),
    g: Math.round((g1 + m) * 255),
    b: Math.round((b1 + m) * 255),
  };
}

function rgbToHsv({ r, g, b }: RGB): HSV {
  const r1 = r / 255;
  const g1 = g / 255;
  const b1 = b / 255;
  const max = Math.max(r1, g1, b1);
  const min = Math.min(r1, g1, b1);
  const d = max - min;

  let h = 0;
  if (d !== 0) {
    if (max === r1) h = 60 * (((g1 - b1) / d) % 6);
    else if (max === g1) h = 60 * ((b1 - r1) / d + 2);
    else h = 60 * ((r1 - g1) / d + 4);
  }
  if (h < 0) h += 360;

  return {
    h,
    s: max === 0 ? 0 : (d / max) * 100,
    v: max * 100,
  };
}

function hexToRgb(hex: string): RGB {
  const clean = hex.replace("#", "");
  return {
    r: parseInt(clean.slice(0, 2), 16) || 0,
    g: parseInt(clean.slice(2, 4), 16) || 0,
    b: parseInt(clean.slice(4, 6), 16) || 0,
  };
}

function rgbToHex({ r, g, b }: RGB): string {
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

function hsvToHex(hsv: HSV): string {
  return rgbToHex(hsvToRgb(hsv));
}

function hueToHex(h: number): string {
  return rgbToHex(hsvToRgb({ h, s: 100, v: 100 }));
}

/* ── Color Swatch with label — clickable trigger ── */
function ColorSwatch({
  label,
  color,
  isOpen,
  onClick,
}: {
  label: string;
  color: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-3 w-full py-2 transition-colors duration-150"
    >
      {/* Swatch */}
      <div className="relative flex-shrink-0">
        {/* Checkerboard for transparency */}
        <div
          className="h-7 w-7 rounded-[3px] overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #1a1a1a 25%, transparent 25%), linear-gradient(-45deg, #1a1a1a 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1a1a1a 75%), linear-gradient(-45deg, transparent 75%, #1a1a1a 75%)",
            backgroundSize: "6px 6px",
            backgroundPosition: "0 0, 0 3px, 3px -3px, -3px 0",
          }}
        >
          <div
            className="h-full w-full transition-transform duration-200 group-hover:scale-110"
            style={{ backgroundColor: color }}
          />
        </div>
        {/* Active ring */}
        {isOpen && (
          <motion.div
            layoutId="color-ring"
            className="absolute -inset-[3px] rounded-[5px] border border-[var(--color-fg-muted)]"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          />
        )}
      </div>
      {/* Label + hex */}
      <div className="flex flex-col items-start gap-0.5 min-w-0">
        <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--color-fg-muted)] transition-colors duration-200 group-hover:text-[var(--color-fg)]">
          {label}
        </span>
        <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-fg)] tabular-nums">
          {color.toUpperCase()}
        </span>
      </div>
      {/* Expand indicator */}
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        className="ml-auto flex-shrink-0 transition-transform duration-200"
        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
      >
        <path
          d="M2 4L5 7L8 4"
          stroke="var(--color-fg-muted)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/* ── Main Color Picker ── */
export function ColorPicker({
  color,
  onChange,
  label,
}: {
  color: string;
  onChange: (hex: string) => void;
  label: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hsv, setHsv] = useState<HSV>(() => rgbToHsv(hexToRgb(color)));
  const [hexInput, setHexInput] = useState(color.toUpperCase());
  const canvasRef = useRef<HTMLDivElement>(null);
  const hueRef = useRef<HTMLDivElement>(null);
  const isDraggingCanvas = useRef(false);
  const isDraggingHue = useRef(false);

  // Sync external color changes
  useEffect(() => {
    const newHsv = rgbToHsv(hexToRgb(color));
    setHsv(newHsv);
    setHexInput(color.toUpperCase());
  }, [color]);

  const emitColor = useCallback(
    (newHsv: HSV) => {
      const hex = hsvToHex(newHsv);
      setHexInput(hex.toUpperCase());
      onChange(hex);
    },
    [onChange]
  );

  /* ── Canvas (saturation-value) interaction ── */
  const handleCanvasInteraction = useCallback(
    (clientX: number, clientY: number) => {
      const el = canvasRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
      const newHsv = { h: hsv.h, s: x * 100, v: (1 - y) * 100 };
      setHsv(newHsv);
      emitColor(newHsv);
    },
    [hsv.h, emitColor]
  );

  const onCanvasPointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDraggingCanvas.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      handleCanvasInteraction(e.clientX, e.clientY);
    },
    [handleCanvasInteraction]
  );

  const onCanvasPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDraggingCanvas.current) return;
      handleCanvasInteraction(e.clientX, e.clientY);
    },
    [handleCanvasInteraction]
  );

  const onCanvasPointerUp = useCallback(() => {
    isDraggingCanvas.current = false;
  }, []);

  /* ── Hue strip interaction ── */
  const handleHueInteraction = useCallback(
    (clientX: number) => {
      const el = hueRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const newHsv = { ...hsv, h: x * 360 };
      setHsv(newHsv);
      emitColor(newHsv);
    },
    [hsv, emitColor]
  );

  const onHuePointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDraggingHue.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      handleHueInteraction(e.clientX);
    },
    [handleHueInteraction]
  );

  const onHuePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDraggingHue.current) return;
      handleHueInteraction(e.clientX);
    },
    [handleHueInteraction]
  );

  const onHuePointerUp = useCallback(() => {
    isDraggingHue.current = false;
  }, []);

  /* ── Hex input ── */
  const handleHexChange = useCallback(
    (val: string) => {
      setHexInput(val.toUpperCase());
      const clean = val.replace("#", "");
      if (clean.length === 6 && /^[0-9a-fA-F]{6}$/.test(clean)) {
        const hex = `#${clean}`;
        const newHsv = rgbToHsv(hexToRgb(hex));
        setHsv(newHsv);
        onChange(hex);
      }
    },
    [onChange]
  );

  /* ── RGB input ── */
  const handleRgbChange = useCallback(
    (channel: "r" | "g" | "b", val: number) => {
      const rgb = hsvToRgb(hsv);
      rgb[channel] = Math.max(0, Math.min(255, val));
      const newHsv = rgbToHsv(rgb);
      setHsv(newHsv);
      emitColor(newHsv);
    },
    [hsv, emitColor]
  );

  const currentRgb = hsvToRgb(hsv);
  const hueColor = hueToHex(hsv.h);

  return (
    <div className="flex flex-col">
      <ColorSwatch
        label={label}
        color={color}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-3 pl-10 flex flex-col gap-3">
              {/* Saturation-Value canvas */}
              <div
                ref={canvasRef}
                className="relative h-[140px] w-full cursor-crosshair select-none touch-none"
                style={{
                  backgroundColor: hueColor,
                  borderRadius: "2px",
                }}
                onPointerDown={onCanvasPointerDown}
                onPointerMove={onCanvasPointerMove}
                onPointerUp={onCanvasPointerUp}
              >
                {/* White → transparent overlay (saturation) */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, #ffffff, transparent)",
                    borderRadius: "2px",
                  }}
                />
                {/* Transparent → black overlay (value) */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, #000000)",
                    borderRadius: "2px",
                  }}
                />
                {/* Dashed border frame */}
                <div className="absolute inset-0 border border-dashed border-[var(--color-border)] rounded-[2px] pointer-events-none opacity-40" />

                {/* Crosshair picker */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    left: `${hsv.s}%`,
                    top: `${100 - hsv.v}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Outer ring */}
                  <div
                    className="h-[14px] w-[14px] rounded-full border-[1.5px] border-white"
                    style={{
                      boxShadow:
                        "0 0 0 1px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(0,0,0,0.15)",
                    }}
                  />
                  {/* Crosshair lines */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  >
                    <line
                      x1="11"
                      y1="0"
                      x2="11"
                      y2="7"
                      stroke="white"
                      strokeWidth="0.5"
                      opacity="0.5"
                    />
                    <line
                      x1="11"
                      y1="15"
                      x2="11"
                      y2="22"
                      stroke="white"
                      strokeWidth="0.5"
                      opacity="0.5"
                    />
                    <line
                      x1="0"
                      y1="11"
                      x2="7"
                      y2="11"
                      stroke="white"
                      strokeWidth="0.5"
                      opacity="0.5"
                    />
                    <line
                      x1="15"
                      y1="11"
                      x2="22"
                      y2="11"
                      stroke="white"
                      strokeWidth="0.5"
                      opacity="0.5"
                    />
                  </svg>
                </div>
              </div>

              {/* Hue strip */}
              <div className="flex items-center gap-3">
                {/* Current color preview */}
                <div
                  className="h-5 w-5 flex-shrink-0 rounded-[2px] border border-[var(--color-border)]"
                  style={{ backgroundColor: color }}
                />
                <div
                  ref={hueRef}
                  className="relative h-3 flex-1 cursor-pointer select-none touch-none rounded-[2px]"
                  style={{
                    background:
                      "linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
                  }}
                  onPointerDown={onHuePointerDown}
                  onPointerMove={onHuePointerMove}
                  onPointerUp={onHuePointerUp}
                >
                  {/* Hue indicator */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      left: `${(hsv.h / 360) * 100}%`,
                      transform: `translateX(-50%) translateY(-50%)`,
                    }}
                  >
                    <div
                      className="h-[13px] w-[5px] rounded-[1px] border border-white"
                      style={{
                        boxShadow: "0 0 0 1px rgba(0,0,0,0.4)",
                        backgroundColor: hueColor,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Hex + RGB inputs */}
              <div className="flex items-center gap-2">
                {/* Hex input */}
                <div className="relative flex-1">
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-fg-muted)] pointer-events-none">
                    #
                  </span>
                  <input
                    type="text"
                    value={hexInput.replace("#", "")}
                    onChange={(e) => handleHexChange(e.target.value)}
                    maxLength={6}
                    className="w-full border border-dashed border-[var(--color-border)] bg-transparent py-1.5 pl-5 pr-2 font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-fg)] tabular-nums uppercase outline-none transition-colors duration-200 focus:border-[var(--color-fg-muted)]"
                    style={{ borderRadius: "2px" }}
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 font-[family-name:var(--font-mono)] text-[8px] text-[var(--color-fg-muted)] opacity-40 pointer-events-none">
                    HEX
                  </span>
                </div>
              </div>

              {/* RGB value strip */}
              <div className="flex gap-1.5">
                {(["r", "g", "b"] as const).map((ch) => (
                  <div key={ch} className="flex flex-col gap-1 flex-1">
                    <input
                      type="number"
                      min={0}
                      max={255}
                      value={currentRgb[ch]}
                      onChange={(e) =>
                        handleRgbChange(ch, parseInt(e.target.value) || 0)
                      }
                      className="w-full border border-dashed border-[var(--color-border)] bg-transparent py-1 px-2 font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-fg)] text-center tabular-nums outline-none transition-colors duration-200 focus:border-[var(--color-fg-muted)] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      style={{ borderRadius: "2px" }}
                    />
                    <span
                      className="text-center font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-wider"
                      style={{
                        color:
                          ch === "r"
                            ? "#f87171"
                            : ch === "g"
                              ? "#4ade80"
                              : "#60a5fa",
                        opacity: 0.6,
                      }}
                    >
                      {ch}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
