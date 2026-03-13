"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { stylesRegistry } from "@/lib/styles-registry";
import { useComponentCustomizer } from "@/hooks/useComponentCustomizer";
import { StyleId } from "@/types";
import { RotateCcw, Copy, Check, Code2, Sliders, Palette } from "lucide-react";
import { DotCluster, DotSparse } from "./DotMatrix";
import { ColorPicker } from "./ColorPicker";
import { paradigmIconMap } from "@/components/ui/ParadigmIcons";

/* ── Dynamic imports for actual style Card components ── */
const styleCards: Record<
  StyleId,
  React.ComponentType<{ variant?: string; customStyle?: React.CSSProperties }>
> = {
  glassmorphism: dynamic(
    () => import("@/components/styles/glassmorphism/Card")
  ),
  "liquid-glass": dynamic(
    () => import("@/components/styles/liquid-glass/Card")
  ),
  neobrutalism: dynamic(
    () => import("@/components/styles/neobrutalism/Card")
  ),
  claymorphism: dynamic(
    () => import("@/components/styles/claymorphism/Card")
  ),
  "metal-liquid": dynamic(
    () => import("@/components/styles/metal-liquid/Card")
  ),
  minimalism: dynamic(() => import("@/components/styles/minimalism/Card")),
  neomorphism: dynamic(() => import("@/components/styles/neomorphism/Card")),
  skeuomorphism: dynamic(
    () => import("@/components/styles/skeuomorphism/Card")
  ),
};

/* ── Per-style preview background configs ── */
const PREVIEW_BG: Partial<
  Record<StyleId, { className?: string; style?: React.CSSProperties }>
> = {
  glassmorphism: { className: "glass-preview-bg" },
  neomorphism: { style: { backgroundColor: "#e0e5ec" } },
};

/* ── Static constants hoisted out of render ── */
const SLIDERS = [
  { key: "blur" as const, label: "Blur", min: 0, max: 60, unit: "px" },
  {
    key: "opacity" as const,
    label: "Opacity",
    min: 0,
    max: 100,
    unit: "%",
  },
  {
    key: "borderRadius" as const,
    label: "Radius",
    min: 0,
    max: 48,
    unit: "px",
  },
  {
    key: "shadowBlur" as const,
    label: "Shadow",
    min: 0,
    max: 60,
    unit: "px",
  },
] as const;

const PANEL_TABS = [
  { id: "sliders" as const, label: "Properties", icon: Sliders },
  { id: "colors" as const, label: "Colors", icon: Palette },
  { id: "code" as const, label: "CSS", icon: Code2 },
] as const;

/* ── Crosshair corner marks for the preview canvas ── */
function CornerMark({
  position,
  color,
}: {
  position: "tl" | "tr" | "bl" | "br";
  color: string;
}) {
  const isTop = position.startsWith("t");
  const isLeft = position.endsWith("l");

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: isTop ? "8px" : undefined,
        bottom: !isTop ? "8px" : undefined,
        left: isLeft ? "8px" : undefined,
        right: !isLeft ? "8px" : undefined,
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <line
          x1={isLeft ? "0" : "16"}
          y1={isTop ? "0" : "16"}
          x2={isLeft ? "8" : "8"}
          y2={isTop ? "0" : "16"}
          stroke={color}
          strokeWidth="1"
          opacity="0.4"
        />
        <line
          x1={isLeft ? "0" : "16"}
          y1={isTop ? "0" : "16"}
          x2={isLeft ? "0" : "16"}
          y2={isTop ? "8" : "8"}
          stroke={color}
          strokeWidth="1"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}

