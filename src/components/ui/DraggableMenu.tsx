"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GripHorizontal, Minus, X, RotateCcw } from "lucide-react";
import { CustomizerState } from "@/types";

interface DraggableMenuProps {
  isVisible: boolean;
  isMinimized: boolean;
  constraintsRef: React.RefObject<HTMLDivElement | null>;
  state: CustomizerState;
  onUpdate: <K extends keyof CustomizerState>(key: K, value: CustomizerState[K]) => void;
  onReset: () => void;
  onMinimize: () => void;
  onClose: () => void;
}

function SliderControl({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <span className="text-xs text-[var(--color-fg-muted)]">{label}</span>
        <span className="text-xs font-mono text-[var(--color-fg-muted)]">
          {value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step || 1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[var(--color-border)] accent-[var(--color-accent)]"
      />
    </div>
  );
}

function ColorControl({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-[var(--color-fg-muted)]">{label}</span>
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-6 w-8 cursor-pointer rounded border border-[var(--color-border)] bg-transparent"
      />
    </div>
  );
}

export function DraggableMenu({
  isVisible,
  isMinimized,
  constraintsRef,
  state,
  onUpdate,
  onReset,
  onMinimize,
  onClose,
}: DraggableMenuProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.05}
          dragMomentum={false}
          whileDrag={{ scale: 1.02 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="pointer-events-auto absolute right-6 top-24 z-50 w-72 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-xl"
        >
          {/* Drag Handle */}
          <div className="flex cursor-grab items-center justify-between border-b border-[var(--color-border)] px-4 py-2.5 active:cursor-grabbing">
            <div className="flex items-center gap-2">
              <GripHorizontal className="h-4 w-4 text-[var(--color-fg-muted)]" />
              <span className="text-xs font-medium text-[var(--color-fg)]">
                Customizer
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={onMinimize}
                className="flex h-6 w-6 items-center justify-center rounded text-[var(--color-fg-muted)] hover:bg-[var(--color-border)]"
                aria-label="Minimize"
              >
                <Minus className="h-3 w-3" />
              </button>
              <button
                onClick={onClose}
                className="flex h-6 w-6 items-center justify-center rounded text-[var(--color-fg-muted)] hover:bg-[var(--color-border)]"
                aria-label="Close"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Content */}
          <AnimatePresence initial={false}>
            {!isMinimized && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-5 p-4">
                  {/* Background */}
                  <div className="flex flex-col gap-2.5">
                    <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-fg-muted)]">
                      Background
                    </h4>
                    <ColorControl
                      label="Color"
                      value={state.bgColor}
                      onChange={(v) => onUpdate("bgColor", v)}
                    />
                    <SliderControl
                      label="Opacity"
                      value={state.opacity}
                      min={0}
                      max={100}
                      onChange={(v) => onUpdate("opacity", v)}
                    />
                  </div>

                  {/* Blur */}
                  <div className="flex flex-col gap-2.5">
                    <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-fg-muted)]">
                      Blur
                    </h4>
                    <SliderControl
                      label="Backdrop Blur"
                      value={state.blur}
                      min={0}
                      max={60}
                      onChange={(v) => onUpdate("blur", v)}
                    />
                  </div>

                  {/* Border */}
                  <div className="flex flex-col gap-2.5">
                    <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-fg-muted)]">
                      Border
                    </h4>
                    <SliderControl
                      label="Radius"
                      value={state.borderRadius}
                      min={0}
                      max={48}
                      onChange={(v) => onUpdate("borderRadius", v)}
                    />
                    <SliderControl
                      label="Width"
                      value={state.borderWidth}
                      min={0}
                      max={6}
                      onChange={(v) => onUpdate("borderWidth", v)}
                    />
                    <ColorControl
                      label="Color"
                      value={state.borderColor}
                      onChange={(v) => onUpdate("borderColor", v)}
                    />
                  </div>

                  {/* Shadow */}
                  <div className="flex flex-col gap-2.5">
                    <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-fg-muted)]">
                      Shadow
                    </h4>
                    <SliderControl
                      label="X Offset"
                      value={state.shadowX}
                      min={-20}
                      max={20}
                      onChange={(v) => onUpdate("shadowX", v)}
                    />
                    <SliderControl
                      label="Y Offset"
                      value={state.shadowY}
                      min={-20}
                      max={20}
                      onChange={(v) => onUpdate("shadowY", v)}
                    />
                    <SliderControl
                      label="Blur"
                      value={state.shadowBlur}
                      min={0}
                      max={60}
                      onChange={(v) => onUpdate("shadowBlur", v)}
                    />
                    <SliderControl
                      label="Spread"
                      value={state.shadowSpread}
                      min={-10}
                      max={20}
                      onChange={(v) => onUpdate("shadowSpread", v)}
                    />
                    <ColorControl
                      label="Color"
                      value={state.shadowColor}
                      onChange={(v) => onUpdate("shadowColor", v)}
                    />
                    <SliderControl
                      label="Opacity"
                      value={state.shadowOpacity}
                      min={0}
                      max={100}
                      onChange={(v) => onUpdate("shadowOpacity", v)}
                    />
                  </div>

                  {/* Reset */}
                  <button
                    onClick={onReset}
                    className="flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] px-3 py-2 text-xs text-[var(--color-fg-muted)] transition-colors hover:bg-[var(--color-border)] hover:text-[var(--color-fg)]"
                  >
                    <RotateCcw className="h-3 w-3" />
                    Reset to Defaults
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
