"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Power, ArrowLeft, Bookmark, Settings, Lock, Home, Menu } from "lucide-react";
import type { StyleComponentProps } from "@/types";

// ─── gray shadow tokens ──────────────────────────────────────────
const extruded = "6px 6px 12px #b8bec7, -6px -6px 12px #ffffff";
const extrudedSm = "4px 4px 8px #b8bec7, -4px -4px 8px #ffffff";
const extrudedXs = "3px 3px 6px #b8bec7, -3px -3px 6px #ffffff";
const inset = "inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff";
const insetSm = "inset 3px 3px 6px #b8bec7, inset -3px -3px 6px #ffffff";

// ─── pink shadow tokens ──────────────────────────────────────────
const pinkExtruded = "6px 6px 12px #c48d9b, -6px -6px 12px #ffbdd1";
const pinkInset = "inset 4px 4px 8px #c48d9b, inset -4px -4px 8px #ffbdd1";
const pinkGlow =
  "inset 4px 4px 8px #c48d9b, inset -4px -4px 8px #ffbdd1, 0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,200,220,0.3)";

// ─── Power button (pink, circular, on/off toggle) ────────────────
function PowerButton({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [on, setOn] = useState(false);

  return (
    <div
      className="font-[family-name:var(--font-neu)] inline-flex flex-col items-center gap-6 rounded-[28px] bg-[#e8a5b5] p-10"
      style={{ boxShadow: pinkExtruded, ...customStyle }}
    >
      {/* Label */}
      <p className="text-[10px] font-semibold tracking-[0.25em] text-[#c48d9b] uppercase">
        Power Control
      </p>

      <div className="flex items-center gap-8">
        {/* OFF state preview */}
        <div className="flex flex-col items-center gap-3">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e8a5b5]"
            style={{ boxShadow: pinkExtruded }}
          >
            <Power size={28} className="text-[#c48d9b]" strokeWidth={2} />
          </div>
          <span className="text-[10px] font-semibold tracking-[0.15em] text-[#c48d9b] uppercase">
            Off
          </span>
        </div>

        {/* Interactive toggle button */}
        <div className="flex flex-col items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setOn((v) => !v)}
            className="flex h-24 w-24 items-center justify-center rounded-full bg-[#e8a5b5]"
            animate={{
              boxShadow: on ? pinkGlow : pinkExtruded,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <motion.div
              animate={{
                color: on ? "#ffffff" : "#d4a0ae",
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
              color: on ? "#ffffff" : "#c48d9b",
            }}
            className="text-[10px] font-semibold tracking-[0.15em] uppercase"
          >
            {on ? "On" : "Press"}
          </motion.span>
        </div>

        {/* ON state preview */}
        <div className="flex flex-col items-center gap-3">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e8a5b5]"
            style={{ boxShadow: pinkGlow }}
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
        className="h-1 w-24 rounded-full bg-[#e8a5b5]"
        style={{ boxShadow: pinkInset }}
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

  return (
    <div
      className="font-[family-name:var(--font-neu)] flex flex-col items-center gap-6 rounded-[24px] bg-[#e0e5ec] p-8"
      style={{ boxShadow: extruded, ...customStyle }}
    >
      {/* Label */}
      <p className="text-[10px] font-semibold tracking-[0.25em] text-[#a0a8b4] uppercase">
        Buttons
      </p>

      {/* Interactive pill button */}
      <motion.button
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        animate={{
          boxShadow: pressed ? inset : extruded,
        }}
        transition={{ duration: 0.15 }}
        className="rounded-full bg-[#e0e5ec] px-14 py-4 text-sm font-semibold tracking-wide text-[#5a6370]"
      >
        Press Me
      </motion.button>

      {/* Pressed state demo */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        className="rounded-full bg-[#e0e5ec] px-14 py-4 text-sm font-semibold tracking-wide text-[#a0a8b4]"
        style={{ boxShadow: inset }}
      >
        Pressed
      </motion.button>

      {/* Icon buttons row */}
      <div className="flex items-center gap-5">
        <motion.button
          whileTap={{ scale: 0.92, boxShadow: insetSm }}
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e0e5ec] text-blue-500"
          style={{ boxShadow: extrudedSm }}
        >
          <Home size={20} strokeWidth={2} />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.92, boxShadow: insetSm }}
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e0e5ec] text-green-500"
          style={{ boxShadow: extrudedSm }}
        >
          <Menu size={20} strokeWidth={2} />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.92, boxShadow: insetSm }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e0e5ec] text-[#8a93a0]"
          style={{ boxShadow: extrudedSm }}
        >
          <Settings size={20} strokeWidth={2} />
        </motion.button>
      </div>

      {/* Slider demo */}
      <div className="w-full px-2">
        <div
          className="relative h-2 w-full rounded-full bg-[#e0e5ec]"
          style={{ boxShadow: insetSm }}
        >
          <div className="absolute left-0 top-0 h-full w-3/5 rounded-full bg-gradient-to-r from-red-400 to-red-500" />
          <div
            className="absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-[#e0e5ec]"
            style={{
              left: "60%",
              transform: "translate(-50%, -50%)",
              boxShadow: extrudedXs,
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

  const icons = [
    { icon: ArrowLeft, label: "Back" },
    { icon: Bookmark, label: "Bookmark" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div
      className="font-[family-name:var(--font-neu)] flex flex-col items-center gap-6 rounded-[24px] bg-[#e0e5ec] p-8"
      style={{ boxShadow: extruded, ...customStyle }}
    >
      {/* Label */}
      <p className="text-[10px] font-semibold tracking-[0.25em] text-[#a0a8b4] uppercase">
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
                boxShadow: isActive ? inset : extrudedSm,
              }}
              transition={{ duration: 0.2 }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e0e5ec]"
            >
              <Icon
                size={20}
                className={isActive ? "text-[#5a6370]" : "text-[#a0a8b4]"}
                strokeWidth={2}
              />
            </motion.button>
          );
        })}
      </div>

      {/* Large circular button */}
      <motion.button
        whileTap={{ scale: 0.95, boxShadow: inset }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e0e5ec]"
        style={{ boxShadow: extruded }}
      >
        <Lock size={24} className="text-[#8a93a0]" strokeWidth={2} />
      </motion.button>

      {/* Button labels */}
      <div className="flex items-center gap-3">
        {["Extruded", "Flat", "Inset"].map((label, idx) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e0e5ec]"
              style={{
                boxShadow:
                  idx === 0
                    ? extrudedSm
                    : idx === 1
                    ? "none"
                    : insetSm,
              }}
            />
            <span className="text-[9px] font-medium tracking-wider text-[#a0a8b4] uppercase">
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
