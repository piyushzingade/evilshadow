"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Pencil, Send, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import type { StyleComponentProps } from "@/types";

// ---------------------------------------------------------------------------
// Claymorphism Input
// Variants: "rounded" | "select"
//
// CORE TECHNIQUE  ── inputs are SUNKEN into clay (inverted from buttons):
//   input fields:  dominant inset shadows = carved / pressed into the surface
//   card frame:    outer puff + inset highlight = the puffy clay card shell
//   submit btn:    standard puff with whileTap inversion
// ---------------------------------------------------------------------------

/* ─── dark-mode-aware hook ─── */
function useClayTheme() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  return { isDark };
}

/* ─── Shadow library (light / dark) ─── */

const clayCardOuterLight =
  "12px 12px 24px rgba(0,0,0,0.12), -6px -6px 18px rgba(255,255,255,0.85), inset 3px 3px 6px rgba(255,255,255,0.65), inset -2px -2px 5px rgba(0,0,0,0.07)";
const clayCardOuterDark =
  "12px 12px 24px rgba(0,0,0,0.3), -6px -6px 18px rgba(255,255,255,0.05), inset 3px 3px 6px rgba(255,255,255,0.08), inset -2px -2px 5px rgba(0,0,0,0.15)";

const claySunkenInputLight =
  "inset 5px 5px 12px rgba(0,0,0,0.09), inset -3px -3px 8px rgba(255,255,255,0.65), 2px 2px 6px rgba(0,0,0,0.04), -2px -2px 5px rgba(255,255,255,0.4)";
const claySunkenInputDark =
  "inset 5px 5px 12px rgba(0,0,0,0.2), inset -3px -3px 8px rgba(255,255,255,0.06), 2px 2px 6px rgba(0,0,0,0.08), -2px -2px 5px rgba(255,255,255,0.03)";

const clayHeaderInsetLight =
  "inset 3px 3px 8px rgba(255,255,255,0.55), inset -2px -2px 5px rgba(0,0,0,0.06), 4px 4px 10px rgba(0,0,0,0.06), -3px -3px 8px rgba(255,255,255,0.4)";
const clayHeaderInsetDark =
  "inset 3px 3px 8px rgba(255,255,255,0.06), inset -2px -2px 5px rgba(0,0,0,0.15), 4px 4px 10px rgba(0,0,0,0.15), -3px -3px 8px rgba(255,255,255,0.03)";

const clayIconShadowLight =
  "4px 4px 10px rgba(0,0,0,0.14), -3px -3px 8px rgba(255,255,255,0.45), inset 2px 2px 4px rgba(255,255,255,0.3), inset -1px -1px 3px rgba(0,0,0,0.1)";
const clayIconShadowDark =
  "4px 4px 10px rgba(0,0,0,0.3), -3px -3px 8px rgba(255,255,255,0.04), inset 2px 2px 4px rgba(255,255,255,0.06), inset -1px -1px 3px rgba(0,0,0,0.18)";

const clayBtnDarkLight =
  "6px 6px 14px rgba(0,0,0,0.18), -4px -4px 10px rgba(255,255,255,0.35), inset 2px 2px 5px rgba(255,255,255,0.15), inset -2px -2px 4px rgba(0,0,0,0.15)";
const clayBtnDarkDark =
  "6px 6px 14px rgba(0,0,0,0.35), -4px -4px 10px rgba(255,255,255,0.04), inset 2px 2px 5px rgba(255,255,255,0.06), inset -2px -2px 4px rgba(0,0,0,0.2)";

const clayBtnPressedLight =
  "inset 4px 4px 12px rgba(0,0,0,0.2), inset -3px -3px 7px rgba(255,255,255,0.15), 1px 1px 2px rgba(0,0,0,0.06)";
const clayBtnPressedDark =
  "inset 4px 4px 12px rgba(0,0,0,0.35), inset -3px -3px 7px rgba(255,255,255,0.04), 1px 1px 2px rgba(0,0,0,0.12)";

const claySelectShadowLight =
  "inset 5px 5px 12px rgba(0,0,0,0.08), inset -3px -3px 8px rgba(255,255,255,0.6), 3px 3px 8px rgba(0,0,0,0.05), -2px -2px 6px rgba(255,255,255,0.4)";
