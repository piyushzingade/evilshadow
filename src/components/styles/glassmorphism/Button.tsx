"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Heart, ArrowRight } from "lucide-react";
import type { StyleComponentProps } from "@/types";

function PrimaryButton({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      className="font-[family-name:var(--font-clean)] group relative inline-flex items-center gap-4 rounded-full px-9 py-4 text-[15px] font-semibold text-white cursor-pointer"
      style={{
        ...customStyle,
      }}
    >
      {/* === Layer 1: Outer ambient glow === */}
      <span
        className="pointer-events-none absolute -inset-1 rounded-full transition-all duration-300 group-hover:opacity-100 opacity-70"
        style={{
          boxShadow:
            "0 0 30px 4px rgba(34,211,238,0.15), 0 0 60px 8px rgba(52,211,153,0.1), 0 0 100px 16px rgba(34,211,238,0.05)",
        }}
      />

      {/* === Layer 2: Outer frosted glass shell (the whitish border from reference) === */}
      <span
        className="absolute -inset-[3px] rounded-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.25) 100%)",
          backdropFilter: "blur(12px)",
          boxShadow:
            "0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.4)",
        }}
      />

      {/* === Layer 3: Base gradient fill -- cyan to emerald === */}
      <span
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "linear-gradient(105deg, rgba(34,211,238,0.75) 0%, rgba(52,211,153,0.8) 50%, rgba(110,231,183,0.7) 100%)",
          boxShadow:
            "0 4px 20px rgba(34,211,238,0.25), 0 8px 40px rgba(52,211,153,0.15)",
        }}
      />

      {/* === Layer 4: Inner glass frost overlay for depth === */}
      <span
        className="absolute inset-[1px] rounded-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.06) 100%)",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* === Layer 5: Dot texture pattern overlay (matching reference) === */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0.8px, transparent 0.8px)",
          backgroundSize: "6px 6px",
        }}
      />

      {/* === Layer 6: Top highlight refraction line === */}
      <span
        className="pointer-events-none absolute inset-x-6 top-[1px] h-[38%] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",
        }}
      />

      {/* === Layer 7: Left-side colored refraction glow === */}
      <span
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-[60%] w-[30%] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(34,211,238,0.25) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      {/* Button text */}
      <span className="relative z-10 tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]">
        Assign Role
      </span>

      {/* Icon circle on the right -- frosted glass circle */}
      <span
        className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-105"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.15) 100%)",
          border: "1px solid rgba(255,255,255,0.35)",
          backdropFilter: "blur(8px)",
          boxShadow:
            "0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.3)",
        }}
      >
        <UserPlus
          className="h-4 w-4 text-white"
          strokeWidth={2.5}
          style={{
            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.15))",
          }}
        />
      </span>
    </motion.button>
  );
}

function OutlineButton({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      className="font-[family-name:var(--font-clean)] group relative inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-[15px] font-semibold text-white cursor-pointer"
      style={customStyle}
    >
      {/* === Layer 1: Outer ambient glow (subtle) === */}
      <span
        className="pointer-events-none absolute -inset-1 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow:
            "0 0 20px 2px rgba(255,255,255,0.06), 0 0 40px 4px rgba(255,255,255,0.03)",
        }}
      />

      {/* === Layer 2: Glass shell background === */}
      <span
        className="absolute inset-0 rounded-full backdrop-blur-[30px] backdrop-saturate-[180%] transition-all duration-300 group-hover:backdrop-blur-[40px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
          border: "1px solid rgba(255,255,255,0.25)",
          boxShadow:
            "0 4px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.12)",
        }}
      />

      {/* === Layer 3: Hover gradient fill === */}
      <span
        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.06) 100%)",
        }}
      />

      {/* === Layer 4: Top highlight refraction === */}
      <span
        className="pointer-events-none absolute inset-x-5 top-[1px] h-[36%] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)",
        }}
      />

      {/* === Layer 5: Hover border brightening === */}
      <span
        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          border: "1px solid rgba(255,255,255,0.4)",
          boxShadow: "0 0 20px rgba(255,255,255,0.06)",
        }}
      />

      <span className="relative z-10 tracking-wide">Learn More</span>
      <ArrowRight
        className="relative z-10 h-4 w-4 text-white/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white/90"
        strokeWidth={2}
      />
    </motion.button>
  );
}

function IconButton({ customStyle }: { customStyle?: React.CSSProperties }) {
  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.08 }}
      className="font-[family-name:var(--font-clean)] group relative inline-flex h-14 w-14 items-center justify-center rounded-full text-white cursor-pointer"
      style={customStyle}
    >
      {/* === Layer 1: Outer ambient glow === */}
      <span
        className="pointer-events-none absolute -inset-1 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow:
            "0 0 24px 4px rgba(244,114,182,0.1), 0 0 48px 8px rgba(244,114,182,0.05)",
        }}
      />

      {/* === Layer 2: Glass shell === */}
      <span
        className="absolute inset-0 rounded-full backdrop-blur-[30px] backdrop-saturate-[180%] transition-all duration-300 group-hover:backdrop-blur-[40px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)",
          border: "1px solid rgba(255,255,255,0.3)",
          boxShadow:
            "0 4px 16px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
      />

      {/* === Layer 3: Inner frost gradient === */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.03) 100%)",
        }}
      />

      {/* === Layer 4: Hover fill === */}
      <span
        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.45)",
        }}
      />

      {/* === Layer 5: Top highlight === */}
      <span
        className="pointer-events-none absolute inset-x-2 top-[1px] h-[40%] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 100%)",
        }}
      />

      <Heart
        className="relative z-10 h-5 w-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:text-pink-200"
        strokeWidth={2}
        style={{
          filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.15))",
        }}
      />
    </motion.button>
  );
}

export default function Button({
  variant = "primary",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "outline":
      return <OutlineButton customStyle={customStyle} />;
    case "icon":
      return <IconButton customStyle={customStyle} />;
    case "primary":
    default:
      return <PrimaryButton customStyle={customStyle} />;
  }
}
