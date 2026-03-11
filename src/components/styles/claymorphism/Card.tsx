"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Check, Crown, Star, X } from "lucide-react";
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

/* ─── Shadow library ─── */

const clayCardOuter =
  "12px 12px 24px rgba(0,0,0,0.12), -6px -6px 18px rgba(255,255,255,0.85), inset 3px 3px 6px rgba(255,255,255,0.65), inset -2px -2px 5px rgba(0,0,0,0.07)";

const clayBtnResting =
  "6px 6px 14px rgba(0,0,0,0.12), -4px -4px 10px rgba(255,255,255,0.7), inset 2px 2px 5px rgba(255,255,255,0.5), inset -2px -2px 4px rgba(0,0,0,0.07)";

const clayBtnPressed =
  "inset 4px 4px 10px rgba(0,0,0,0.14), inset -3px -3px 7px rgba(255,255,255,0.25), 1px 1px 2px rgba(0,0,0,0.06)";

const clayPillShadow =
  "4px 4px 10px rgba(0,0,0,0.1), -3px -3px 8px rgba(255,255,255,0.6), inset 2px 2px 4px rgba(255,255,255,0.45), inset -1px -1px 3px rgba(0,0,0,0.06)";

const clayIconShadow =
  "4px 4px 10px rgba(0,0,0,0.14), -3px -3px 8px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(255,255,255,0.3), inset -1px -1px 3px rgba(0,0,0,0.1)";

const clayCheckShadow =
  "3px 3px 7px rgba(0,0,0,0.09), -2px -2px 5px rgba(255,255,255,0.55), inset 1px 1px 2px rgba(255,255,255,0.5)";

// ──────────────────────────────────────────────────────────────────────────────
//  Dialog Card  ── "Hey, Wait!!"
// ──────────────────────────────────────────────────────────────────────────────
function DialogCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <div
          className="font-[family-name:var(--font-clay)] w-full max-w-md rounded-[28px] bg-[#e0daf0]/60 p-2.5"
          style={customStyle}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative w-full rounded-[26px] bg-[#f2eff8] px-8 pb-9 pt-7"
            style={{ boxShadow: clayCardOuter }}
          >
            {/* ── Close button (X) ── */}
            <motion.button
              whileTap={{ scale: 0.82, boxShadow: clayBtnPressed }}
              onClick={() => {
                setVisible(false);
                setTimeout(() => setVisible(true), 1200);
              }}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#9b8ec4] text-white"
              style={{
                boxShadow:
                  "4px 4px 10px rgba(0,0,0,0.16), -3px -3px 7px rgba(255,255,255,0.45), inset 2px 2px 4px rgba(255,255,255,0.3), inset -1px -1px 3px rgba(0,0,0,0.12)",
              }}
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
                <h2 className="mb-3 text-[26px] font-extrabold leading-tight text-[#5b4ba0]">
                  Hey, Wait!!
                </h2>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  Are you sure you want to leave this page without confirming your
                  order?
                </p>
              </div>
            </div>

            {/* ── Action buttons ── */}
            <div className="mt-7 flex gap-4 pl-[120px]">
              <motion.button
                whileTap={{ scale: 0.92, boxShadow: clayBtnPressed }}
                className="flex-1 rounded-2xl bg-white px-5 py-3.5 text-sm font-bold text-gray-700"
                style={{ boxShadow: clayBtnResting }}
              >
                Yes, Maybe Later
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.92, boxShadow: clayBtnPressed }}
                className="flex-1 rounded-2xl border-2 border-[#c4b8e0] bg-[#ece8f5] px-5 py-3.5 text-sm font-bold text-[#6b5ea0]"
                style={{
                  boxShadow:
                    "6px 6px 14px rgba(0,0,0,0.09), -4px -4px 10px rgba(255,255,255,0.65), inset 2px 2px 4px rgba(255,255,255,0.45), inset -1px -1px 3px rgba(0,0,0,0.05)",
                }}
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileTap={{ scale: 0.97 }}
      className="font-[family-name:var(--font-clay)] w-full max-w-xs rounded-[26px] bg-[#fce4e9] p-6"
      style={{
        boxShadow:
          "10px 10px 22px rgba(180,100,120,0.15), -6px -6px 16px rgba(255,240,245,0.9), inset 3px 3px 6px rgba(255,245,248,0.7), inset -2px -2px 4px rgba(160,80,100,0.06)",
        ...customStyle,
      }}
    >
      {/* Header row */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, -8, 8, -4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#f5b8c4]"
            style={{ boxShadow: clayIconShadow }}
          >
            <Bell size={18} strokeWidth={2.5} className="text-[#c75070]" />
          </motion.div>
          <span className="text-sm font-extrabold text-gray-800">
            New Message
          </span>
        </div>
        <span
          className="rounded-full bg-[#f5c6d0]/60 px-3.5 py-1.5 text-[11px] font-bold text-[#b06078]"
          style={{ boxShadow: clayPillShadow }}
        >
          2m ago
        </span>
      </div>

      {/* Body */}
      <p className="mb-5 text-sm leading-relaxed text-gray-600">
        You have a new notification waiting for you. Tap to view the full
        details and stay updated.
      </p>

      {/* CTA button */}
      <motion.button
        whileTap={{ scale: 0.92, boxShadow: clayBtnPressed }}
        className="w-full rounded-2xl bg-[#f0a0b4] py-3 text-sm font-bold text-white"
        style={{
          boxShadow:
            "6px 6px 14px rgba(180,80,110,0.2), -4px -4px 10px rgba(255,210,225,0.5), inset 3px 3px 6px rgba(255,200,215,0.4), inset -2px -2px 4px rgba(140,50,70,0.12)",
        }}
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
      className="font-[family-name:var(--font-clay)] w-full max-w-xs rounded-[26px] bg-[#dce8fc] p-7"
      style={{
        boxShadow:
          "10px 10px 22px rgba(60,90,160,0.14), -6px -6px 16px rgba(230,240,255,0.9), inset 3px 3px 6px rgba(240,248,255,0.7), inset -2px -2px 5px rgba(60,80,140,0.06)",
        ...customStyle,
      }}
    >
      {/* Badge row */}
      <div className="mb-5 flex items-center gap-2.5">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#b8cdef]"
          style={{ boxShadow: clayIconShadow }}
        >
          <Crown size={16} strokeWidth={2.5} className="text-[#4a6fa5]" />
        </div>
        <span
          className="rounded-full bg-[#c2d5f5] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4a6fa5]"
          style={{ boxShadow: clayPillShadow }}
        >
          Pro Plan
        </span>
      </div>

      {/* Price */}
      <p className="mb-1 text-5xl font-extrabold text-gray-800">
        $29
        <span className="text-base font-semibold text-gray-500">/mo</span>
      </p>
      <p className="mb-6 text-sm text-gray-500">
        Everything you need to grow
      </p>

      {/* Feature list */}
      <ul className="mb-7 space-y-3.5">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-sm text-gray-700"
          >
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c2d5f5]"
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
        style={{
          boxShadow:
            "7px 7px 16px rgba(50,80,150,0.2), -4px -4px 10px rgba(200,220,255,0.4), inset 3px 3px 6px rgba(180,210,255,0.3), inset -2px -2px 4px rgba(40,60,120,0.12)",
        }}
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