const claySelectShadowDark =
  "inset 5px 5px 12px rgba(0,0,0,0.2), inset -3px -3px 8px rgba(255,255,255,0.05), 3px 3px 8px rgba(0,0,0,0.1), -2px -2px 6px rgba(255,255,255,0.03)";

const claySelectCardShadowLight =
  "10px 10px 22px rgba(80,60,140,0.12), -6px -6px 16px rgba(240,235,255,0.85), inset 3px 3px 6px rgba(245,240,255,0.6), inset -2px -2px 5px rgba(80,60,120,0.06)";
const claySelectCardShadowDark =
  "10px 10px 22px rgba(0,0,0,0.3), -6px -6px 16px rgba(255,255,255,0.03), inset 3px 3px 6px rgba(255,255,255,0.06), inset -2px -2px 5px rgba(0,0,0,0.12)";

const clayOptionShadowLight =
  "4px 4px 10px rgba(0,0,0,0.08), -3px -3px 8px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(255,255,255,0.4), inset -1px -1px 3px rgba(0,0,0,0.05)";
const clayOptionShadowDark =
  "4px 4px 10px rgba(0,0,0,0.25), -3px -3px 8px rgba(255,255,255,0.04), inset 2px 2px 4px rgba(255,255,255,0.06), inset -1px -1px 3px rgba(0,0,0,0.12)";

const clayCharCountLight =
  "2px 2px 5px rgba(0,0,0,0.06), -1px -1px 3px rgba(255,255,255,0.5), inset 1px 1px 2px rgba(255,255,255,0.4)";
const clayCharCountDark =
  "2px 2px 5px rgba(0,0,0,0.15), -1px -1px 3px rgba(255,255,255,0.04), inset 1px 1px 2px rgba(255,255,255,0.06)";

