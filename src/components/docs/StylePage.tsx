"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings2, Type, Paintbrush, Code2 } from "lucide-react";
import { StyleDefinition, ComponentType } from "@/types";
import { useComponentCustomizer } from "@/hooks/useComponentCustomizer";
import { useDraggable } from "@/hooks/useDraggable";
import { DraggableMenu } from "@/components/ui/DraggableMenu";
import { ComponentSection } from "@/components/docs/ComponentSection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const componentTabs: { id: ComponentType; label: string }[] = [
  { id: "card", label: "Cards" },
  { id: "button", label: "Buttons" },
  { id: "input", label: "Inputs" },
];

interface StylePageProps {
  style: StyleDefinition;
}

export function StylePage({ style }: StylePageProps) {
  const [activeTab, setActiveTab] = useState<ComponentType>("card");
  const customizer = useComponentCustomizer(style.id);
  const { isMinimized, isVisible, constraintsRef, toggleMinimize, close, open } = useDraggable();

  const activeComponent = style.components.find((c) => c.type === activeTab);

  return (
    <div className="relative">
      {/* Header */}
      <AnimatedSection className="mb-10">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: style.color }}
              />
              <h1 className="font-[family-name:var(--font-display)] text-4xl italic text-[var(--color-fg)] md:text-5xl">
                {style.name}
              </h1>
            </div>
            <p className="mt-3 max-w-2xl text-lg text-[var(--color-fg-muted)]">
              {style.description}
            </p>
          </div>
          {!isVisible && (
            <button
              onClick={open}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] text-[var(--color-fg-muted)] transition-colors hover:bg-[var(--color-border)]"
              aria-label="Open customizer"
            >
              <Settings2 className="h-4 w-4" />
            </button>
          )}
        </div>
      </AnimatedSection>

      {/* How It's Built — Docs Section */}
      <AnimatedSection delay={0.1} className="mb-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {/* Font */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <div className="mb-3 flex items-center gap-2">
              <Type className="h-4 w-4 text-[var(--color-accent)]" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-fg-muted)]">
                Typography
              </h3>
            </div>
            <p
              className="text-lg font-semibold text-[var(--color-fg)]"
              style={{ fontFamily: `var(${style.fontVariable})` }}
            >
              {style.font}
            </p>
            <p className="mt-1 font-mono text-xs text-[var(--color-fg-muted)]">
              var({style.fontVariable})
            </p>
          </div>

          {/* Techniques */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <div className="mb-3 flex items-center gap-2">
              <Paintbrush className="h-4 w-4 text-[var(--color-accent)]" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-fg-muted)]">
                Key Techniques
              </h3>
            </div>
            <ul className="flex flex-col gap-1.5">
              {style.techniques.slice(0, 3).map((t) => (
                <li key={t} className="text-xs leading-relaxed text-[var(--color-fg-muted)]">
                  <span className="mr-1.5" style={{ color: style.color }}>&#9679;</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* CSS Highlights */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <div className="mb-3 flex items-center gap-2">
              <Code2 className="h-4 w-4 text-[var(--color-accent)]" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-fg-muted)]">
                CSS Highlights
              </h3>
            </div>
            <div className="flex flex-col gap-1.5">
              {style.cssHighlights.map((c) => (
                <code
                  key={c}
                  className="block rounded bg-[var(--color-border-subtle)] px-2 py-1 font-mono text-[11px] text-[var(--color-fg-muted)]"
                >
                  {c}
                </code>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Full Techniques List */}
      <AnimatedSection delay={0.15} className="mb-12">
        <details className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
          <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-[var(--color-fg)] select-none">
            <span className="ml-1">All Techniques &amp; Build Details</span>
          </summary>
          <div className="border-t border-[var(--color-border)] px-5 py-4">
            <ol className="flex flex-col gap-3">
              {style.techniques.map((t, i) => (
                <li key={t} className="flex gap-3 text-sm text-[var(--color-fg-muted)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--color-border-subtle)] font-mono text-xs font-bold text-[var(--color-fg-muted)]">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ol>
          </div>
        </details>
      </AnimatedSection>

      {/* Component Type Tabs */}
      <div className="mb-8 flex gap-1 rounded-xl bg-[var(--color-border-subtle)] p-1 w-fit">
        {componentTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative rounded-lg px-5 py-2 text-sm font-medium transition-colors"
            style={{
              color:
                activeTab === tab.id
                  ? "var(--color-fg)"
                  : "var(--color-fg-muted)",
            }}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="docs-tab"
                className="absolute inset-0 rounded-lg bg-[var(--color-surface)] shadow-sm"
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Components */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
        >
          {activeComponent && (
            <ComponentSection
              styleId={style.id}
              componentType={activeTab}
              variants={activeComponent.variants}
              customizerState={customizer.state}
              cssStyles={customizer.cssStyles}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Draggable Customizer */}
      <div
        ref={constraintsRef}
        className="pointer-events-none fixed inset-0 z-40"
      >
        <DraggableMenu
          isVisible={isVisible}
          isMinimized={isMinimized}
          constraintsRef={constraintsRef}
          state={customizer.state}
          onUpdate={customizer.updateProperty}
          onReset={customizer.resetToDefaults}
          onMinimize={toggleMinimize}
          onClose={close}
        />
      </div>
    </div>
  );
}
