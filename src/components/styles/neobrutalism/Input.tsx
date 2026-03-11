"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import type { StyleComponentProps } from "@/types";

// ---------------------------------------------------------------------------
// Neobrutalism Input
// Variants: "text" | "search"
// THICK BORDERS. MONOSPACE. ALL CAPS. HEAVY & CONFIDENT.
// ---------------------------------------------------------------------------

function TextInput({ customStyle }: { customStyle?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-80 font-[family-name:var(--font-brutalist)]"
      style={customStyle}
    >
      <label className="mb-2.5 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-black/50">
        <span className="inline-block h-2.5 w-2.5 rounded-sm border-[2px] border-black bg-[#fecdd3]" />
        YOUR NAME
      </label>
      <div className="relative">
        <input
          type="text"
          placeholder="ENTER YOUR NAME..."
          className="w-full rounded-lg border-[3px] border-black bg-white px-5 py-3.5 text-sm font-black text-black shadow-[4px_4px_0px_#000] placeholder:font-bold placeholder:text-black/25 focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-[2px_2px_0px_#000] focus:outline-none"
        />
      </div>
      <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-black/30">
        REQUIRED FIELD
      </p>
    </motion.div>
  );
}

function SearchInput({ customStyle }: { customStyle?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-80 font-[family-name:var(--font-brutalist)]"
      style={customStyle}
    >
      <label className="mb-2.5 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-black/50">
        <span className="inline-block h-2.5 w-2.5 rounded-sm border-[2px] border-black bg-[#fde68a]" />
        SEARCH
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute left-4 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md border-[2px] border-black/20 bg-[#fde68a]">
          <Search size={14} strokeWidth={3} className="text-black/60" />
        </div>
        <input
          type="text"
          placeholder="SEARCH TRANSACTIONS..."
          className="w-full rounded-lg border-[3px] border-black bg-[#fef9c3] py-3.5 pl-14 pr-5 text-sm font-black text-black shadow-[4px_4px_0px_#000] placeholder:font-bold placeholder:text-black/25 focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-[2px_2px_0px_#000] focus:outline-none"
        />
      </div>
      <div className="mt-2.5 flex gap-2">
        <motion.span
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer rounded-md border-[2px] border-black/20 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-black/40 transition-colors hover:border-black hover:bg-[#bbf7d0] hover:text-black"
        >
          RECENT
        </motion.span>
        <motion.span
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer rounded-md border-[2px] border-black/20 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-black/40 transition-colors hover:border-black hover:bg-[#fecdd3] hover:text-black"
        >
          FOOD
        </motion.span>
        <motion.span
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer rounded-md border-[2px] border-black/20 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-black/40 transition-colors hover:border-black hover:bg-[#fde68a] hover:text-black"
        >
          TRAVEL
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function Input({
  variant = "text",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "search":
      return <SearchInput customStyle={customStyle} />;
    case "text":
    default:
      return <TextInput customStyle={customStyle} />;
  }
}