// ──────────────────────────────────────────────────────────────────────────────
//  Rounded Input  ── phone-frame form card (matching reference)
// ──────────────────────────────────────────────────────────────────────────────
function RoundedInput({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [text, setText] = useState("");
  const { isDark } = useClayTheme();

  const clayCardOuter = isDark ? clayCardOuterDark : clayCardOuterLight;
  const claySunkenInput = isDark ? claySunkenInputDark : claySunkenInputLight;
  const clayHeaderInset = isDark ? clayHeaderInsetDark : clayHeaderInsetLight;
  const clayIconShadow = isDark ? clayIconShadowDark : clayIconShadowLight;
  const clayBtnDark = isDark ? clayBtnDarkDark : clayBtnDarkLight;
  const clayBtnPressed = isDark ? clayBtnPressedDark : clayBtnPressedLight;
  const charCountShadow = isDark ? clayCharCountDark : clayCharCountLight;

  const cardGradient = isDark
    ? "linear-gradient(160deg, #2a2035 0%, #252040 50%, #2e2530 100%)"
    : "linear-gradient(160deg, #f5e6f0 0%, #e8ddf5 50%, #fce4d6 100%)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="font-[family-name:var(--font-clay)] w-full max-w-xs"
    >
      {/* Phone / card frame with pastel gradient */}
      <div
        className="overflow-hidden rounded-[28px] border-[3px] border-[#9b8ec4]"
        style={{
          boxShadow: clayCardOuter,
          background: cardGradient,
          ...customStyle,
        }}
      >
        {/* ── Mint / turquoise header area ── */}
        <div
          className={`mx-3.5 mt-3.5 rounded-[20px] px-6 py-7 text-center ${isDark ? "bg-[#1e3830]" : "bg-[#c4ede0]"}`}
          style={{ boxShadow: clayHeaderInset }}
        >
          {/* Purple icon */}
          <motion.div
            animate={{ rotate: [0, -5, 5, -3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
            className="mx-auto mb-3.5 flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#9b8ec4]"
            style={{ boxShadow: clayIconShadow }}
          >
            <Pencil size={16} strokeWidth={2.5} className="text-white" />
          </motion.div>
          <p className={`text-[15px] font-extrabold leading-snug ${isDark ? "text-gray-200" : "text-gray-800"}`}>
            Where did you feel most like yourself recently?
          </p>
        </div>

        {/* ── White content area ── */}
        <div className="px-4 pb-5 pt-4">
          {/* Textarea -- sunken clay input */}
          <div className="relative">
            <textarea
              placeholder="type here ..."
              rows={5}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className={`w-full resize-none rounded-[18px] border-none px-5 py-4 text-sm placeholder-gray-400 outline-none ${isDark ? "bg-[#2a2540]/90 text-gray-200" : "bg-white/90 text-gray-800"}`}
              style={{ boxShadow: claySunkenInput }}
            />
            {/* Character count pill */}
            <span
              className={`absolute bottom-3 right-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-gray-400 ${isDark ? "bg-[#352e50]" : "bg-[#f0eef6]"}`}
              style={{ boxShadow: charCountShadow }}
            >
              {text.length}/500
            </span>
          </div>

          {/* Submit button -- dark, puffy */}
          <motion.button
            whileTap={{ scale: 0.93, boxShadow: clayBtnPressed }}
            className="mt-3.5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 py-3.5 text-sm font-bold text-white"
            style={{ boxShadow: clayBtnDark }}
          >
            <Send size={14} strokeWidth={2.5} />
            Submit
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
//  Select Input  ── clay-styled dropdown select
// ──────────────────────────────────────────────────────────────────────────────
function SelectInput({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const { isDark } = useClayTheme();

  const claySelectCardShadow = isDark ? claySelectCardShadowDark : claySelectCardShadowLight;
  const claySelectShadow = isDark ? claySelectShadowDark : claySelectShadowLight;
  const clayOptionShadow = isDark ? clayOptionShadowDark : clayOptionShadowLight;
  const clayBtnPressed = isDark ? clayBtnPressedDark : clayBtnPressedLight;

  const options = [
    { value: "design", label: "Design" },
    { value: "develop", label: "Develop" },
    { value: "deploy", label: "Deploy" },
    { value: "iterate", label: "Iterate" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="font-[family-name:var(--font-clay)] w-full max-w-xs"
      style={customStyle}
    >
      {/* Card wrapper for context */}
      <div
        className={`rounded-[24px] p-5 ${isDark ? "bg-[#2a2540]" : "bg-[#f0edf8]"}`}
        style={{ boxShadow: claySelectCardShadow }}
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#9b8ec4]">
          Choose a phase
        </p>

        {/* Custom select trigger */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => setOpen((v) => !v)}
          className={`flex w-full items-center justify-between rounded-[16px] px-5 py-4 text-sm font-semibold outline-none ${isDark ? "bg-[#352e50] text-gray-300" : "bg-[#e8ddf5] text-gray-700"}`}
          style={{ boxShadow: claySelectShadow }}
        >
          <span className={selected ? (isDark ? "text-gray-200" : "text-gray-800") : "text-gray-400"}>
            {selected
              ? options.find((o) => o.value === selected)?.label
              : "Choose an option"}
          </span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronDown size={18} strokeWidth={2.5} className="text-[#9b8ec4]" />
          </motion.div>
        </motion.button>

        {/* Dropdown options */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mt-3 flex flex-col gap-2"
          >
            {options.map((option) => (
              <motion.button
                key={option.value}
                whileTap={{ scale: 0.96, boxShadow: clayBtnPressed }}
                onClick={() => {
                  setSelected(option.value);
                  setOpen(false);
                }}
                className={`w-full rounded-[14px] px-5 py-3 text-left text-sm font-semibold transition-colors ${
                  selected === option.value
                    ? "bg-[#9b8ec4] text-white"
                    : isDark
                      ? "bg-[#352e50]/80 text-gray-300"
                      : "bg-white/80 text-gray-700"
                }`}
                style={{ boxShadow: clayOptionShadow }}
              >
                {option.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
//  Export
// ──────────────────────────────────────────────────────────────────────────────
export default function Input({
  variant = "rounded",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "select":
      return <SelectInput customStyle={customStyle} />;
    case "rounded":
    default:
      return <RoundedInput customStyle={customStyle} />;
  }
}
