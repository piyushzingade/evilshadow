"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Power, ArrowLeft, Bookmark, Settings, Lock, Home, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import type { StyleComponentProps } from "@/types";

// ─── dark-mode-aware token hook (gray) ──────────────────────────
function useNeuTokens() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== 'light';

  const bg = isDark ? '#2a2d35' : '#e0e5ec';
  const sd = isDark ? '#1e2127' : '#b8bec7';
  const sl = isDark ? '#3a3f48' : '#ffffff';
  const textPrimary = isDark ? '#e2e8f0' : '#4a5568';
  const textSecondary = isDark ? '#c8d0da' : '#5a6370';
  const textMuted = isDark ? '#8892a0' : '#a0a8b4';
  const textFaint = isDark ? '#4a5058' : '#c8ced6';
  const tickActive = isDark ? '#94a3b8' : '#6b7a8d';
  const tickInactive = isDark ? '#3a3f48' : '#c8ced6';
  const hoverBg = isDark ? '#353a42' : '#d8dde4';

  return {
    isDark, bg, sd, sl, textPrimary, textSecondary, textMuted, textFaint, tickActive, tickInactive, hoverBg,
    extruded: `6px 6px 12px ${sd}, -6px -6px 12px ${sl}`,
    extrudedSm: `4px 4px 8px ${sd}, -4px -4px 8px ${sl}`,
    extrudedXs: `3px 3px 6px ${sd}, -3px -3px 6px ${sl}`,
    inset: `inset 4px 4px 8px ${sd}, inset -4px -4px 8px ${sl}`,
    insetSm: `inset 3px 3px 6px ${sd}, inset -3px -3px 6px ${sl}`,
    insetLg: `inset 6px 6px 12px ${sd}, inset -6px -6px 12px ${sl}`,
  };
}

// ─── dark-mode-aware token hook (pink) ──────────────────────────
function usePinkNeuTokens() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== 'light';

  const bg = isDark ? '#5a2838' : '#e8a5b5';
  const sd = isDark ? '#3a1822' : '#c48d9b';
  const sl = isDark ? '#7a3848' : '#ffbdd1';
  const textMuted = isDark ? '#d4a0ae' : '#c48d9b';
  const textAccent = isDark ? '#d4a0ae' : '#d4a0ae';

  return {
    isDark, bg, sd, sl, textMuted, textAccent,
    extruded: `6px 6px 12px ${sd}, -6px -6px 12px ${sl}`,
    inset: `inset 4px 4px 8px ${sd}, inset -4px -4px 8px ${sl}`,
    glow: `inset 4px 4px 8px ${sd}, inset -4px -4px 8px ${sl}, 0 0 20px rgba(255,255,255,${isDark ? '0.15' : '0.5'}), 0 0 40px rgba(255,200,220,${isDark ? '0.1' : '0.3'})`,
  };
}

