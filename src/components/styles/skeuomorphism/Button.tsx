"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, Menu } from "lucide-react";
import { StyleComponentProps } from "@/types";

// ---- Push variant ----
// Physically raised white buttons with realistic depth - home, menu, and figma-like icons
// Multi-layer shadows create the illusion of buttons extruding from a surface
function PushButton({ customStyle }: { customStyle?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex items-center gap-5"
      style={{ fontFamily: "Inter, system-ui, sans-serif", ...customStyle }}
    >
      {/* Home button - raised rounded square */}
      <motion.button
        whileTap={{
          y: 3,
          boxShadow:
            "0 1px 2px rgba(0,0,0,0.08), 0 0.5px 1px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.03)",
        }}
        transition={{ type: "spring", stiffness: 600, damping: 35 }}
        className="relative w-[72px] h-[72px] rounded-[18px] cursor-pointer select-none focus:outline-none"
        style={{
          background:
            "linear-gradient(145deg, #ffffff 0%, #f8f8fa 25%, #f0f0f3 50%, #eaeaee 75%, #e4e4e9 100%)",
          boxShadow: [
            "0 8px 20px rgba(0,0,0,0.13)",
            "0 3px 8px rgba(0,0,0,0.09)",
            "0 1px 3px rgba(0,0,0,0.06)",
            "inset 0 1px 0 rgba(255,255,255,0.95)",
            "inset 0 -1px 2px rgba(0,0,0,0.04)",
          ].join(", "),
          border: "1px solid rgba(0,0,0,0.04)",
        }}
      >
        {/* Inner subtle highlight for top-light illusion */}
        <div
          className="absolute inset-0 rounded-[17px] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 40%)",
          }}
        />
        <div className="flex items-center justify-center w-full h-full relative z-10">
          <Home
            className="w-7 h-7 text-blue-400"
            strokeWidth={2}
            style={{
              filter: "drop-shadow(0 1px 2px rgba(59,130,246,0.25))",
            }}
          />
        </div>
      </motion.button>

      {/* Menu button - raised rounded square */}
      <motion.button
        whileTap={{
          y: 3,
          boxShadow:
            "0 1px 2px rgba(0,0,0,0.08), 0 0.5px 1px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.03)",
        }}
        transition={{ type: "spring", stiffness: 600, damping: 35 }}
        className="relative w-[72px] h-[72px] rounded-[18px] cursor-pointer select-none focus:outline-none"
        style={{
          background:
            "linear-gradient(145deg, #ffffff 0%, #f8f8fa 25%, #f0f0f3 50%, #eaeaee 75%, #e4e4e9 100%)",
          boxShadow: [
            "0 8px 20px rgba(0,0,0,0.13)",
            "0 3px 8px rgba(0,0,0,0.09)",
            "0 1px 3px rgba(0,0,0,0.06)",
            "inset 0 1px 0 rgba(255,255,255,0.95)",
            "inset 0 -1px 2px rgba(0,0,0,0.04)",
          ].join(", "),
          border: "1px solid rgba(0,0,0,0.04)",
        }}
      >
        <div
          className="absolute inset-0 rounded-[17px] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 40%)",
          }}
        />
        <div className="flex items-center justify-center w-full h-full relative z-10">
          <Menu
            className="w-7 h-7 text-emerald-500"
            strokeWidth={2.5}
            style={{
              filter: "drop-shadow(0 1px 2px rgba(16,185,129,0.25))",
            }}
          />
        </div>
      </motion.button>

      {/* Figma-like button - raised circle */}
      <motion.button
        whileTap={{
          y: 3,
          boxShadow:
            "0 1px 2px rgba(0,0,0,0.08), 0 0.5px 1px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.03)",
        }}
        transition={{ type: "spring", stiffness: 600, damping: 35 }}
        className="relative w-[72px] h-[72px] rounded-full cursor-pointer select-none focus:outline-none"
        style={{
          background:
            "radial-gradient(circle at 45% 38%, #ffffff 0%, #f8f8fa 20%, #f0f0f3 45%, #eaeaee 65%, #e2e2e8 85%, #dcdce2 100%)",
          boxShadow: [
            "0 8px 20px rgba(0,0,0,0.13)",
            "0 3px 8px rgba(0,0,0,0.09)",
            "0 1px 3px rgba(0,0,0,0.06)",
            "inset 0 2px 0 rgba(255,255,255,0.8)",
            "inset 0 -2px 4px rgba(0,0,0,0.05)",
          ].join(", "),
          border: "1px solid rgba(0,0,0,0.04)",
        }}
      >
        {/* Spherical highlight for round button */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 42% 30%, rgba(255,255,255,0.6) 0%, transparent 55%)",
          }}
        />
        <div className="flex items-center justify-center w-full h-full relative z-10">
          {/* Figma logo SVG */}
          <svg
            width="24"
            height="32"
            viewBox="0 0 24 32"
            fill="none"
            style={{
              filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.1))",
            }}
          >
            <rect x="0" y="0" width="12" height="10" rx="5" fill="#F24E1E" />
            <rect x="12" y="0" width="12" height="10" rx="5" fill="#FF7262" />
            <rect x="0" y="11" width="12" height="10" rx="5" fill="#A259FF" />
            <circle cx="18" cy="16" r="5" fill="#1ABCFE" />
            <rect x="0" y="22" width="12" height="10" rx="5" fill="#0ACF83" />
          </svg>
        </div>
      </motion.button>
    </motion.div>
  );
}

