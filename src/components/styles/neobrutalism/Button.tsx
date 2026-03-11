"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight, ExternalLink, Plus } from "lucide-react";
import type { StyleComponentProps } from "@/types";

// ---------------------------------------------------------------------------
// Neobrutalism Button
// Variants: "primary" | "secondary" | "pill"
// LOUD. BOLD. CHUNKY. Heavy borders, hard offset shadows, ALL CAPS.
// ---------------------------------------------------------------------------

function PrimaryButton({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.96, translateX: 2, translateY: 2 }}
      whileHover={{ translateX: 2, translateY: 2 }}
      className="inline-flex items-center gap-3 rounded-lg border-[3px] border-black bg-[#dc2626] px-8 py-4 font-[family-name:var(--font-brutalist)] text-base font-black uppercase tracking-[0.12em] text-white shadow-[4px_4px_0px_#000] transition-shadow hover:shadow-[2px_2px_0px_#000]"
      style={customStyle}
    >
      <span className="text-[15px]">SWITCH</span>
      <ArrowLeftRight size={22} strokeWidth={3} />
    </motion.button>
  );
}

function SecondaryButton({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.96, translateX: 2, translateY: 2 }}
      whileHover={{ translateX: 2, translateY: 2 }}
      className="inline-flex items-center gap-3 rounded-lg border-[3px] border-black bg-black px-8 py-4 font-[family-name:var(--font-brutalist)] text-base font-black uppercase tracking-[0.12em] text-white shadow-[4px_4px_0px_rgba(0,0,0,0.4)] transition-shadow hover:shadow-[2px_2px_0px_rgba(0,0,0,0.4)]"
      style={customStyle}
    >
      <span className="text-[15px]">EXPORT</span>
      <ExternalLink size={22} strokeWidth={3} />
    </motion.button>
  );
}

function PillButton({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  return (
    <div
      className="flex flex-col items-center gap-5 font-[family-name:var(--font-brutalist)]"
      style={customStyle}
    >
      {/* FAB circle button */}
      <motion.button
        whileTap={{ scale: 0.9, translateY: 2 }}
        whileHover={{ translateY: 2 }}
        className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-black bg-black shadow-[4px_4px_0px_#000] transition-shadow hover:shadow-[2px_2px_0px_#000]"
      >
        <Plus size={30} strokeWidth={3.5} className="text-white" />
      </motion.button>

      {/* Social pill bar */}
      <motion.div
        whileHover={{ translateY: -1 }}
        className="inline-flex items-center gap-3.5 rounded-full border-[3px] border-black bg-[#fde68a] px-5 py-3 shadow-[4px_4px_0px_#000]"
      >
        {/* X / Twitter icon */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-black bg-black text-sm font-black text-white transition-transform"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </motion.button>

        {/* Facebook */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-black bg-[#1877F2] text-base font-black text-white transition-transform"
        >
          f
        </motion.button>

        {/* Instagram */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-black bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] transition-transform"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle
              cx="17.5"
              cy="6.5"
              r="1.5"
              fill="white"
              stroke="none"
            />
          </svg>
        </motion.button>

        {/* Dribbble */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-black bg-[#ea4c89] transition-transform"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
          </svg>
        </motion.button>

        {/* LinkedIn */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-black bg-[#0A66C2] text-base font-black text-white transition-transform"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default function Button({
  variant = "primary",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "secondary":
      return <SecondaryButton customStyle={customStyle} />;
    case "pill":
      return <PillButton customStyle={customStyle} />;
    case "primary":
    default:
      return <PrimaryButton customStyle={customStyle} />;
  }
}
