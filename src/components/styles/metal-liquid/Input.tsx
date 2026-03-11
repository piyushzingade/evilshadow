"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Mail } from "lucide-react";
import type { StyleComponentProps } from "@/types";

// ─── Shared Tokens ──────────────────────────────────────────────────────────
const rainbowGradient =
  "conic-gradient(from 0deg, #ff0000, #ff4400, #ff8800, #ffcc00, #ffff00, #88ff00, #00ff00, #00ff88, #00ffff, #0088ff, #0044ff, #0000ff, #4400ff, #8800ff, #cc00ff, #ff00cc, #ff0088, #ff0044, #ff0000)";

const chromeBezel =
  "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(160,160,170,0.2) 25%, rgba(80,80,90,0.1) 50%, rgba(140,140,150,0.2) 75%, rgba(200,200,210,0.3) 100%)";

// ─── Metal Input ────────────────────────────────────────────────────────────
function MetalInput({ customStyle }: { customStyle?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      {/* Chrome border wrapper */}
      <div
        className="rounded-xl p-[1px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(200,200,210,0.3) 0%, rgba(100,100,110,0.12) 35%, rgba(60,60,70,0.08) 65%, rgba(180,180,190,0.3) 100%)",
        }}
      >
        <div
          className="relative overflow-hidden rounded-xl bg-zinc-900"
          style={{
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.25)",
          }}
        >
          {/* Top-edge specular highlight */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.05) 50%, transparent 90%)",
            }}
          />

          <div className="flex items-center">
            {/* Icon area with metallic sphere */}
            <div className="flex shrink-0 items-center pl-4">
              <div
                className="flex h-7 w-7 items-center justify-center rounded-md"
                style={{
                  background:
                    "radial-gradient(ellipse at 35% 28%, rgba(80,80,90,0.4) 0%, rgba(25,25,30,0.9) 70%)",
                  boxShadow:
                    "inset 0 1px 1px rgba(255,255,255,0.06), 0 1px 3px rgba(0,0,0,0.25)",
                }}
              >
                <Mail className="h-3.5 w-3.5 text-zinc-500" />
              </div>
            </div>

            <input
              type="text"
              placeholder="Enter your email..."
              className="w-full bg-transparent px-3 py-3.5 text-sm font-light tracking-wide text-zinc-200 placeholder-zinc-600 outline-none transition-colors duration-300 focus:placeholder-zinc-500"
              style={customStyle}
            />
          </div>
        </div>
      </div>

      {/* Label beneath */}
      <p className="mt-2 pl-1 text-[11px] font-light text-zinc-700">
        We respect your privacy.
      </p>
    </motion.div>
  );
}

// ─── Search Input with Rainbow Glow ─────────────────────────────────────────
function SearchInput({ customStyle }: { customStyle?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-full"
    >
      {/* Rainbow refraction GLOW on focus (blurred outer halo) */}
      <div
        className="pointer-events-none absolute -inset-[3px] rounded-xl opacity-0 transition-opacity duration-500 group-focus-within:opacity-100"
        style={{
          background: rainbowGradient,
          filter: "blur(8px)",
        }}
      />

      {/* Rainbow refraction BORDER on focus (sharp) */}
      <div
        className="absolute -inset-[1.5px] rounded-xl opacity-0 transition-opacity duration-300 group-focus-within:opacity-100"
        style={{
          background: rainbowGradient,
        }}
      />

      {/* Chrome bezel on focus */}
      <div
        className="absolute -inset-[0.5px] rounded-xl opacity-0 transition-opacity duration-300 group-focus-within:opacity-100"
        style={{ background: chromeBezel }}
      />

      {/* Default chrome border surface */}
      <div
        className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-colors duration-300 group-focus-within:border-transparent"
        style={{
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)",
        }}
      >
        {/* Top-edge specular highlight */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 15%, rgba(255,255,255,0.04) 50%, transparent 85%)",
          }}
        />

        <div className="flex items-center">
          <Search className="ml-4 h-4 w-4 shrink-0 text-zinc-600 transition-colors duration-300 group-focus-within:text-zinc-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent px-3 py-3.5 text-sm font-light tracking-wide text-zinc-200 placeholder-zinc-600 outline-none transition-colors duration-300 focus:placeholder-zinc-500"
            style={customStyle}
          />

          {/* Keyboard shortcut hint */}
          <div className="mr-3 flex shrink-0 items-center gap-1">
            <kbd
              className="rounded border border-zinc-800 px-1.5 py-0.5 text-[10px] font-light text-zinc-600"
              style={{
                boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.2)",
              }}
            >
              /
            </kbd>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Exported Wrapper ───────────────────────────────────────────────────────
export default function Input({
  variant = "metal",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "search":
      return <SearchInput customStyle={customStyle} />;
    case "metal":
    default:
      return <MetalInput customStyle={customStyle} />;
  }
}
