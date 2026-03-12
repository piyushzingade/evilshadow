"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Check, Crown, Star, X } from "lucide-react";
import { useTheme } from "next-themes";
import type { StyleComponentProps } from "@/types";

// ---------------------------------------------------------------------------
// Claymorphism Card
// Variants: "dialog" | "notification" | "pricing"
//
// CORE TECHNIQUE  ── every surface is PUFFY, INFLATED clay:
//   outer:  dark-bottom-right + light-top-left drop shadows
//   inner:  bright top-left highlight + subtle dark bottom-right
//   press:  shadows invert (outer → inset)  → "pressed into clay"
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

const clayBtnRestingLight =
  "6px 6px 14px rgba(0,0,0,0.12), -4px -4px 10px rgba(255,255,255,0.7), inset 2px 2px 5px rgba(255,255,255,0.5), inset -2px -2px 4px rgba(0,0,0,0.07)";
const clayBtnRestingDark =
  "6px 6px 14px rgba(0,0,0,0.3), -4px -4px 10px rgba(255,255,255,0.05), inset 2px 2px 5px rgba(255,255,255,0.08), inset -2px -2px 4px rgba(0,0,0,0.15)";

const clayBtnPressedLight =
  "inset 4px 4px 10px rgba(0,0,0,0.14), inset -3px -3px 7px rgba(255,255,255,0.25), 1px 1px 2px rgba(0,0,0,0.06)";
const clayBtnPressedDark =
  "inset 4px 4px 10px rgba(0,0,0,0.3), inset -3px -3px 7px rgba(255,255,255,0.06), 1px 1px 2px rgba(0,0,0,0.12)";

const clayPillShadowLight =
  "4px 4px 10px rgba(0,0,0,0.1), -3px -3px 8px rgba(255,255,255,0.6), inset 2px 2px 4px rgba(255,255,255,0.45), inset -1px -1px 3px rgba(0,0,0,0.06)";
const clayPillShadowDark =
  "4px 4px 10px rgba(0,0,0,0.25), -3px -3px 8px rgba(255,255,255,0.04), inset 2px 2px 4px rgba(255,255,255,0.06), inset -1px -1px 3px rgba(0,0,0,0.12)";

const clayIconShadowLight =
  "4px 4px 10px rgba(0,0,0,0.14), -3px -3px 8px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(255,255,255,0.3), inset -1px -1px 3px rgba(0,0,0,0.1)";
const clayIconShadowDark =
  "4px 4px 10px rgba(0,0,0,0.3), -3px -3px 8px rgba(255,255,255,0.04), inset 2px 2px 4px rgba(255,255,255,0.06), inset -1px -1px 3px rgba(0,0,0,0.18)";

const clayCheckShadowLight =
  "3px 3px 7px rgba(0,0,0,0.09), -2px -2px 5px rgba(255,255,255,0.55), inset 1px 1px 2px rgba(255,255,255,0.5)";
const clayCheckShadowDark =
  "3px 3px 7px rgba(0,0,0,0.25), -2px -2px 5px rgba(255,255,255,0.04), inset 1px 1px 2px rgba(255,255,255,0.06)";

