"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useTheme } from "next-themes";
import { StyleComponentProps } from "@/types";

// ---------------------------------------------------------------------------
// Underline Input
// Bottom-border-only with an uppercase monospace label floating above.
// On focus an ink-black line animates in from the left, replacing the faint
// zinc hairline -- like a pen stroke on paper.
// ---------------------------------------------------------------------------
function UnderlineInput({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="relative w-72 pt-2"
      style={customStyle}
    >
      {/* Uppercase monospace label */}
      <motion.label
        className="block text-[10px] uppercase tracking-[0.3em] font-[family-name:var(--font-mono)] mb-5 origin-left"
        animate={{
          color: isFocused
            ? isDark
              ? "rgb(228 228 231)"
              : "rgb(24 24 27)"
            : "rgb(161 161 170)",
        }}
        transition={{ duration: 0.4 }}
      >
        Email
      </motion.label>

      <input
        type="email"
        placeholder="you@example.com"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full border-0 border-b border-zinc-200 dark:border-zinc-700 bg-transparent pb-4 text-[14px] text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-300 dark:placeholder:text-zinc-600 outline-none tracking-wide font-light transition-colors duration-500 focus:border-zinc-300 dark:focus:border-zinc-600"
      />

      {/* Animated focus underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-zinc-900 dark:bg-zinc-100 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        style={{ width: "100%" }}
      />
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Search Input
// Completely borderless. Just an icon and text floating in space.
// Pure minimalism -- the absence of decoration IS the decoration.
// ---------------------------------------------------------------------------
function SearchInput({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="relative w-72"
      style={customStyle}
    >
      <div className="flex items-center gap-4 py-3">
        <motion.div
          animate={{
            opacity: isFocused ? 1 : 0.35,
          }}
          transition={{ duration: 0.4 }}
        >
          <Search
            className="h-[18px] w-[18px] text-zinc-900 dark:text-zinc-100 flex-shrink-0"
            strokeWidth={1}
          />
        </motion.div>

        <input
          type="text"
          placeholder="Search..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full border-none bg-transparent text-[14px] text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-300 dark:placeholder:text-zinc-600 outline-none tracking-wide font-light"
        />
      </div>

      {/* Barely-there bottom line that appears on focus */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-zinc-200 dark:bg-zinc-700 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      />
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------
export default function MinimalismInput({
  variant = "underline",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "search":
      return <SearchInput customStyle={customStyle} />;
    case "underline":
    default:
      return <UnderlineInput customStyle={customStyle} />;
  }
}
