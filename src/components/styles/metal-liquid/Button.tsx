"use client";

import React from "react";
import { motion } from "framer-motion";
import { MousePointer2, Settings, ArrowRight, Hexagon } from "lucide-react";
import type { StyleComponentProps } from "@/types";

// ─── Shared Tokens ──────────────────────────────────────────────────────────
const rainbowGradient =
  "conic-gradient(from 0deg, #ff0000, #ff4400, #ff8800, #ffcc00, #ffff00, #88ff00, #00ff00, #00ff88, #00ffff, #0088ff, #0044ff, #0000ff, #4400ff, #8800ff, #cc00ff, #ff00cc, #ff0088, #ff0044, #ff0000)";

const chromeBezel =
  "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(220,220,230,0.35) 18%, rgba(180,180,190,0.2) 32%, rgba(60,60,70,0.35) 55%, rgba(140,140,150,0.3) 75%, rgba(200,200,210,0.5) 100%)";

const metallicSphere =
  "radial-gradient(ellipse at 35% 28%, rgba(110,110,120,0.65) 0%, rgba(60,60,65,0.35) 35%, rgba(30,30,35,1) 70%)";

const sphereShadow =
  "inset 0 1px 3px rgba(255,255,255,0.12), inset 0 -2px 4px rgba(0,0,0,0.35), 0 0 10px rgba(0,0,0,0.5)";

// ─── Chrome Submit Button ───────────────────────────────────────────────────
function ChromeButton({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block"
    >
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="relative cursor-pointer"
      >
        {/* Outer rainbow refraction border */}
        <div
          className="rounded-full p-[2px]"
          style={{
            background: rainbowGradient,
            ...customStyle,
          }}
        >
          {/* Chrome / silver inner bezel */}
          <div
            className="rounded-full p-[1.5px]"
            style={{ background: chromeBezel }}
          >
            {/* Inner dark body */}
            <div
              className="relative flex items-center gap-4 overflow-hidden rounded-full bg-zinc-900 py-3 pl-3 pr-8"
              style={{
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {/* Subtle surface light streak */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 15%, rgba(255,255,255,0.06) 50%, transparent 85%)",
                }}
              />

              {/* Circular metallic icon area */}
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                style={{
                  background: metallicSphere,
                  boxShadow: sphereShadow,
                }}
              >
                <MousePointer2
                  className="h-5 w-5 text-zinc-300"
                  style={{
                    filter: "drop-shadow(0 0 3px rgba(200,200,220,0.35))",
                  }}
                />
              </div>

              {/* Submit label */}
              <span className="font-[family-name:var(--font-metal)] text-lg font-light tracking-wider text-zinc-300">
                Submit
              </span>
            </div>
          </div>
        </div>

        {/* Subtle ambient glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            boxShadow:
              "0 0 22px 3px rgba(120,80,200,0.12), 0 0 44px 6px rgba(80,120,220,0.07)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

// ─── Icon Button ────────────────────────────────────────────────────────────
function IconButton({ customStyle }: { customStyle?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center gap-5"
    >
      {/* Primary icon with rainbow rim */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        className="relative cursor-pointer"
      >
        {/* Rainbow refraction border */}
        <div
          className="rounded-full p-[2px]"
          style={{
            background: rainbowGradient,
            ...customStyle,
          }}
        >
          {/* Chrome bezel */}
          <div
            className="rounded-full p-[1px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(120,120,130,0.18) 45%, rgba(200,200,210,0.4) 100%)",
            }}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900"
              style={{
                boxShadow:
                  "inset 0 1px 2px rgba(255,255,255,0.06), inset 0 -1px 1px rgba(0,0,0,0.2)",
              }}
            >
              <Settings
                className="h-5 w-5 text-zinc-300"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(200,200,220,0.25))",
                }}
              />
            </div>
          </div>
        </div>

        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            boxShadow: "0 0 18px 2px rgba(120,80,200,0.12)",
          }}
        />
      </motion.div>

      {/* Secondary icon with chrome-only rim */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
        className="relative cursor-pointer"
      >
        <div
          className="rounded-full p-[1.5px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(200,200,210,0.35) 0%, rgba(80,80,90,0.12) 50%, rgba(180,180,190,0.3) 100%)",
          }}
        >
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900"
            style={{
              boxShadow: "inset 0 1px 2px rgba(255,255,255,0.05)",
            }}
          >
            <Hexagon className="h-4.5 w-4.5 text-zinc-400" />
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            boxShadow: "0 0 12px 1px rgba(100,80,180,0.08)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

// ─── Gradient Edge Button ───────────────────────────────────────────────────
function GradientButton({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block"
    >
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="relative cursor-pointer"
      >
        {/* Gradient-to-transparent border */}
        <div
          className="rounded-xl p-[1.5px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(168,85,247,0.8) 0%, rgba(99,102,241,0.6) 30%, rgba(59,130,246,0.45) 55%, rgba(6,182,212,0.2) 80%, transparent 100%)",
            ...customStyle,
          }}
        >
          <div
            className="relative flex items-center gap-2.5 overflow-hidden rounded-xl bg-zinc-900 px-7 py-3"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
            }}
          >
            {/* Surface streak */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, rgba(168,85,247,0.15) 0%, rgba(255,255,255,0.04) 40%, transparent 100%)",
              }}
            />

            <span className="relative z-10 text-sm font-light tracking-wider text-zinc-300">
              Get Started
            </span>
            <ArrowRight className="relative z-10 h-4 w-4 text-zinc-400" />
          </div>
        </div>

        {/* Glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            boxShadow:
              "0 0 20px 2px rgba(139,92,246,0.1), 0 0 40px 4px rgba(99,102,241,0.05)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

// ─── Exported Wrapper ───────────────────────────────────────────────────────
export default function Button({
  variant = "chrome",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "icon":
      return <IconButton customStyle={customStyle} />;
    case "gradient":
      return <GradientButton customStyle={customStyle} />;
    case "chrome":
    default:
      return <ChromeButton customStyle={customStyle} />;
  }
}