// ──────────────────────────────────────────────────────────────────────────────
//  Dialog Card  ── "Hey, Wait!!"
// ──────────────────────────────────────────────────────────────────────────────
function DialogCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [visible, setVisible] = useState(true);
  const { isDark } = useClayTheme();

  const clayCardOuter = isDark ? clayCardOuterDark : clayCardOuterLight;
  const clayBtnResting = isDark ? clayBtnRestingDark : clayBtnRestingLight;
  const clayBtnPressed = isDark ? clayBtnPressedDark : clayBtnPressedLight;

  const closeBtnShadow = isDark
    ? "4px 4px 10px rgba(0,0,0,0.3), -3px -3px 7px rgba(255,255,255,0.04), inset 2px 2px 4px rgba(255,255,255,0.06), inset -1px -1px 3px rgba(0,0,0,0.2)"
    : "4px 4px 10px rgba(0,0,0,0.16), -3px -3px 7px rgba(255,255,255,0.45), inset 2px 2px 4px rgba(255,255,255,0.3), inset -1px -1px 3px rgba(0,0,0,0.12)";

  const outlineBtnShadow = isDark
    ? "6px 6px 14px rgba(0,0,0,0.3), -4px -4px 10px rgba(255,255,255,0.04), inset 2px 2px 4px rgba(255,255,255,0.06), inset -1px -1px 3px rgba(0,0,0,0.12)"
    : "6px 6px 14px rgba(0,0,0,0.09), -4px -4px 10px rgba(255,255,255,0.65), inset 2px 2px 4px rgba(255,255,255,0.45), inset -1px -1px 3px rgba(0,0,0,0.05)";

  return (
    <AnimatePresence>
      {visible && (
        <div
          className={`font-[family-name:var(--font-clay)] w-full max-w-md rounded-[28px] p-2.5 ${isDark ? "bg-[#241e16]/60" : "bg-[#f0e8dc]/60"}`}
          style={customStyle}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className={`relative w-full rounded-[26px] px-8 pb-9 pt-7 ${isDark ? "bg-[#302a20]" : "bg-[#f7f2ea]"}`}
            style={{ boxShadow: clayCardOuter }}
          >
            {/* ── Close button (X) ── */}
            <motion.button
              whileTap={{ scale: 0.82, boxShadow: clayBtnPressed }}
              onClick={() => {
                setVisible(false);
                setTimeout(() => setVisible(true), 1200);
              }}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#b09878] text-white"
              style={{ boxShadow: closeBtnShadow }}
            >
              <X size={16} strokeWidth={3} />
            </motion.button>

            <div className="flex items-start gap-5">
              {/* ── Red 3D character (cube with X) ── */}
              <div className="flex shrink-0 flex-col items-center">
                <motion.div
                  initial={{ rotate: -6 }}
                  animate={{ rotate: [0, -3, 0, 3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex h-[120px] w-[100px] items-center justify-center rounded-[22px] bg-gradient-to-b from-[#ef6b6b] to-[#c93d3d]"
                  style={{
                    boxShadow:
                      "8px 8px 18px rgba(120,30,30,0.25), -4px -4px 12px rgba(255,160,160,0.35), inset 3px 3px 8px rgba(255,180,180,0.4), inset -2px -2px 6px rgba(100,20,20,0.2)",
                  }}
                >
                  {/* Face / X mark */}
                  <div className="flex flex-col items-center gap-1">
                    {/* Eyes */}
                    <div className="flex gap-4">
                      <div
                        className="h-4 w-4 rounded-full bg-white"
                        style={{
                          boxShadow: "inset 1px 1px 3px rgba(0,0,0,0.15), inset -1px -1px 2px rgba(255,255,255,0.4)",
                        }}
                      />
                      <div
                        className="h-4 w-4 rounded-full bg-white"
                        style={{
                          boxShadow: "inset 1px 1px 3px rgba(0,0,0,0.15), inset -1px -1px 2px rgba(255,255,255,0.4)",
                        }}
                      />
                    </div>
                    {/* X mark mouth */}
                    <X size={28} strokeWidth={3.5} className="mt-1 text-white/90 drop-shadow-sm" />
                  </div>
                  {/* Bottom puffy shadow to lift the character */}
                  <div className="absolute -bottom-2 left-3 right-3 h-4 rounded-full bg-black/8 blur-md" />
                </motion.div>
              </div>

              {/* ── Text content ── */}
              <div className="flex-1 pt-5">
                <h2 className={`mb-3 text-[26px] font-extrabold leading-tight ${isDark ? "text-[#d4c0a0]" : "text-[#8a6a40]"}`}>
                  Hey, Wait!!
                </h2>
                <p className={`text-[15px] leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Are you sure you want to leave this page without confirming your
                  order?
                </p>
              </div>
            </div>

            {/* ── Action buttons ── */}
            <div className="mt-7 flex gap-4 pl-[120px]">
              <motion.button
                whileTap={{ scale: 0.92, boxShadow: clayBtnPressed }}
                className={`flex-1 rounded-2xl px-5 py-3.5 text-sm font-bold ${isDark ? "bg-[#302a20] text-gray-300" : "bg-white text-gray-700"}`}
                style={{ boxShadow: clayBtnResting }}
              >
                Yes, Maybe Later
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.92, boxShadow: clayBtnPressed }}
                className={`flex-1 rounded-2xl border-2 px-5 py-3.5 text-sm font-bold text-[#8a6e48] ${isDark ? "border-[#5a4a38] bg-[#3a3228]" : "border-[#d8c8a8] bg-[#f5efe5]"}`}
                style={{ boxShadow: outlineBtnShadow }}
              >
                No, I Want to Stay
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
//  Notification Card  ── pink puffy notification
// ──────────────────────────────────────────────────────────────────────────────
function NotificationCard({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  const { isDark } = useClayTheme();

  const clayIconShadow = isDark ? clayIconShadowDark : clayIconShadowLight;
  const clayPillShadow = isDark ? clayPillShadowDark : clayPillShadowLight;
  const clayBtnPressed = isDark ? clayBtnPressedDark : clayBtnPressedLight;

  const cardShadow = isDark
    ? "10px 10px 22px rgba(0,0,0,0.3), -6px -6px 16px rgba(255,255,255,0.03), inset 3px 3px 6px rgba(255,255,255,0.06), inset -2px -2px 4px rgba(0,0,0,0.12)"
    : "10px 10px 22px rgba(180,100,120,0.15), -6px -6px 16px rgba(255,240,245,0.9), inset 3px 3px 6px rgba(255,245,248,0.7), inset -2px -2px 4px rgba(160,80,100,0.06)";

  const ctaShadow = isDark
    ? "6px 6px 14px rgba(0,0,0,0.3), -4px -4px 10px rgba(255,255,255,0.04), inset 3px 3px 6px rgba(255,200,215,0.1), inset -2px -2px 4px rgba(0,0,0,0.18)"
    : "6px 6px 14px rgba(180,80,110,0.2), -4px -4px 10px rgba(255,210,225,0.5), inset 3px 3px 6px rgba(255,200,215,0.4), inset -2px -2px 4px rgba(140,50,70,0.12)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileTap={{ scale: 0.97 }}
      className={`font-[family-name:var(--font-clay)] w-full max-w-xs rounded-[26px] p-6 ${isDark ? "bg-[#3a2028]" : "bg-[#fce4e9]"}`}
      style={{
        boxShadow: cardShadow,
        ...customStyle,
      }}
    >
      {/* Header row */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, -8, 8, -4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            className={`flex h-11 w-11 items-center justify-center rounded-[14px] ${isDark ? "bg-[#6a3040]" : "bg-[#f5b8c4]"}`}
            style={{ boxShadow: clayIconShadow }}
          >
            <Bell size={18} strokeWidth={2.5} className="text-[#c75070]" />
          </motion.div>
          <span className={`text-sm font-extrabold ${isDark ? "text-gray-200" : "text-gray-800"}`}>
            New Message
          </span>
        </div>
        <span
          className={`rounded-full px-3.5 py-1.5 text-[11px] font-bold text-[#b06078] ${isDark ? "bg-[#5a2838]" : "bg-[#f5c6d0]/60"}`}
          style={{ boxShadow: clayPillShadow }}
        >
          2m ago
        </span>
      </div>

      {/* Body */}
      <p className={`mb-5 text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
        You have a new notification waiting for you. Tap to view the full
        details and stay updated.
      </p>

      {/* CTA button */}
      <motion.button
        whileTap={{ scale: 0.92, boxShadow: clayBtnPressed }}
        className="w-full rounded-2xl bg-[#f0a0b4] py-3 text-sm font-bold text-white"
        style={{ boxShadow: ctaShadow }}
      >
        View Details
      </motion.button>
    </motion.div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
//  Pricing Card  ── blue clay pricing tier
// ──────────────────────────────────────────────────────────────────────────────
function PricingCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  const { isDark } = useClayTheme();

  const clayIconShadow = isDark ? clayIconShadowDark : clayIconShadowLight;
  const clayPillShadow = isDark ? clayPillShadowDark : clayPillShadowLight;
  const clayCheckShadow = isDark ? clayCheckShadowDark : clayCheckShadowLight;
  const clayBtnPressed = isDark ? clayBtnPressedDark : clayBtnPressedLight;

  const cardShadow = isDark
    ? "10px 10px 22px rgba(0,0,0,0.3), -6px -6px 16px rgba(255,255,255,0.03), inset 3px 3px 6px rgba(255,255,255,0.06), inset -2px -2px 5px rgba(0,0,0,0.12)"
    : "10px 10px 22px rgba(60,90,160,0.14), -6px -6px 16px rgba(230,240,255,0.9), inset 3px 3px 6px rgba(240,248,255,0.7), inset -2px -2px 5px rgba(60,80,140,0.06)";

  const ctaShadow = isDark
    ? "7px 7px 16px rgba(0,0,0,0.3), -4px -4px 10px rgba(255,255,255,0.04), inset 3px 3px 6px rgba(180,210,255,0.08), inset -2px -2px 4px rgba(0,0,0,0.18)"
    : "7px 7px 16px rgba(50,80,150,0.2), -4px -4px 10px rgba(200,220,255,0.4), inset 3px 3px 6px rgba(180,210,255,0.3), inset -2px -2px 4px rgba(40,60,120,0.12)";

  const features = [
    "Unlimited projects",
    "Priority support",
    "Custom domain",
    "Analytics dashboard",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileTap={{ scale: 0.97 }}
      className={`font-[family-name:var(--font-clay)] w-full max-w-xs rounded-[26px] p-7 ${isDark ? "bg-[#1e2840]" : "bg-[#dce8fc]"}`}
      style={{
        boxShadow: cardShadow,
        ...customStyle,
      }}
    >
      {/* Badge row */}
      <div className="mb-5 flex items-center gap-2.5">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-[12px] ${isDark ? "bg-[#2a3858]" : "bg-[#b8cdef]"}`}
          style={{ boxShadow: clayIconShadow }}
        >
          <Crown size={16} strokeWidth={2.5} className="text-[#4a6fa5]" />
        </div>
        <span
          className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4a6fa5] ${isDark ? "bg-[#2a3858]" : "bg-[#c2d5f5]"}`}
          style={{ boxShadow: clayPillShadow }}
        >
          Pro Plan
        </span>
      </div>

      {/* Price */}
      <p className={`mb-1 text-5xl font-extrabold ${isDark ? "text-gray-200" : "text-gray-800"}`}>
        $29
        <span className={`text-base font-semibold ${isDark ? "text-gray-400" : "text-gray-500"}`}>/mo</span>
      </p>
      <p className={`mb-6 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
        Everything you need to grow
      </p>

      {/* Feature list */}
      <ul className="mb-7 space-y-3.5">
        {features.map((feature) => (
          <li
            key={feature}
            className={`flex items-center gap-3 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${isDark ? "bg-[#2a3858]" : "bg-[#c2d5f5]"}`}
              style={{ boxShadow: clayCheckShadow }}
            >
              <Check size={13} strokeWidth={3} className="text-[#4a6fa5]" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.button
        whileTap={{ scale: 0.92, boxShadow: clayBtnPressed }}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#6b8fd4] py-3.5 text-sm font-bold text-white"
        style={{ boxShadow: ctaShadow }}
      >
        <Star size={15} strokeWidth={2.5} />
        Get Started
      </motion.button>
    </motion.div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
//  Export
// ──────────────────────────────────────────────────────────────────────────────
export default function Card({
  variant = "dialog",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "notification":
      return <NotificationCard customStyle={customStyle} />;
    case "pricing":
      return <PricingCard customStyle={customStyle} />;
    case "dialog":
    default:
      return <DialogCard customStyle={customStyle} />;
  }
}
