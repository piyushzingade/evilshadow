"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Lock, Mail, Eye, EyeOff, ArrowRight } from "lucide-react";
import type { StyleComponentProps } from "@/types";

// ─── shadow tokens ────────────────────────────────────────────────
const extruded = "6px 6px 12px #b8bec7, -6px -6px 12px #ffffff";
const extrudedSm = "4px 4px 8px #b8bec7, -4px -4px 8px #ffffff";
const extrudedXs = "3px 3px 6px #b8bec7, -3px -3px 6px #ffffff";
const inset = "inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff";
const insetSm = "inset 3px 3px 6px #b8bec7, inset -3px -3px 6px #ffffff";

// ─── Extruded (login form) ────────────────────────────────────────
function ExtrudedInput({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="font-[family-name:var(--font-neu)] flex w-full max-w-sm flex-col gap-5 rounded-[24px] bg-[#e0e5ec] p-8"
      style={{ boxShadow: extruded, ...customStyle }}
    >
      {/* Header */}
      <div className="mb-1 flex flex-col items-center gap-2">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e0e5ec]"
          style={{ boxShadow: extrudedSm }}
        >
          <Lock size={20} className="text-[#8a93a0]" strokeWidth={2} />
        </div>
        <p className="text-[10px] font-semibold tracking-[0.25em] text-[#a0a8b4] uppercase">
          Sign In
        </p>
      </div>

      {/* Email input -- pill-shaped, inset */}
      <motion.div
        animate={{
          boxShadow: emailFocused
            ? "inset 5px 5px 10px #b8bec7, inset -5px -5px 10px #ffffff"
            : inset,
        }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-3 rounded-full bg-[#e0e5ec] px-6 py-4"
      >
        <Mail size={16} className="shrink-0 text-[#a0a8b4]" strokeWidth={2} />
        <input
          type="email"
          placeholder="Email Address"
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
          className="w-full bg-transparent text-sm font-medium tracking-wide text-[#4a5568] placeholder-[#b8bec7] outline-none"
        />
      </motion.div>

      {/* Password input -- pill-shaped, inset */}
      <motion.div
        animate={{
          boxShadow: passwordFocused
            ? "inset 5px 5px 10px #b8bec7, inset -5px -5px 10px #ffffff"
            : inset,
        }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-3 rounded-full bg-[#e0e5ec] px-6 py-4"
      >
        <Lock size={16} className="shrink-0 text-[#a0a8b4]" strokeWidth={2} />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
          className="w-full bg-transparent text-sm font-medium tracking-wide text-[#4a5568] placeholder-[#b8bec7] outline-none"
        />
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setShowPassword((v) => !v)}
          className="shrink-0 text-[#a0a8b4]"
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
        <button className="text-[11px] font-medium tracking-wide text-[#a0a8b4] transition-colors hover:text-[#6b7a8d]">
          Forgot password?
        </button>
      </div>

      {/* Log in button -- pill-shaped, extruded */}
      <motion.button
        whileTap={{
          scale: 0.98,
          boxShadow: inset,
        }}
        className="flex items-center justify-center gap-2.5 rounded-full bg-[#e0e5ec] px-7 py-4"
        style={{ boxShadow: extruded }}
      >
        <Lock size={14} className="text-red-600" strokeWidth={2.5} />
        <span className="text-sm font-bold tracking-wide text-red-600">
          Log in
        </span>
      </motion.button>

      {/* Divider */}
      <div className="flex items-center gap-3 px-2">
        <div
          className="h-[2px] flex-1 rounded-full bg-[#e0e5ec]"
          style={{ boxShadow: insetSm }}
        />
        <span className="text-[10px] font-medium text-[#b8bec7]">or</span>
        <div
          className="h-[2px] flex-1 rounded-full bg-[#e0e5ec]"
          style={{ boxShadow: insetSm }}
        />
      </div>

      {/* Sign up link */}
      <p className="text-center text-[11px] font-medium text-[#a0a8b4]">
        Don&apos;t have an account?{" "}
        <button className="font-semibold text-[#5a6370] transition-colors hover:text-[#4a5568]">
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="font-[family-name:var(--font-neu)] flex w-full max-w-sm flex-col gap-4 rounded-[24px] bg-[#e0e5ec] p-8"
      style={{ boxShadow: extruded, ...customStyle }}
    >
      {/* Label */}
      <p className="text-[10px] font-semibold tracking-[0.25em] text-[#a0a8b4] uppercase">
        Search
      </p>

      {/* Search bar */}
      <motion.div
        animate={{
          boxShadow: focused
            ? "inset 5px 5px 10px #b8bec7, inset -5px -5px 10px #ffffff"
            : inset,
        }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-3 rounded-full bg-[#e0e5ec] px-6 py-4"
      >
        <Search size={18} className="shrink-0 text-[#8a93a0]" strokeWidth={2} />
        <input
          type="text"
          placeholder="Search anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent text-sm font-medium tracking-wide text-[#4a5568] placeholder-[#b8bec7] outline-none"
        />
        {query && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.85 }}
            onClick={() => setQuery("")}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e0e5ec] text-[10px] font-bold text-[#a0a8b4]"
            style={{ boxShadow: extrudedXs }}
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
            whileTap={{ scale: 0.92, boxShadow: insetSm }}
            className="rounded-full bg-[#e0e5ec] px-4 py-2"
            style={{ boxShadow: idx === 0 ? insetSm : extrudedXs }}
          >
            <span
              className={`text-[11px] font-semibold tracking-wide ${
                idx === 0 ? "text-[#5a6370]" : "text-[#a0a8b4]"
              }`}
            >
              {label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Recent search suggestions */}
      <div className="flex flex-col gap-1 px-1">
        <p className="mb-1 text-[10px] font-medium tracking-wider text-[#b8bec7] uppercase">
          Recent
        </p>
        {["Dashboard design", "UI components"].map((item) => (
          <button
            key={item}
            className="flex items-center justify-between rounded-xl px-3 py-2 text-left transition-colors hover:bg-[#d8dde4]"
          >
            <span className="text-xs font-medium text-[#8a93a0]">{item}</span>
            <ArrowRight size={12} className="text-[#c8ced6]" />
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