/* ── Custom range slider with gradient track ── */
function CustomSlider({
  label,
  value,
  min,
  max,
  onChange,
  accentColor,
  unit = "",
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  accentColor: string;
  unit?: string;
}) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="group flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--color-fg-muted)] transition-colors duration-200 group-hover:text-[var(--color-fg)]">
          {label}
        </span>
        <span
          className="font-[family-name:var(--font-mono)] text-[11px] tabular-nums transition-colors duration-200"
          style={{ color: accentColor }}
        >
          {value}
          {unit}
        </span>
      </div>
      <div className="relative h-5 flex items-center">
        {/* Track background */}
        <div className="absolute inset-x-0 h-[3px] rounded-full bg-[var(--color-border)]" />
        {/* Filled track */}
        <div
          className="absolute left-0 h-[3px] rounded-full transition-all duration-75"
          style={{
            width: `${percentage}%`,
            background: `linear-gradient(90deg, ${accentColor}60, ${accentColor})`,
          }}
        />
        {/* Thumb glow */}
        <div
          className="absolute h-3 w-3 rounded-full opacity-0 blur-[6px] transition-opacity duration-200 group-hover:opacity-60"
          style={{
            left: `calc(${percentage}% - 6px)`,
            backgroundColor: accentColor,
          }}
        />
        {/* Native input */}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--color-bg)] [&::-webkit-slider-thumb]:shadow-[0_0_0_1px_var(--color-border)] [&::-webkit-slider-thumb]:transition-shadow [&::-webkit-slider-thumb]:duration-200 [&:hover::-webkit-slider-thumb]:shadow-[0_0_0_1px_var(--color-fg-muted)] [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[var(--color-bg)]"
          style={{
            // @ts-expect-error -- CSS custom properties for thumb color
            "--thumb-color": accentColor,
          }}
        />
      </div>
    </div>
  );
}

