"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Lock, Mail, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import type { StyleComponentProps } from "@/types";

// ─── dark-mode-aware token hook ─────────────────────────────────
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
    focusInset: `inset 5px 5px 10px ${sd}, inset -5px -5px 10px ${sl}`,
  };
}

// ─── Extruded (login form) ────────────────────────────────────────
function ExtrudedInput({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const neu = useNeuTokens();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="font-[family-name:var(--font-neu)] flex w-full max-w-sm flex-col gap-5 rounded-[24px] p-8"
      style={{ backgroundColor: neu.bg, boxShadow: neu.extruded, ...customStyle }}
    >
      {/* Header */}
      <div className="mb-1 flex flex-col items-center gap-2">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full"
          style={{ backgroundColor: neu.bg, boxShadow: neu.extrudedSm }}
        >
          <Lock size={20} style={{ color: neu.textMuted }} strokeWidth={2} />
        </div>
        <p
          className="text-[10px] font-semibold tracking-[0.25em] uppercase"
          style={{ color: neu.textMuted }}
        >
          Sign In
        </p>
      </div>

      {/* Email input -- pill-shaped, inset */}
      <motion.div
        animate={{
          boxShadow: emailFocused ? neu.focusInset : neu.inset,
        }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-3 rounded-full px-6 py-4"
        style={{ backgroundColor: neu.bg }}
      >
        <Mail size={16} style={{ color: neu.textMuted }} className="shrink-0" strokeWidth={2} />
        <input
          type="email"
          placeholder="Email Address"
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
          className="w-full bg-transparent text-sm font-medium tracking-wide outline-none"
          style={{ color: neu.textPrimary }}
        />
      </motion.div>

      {/* Password input -- pill-shaped, inset */}
      <motion.div
        animate={{
          boxShadow: passwordFocused ? neu.focusInset : neu.inset,
        }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-3 rounded-full px-6 py-4"
        style={{ backgroundColor: neu.bg }}
      >
        <Lock size={16} style={{ color: neu.textMuted }} className="shrink-0" strokeWidth={2} />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
          className="w-full bg-transparent text-sm font-medium tracking-wide outline-none"
          style={{ color: neu.textPrimary }}
        />
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setShowPassword((v) => !v)}
          className="shrink-0"
          style={{ color: neu.textMuted }}
        >
          {showPassword ? (
            <EyeOff size={16} strokeWidth={2} />
          ) : (
            <Eye size={16} strokeWidth={2} />
          )}
        </motion.button>
      </motion.div>

      {/* Forgot password link */}
      <div className="flex justify-end px-2">
        <button
          className="text-[11px] font-medium tracking-wide transition-colors"
          style={{ color: neu.textMuted }}
          onMouseEnter={(e) => (e.currentTarget.style.color = neu.tickActive)}
          onMouseLeave={(e) => (e.currentTarget.style.color = neu.textMuted)}
        >
          Forgot password?
        </button>
      </div>

      {/* Log in button -- pill-shaped, extruded */}
      <motion.button
        whileTap={{
          scale: 0.98,
          boxShadow: neu.inset,
        }}
        className="flex items-center justify-center gap-2.5 rounded-full px-7 py-4"
        style={{ backgroundColor: neu.bg, boxShadow: neu.extruded }}
      >
        <Lock size={14} className="text-red-600" strokeWidth={2.5} />
        <span className="text-sm font-bold tracking-wide text-red-600">
          Log in
        </span>
      </motion.button>

      {/* Divider */}
      <div className="flex items-center gap-3 px-2">
        <div
          className="h-[2px] flex-1 rounded-full"
          style={{ backgroundColor: neu.bg, boxShadow: neu.insetSm }}
        />
        <span
          className="text-[10px] font-medium"
          style={{ color: neu.textFaint }}
        >
          or
        </span>
        <div
          className="h-[2px] flex-1 rounded-full"
          style={{ backgroundColor: neu.bg, boxShadow: neu.insetSm }}
        />
      </div>

      {/* Sign up link */}
      <p
        className="text-center text-[11px] font-medium"
        style={{ color: neu.textMuted }}
      >
        Don&apos;t have an account?{" "}
        <button
          className="font-semibold transition-colors"
          style={{ color: neu.textSecondary }}
          onMouseEnter={(e) => (e.currentTarget.style.color = neu.textPrimary)}
          onMouseLeave={(e) => (e.currentTarget.style.color = neu.textSecondary)}
        >
          Sign up
        </button>
      </p>
    </motion.div>
  );
}

// ─── Inset (search input) ─────────────────────────────────────────
function InsetInput({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState("");
  const neu = useNeuTokens();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="font-[family-name:var(--font-neu)] flex w-full max-w-sm flex-col gap-4 rounded-[24px] p-8"
      style={{ backgroundColor: neu.bg, boxShadow: neu.extruded, ...customStyle }}
    >
      {/* Label */}
      <p
        className="text-[10px] font-semibold tracking-[0.25em] uppercase"
        style={{ color: neu.textMuted }}
      >
        Search
      </p>

      {/* Search bar */}
      <motion.div
        animate={{
          boxShadow: focused ? neu.focusInset : neu.inset,
        }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-3 rounded-full px-6 py-4"
        style={{ backgroundColor: neu.bg }}
      >
        <Search size={18} style={{ color: neu.textMuted }} className="shrink-0" strokeWidth={2} />
        <input
          type="text"
          placeholder="Search anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent text-sm font-medium tracking-wide outline-none"
          style={{ color: neu.textPrimary }}
        />
        {query && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.85 }}
            onClick={() => setQuery("")}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
            style={{ backgroundColor: neu.bg, color: neu.textMuted, boxShadow: neu.extrudedXs }}
          >
            &times;
          </motion.button>
        )}
      </motion.div>

      {/* Quick filter pills */}
      <div className="flex flex-wrap gap-2 px-1">
        {["All", "Images", "Videos", "Files"].map((label, idx) => (
          <motion.button
            key={label}
            whileTap={{ scale: 0.92, boxShadow: neu.insetSm }}
            className="rounded-full px-4 py-2"
            style={{ backgroundColor: neu.bg, boxShadow: idx === 0 ? neu.insetSm : neu.extrudedXs }}
          >
            <span
              className="text-[11px] font-semibold tracking-wide"
              style={{ color: idx === 0 ? neu.textSecondary : neu.textMuted }}
            >
              {label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Recent search suggestions */}
      <div className="flex flex-col gap-1 px-1">
        <p
          className="mb-1 text-[10px] font-medium tracking-wider uppercase"
          style={{ color: neu.textFaint }}
        >
          Recent
        </p>
        {["Dashboard design", "UI components"].map((item) => (
          <button
            key={item}
            className="flex items-center justify-between rounded-xl px-3 py-2 text-left transition-colors"
            style={{ backgroundColor: 'transparent' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = neu.hoverBg)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <span
              className="text-xs font-medium"
              style={{ color: neu.textMuted }}
            >
              {item}
            </span>
            <ArrowRight size={12} style={{ color: neu.textFaint }} />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Exported wrapper ─────────────────────────────────────────────
export default function Input({
  variant = "extruded",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "inset":
      return <InsetInput customStyle={customStyle} />;
    case "extruded":
    default:
      return <ExtrudedInput customStyle={customStyle} />;
  }
}