// ---- Toggle variant ----
// HERO PIECE: Realistic dark metallic ON/OFF toggle switch
// Brushed metal frame with 5-stop gradient, dark recessed track, embossed text,
// spherical metallic knob with specular highlight and radial gradient
function ToggleButton({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [isOn, setIsOn] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center gap-5 p-8 rounded-2xl"
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        background:
          "linear-gradient(180deg, #0c0c0c 0%, #111111 30%, #161616 60%, #1a1a1a 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 3px rgba(0,0,0,0.4)",
        ...customStyle,
      }}
    >
      {/* Toggle switch */}
      <button
        onClick={() => setIsOn(!isOn)}
        className="relative cursor-pointer focus:outline-none select-none"
        style={{ width: 128, height: 56 }}
      >
        {/* Outer metallic frame - brushed metal with 6-stop gradient for realism */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(180deg, #8e8e94 0%, #6a6a72 15%, #4a4a52 35%, #3a3a42 55%, #505058 80%, #7a7a82 100%)",
            boxShadow: [
              "0 6px 16px rgba(0,0,0,0.65)",
              "0 2px 6px rgba(0,0,0,0.45)",
              "0 1px 2px rgba(0,0,0,0.3)",
              "inset 0 1px 0 rgba(255,255,255,0.18)",
              "inset 0 -0.5px 0 rgba(0,0,0,0.3)",
            ].join(", "),
          }}
        >
          {/* Brushed metal texture overlay - horizontal grain */}
          <div
            className="absolute inset-0 rounded-full opacity-[0.08]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px)",
            }}
          />
        </div>

        {/* Inner recessed track - dark depression with beveled edge */}
        <div
          className="absolute rounded-full"
          style={{
            top: 5,
            left: 5,
            right: 5,
            bottom: 5,
            background: isOn
              ? "linear-gradient(180deg, #4a4a52 0%, #3e3e46 15%, #32323a 35%, #28282e 55%, #2e2e36 80%, #38383e 100%)"
              : "linear-gradient(180deg, #3a3a42 0%, #2e2e36 15%, #22222a 35%, #1a1a20 55%, #22222a 80%, #2e2e34 100%)",
            boxShadow: [
              "inset 0 4px 8px rgba(0,0,0,0.55)",
              "inset 0 2px 3px rgba(0,0,0,0.35)",
              "inset 0 1px 1px rgba(0,0,0,0.25)",
              "inset 0 -1px 1px rgba(255,255,255,0.04)",
            ].join(", "),
            transition: "background 0.3s ease",
          }}
        >
          {/* Subtle inner rim highlight */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              boxShadow: "inset 0 0.5px 0 rgba(255,255,255,0.06)",
            }}
          />
        </div>

        {/* Embossed ON/OFF text - carved into the track surface */}
        <div
          className="absolute inset-0 flex items-center pointer-events-none"
          style={{ zIndex: 1 }}
        >
          {/* ON text */}
          <span
            className="text-[10px] font-extrabold uppercase tracking-[0.18em]"
            style={{
              position: "absolute",
              left: 18,
              color: isOn ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.08)",
              textShadow:
                "0 -1px 0 rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05)",
              transition: "color 0.3s ease",
            }}
          >
            ON
          </span>
          {/* OFF text */}
          <span
            className="text-[10px] font-extrabold uppercase tracking-[0.18em]"
            style={{
              position: "absolute",
              right: 16,
              color: !isOn ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.08)",
              textShadow:
                "0 -1px 0 rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05)",
              transition: "color 0.3s ease",
            }}
          >
            OFF
          </span>
        </div>

        {/* Metallic spherical knob - the star of the show */}
        <motion.div
          animate={{ x: isOn ? 70 : 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          className="absolute rounded-full"
          style={{
            top: 5,
            left: 7,
            width: 46,
            height: 46,
            zIndex: 2,
            background:
              "radial-gradient(circle at 35% 28%, #ffffff 0%, #ececee 12%, #d4d4d8 25%, #b8b8be 40%, #9a9aa0 55%, #808088 70%, #6a6a72 85%, #5e5e66 100%)",
            boxShadow: [
              "0 5px 14px rgba(0,0,0,0.55)",
              "0 2px 6px rgba(0,0,0,0.35)",
              "0 1px 2px rgba(0,0,0,0.25)",
              "inset 0 1.5px 3px rgba(255,255,255,0.45)",
              "inset 0 -2px 5px rgba(0,0,0,0.25)",
              "inset 1px 0 2px rgba(255,255,255,0.1)",
            ].join(", "),
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Primary specular highlight - top-left hot spot */}
          <div
            className="absolute rounded-full"
            style={{
              top: 5,
              left: 7,
              width: 18,
              height: 13,
              background:
                "radial-gradient(ellipse at 50% 45%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0) 100%)",
            }}
          />
          {/* Secondary edge highlight - rim catch light */}
          <div
            className="absolute rounded-full"
            style={{
              bottom: 8,
              right: 6,
              width: 10,
              height: 6,
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
          {/* Center vertical groove detail */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: 2,
              height: 18,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.08) 50%, rgba(255,255,255,0.04) 100%)",
            }}
          />
        </motion.div>
      </button>

      {/* Status label with glow effect when on */}
      <div className="flex items-center gap-2">
        {/* Status LED indicator */}
        <div
          className="w-[6px] h-[6px] rounded-full"
          style={{
            background: isOn
              ? "radial-gradient(circle, #4ade80 0%, #22c55e 60%, #16a34a 100%)"
              : "radial-gradient(circle, #525252 0%, #3f3f46 60%, #27272a 100%)",
            boxShadow: isOn
              ? "0 0 6px rgba(74,222,128,0.5), 0 0 12px rgba(74,222,128,0.2)"
              : "inset 0 0.5px 1px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
          }}
        />
        <span
          className="text-[10px] font-bold uppercase tracking-[0.22em]"
          style={{
            color: isOn ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.25)",
            textShadow: isOn
              ? "0 0 8px rgba(255,255,255,0.08)"
              : "none",
            transition: "all 0.3s ease",
          }}
        >
          Power {isOn ? "On" : "Off"}
        </span>
      </div>
    </motion.div>
  );
}

