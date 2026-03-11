"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import type { StyleComponentProps } from "@/types";

function SearchInput({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="font-[family-name:var(--font-clean)] group relative w-full max-w-sm rounded-2xl"
      style={customStyle}
    >
      {/* === Layer 1: Outer ambient glow (visible on focus) === */}
      <AnimatePresence>
        {focused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute -inset-1 rounded-[20px]"
            style={{
              boxShadow:
                "0 0 24px 4px rgba(34,211,238,0.08), 0 0 48px 8px rgba(52,211,153,0.05)",
            }}
          />
        )}
      </AnimatePresence>

      {/* === Layer 2: Glass shell with heavy blur === */}
      <div
        className="absolute inset-0 rounded-2xl backdrop-blur-[40px] backdrop-saturate-[180%] transition-all duration-300"
        style={{
          background: focused
            ? "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.1) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)",
          border: focused
            ? "1px solid rgba(255,255,255,0.4)"
            : "1px solid rgba(255,255,255,0.2)",
          boxShadow: focused
            ? "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.25)"
            : "0 4px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.12)",
        }}
      />

      {/* === Layer 3: Inner frost gradient === */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.1) 0%, transparent 40%, rgba(255,255,255,0.02) 100%)",
          opacity: focused ? 1 : 0.5,
        }}
      />

      {/* === Layer 4: Top highlight refraction === */}
      <div
        className="pointer-events-none absolute inset-x-4 top-[1px] h-[42%] rounded-t-2xl transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 60%, transparent 100%)",
          opacity: focused ? 1 : 0.6,
        }}
      />

      {/* === Layer 5: Refraction light streak === */}
      <div
        className="pointer-events-none absolute -top-8 -left-8 h-32 w-32 rotate-[35deg]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)",
          filter: "blur(16px)",
        }}
      />

      {/* Search icon */}
      <Search
        className="absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 transition-all duration-300 z-10"
        strokeWidth={2}
        style={{
          color: focused ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)",
          filter: focused
            ? "drop-shadow(0 0 4px rgba(34,211,238,0.2))"
            : "none",
        }}
      />

      <input
        type="text"
        placeholder="Search anything..."
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="relative z-10 w-full bg-transparent py-3.5 pl-12 pr-16 text-sm font-medium text-white placeholder-white/30 outline-none tracking-wide"
      />

      {/* Keyboard shortcut hint */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 z-10">
        <kbd
          className="rounded-md px-1.5 py-0.5 text-[10px] font-medium text-white/25 transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(4px)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          /
        </kbd>
      </div>

      {/* === Focus indicator bar at bottom === */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(34,211,238,0.6), rgba(52,211,153,0.6))",
        }}
        initial={false}
        animate={{
          width: focused ? "calc(100% - 2rem)" : "0%",
          opacity: focused ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.div>
  );
}

function TextInput({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const isActive = focused || value.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="font-[family-name:var(--font-clean)] relative w-full max-w-sm rounded-2xl"
      style={customStyle}
    >
      {/* === Layer 1: Outer ambient glow (visible on focus) === */}
      <AnimatePresence>
        {focused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute -inset-1 rounded-[20px]"
            style={{
              boxShadow:
                "0 0 24px 4px rgba(34,211,238,0.08), 0 0 48px 8px rgba(52,211,153,0.05)",
            }}
          />
        )}
      </AnimatePresence>

      {/* === Layer 2: Glass shell with heavy blur === */}
      <div
        className="absolute inset-0 rounded-2xl backdrop-blur-[40px] backdrop-saturate-[180%] transition-all duration-300"
        style={{
          background: focused
            ? "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.1) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)",
          border: focused
            ? "1px solid rgba(255,255,255,0.4)"
            : "1px solid rgba(255,255,255,0.2)",
          boxShadow: focused
            ? "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.25)"
            : "0 4px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.12)",
        }}
      />

      {/* === Layer 3: Inner frost gradient === */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.1) 0%, transparent 40%, rgba(255,255,255,0.02) 100%)",
          opacity: focused ? 1 : 0.5,
        }}
      />

      {/* === Layer 4: Top highlight refraction === */}
      <div
        className="pointer-events-none absolute inset-x-4 top-[1px] h-[42%] rounded-t-2xl transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 60%, transparent 100%)",
          opacity: focused ? 1 : 0.6,
        }}
      />

      {/* === Layer 5: Refraction light streak === */}
      <div
        className="pointer-events-none absolute -top-8 -left-8 h-32 w-32 rotate-[35deg]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)",
          filter: "blur(16px)",
        }}
      />

      {/* Floating label */}
      <label
        className="pointer-events-none absolute left-4 transition-all duration-200 ease-out z-10"
        style={{
          top: isActive ? "10px" : "50%",
          transform: isActive ? "translateY(0)" : "translateY(-50%)",
          fontSize: isActive ? "10px" : "14px",
          fontWeight: isActive ? 600 : 500,
          letterSpacing: isActive ? "0.15em" : "0.02em",
          textTransform: isActive ? "uppercase" : "none",
          color: isActive ? "rgba(34,211,238,0.75)" : "rgba(255,255,255,0.3)",
          textShadow: isActive
            ? "0 0 8px rgba(34,211,238,0.15)"
            : "none",
        }}
      >
        Your Name
      </label>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="relative z-10 w-full bg-transparent px-4 text-sm font-medium text-white outline-none tracking-wide"
        style={{
          paddingTop: isActive ? "28px" : "14px",
          paddingBottom: isActive ? "10px" : "14px",
        }}
      />

      {/* === Focus indicator bar at bottom === */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(34,211,238,0.7), rgba(52,211,153,0.7))",
          boxShadow: "0 0 8px rgba(34,211,238,0.3)",
        }}
        initial={false}
        animate={{
          width: focused ? "calc(100% - 2rem)" : "0%",
          opacity: focused ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.div>
  );
}

export default function Input({
  variant = "search",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "text":
      return <TextInput customStyle={customStyle} />;
    case "search":
    default:
      return <SearchInput customStyle={customStyle} />;
  }
}
