"use client";

import { motion } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { useState } from "react";
import type { StyleComponentProps } from "@/types";

/* ──────────────────────────────────────────────
   PILL BUTTON — "Get Now" Apple-style pill
   Large pill on light backgrounds with dot-grid
   texture, inner glass highlight, minimal feel.
   ────────────────────────────────────────────── */

function PillButton({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 16px 48px rgba(0,0,0,0.12), 0 4px_16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.7)",
      }}
      whileTap={{ scale: 0.97 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative rounded-full px-16 py-6 backdrop-blur-[40px] backdrop-saturate-[180%] bg-white/65 border border-white/80 text-gray-800 text-2xl font-semibold tracking-tight shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] transition-colors font-[family-name:var(--font-clean)] overflow-hidden cursor-pointer"
      style={customStyle}
    >
      {/* Dot Grid Texture — subtle materiality */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.5) 0.7px, transparent 0.7px)",
          backgroundSize: "10px 10px",
        }}
      />

      {/* Inner glass highlight — nested pill border */}
      <div className="absolute inset-[3px] rounded-full bg-gradient-to-b from-white/50 to-white/10 border border-white/60 pointer-events-none" />

      {/* Shimmer sweep on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
        initial={{ x: "-100%" }}
        animate={isHovered ? { x: "100%" } : { x: "-100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Label + Arrow */}
      <span className="relative z-10 flex items-center gap-3">
        Get Now
        <motion.span
          animate={isHovered ? { x: 3 } : { x: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <ArrowRight size={22} strokeWidth={2.5} className="text-gray-600" />
        </motion.span>
      </span>
    </motion.button>
  );
}

/* ──────────────────────────────────────────────
   SEGMENTED CONTROL — Multi-option switcher
   Glass pill with animated active indicator
   that slides between options fluidly.
   ────────────────────────────────────────────── */

function SegmentedControl({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  const [active, setActive] = useState(1);
  const options = ["Day", "Week", "Month", "Year"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative inline-flex rounded-[20px] backdrop-blur-[40px] backdrop-saturate-[180%] bg-white/10 border border-white/20 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.1)] font-[family-name:var(--font-clean)] overflow-hidden"
      style={customStyle}
    >
      {/* Top edge refraction */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      {options.map((option, i) => (
        <motion.button
          key={option}
          onClick={() => setActive(i)}
          className="relative px-6 py-2.5 rounded-[14px] text-sm font-semibold transition-colors z-10 cursor-pointer"
          whileTap={{ scale: 0.96 }}
        >
          {active === i && (
            <motion.div
              layoutId="liquid-glass-segment-active"
              className="absolute inset-0 rounded-[14px] bg-white/18 border border-white/15 shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.12)]"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
          <motion.span
            className="relative z-10"
            animate={{
              color:
                active === i
                  ? "rgba(255,255,255,0.95)"
                  : "rgba(255,255,255,0.4)",
            }}
            transition={{ duration: 0.2 }}
          >
            {option}
          </motion.span>
        </motion.button>
      ))}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   FAB — Floating Action Button
   Circular glass button with heavy blur,
   rotating plus icon, and ring pulse effect.
   ────────────────────────────────────────────── */

function FabButton({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Pulse ring on open */}
      <motion.div
        className="absolute inset-0 rounded-full border border-white/15"
        animate={
          isOpen
            ? {
                scale: [1, 1.5, 1.8],
                opacity: [0.3, 0.1, 0],
              }
            : { scale: 1, opacity: 0 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          scale: 1.08,
          backgroundColor: "rgba(255,255,255,0.22)",
          boxShadow:
            "0 12px_40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative rounded-full h-14 w-14 backdrop-blur-[40px] backdrop-saturate-[180%] bg-white/15 border border-white/25 flex items-center justify-center text-white shadow-[0_8px_32px_rgba(0,0,0,0.18),0_2px_8px_rgba(0,0,0,0.08)] font-[family-name:var(--font-clean)] overflow-hidden cursor-pointer"
        style={customStyle}
      >
        {/* Inner glass highlight ring */}
        <div className="pointer-events-none absolute inset-[2px] rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-transparent" />

        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="relative z-10"
        >
          <Plus size={24} strokeWidth={2.2} />
        </motion.div>
      </motion.button>
    </div>
  );
}

/* ──────────────────────────────────────────────
   EXPORT — Default variant switch
   ────────────────────────────────────────────── */

export default function Button({
  variant = "pill",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "pill":
      return <PillButton customStyle={customStyle} />;
    case "segmented":
      return <SegmentedControl customStyle={customStyle} />;
    case "fab":
      return <FabButton customStyle={customStyle} />;
    default:
      return <PillButton customStyle={customStyle} />;
  }
}
