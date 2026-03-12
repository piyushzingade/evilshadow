"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Command } from "lucide-react";
import { StyleComponentProps } from "@/types";
import { useTheme } from "next-themes";

function useSkeuTheme() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== 'light';
  return { isDark };
}

// ---- Embossed variant ----
// Sunken input field recessed into the surface with multi-layer metallic outer bezel frame
// Inner chrome highlight separator, inset shadows for depth, label with letterpress effect
function EmbossedInput({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  const { isDark } = useSkeuTheme();
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-72"
      style={{ fontFamily: "Inter, system-ui, sans-serif", ...customStyle }}
    >
      {/* Label with letterpress text shadow */}
      <label
        className="block text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400 mb-2.5"
        style={{
          textShadow: isDark
            ? "0 1px 0 rgba(0,0,0,0.5)"
            : "0 1px 0 rgba(255,255,255,0.7)",
        }}
      >
        Username
      </label>

      {/* Outer metallic bezel frame - 5-stop gradient for brushed chrome look */}
      <div
        className="rounded-xl p-[2.5px]"
        style={{
          background: focused
            ? isDark
              ? "linear-gradient(180deg, #4a4a72 0%, #3a3a5e 25%, #32325a 50%, #3a3a62 75%, #4e4e78 100%)"
              : "linear-gradient(180deg, #a0a0e0 0%, #7878b0 25%, #6868a0 50%, #8080b8 75%, #a8a8d8 100%)"
            : isDark
              ? "linear-gradient(180deg, #4a4a52 0%, #3a3a42 20%, #32323a 40%, #363640 60%, #424248 80%, #4e4e56 100%)"
              : "linear-gradient(180deg, #b8b8c2 0%, #909098 20%, #7e7e88 40%, #8a8a94 60%, #a4a4ae 80%, #c0c0ca 100%)",
          boxShadow: [
            focused
              ? "0 0 0 2px rgba(99,102,241,0.15)"
              : "0 0 0 0 transparent",
            "0 3px 10px rgba(0,0,0,0.12)",
            "0 1px 4px rgba(0,0,0,0.08)",
            "0 0.5px 1px rgba(0,0,0,0.06)",
          ].join(", "),
          transition:
            "background 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        {/* Inner chrome highlight ring - catches light from above */}
        <div
          className="rounded-[10px] p-[1.5px]"
          style={{
            background: isDark
              ? "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.02) 60%, rgba(0,0,0,0.08) 100%)"
              : "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.08) 60%, rgba(0,0,0,0.04) 100%)",
          }}
        >
          {/* Sunken input field - recessed into the surface */}
          <div
            className="relative rounded-[9px] overflow-hidden"
            style={{
              background: isDark
                ? "linear-gradient(180deg, #2a2a32 0%, #262630 15%, #22222c 40%, #22222c 100%)"
                : "linear-gradient(180deg, #f6f6fa 0%, #fafafa 15%, #ffffff 40%, #ffffff 100%)",
              boxShadow: [
                "inset 0 3px 10px rgba(0,0,0,0.12)",
                "inset 0 1px 4px rgba(0,0,0,0.08)",
                "inset 0 0.5px 1px rgba(0,0,0,0.06)",
                isDark
                  ? "inset 0 -1px 0 rgba(255,255,255,0.04)"
                  : "inset 0 -1px 0 rgba(255,255,255,0.6)",
              ].join(", "),
            }}
          >
            {/* Top edge darkening - simulates light being blocked by the rim */}
            <div
              className="absolute top-0 left-0 right-0 h-[6px] pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, transparent 100%)",
              }}
            />

            <input
              type="text"
              placeholder="Enter your username"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className={`w-full px-4 py-3 bg-transparent text-sm focus:outline-none relative z-10 ${isDark ? "placeholder:text-zinc-600" : "placeholder:text-zinc-350"}`}
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                color: isDark ? "#e4e4ec" : "#3f3f46",
                caretColor: "#6366f1",
              }}
            />
          </div>
        </div>
      </div>

      {/* Helper text with letterpress effect */}
      <p
        className="mt-2.5 text-[10px] font-medium text-zinc-400"
        style={{
          textShadow: isDark
            ? "0 1px 0 rgba(0,0,0,0.4)"
            : "0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        Letters and numbers only
      </p>
    </motion.div>
  );
}

