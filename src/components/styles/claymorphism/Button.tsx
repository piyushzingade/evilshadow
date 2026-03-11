"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, Power, Sparkles } from "lucide-react";
import type { StyleComponentProps } from "@/types";

// ---------------------------------------------------------------------------
// Claymorphism Button
// Variants: "action" | "toggle" | "pill"
//
// CORE TECHNIQUE  ── every button is PUFFY, INFLATED like molded plasticine:
//   resting:  outer dark-BR + light-TL drop shadows + inset bright TL + inset dark BR
//   pressed:  shadows INVERT (outer → inset) = "pushed into soft clay"
//   formula:  "Xpx Xpx Xpx dark, -Xpx -Xpx Xpx light, inset Xpx Xpx Xpx highlight,
//              inset -Xpx -Xpx Xpx shadow"
// ---------------------------------------------------------------------------

/* ─── Orange clay shadows ─── */

const clayOrangeResting =
  "8px 8px 18px rgba(180,90,20,0.35), -5px -5px 14px rgba(255,200,140,0.5), inset 3px 3px 8px rgba(255,200,140,0.5), inset -2px -2px 5px rgba(140,60,10,0.2)";

const clayOrangePressed =
  "inset 5px 5px 14px rgba(140,60,10,0.35), inset -3px -3px 8px rgba(255,200,140,0.2), 1px 1px 3px rgba(180,90,20,0.12)";

/* ─── Extra puffy (larger button) ─── */
const clayOrangeExtraPuffy =
  "10px 10px 24px rgba(180,90,20,0.4), -6px -6px 16px rgba(255,200,140,0.45), inset 4px 4px 10px rgba(255,210,160,0.5), inset -3px -3px 7px rgba(140,60,10,0.18)";

/* ─── With visible inner ring ─── */
const clayOrangeInnerRing =
  "8px 8px 20px rgba(180,90,20,0.38), -5px -5px 14px rgba(255,200,140,0.35), inset 3px 3px 8px rgba(255,200,140,0.45), inset -2px -2px 6px rgba(140,60,10,0.22)";

/* ─── Flat / faded ─── */
const clayOrangeFaded =
  "6px 6px 14px rgba(180,140,100,0.22), -4px -4px 10px rgba(255,240,220,0.5), inset 2px 2px 6px rgba(255,230,200,0.45), inset -2px -2px 4px rgba(160,100,60,0.1)";

const clayOrangeFadedPressed =
  "inset 4px 4px 10px rgba(160,100,60,0.2), inset -2px -2px 6px rgba(255,240,220,0.2), 1px 1px 2px rgba(180,140,100,0.08)";

/* ─── With outline ring ─── */
const clayOrangeOutline =
  "8px 8px 18px rgba(160,70,15,0.35), -5px -5px 14px rgba(255,190,130,0.35), inset 3px 3px 7px rgba(255,180,120,0.35), inset -2px -2px 5px rgba(120,50,10,0.22)";

/* ─── Toggle shadows ─── */
const clayToggleOff =
  "8px 8px 18px rgba(0,0,0,0.1), -5px -5px 14px rgba(255,255,255,0.75), inset 3px 3px 6px rgba(255,255,255,0.55), inset -2px -2px 4px rgba(0,0,0,0.07)";

const clayToggleOn =
  "inset 5px 5px 14px rgba(0,0,0,0.15), inset -3px -3px 8px rgba(255,255,255,0.2), 2px 2px 4px rgba(0,0,0,0.05)";

const clayToggleKnobOff =
  "3px 3px 8px rgba(0,0,0,0.12), -2px -2px 6px rgba(255,255,255,0.6), inset 1px 1px 3px rgba(255,255,255,0.5), inset -1px -1px 2px rgba(0,0,0,0.08)";

const clayToggleKnobOn =
  "3px 3px 8px rgba(180,90,20,0.25), -2px -2px 6px rgba(255,200,140,0.4), inset 1px 1px 3px rgba(255,200,140,0.4), inset -1px -1px 2px rgba(140,60,10,0.15)";

/* ─── Pill shadows ─── */
const clayPillResting =
  "7px 7px 16px rgba(0,0,0,0.1), -4px -4px 12px rgba(255,255,255,0.65), inset 3px 3px 6px rgba(255,255,255,0.45), inset -2px -2px 4px rgba(0,0,0,0.06)";

const clayPillPressed =
  "inset 4px 4px 10px rgba(0,0,0,0.12), inset -3px -3px 7px rgba(255,255,255,0.25), 1px 1px 2px rgba(0,0,0,0.05)";