export function InteractiveDemo() {
  const [activeStyle, setActiveStyle] = useState<StyleId>("glassmorphism");
  const { state, updateProperty, resetToDefaults, cssStyles, codeString } =
    useComponentCustomizer(activeStyle);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"sliders" | "colors" | "code">(
    "sliders"
  );

  const activeStyleDef = useMemo(
    () => stylesRegistry.find((s) => s.id === activeStyle)!,
    [activeStyle]
  );

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [codeString]);

  const CardComponent = styleCards[activeStyle];
  const previewBg = PREVIEW_BG[activeStyle];

  return (
    <section className="relative px-6 py-28 overflow-hidden">
      {/* Sparse dot field — background texture */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
        <DotSparse
          rows={10}
          cols={50}
          dotSize={2}
          gap={14}
          seed={22}
          sparsity={0.82}
          className="opacity-60"
          animationDelay={0.3}
        />
      </div>

      {/* Dot cluster — right side accent */}
      <div className="pointer-events-none absolute top-16 right-[4%] hidden xl:block">
        <DotCluster
          rows={15}
          cols={12}
          dotSize={3}
          gap={3}
          seed={66}
          density={0.5}
          className="opacity-12"
          animationDelay={0.4}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-4">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
            Interactive
          </p>
        </div>
        <div className="mb-6">
          <h2 className="font-[family-name:var(--font-display)] text-5xl italic text-[var(--color-fg)] md:text-6xl">
            Try It Yourself
          </h2>
        </div>
        <p className="mb-12 max-w-md text-base text-[var(--color-fg-muted)]">
          Switch styles and tweak properties in real-time. Copy the generated
          CSS when you find the look you want.
        </p>

        {/* Dashed separator */}
        <div className="mb-10">
          <svg
            width="100%"
            height="1"
            preserveAspectRatio="none"
            className="block"
          >
            <line
              x1="0"
              y1="0.5"
              x2="100%"
              y2="0.5"
              stroke="var(--color-border)"
              strokeDasharray="6 4"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Style selector strip — paradigm icons instead of dots */}
        <div className="mb-10 flex flex-wrap gap-2">
          {stylesRegistry.map((style) => {
            const isActive = activeStyle === style.id;
            const Icon = paradigmIconMap[style.id];
            return (
              <button
                key={style.id}
                onClick={() => setActiveStyle(style.id)}
                className="relative flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-medium transition-all duration-200"
                style={{
                  color: isActive
                    ? "var(--color-fg)"
                    : "var(--color-fg-muted)",
                  borderLeft: isActive
                    ? `2px solid ${style.color}`
                    : "2px solid transparent",
                  background: isActive
                    ? `linear-gradient(90deg, ${style.color}08, transparent)`
                    : "transparent",
                }}
              >
                {Icon && (
                  <Icon
                    className="h-4 w-4 flex-shrink-0 transition-all duration-300"
                    style={{
                      color: style.color,
                      opacity: isActive ? 1 : 0.4,
                    }}
                  />
                )}
                <span className="relative">
                  {style.name}
                  {isActive && (
                    <motion.div
                      layoutId="style-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-px"
                      style={{
                        backgroundColor: style.color,
                        opacity: 0.5,
                      }}
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 300,
                      }}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main customizer area */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-0">
          {/* Preview canvas */}
          <div className="relative flex-1 lg:border-r lg:border-dashed lg:border-[var(--color-border)]">
            <div
              className={`relative flex min-h-[440px] items-center justify-center overflow-hidden border border-dashed border-[var(--color-border)] lg:mr-6 ${previewBg?.className || ""}`}
              style={{
                borderRadius: "2px",
                ...previewBg?.style,
              }}
            >
              {/* Dot grid background — hidden when preview has custom bg */}
              {!previewBg && (
                <div
                  className="absolute inset-0 opacity-[0.35]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, var(--color-preview-dot) 0.5px, transparent 0.5px)",
                    backgroundSize: "16px 16px",
                  }}
                />
              )}

              {/* Radial glow behind the card */}
              <motion.div
                key={activeStyle}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute pointer-events-none"
                style={{
                  width: "400px",
                  height: "400px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${activeStyleDef.color}12, transparent 70%)`,
                  filter: "blur(40px)",
                }}
              />

              {/* Corner marks */}
              <CornerMark position="tl" color={activeStyleDef.color} />
              <CornerMark position="tr" color={activeStyleDef.color} />
              <CornerMark position="bl" color={activeStyleDef.color} />
              <CornerMark position="br" color={activeStyleDef.color} />

              {/* Center crosshair */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  opacity="0.08"
                >
                  <line
                    x1="20"
                    y1="0"
                    x2="20"
                    y2="40"
                    stroke="var(--color-fg)"
                    strokeWidth="0.5"
                    strokeDasharray="2 3"
                  />
                  <line
                    x1="0"
                    y1="20"
                    x2="40"
                    y2="20"
                    stroke="var(--color-fg)"
                    strokeWidth="0.5"
                    strokeDasharray="2 3"
                  />
                </svg>
              </div>

              {/* Actual style Card component */}
              <div className="relative z-10 px-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStyle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <CardComponent customStyle={cssStyles} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Style label in bottom-left */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2 z-20">
                <div
                  className="h-1 w-1 rounded-full"
                  style={{ backgroundColor: activeStyleDef.color }}
                />
                <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.15em] text-[var(--color-fg-muted)] opacity-50">
                  {activeStyleDef.name}
                </span>
              </div>
            </div>
          </div>

          {/* Controls panel */}
          <div className="w-full lg:w-[320px] lg:pl-6 flex-shrink-0">
            <div className="flex flex-col gap-0">
              {/* Panel header with tabs */}
              <div className="flex items-center justify-between border-b border-dashed border-[var(--color-border)] pb-4 mb-5">
                <div className="flex items-center gap-0.5">
                  {PANEL_TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.08em] transition-colors duration-200"
                      style={{
                        color:
                          activeTab === tab.id
                            ? "var(--color-fg)"
                            : "var(--color-fg-muted)",
                        borderBottom:
                          activeTab === tab.id
                            ? `1px solid ${activeStyleDef.color}`
                            : "1px solid transparent",
                      }}
                    >
                      <tab.icon className="h-3 w-3" />
                      {tab.label}
                    </button>
                  ))}
                </div>
                <button
                  onClick={resetToDefaults}
                  className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--color-fg-muted)] transition-all duration-200 hover:text-[var(--color-fg)] border border-transparent hover:border-dashed hover:border-[var(--color-border)]"
                  title="Reset to defaults"
                >
                  <RotateCcw className="h-3 w-3" />
                  Reset
                </button>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "sliders" && (
                  <motion.div
                    key="sliders"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-5"
                  >
                    {SLIDERS.map((s) => (
                      <CustomSlider
                        key={s.key}
                        label={s.label}
                        value={state[s.key]}
                        min={s.min}
                        max={s.max}
                        unit={s.unit}
                        accentColor={activeStyleDef.color}
                        onChange={(v) => updateProperty(s.key, v)}
                      />
                    ))}

                    <div className="my-1">
                      <svg
                        width="100%"
                        height="1"
                        preserveAspectRatio="none"
                        className="block"
                      >
                        <line
                          x1="0"
                          y1="0.5"
                          x2="100%"
                          y2="0.5"
                          stroke="var(--color-border)"
                          strokeDasharray="3 3"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>

                    <div className="flex items-center gap-3 text-[10px] text-[var(--color-fg-muted)] opacity-60">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="h-1.5 w-1.5 rounded-full"
                          style={{
                            backgroundColor: activeStyleDef.color,
                          }}
                        />
                        <span className="font-[family-name:var(--font-mono)] uppercase tracking-wider">
                          {activeStyleDef.name}
                        </span>
                      </div>
                      <span>
                        {activeStyleDef.components.reduce(
                          (acc, c) => acc + c.variants.length,
                          0
                        )}{" "}
                        variants
                      </span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "colors" && (
                  <motion.div
                    key="colors"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-1"
                  >
                    <ColorPicker
                      label="Background"
                      color={state.bgColor}
                      onChange={(hex) => updateProperty("bgColor", hex)}
                    />

                    <div className="my-0.5 ml-10">
                      <svg
                        width="100%"
                        height="1"
                        preserveAspectRatio="none"
                        className="block"
                      >
                        <line
                          x1="0"
                          y1="0.5"
                          x2="100%"
                          y2="0.5"
                          stroke="var(--color-border)"
                          strokeDasharray="2 3"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>

                    <ColorPicker
                      label="Border"
                      color={state.borderColor}
                      onChange={(hex) => updateProperty("borderColor", hex)}
                    />

                    <div className="my-0.5 ml-10">
                      <svg
                        width="100%"
                        height="1"
                        preserveAspectRatio="none"
                        className="block"
                      >
                        <line
                          x1="0"
                          y1="0.5"
                          x2="100%"
                          y2="0.5"
                          stroke="var(--color-border)"
                          strokeDasharray="2 3"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>

                    <ColorPicker
                      label="Shadow"
                      color={state.shadowColor}
                      onChange={(hex) => updateProperty("shadowColor", hex)}
                    />

                    <div className="mt-3">
                      <svg
                        width="100%"
                        height="1"
                        preserveAspectRatio="none"
                        className="block"
                      >
                        <line
                          x1="0"
                          y1="0.5"
                          x2="100%"
                          y2="0.5"
                          stroke="var(--color-border)"
                          strokeDasharray="3 3"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>

                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        {[
                          state.bgColor,
                          state.borderColor,
                          state.shadowColor,
                        ].map((c, i) => (
                          <div
                            key={i}
                            className="h-4 w-4 rounded-[2px] border border-[var(--color-border)]"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                      <span className="font-[family-name:var(--font-mono)] text-[9px] text-[var(--color-fg-muted)] opacity-50 uppercase tracking-wider">
                        Active palette
                      </span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "code" && (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-4"
                  >
                    <div className="relative">
                      <pre
                        className="overflow-x-auto rounded-none border border-dashed border-[var(--color-border)] p-4 text-[12px] leading-[1.7]"
                        style={{
                          backgroundColor: "var(--color-code-bg)",
                          fontFamily: "var(--font-mono), monospace",
                        }}
                      >
                        <code>
                          {codeString.split("\n").map((line, i) => {
                            const [prop, val] = line.split(": ");
                            return (
                              <div key={i}>
                                <span style={{ color: "#93c5fd" }}>
                                  {prop}
                                </span>
                                <span style={{ color: "#6b7280" }}>: </span>
                                <span style={{ color: "#fde68a" }}>{val}</span>
                              </div>
                            );
                          })}
                        </code>
                      </pre>

                      <button
                        onClick={handleCopy}
                        className="absolute top-2 right-2 flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider transition-all duration-200 border border-[#ffffff15] hover:border-[#ffffff30]"
                        style={{
                          backgroundColor: "#ffffff08",
                          color: copied ? "#34d399" : "#9ca3af",
                          borderRadius: "2px",
                        }}
                      >
                        {copied ? (
                          <>
                            <Check className="h-3 w-3" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] leading-relaxed text-[var(--color-fg-muted)] opacity-60">
                      Adjust properties and colors, then copy the CSS output
                      directly into your project.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom dashed separator */}
        <div className="mt-16">
          <svg
            width="100%"
            height="1"
            preserveAspectRatio="none"
            className="block"
          >
            <line
              x1="0"
              y1="0.5"
              x2="100%"
              y2="0.5"
              stroke="var(--color-border)"
              strokeDasharray="6 4"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
