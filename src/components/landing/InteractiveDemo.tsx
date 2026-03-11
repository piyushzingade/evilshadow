"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stylesRegistry } from "@/lib/styles-registry";
import { useComponentCustomizer } from "@/hooks/useComponentCustomizer";
import { StyleId } from "@/types";

function DemoCard({
  styleId,
  customStyle,
}: {
  styleId: StyleId;
  customStyle: React.CSSProperties;
}) {
  const styleDef = stylesRegistry.find((s) => s.id === styleId)!;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
      className="w-full max-w-sm rounded-2xl p-6"
      style={customStyle}
    >
      <div
        className="mb-3 h-1.5 w-8 rounded-full"
        style={{ backgroundColor: styleDef.color }}
      />
      <h3 className="text-lg font-semibold text-white">{styleDef.name}</h3>
      <p className="mt-1 text-sm text-white/60">{styleDef.tagline}</p>
      <div className="mt-4 flex gap-2">
        <div className="rounded-lg bg-white/10 px-3 py-1.5 text-xs text-white/70">
          Card
        </div>
        <div className="rounded-lg bg-white/10 px-3 py-1.5 text-xs text-white/70">
          Button
        </div>
        <div className="rounded-lg bg-white/10 px-3 py-1.5 text-xs text-white/70">
          Input
        </div>
      </div>
    </motion.div>
  );
}

export function InteractiveDemo() {
  const [activeStyle, setActiveStyle] = useState<StyleId>("glassmorphism");
  const { state, updateProperty, cssStyles } =
    useComponentCustomizer(activeStyle);

  const sliders = useMemo(
    () => [
      { key: "blur" as const, label: "Blur", min: 0, max: 60 },
      { key: "opacity" as const, label: "Opacity", min: 0, max: 100 },
      { key: "borderRadius" as const, label: "Radius", min: 0, max: 48 },
      { key: "shadowBlur" as const, label: "Shadow", min: 0, max: 60 },
    ],
    []
  );

  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
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
          Switch styles and tweak properties in real-time.
        </p>

        {/* Separator */}
        <div className="mb-10 h-px w-full bg-[var(--color-border)]" />

        {/* Style selector pills */}
        <div className="mb-10 flex flex-wrap gap-1.5">
          {stylesRegistry.map((style) => (
            <button
              key={style.id}
              onClick={() => setActiveStyle(style.id)}
              className="relative px-4 py-2 text-sm font-medium transition-colors"
            >
              {activeStyle === style.id && (
                <motion.div
                  layoutId="active-style-pill"
                  className="absolute inset-0 border border-[var(--color-fg)] bg-[var(--color-fg)]"
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                />
              )}
              <span
                className="relative z-10"
                style={{
                  color:
                    activeStyle === style.id
                      ? "var(--color-bg)"
                      : "var(--color-fg-muted)",
                }}
              >
                {style.name}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-center">
          {/* Preview area */}
          <div className="flex min-h-[320px] flex-1 items-center justify-center border border-[var(--color-border)] p-8 preview-grid">
            <AnimatePresence mode="wait">
              <DemoCard
                key={activeStyle}
                styleId={activeStyle}
                customStyle={cssStyles}
              />
            </AnimatePresence>
          </div>

          {/* Sliders panel */}
          <div className="w-full max-w-xs flex-shrink-0">
            <div className="flex flex-col gap-6 border border-[var(--color-border)] p-6">
              <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-fg-muted)]">
                Properties
              </h3>
              <div className="h-px w-full bg-[var(--color-border)]" />
              {sliders.map((s) => (
                <div key={s.key} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[var(--color-fg)]">
                      {s.label}
                    </span>
                    <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-fg-muted)]">
                      {state[s.key]}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={s.min}
                    max={s.max}
                    value={state[s.key]}
                    onChange={(e) =>
                      updateProperty(s.key, Number(e.target.value))
                    }
                    className="h-1 w-full cursor-pointer appearance-none bg-[var(--color-border)] accent-[var(--color-fg)]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