// ──────────────────────────────────────────────────────────────────────────────
//  Action Buttons  ── 5 orange "Delete" variations showing puffy 3D effect
// ──────────────────────────────────────────────────────────────────────────────
function ActionButton({ customStyle }: { customStyle?: React.CSSProperties }) {
  return (
    <div
      className="font-[family-name:var(--font-clay)] flex flex-col items-center gap-6"
      style={customStyle}
    >
      {/* ── Style 1: Standard rounded puffy clay button ── */}
      <motion.button
        whileTap={{ scale: 0.94, boxShadow: clayOrangePressed }}
        className="flex items-center gap-2.5 rounded-2xl bg-[#E8772E] px-12 py-4 text-base font-bold text-white"
        style={{ boxShadow: clayOrangeResting }}
      >
        <Trash2 size={17} strokeWidth={2.5} />
        Delete
      </motion.button>

      {/* ── Style 2: Larger, more rounded, EXTRA puffy ── */}
      <motion.button
        whileTap={{ scale: 0.94, boxShadow: clayOrangePressed }}
        className="flex items-center gap-3 rounded-3xl bg-[#E8772E] px-16 py-5 text-lg font-extrabold text-white"
        style={{ boxShadow: clayOrangeExtraPuffy }}
      >
        <Trash2 size={20} strokeWidth={2.5} />
        Delete
      </motion.button>

      {/* ── Style 3: With visible inner border ring ── */}
      <motion.button
        whileTap={{ scale: 0.94, boxShadow: clayOrangePressed }}
        className="flex items-center gap-2.5 rounded-2xl border-[2.5px] border-[#c5611f]/60 bg-[#E8772E] px-14 py-4 text-lg font-bold text-white"
        style={{ boxShadow: clayOrangeInnerRing }}
      >
        <Trash2 size={18} strokeWidth={2.5} />
        Delete
      </motion.button>

      {/* ── Style 4: Flat / faded version (lighter orange) ── */}
      <motion.button
        whileTap={{ scale: 0.94, boxShadow: clayOrangeFadedPressed }}
        className="flex items-center gap-2.5 rounded-2xl bg-[#edb892] px-14 py-4 text-lg font-bold text-white/90"
        style={{ boxShadow: clayOrangeFaded }}
      >
        <Trash2 size={18} strokeWidth={2.5} />
        Delete
      </motion.button>

      {/* ── Style 5: With visible outline ring ── */}
      <motion.button
        whileTap={{ scale: 0.94, boxShadow: clayOrangePressed }}
        className="flex items-center gap-2.5 rounded-2xl border-[3px] border-white/35 bg-[#c5611f] px-12 py-4 text-base font-bold text-white"
        style={{ boxShadow: clayOrangeOutline }}
      >
        <Trash2 size={17} strokeWidth={2.5} />
        Delete
      </motion.button>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
//  Toggle Button  ── ON/OFF with clay pressed states
// ──────────────────────────────────────────────────────────────────────────────
function ToggleButton({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="font-[family-name:var(--font-clay)] flex flex-col items-center gap-5"
      style={customStyle}
    >
      {/* ── Switch-style toggle ── */}
      <motion.button
        onClick={() => setActive((v) => !v)}
        whileTap={{ scale: 0.94 }}
        className={`relative flex h-14 w-[100px] items-center rounded-full px-1.5 transition-colors duration-300 ${
          active ? "bg-[#E8772E]" : "bg-[#e8e2f0]"
        }`}
        style={{ boxShadow: active ? clayToggleOn : clayToggleOff }}
      >
        {/* Knob */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          className={`flex h-11 w-11 items-center justify-center rounded-full ${
            active ? "bg-white ml-auto" : "bg-[#f5f2fa]"
          }`}
          style={{
            boxShadow: active ? clayToggleKnobOn : clayToggleKnobOff,
          }}
        >
          <Power
            size={18}
            strokeWidth={2.5}
            className={active ? "text-[#E8772E]" : "text-gray-400"}
          />
        </motion.div>
      </motion.button>

      {/* Label */}
      <span
        className={`rounded-full px-6 py-2 text-sm font-extrabold transition-colors duration-300 ${
          active ? "bg-[#E8772E]/15 text-[#c5611f]" : "bg-[#e8e2f0] text-gray-500"
        }`}
        style={{
          boxShadow:
            "4px 4px 10px rgba(0,0,0,0.08), -3px -3px 8px rgba(255,255,255,0.6), inset 2px 2px 4px rgba(255,255,255,0.4), inset -1px -1px 3px rgba(0,0,0,0.05)",
        }}
      >
        {active ? "ON" : "OFF"}
      </span>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
//  Pill Button  ── rounded pill with soft pastel color
// ──────────────────────────────────────────────────────────────────────────────
function PillButton({ customStyle }: { customStyle?: React.CSSProperties }) {
  return (
    <div
      className="font-[family-name:var(--font-clay)] flex flex-col items-center gap-5"
      style={customStyle}
    >
      {/* ── Mint pill ── */}
      <motion.button
        whileTap={{ scale: 0.92, boxShadow: clayPillPressed }}
        className="flex items-center gap-2 rounded-full bg-[#b8ddd0] px-9 py-3 text-sm font-bold text-gray-700"
        style={{ boxShadow: clayPillResting }}
      >
        <Sparkles size={15} strokeWidth={2.5} className="text-[#4a9480]" />
        Subscribe
      </motion.button>

      {/* ── Lavender pill ── */}
      <motion.button
        whileTap={{ scale: 0.92, boxShadow: clayPillPressed }}
        className="flex items-center gap-2 rounded-full bg-[#d4ccec] px-9 py-3 text-sm font-bold text-[#5b4ba0]"
        style={{
          boxShadow:
            "7px 7px 16px rgba(80,60,140,0.12), -4px -4px 12px rgba(240,235,255,0.7), inset 3px 3px 6px rgba(240,235,255,0.5), inset -2px -2px 4px rgba(80,60,120,0.08)",
        }}
      >
        Explore
      </motion.button>

      {/* ── Pink pill ── */}
      <motion.button
        whileTap={{ scale: 0.92, boxShadow: clayPillPressed }}
        className="flex items-center gap-2 rounded-full bg-[#f5c0ce] px-9 py-3 text-sm font-bold text-[#a04060]"
        style={{
          boxShadow:
            "7px 7px 16px rgba(160,80,100,0.12), -4px -4px 12px rgba(255,230,240,0.7), inset 3px 3px 6px rgba(255,230,240,0.5), inset -2px -2px 4px rgba(140,60,80,0.08)",
        }}
      >
        Learn More
      </motion.button>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
//  Export
// ──────────────────────────────────────────────────────────────────────────────
export default function Button({
  variant = "action",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "toggle":
      return <ToggleButton customStyle={customStyle} />;
    case "pill":
      return <PillButton customStyle={customStyle} />;
    case "action":
    default:
      return <ActionButton customStyle={customStyle} />;
  }
}