// ─── Power button (pink, circular, on/off toggle) ────────────────
function PowerButton({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [on, setOn] = useState(false);
  const pink = usePinkNeuTokens();

  return (
    <div
      className="font-[family-name:var(--font-neu)] inline-flex flex-col items-center gap-6 rounded-[28px] p-10"
      style={{ backgroundColor: pink.bg, boxShadow: pink.extruded, ...customStyle }}
    >
      {/* Label */}
      <p
        className="text-[10px] font-semibold tracking-[0.25em] uppercase"
        style={{ color: pink.textMuted }}
      >
        Power Control
      </p>

      <div className="flex items-center gap-8">
        {/* OFF state preview */}
        <div className="flex flex-col items-center gap-3">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full"
            style={{ backgroundColor: pink.bg, boxShadow: pink.extruded }}
          >
            <Power size={28} style={{ color: pink.textMuted }} strokeWidth={2} />
          </div>
          <span
            className="text-[10px] font-semibold tracking-[0.15em] uppercase"
            style={{ color: pink.textMuted }}
          >
            Off
          </span>
        </div>

        {/* Interactive toggle button */}
        <div className="flex flex-col items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setOn((v) => !v)}
            className="flex h-24 w-24 items-center justify-center rounded-full"
            style={{ backgroundColor: pink.bg }}
            animate={{
              boxShadow: on ? pink.glow : pink.extruded,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <motion.div
              animate={{
                color: on ? "#ffffff" : pink.textAccent,
                filter: on
                  ? "drop-shadow(0 0 8px rgba(255,255,255,0.8))"
                  : "none",
              }}
              transition={{ duration: 0.35 }}
            >
              <Power size={34} strokeWidth={2} />
            </motion.div>
          </motion.button>
          <motion.span
            animate={{
              color: on ? "#ffffff" : pink.textMuted,
            }}
            className="text-[10px] font-semibold tracking-[0.15em] uppercase"
          >
            {on ? "On" : "Press"}
          </motion.span>
        </div>

        {/* ON state preview */}
        <div className="flex flex-col items-center gap-3">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full"
            style={{ backgroundColor: pink.bg, boxShadow: pink.glow }}
          >
            <Power
              size={28}
              className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              strokeWidth={2}
            />
          </div>
          <span className="text-[10px] font-semibold tracking-[0.15em] text-white uppercase">
            On
          </span>
        </div>
      </div>

      {/* Subtle pink divider line */}
      <div
        className="h-1 w-24 rounded-full"
        style={{ backgroundColor: pink.bg, boxShadow: pink.inset }}
      />
    </div>
  );
}

// ─── Rectangular button (pressed effect on active) ───────────────
function RectangularButton({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  const [pressed, setPressed] = useState(false);
  const neu = useNeuTokens();

  return (
    <div
      className="font-[family-name:var(--font-neu)] flex flex-col items-center gap-6 rounded-[24px] p-8"
      style={{ backgroundColor: neu.bg, boxShadow: neu.extruded, ...customStyle }}
    >
      {/* Label */}
      <p
        className="text-[10px] font-semibold tracking-[0.25em] uppercase"
        style={{ color: neu.textMuted }}
      >
        Buttons
      </p>

      {/* Interactive pill button */}
      <motion.button
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        animate={{
          boxShadow: pressed ? neu.inset : neu.extruded,
        }}
        transition={{ duration: 0.15 }}
        className="rounded-full px-14 py-4 text-sm font-semibold tracking-wide"
        style={{ backgroundColor: neu.bg, color: neu.textSecondary }}
      >
        Press Me
      </motion.button>

      {/* Pressed state demo */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        className="rounded-full px-14 py-4 text-sm font-semibold tracking-wide"
        style={{ backgroundColor: neu.bg, color: neu.textMuted, boxShadow: neu.inset }}
      >
        Pressed
      </motion.button>

      {/* Icon buttons row */}
      <div className="flex items-center gap-5">
        <motion.button
          whileTap={{ scale: 0.92, boxShadow: neu.insetSm }}
          className="flex h-12 w-12 items-center justify-center rounded-xl text-blue-500"
          style={{ backgroundColor: neu.bg, boxShadow: neu.extrudedSm }}
        >
          <Home size={20} strokeWidth={2} />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.92, boxShadow: neu.insetSm }}
          className="flex h-12 w-12 items-center justify-center rounded-xl text-green-500"
          style={{ backgroundColor: neu.bg, boxShadow: neu.extrudedSm }}
        >
          <Menu size={20} strokeWidth={2} />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.92, boxShadow: neu.insetSm }}
          className="flex h-12 w-12 items-center justify-center rounded-full"
          style={{ backgroundColor: neu.bg, color: neu.textMuted, boxShadow: neu.extrudedSm }}
        >
          <Settings size={20} strokeWidth={2} />
        </motion.button>
      </div>

      {/* Slider demo */}
      <div className="w-full px-2">
        <div
          className="relative h-2 w-full rounded-full"
          style={{ backgroundColor: neu.bg, boxShadow: neu.insetSm }}
        >
          <div className="absolute left-0 top-0 h-full w-3/5 rounded-full bg-gradient-to-r from-red-400 to-red-500" />
          <div
            className="absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full"
            style={{
              backgroundColor: neu.bg,
              left: "60%",
              transform: "translate(-50%, -50%)",
              boxShadow: neu.extrudedXs,
            }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Small circular icon buttons (inset/extruded) ────────────────
function CircularButton({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const neu = useNeuTokens();

  const icons = [
    { icon: ArrowLeft, label: "Back" },
    { icon: Bookmark, label: "Bookmark" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div
      className="font-[family-name:var(--font-neu)] flex flex-col items-center gap-6 rounded-[24px] p-8"
      style={{ backgroundColor: neu.bg, boxShadow: neu.extruded, ...customStyle }}
    >
      {/* Label */}
      <p
        className="text-[10px] font-semibold tracking-[0.25em] uppercase"
        style={{ color: neu.textMuted }}
      >
        Icon Buttons
      </p>

      {/* Inset icon buttons */}
      <div className="flex items-center gap-5">
        {icons.map(({ icon: Icon, label }, idx) => {
          const isActive = activeIdx === idx;
          return (
            <motion.button
              key={label}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveIdx(isActive ? null : idx)}
              animate={{
                boxShadow: isActive ? neu.inset : neu.extrudedSm,
              }}
              transition={{ duration: 0.2 }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ backgroundColor: neu.bg }}
            >
              <Icon
                size={20}
                style={{ color: isActive ? neu.textSecondary : neu.textMuted }}
                strokeWidth={2}
              />
            </motion.button>
          );
        })}
      </div>

      {/* Large circular button */}
      <motion.button
        whileTap={{ scale: 0.95, boxShadow: neu.inset }}
        className="flex h-20 w-20 items-center justify-center rounded-full"
        style={{ backgroundColor: neu.bg, boxShadow: neu.extruded }}
      >
        <Lock size={24} style={{ color: neu.textMuted }} strokeWidth={2} />
      </motion.button>

      {/* Button labels */}
      <div className="flex items-center gap-3">
        {["Extruded", "Flat", "Inset"].map((label, idx) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{
                backgroundColor: neu.bg,
                boxShadow:
                  idx === 0
                    ? neu.extrudedSm
                    : idx === 1
                    ? "none"
                    : neu.insetSm,
              }}
            />
            <span
              className="text-[9px] font-medium tracking-wider uppercase"
              style={{ color: neu.textMuted }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Exported wrapper ─────────────────────────────────────────────
export default function Button({
  variant = "power",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "rectangular":
      return <RectangularButton customStyle={customStyle} />;
    case "circular":
      return <CircularButton customStyle={customStyle} />;
    case "power":
    default:
      return <PowerButton customStyle={customStyle} />;
  }
}
