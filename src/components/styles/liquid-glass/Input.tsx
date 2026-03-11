"use client";

import { motion } from "framer-motion";
import { Search, Command } from "lucide-react";
import { useState } from "react";
import type { StyleComponentProps } from "@/types";

/* ──────────────────────────────────────────────
   SEARCH INPUT — Glass search bar
   Rounded glass pill with search icon, keyboard
   shortcut badge, and focus-state animations.
   ────────────────────────────────────────────── */

function SearchInput({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-sm font-[family-name:var(--font-clean)]"
    >
      <motion.div
        animate={{
          borderColor: isFocused
            ? "rgba(255,255,255,0.35)"
            : "rgba(255,255,255,0.18)",
          backgroundColor: isFocused
            ? "rgba(255,255,255,0.14)"
            : "rgba(255,255,255,0.08)",
          boxShadow: isFocused
            ? "0 8px 40px rgba(0,0,0,0.15), 0 2px 12px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.2)"
            : "0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative flex items-center gap-3 rounded-[18px] backdrop-blur-[40px] backdrop-saturate-[180%] border px-4 py-3.5 overflow-hidden"
        style={customStyle}
      >
        {/* Top edge refraction */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Search Icon */}
        <motion.div
          animate={{
            opacity: isFocused ? 0.85 : 0.4,
            scale: isFocused ? 1.05 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <Search size={18} className="text-white" />
        </motion.div>

        {/* Input */}
        <input
          type="text"
          placeholder="Search..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 bg-transparent text-white text-sm font-medium placeholder:text-white/30 outline-none caret-white/60"
        />

        {/* Keyboard Shortcut Badge */}
        <motion.div
          animate={{
            opacity: isFocused ? 0 : 1,
            scale: isFocused ? 0.9 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-1 shrink-0"
        >
          <span className="flex items-center gap-0.5 text-white/20 text-[11px] px-1.5 py-0.5 rounded-[6px] bg-white/8 border border-white/10 font-medium">
            <Command size={10} strokeWidth={2.5} />K
          </span>
        </motion.div>

        {/* Focus glow ring */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[18px]"
          animate={{
            boxShadow: isFocused
              ? "inset 0 0 0 1px rgba(255,255,255,0.08)"
              : "inset 0 0 0 0px rgba(255,255,255,0)",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   TEXT INPUT — Glass text field with label
   Floating label, glass field, helper text.
   Smooth focus transitions on all elements.
   ────────────────────────────────────────────── */

function TextInput({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const hasValue = value.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-sm font-[family-name:var(--font-clean)]"
    >
      {/* Label */}
      <motion.label
        animate={{
          color: isFocused
            ? "rgba(255,255,255,0.8)"
            : "rgba(255,255,255,0.45)",
        }}
        transition={{ duration: 0.25 }}
        className="block text-[11px] font-semibold mb-2.5 ml-1 tracking-[0.08em] uppercase"
      >
        Email Address
      </motion.label>

      {/* Input Container */}
      <motion.div
        animate={{
          borderColor: isFocused
            ? "rgba(255,255,255,0.3)"
            : "rgba(255,255,255,0.12)",
          backgroundColor: isFocused
            ? "rgba(255,255,255,0.12)"
            : "rgba(255,255,255,0.06)",
          boxShadow: isFocused
            ? "0 8px 40px rgba(0,0,0,0.12), 0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.15)"
            : "0 4px 16px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative rounded-[14px] backdrop-blur-[40px] backdrop-saturate-[180%] border px-4 py-3.5 overflow-hidden"
        style={customStyle}
      >
        {/* Top edge refraction */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <input
          type="email"
          placeholder="you@example.com"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent text-white text-sm font-medium placeholder:text-white/25 outline-none caret-white/60"
        />
      </motion.div>

      {/* Helper Text */}
      <motion.p
        animate={{
          opacity: isFocused || hasValue ? 0.55 : 0.25,
          color: hasValue
            ? "rgba(134,239,172,0.8)"
            : "rgba(255,255,255,1)",
        }}
        transition={{ duration: 0.25 }}
        className="text-[12px] mt-2.5 ml-1 font-medium"
      >
        {hasValue ? "Looks good!" : "We will never share your email."}
      </motion.p>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   EXPORT — Default variant switch
   ────────────────────────────────────────────── */

export default function Input({
  variant = "search",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "search":
      return <SearchInput customStyle={customStyle} />;
    case "text":
      return <TextInput customStyle={customStyle} />;
    default:
      return <SearchInput customStyle={customStyle} />;
  }
}
