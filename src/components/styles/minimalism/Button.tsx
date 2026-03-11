"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { StyleComponentProps } from "@/types";

const NOISE_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==";

// ---------------------------------------------------------------------------
// Text Button
// Just text. An animated underline on hover that grows from the left.
// The platonic ideal of a button -- pure intention, zero chrome.
// ---------------------------------------------------------------------------
function TextButton({ customStyle }: { customStyle?: React.CSSProperties }) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="group relative bg-transparent border-none px-1 py-3 cursor-pointer"
      style={customStyle}
    >
      <span className="text-[13px] tracking-[0.15em] uppercase text-zinc-600 font-[family-name:var(--font-mono)] transition-colors duration-500 group-hover:text-zinc-900">
        Learn more
      </span>
      <span className="absolute bottom-2 left-1 h-px w-0 bg-zinc-900 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[calc(100%-8px)]" />
    </motion.button>
  );
}

// ---------------------------------------------------------------------------
// Outlined Button
// Monochrome hairline border. On hover the background barely shifts.
// Restrained tracking, no fill -- just the ghost of a rectangle.
// ---------------------------------------------------------------------------
function OutlinedButton({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      whileTap={{ scale: 0.98 }}
      className="border border-zinc-300 bg-transparent px-10 py-4 text-[12px] uppercase tracking-[0.2em] text-zinc-700 font-[family-name:var(--font-mono)] transition-all duration-500 hover:bg-zinc-50 hover:border-zinc-400 hover:text-zinc-900 cursor-pointer"
      style={customStyle}
    >
      Continue
    </motion.button>
  );
}

// ---------------------------------------------------------------------------
// Toggle Switch
// Realistic minimal toggle on light gray. Soft inner shadow on the track,
// gentle spring-animated white knob with subtle shadow. Below: "BUTTON. D."
// in blue-ish serif with wide tracking -- the only hint of colour allowed.
// ---------------------------------------------------------------------------
function ToggleSwitch({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="flex flex-col items-center gap-7"
      style={customStyle}
    >
      {/* Toggle track */}
      <button
        onClick={() => setIsToggled(!isToggled)}
        className="relative h-[60px] w-[120px] cursor-pointer rounded-full border border-zinc-200/80 bg-zinc-100 p-[3px] transition-colors duration-500 overflow-hidden"
        style={{
          boxShadow:
            "inset 0 2px 8px rgba(0,0,0,0.07), inset 0 1px 2px rgba(0,0,0,0.05)",
        }}
        aria-checked={isToggled}
        role="switch"
      >
        {/* Noise texture on track */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full opacity-[0.04]"
          style={{ backgroundImage: "url('" + NOISE_URL + "')" }}
        />

        {/* Inner gradient shadow -- barely visible depth */}
        <div
          className="absolute inset-[2px] rounded-full pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, transparent 40%)",
          }}
        />

        {/* Knob */}
        <motion.div
          className="relative h-[52px] w-[52px] rounded-full bg-white"
          animate={{ x: isToggled ? 58 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            boxShadow:
              "0 1px 4px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04), 0 0 0 0.5px rgba(0,0,0,0.04)",
          }}
        >
          {/* Subtle highlight on top of knob */}
          <div className="absolute inset-[2px] rounded-full bg-gradient-to-b from-white to-zinc-50/80 pointer-events-none" />
        </motion.div>
      </button>

      {/* Editorial label */}
      <span className="font-[family-name:var(--font-editorial)] text-lg tracking-[0.18em] text-blue-700/80 select-none">
        BUTTON. D.
      </span>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------
export default function MinimalismButton({
  variant = "text",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "outlined":
      return <OutlinedButton customStyle={customStyle} />;
    case "toggle":
      return <ToggleSwitch customStyle={customStyle} />;
    case "text":
    default:
      return <TextButton customStyle={customStyle} />;
  }
}