// ---- Search variant ----
// Chrome-framed search bar with metallic bezel, search icon, raised key cap shortcut badges
// Cmd+K keyboard shortcut shown as realistic raised keycaps with bottom shadow
function SearchInput({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  const { isDark } = useSkeuTheme();
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-80"
      style={{ fontFamily: "Inter, system-ui, sans-serif", ...customStyle }}
    >
      {/* Outer metallic frame - polished chrome bezel with 6-stop gradient */}
      <div
        className="rounded-2xl p-[2.5px]"
        style={{
          background: focused
            ? isDark
              ? "linear-gradient(180deg, #4e4e78 0%, #3a3a60 20%, #32325a 40%, #363660 60%, #424268 80%, #505078 100%)"
              : "linear-gradient(180deg, #b0b0e0 0%, #8888b8 20%, #7070a0 40%, #7878a8 60%, #9898c0 80%, #b8b8d8 100%)"
            : isDark
              ? "linear-gradient(180deg, #4e4e56 0%, #404048 15%, #363640 30%, #32323c 50%, #3a3a44 70%, #464650 85%, #4e4e58 100%)"
              : "linear-gradient(180deg, #c8c8d2 0%, #a0a0aa 15%, #8e8e98 30%, #828290 50%, #9494a0 70%, #b0b0ba 85%, #c4c4ce 100%)",
          boxShadow: [
            focused
              ? "0 0 0 2px rgba(99,102,241,0.12)"
              : "0 0 0 0 transparent",
            "0 5px 18px rgba(0,0,0,0.13)",
            "0 2px 8px rgba(0,0,0,0.08)",
            "0 1px 3px rgba(0,0,0,0.06)",
            isDark
              ? "inset 0 1px 0 rgba(255,255,255,0.06)"
              : "inset 0 1px 0 rgba(255,255,255,0.3)",
          ].join(", "),
          transition:
            "background 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        {/* Inner chrome bezel highlight - light catch on top edge */}
        <div
          className="rounded-[14px] p-[1.5px]"
          style={{
            background: isDark
              ? "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.06) 100%)"
              : "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.25) 25%, rgba(255,255,255,0.1) 50%, rgba(0,0,0,0.03) 100%)",
          }}
        >
          {/* Input container - recessed field */}
          <div
            className="flex items-center rounded-[13px] px-4 py-3 gap-3"
            style={{
              background: isDark
                ? "linear-gradient(180deg, #2a2a32 0%, #262630 12%, #22222c 30%, #22222c 100%)"
                : "linear-gradient(180deg, #f5f5fa 0%, #fafafe 12%, #ffffff 30%, #ffffff 100%)",
              boxShadow: [
                "inset 0 2px 8px rgba(0,0,0,0.08)",
                "inset 0 1px 3px rgba(0,0,0,0.05)",
                "inset 0 0.5px 1px rgba(0,0,0,0.04)",
                isDark
                  ? "inset 0 -1px 0 rgba(255,255,255,0.04)"
                  : "inset 0 -1px 0 rgba(255,255,255,0.5)",
              ].join(", "),
            }}
          >
            {/* Search icon with letterpress shadow */}
            <div
              className="flex-shrink-0"
              style={{
                filter: isDark
                  ? "drop-shadow(0 1px 0 rgba(0,0,0,0.4))"
                  : "drop-shadow(0 1px 0 rgba(255,255,255,0.6))",
              }}
            >
              <Search
                className="w-[18px] h-[18px]"
                strokeWidth={2.5}
                style={{
                  color: focused ? "#6366f1" : isDark ? "#71717a" : "#a1a1aa",
                  transition: "color 0.2s ease",
                }}
              />
            </div>

            {/* Input field */}
            <input
              type="text"
              placeholder="Search..."
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className={`flex-1 bg-transparent text-sm focus:outline-none ${isDark ? "placeholder:text-zinc-600" : "placeholder:text-zinc-350"}`}
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                color: isDark ? "#e4e4ec" : "#3f3f46",
                caretColor: "#6366f1",
              }}
            />

            {/* Raised key cap shortcut badges - Cmd + K */}
            <div className="flex items-center gap-1 flex-shrink-0">
              {/* Cmd key cap */}
              <motion.div
                whileTap={{
                  y: 1,
                  boxShadow: isDark
                    ? "0 0.5px 0 #1a1a22, 0 1px 2px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.06)"
                    : "0 0.5px 0 #b0b0b6, 0 1px 2px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.85)",
                }}
                className="flex items-center justify-center w-[26px] h-[26px] rounded-md cursor-default"
                style={{
                  background: isDark
                    ? "linear-gradient(180deg, #3a3a42 0%, #343440 25%, #30303a 50%, #2c2c34 75%, #2a2a32 100%)"
                    : "linear-gradient(180deg, #fafafa 0%, #f0f0f4 25%, #e8e8ec 50%, #e2e2e6 75%, #dddde2 100%)",
                  boxShadow: isDark
                    ? [
                        "0 2px 0 #1e1e26",
                        "0 3px 1px #1a1a22",
                        "0 4px 6px rgba(0,0,0,0.2)",
                        "inset 0 1px 0 rgba(255,255,255,0.08)",
                        "inset 0 -0.5px 0 rgba(0,0,0,0.15)",
                      ].join(", ")
                    : [
                        "0 2px 0 #b4b4ba",
                        "0 3px 1px #a8a8ae",
                        "0 4px 6px rgba(0,0,0,0.1)",
                        "inset 0 1px 0 rgba(255,255,255,0.95)",
                        "inset 0 -0.5px 0 rgba(0,0,0,0.06)",
                      ].join(", "),
                  border: isDark ? "1px solid #3e3e48" : "1px solid #c4c4ca",
                }}
              >
                <Command
                  className={`w-3.5 h-3.5 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
                  strokeWidth={2.5}
                  style={{
                    filter: isDark
                      ? "drop-shadow(0 0.5px 0 rgba(0,0,0,0.4))"
                      : "drop-shadow(0 0.5px 0 rgba(255,255,255,0.6))",
                  }}
                />
              </motion.div>

              {/* K key cap */}
              <motion.div
                whileTap={{
                  y: 1,
                  boxShadow: isDark
                    ? "0 0.5px 0 #1a1a22, 0 1px 2px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.06)"
                    : "0 0.5px 0 #b0b0b6, 0 1px 2px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.85)",
                }}
                className="flex items-center justify-center w-[26px] h-[26px] rounded-md cursor-default"
                style={{
                  background: isDark
                    ? "linear-gradient(180deg, #3a3a42 0%, #343440 25%, #30303a 50%, #2c2c34 75%, #2a2a32 100%)"
                    : "linear-gradient(180deg, #fafafa 0%, #f0f0f4 25%, #e8e8ec 50%, #e2e2e6 75%, #dddde2 100%)",
                  boxShadow: isDark
                    ? [
                        "0 2px 0 #1e1e26",
                        "0 3px 1px #1a1a22",
                        "0 4px 6px rgba(0,0,0,0.2)",
                        "inset 0 1px 0 rgba(255,255,255,0.08)",
                        "inset 0 -0.5px 0 rgba(0,0,0,0.15)",
                      ].join(", ")
                    : [
                        "0 2px 0 #b4b4ba",
                        "0 3px 1px #a8a8ae",
                        "0 4px 6px rgba(0,0,0,0.1)",
                        "inset 0 1px 0 rgba(255,255,255,0.95)",
                        "inset 0 -0.5px 0 rgba(0,0,0,0.06)",
                      ].join(", "),
                  border: isDark ? "1px solid #3e3e48" : "1px solid #c4c4ca",
                }}
              >
                <span
                  className={`text-[11px] font-bold ${isDark ? "text-zinc-400" : "text-zinc-500"}`}
                  style={{
                    textShadow: isDark
                      ? "0 0.5px 0 rgba(0,0,0,0.4)"
                      : "0 0.5px 0 rgba(255,255,255,0.7)",
                  }}
                >
                  K
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ---- Main exported component ----
export default function Input({
  variant = "embossed",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "search":
      return <SearchInput customStyle={customStyle} />;
    case "embossed":
    default:
      return <EmbossedInput customStyle={customStyle} />;
  }
}