// ---- Segmented variant ----
// iOS-style segmented control with realistic material depth
// Recessed track housing with raised active segment that slides between positions
function SegmentedButton({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  const [activeSegment, setActiveSegment] = useState(0);
  const segments = ["World Clock", "Alarm", "Stopwatch"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative inline-flex rounded-xl overflow-hidden"
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        background:
          "linear-gradient(180deg, #d8d7e0 0%, #cccbd6 25%, #c4c3ce 50%, #c8c7d2 75%, #d0cfd8 100%)",
        boxShadow: [
          "inset 0 2px 5px rgba(0,0,0,0.14)",
          "inset 0 1px 2px rgba(0,0,0,0.08)",
          "0 1px 0 rgba(255,255,255,0.65)",
          "0 2px 4px rgba(0,0,0,0.06)",
        ].join(", "),
        border: "1px solid rgba(0,0,0,0.08)",
        padding: 3,
        gap: 2,
        ...customStyle,
      }}
    >
      {/* Sliding active indicator - raised white pill */}
      <motion.div
        className="absolute rounded-lg z-0"
        animate={{
          x: activeSegment * 108 + 3,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 32 }}
        style={{
          top: 3,
          left: 0,
          width: 106,
          height: "calc(100% - 6px)",
          background:
            "linear-gradient(180deg, #ffffff 0%, #f8f8fa 30%, #f0f0f4 60%, #ebebf0 100%)",
          boxShadow: [
            "0 3px 8px rgba(0,0,0,0.12)",
            "0 1px 3px rgba(0,0,0,0.08)",
            "0 0.5px 1px rgba(0,0,0,0.06)",
            "inset 0 1px 0 rgba(255,255,255,0.95)",
            "inset 0 -0.5px 0 rgba(0,0,0,0.03)",
          ].join(", "),
          border: "0.5px solid rgba(0,0,0,0.06)",
        }}
      />

      {segments.map((segment, i) => {
        const isActive = activeSegment === i;
        return (
          <button
            key={segment}
            onClick={() => setActiveSegment(i)}
            className="relative z-10 px-5 py-2 text-xs font-semibold cursor-pointer focus:outline-none select-none rounded-lg transition-colors duration-200"
            style={{
              width: 106,
              color: isActive ? "#3f3f46" : "#71717a",
              textShadow: isActive
                ? "0 0.5px 0 rgba(255,255,255,0.6)"
                : "0 1px 0 rgba(255,255,255,0.4)",
              background: "transparent",
            }}
          >
            {segment}
          </button>
        );
      })}
    </motion.div>
  );
}

// ---- Main exported component ----
export default function Button({
  variant = "push",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "toggle":
      return <ToggleButton customStyle={customStyle} />;
    case "segmented":
      return <SegmentedButton customStyle={customStyle} />;
    case "push":
    default:
      return <PushButton customStyle={customStyle} />;
  }
}
