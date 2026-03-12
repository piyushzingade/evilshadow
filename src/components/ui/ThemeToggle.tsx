"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-xl" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-[var(--color-border)]"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ rotate: -90, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="text-[var(--color-fg)]"
          >
            {isDark ? (
              /* Dark mode: crescent moon shape */
              <>
                <circle
                  cx="9"
                  cy="9"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M9 2a7 7 0 0 0 0 14"
                  fill="currentColor"
                  opacity="0.9"
                />
                {/* Small star accent */}
                <circle cx="13.5" cy="4" r="0.8" fill="currentColor" opacity="0.5" />
                <circle cx="15" cy="6.5" r="0.5" fill="currentColor" opacity="0.35" />
              </>
            ) : (
              /* Light mode: radiating sun with open center */
              <>
                <circle
                  cx="9"
                  cy="9"
                  r="3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Rays */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                  const rad = (angle * Math.PI) / 180;
                  const x1 = 9 + Math.cos(rad) * 5.5;
                  const y1 = 9 + Math.sin(rad) * 5.5;
                  const x2 = 9 + Math.cos(rad) * 7.2;
                  const y2 = 9 + Math.sin(rad) * 7.2;
                  return (
                    <line
                      key={angle}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  );
                })}
              </>
            )}
          </svg>
        </motion.div>
      </AnimatePresence>
    </button>
  );
}

/* Compact variant for docs header */
export function ThemeToggleCompact() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-7 w-7" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-7 w-7 items-center justify-center rounded-md text-[var(--color-fg-muted)] transition-colors hover:bg-[var(--color-border)] hover:text-[var(--color-fg)] cursor-pointer"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ rotate: -60, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 60, scale: 0, opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 18 18"
            fill="none"
            className="text-current"
          >
            {isDark ? (
              <>
                <circle
                  cx="9"
                  cy="9"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M9 2a7 7 0 0 0 0 14"
                  fill="currentColor"
                  opacity="0.9"
                />
                <circle cx="13.5" cy="4" r="0.8" fill="currentColor" opacity="0.5" />
              </>
            ) : (
              <>
                <circle
                  cx="9"
                  cy="9"
                  r="3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                  const rad = (angle * Math.PI) / 180;
                  const x1 = 9 + Math.cos(rad) * 5.5;
                  const y1 = 9 + Math.sin(rad) * 5.5;
                  const x2 = 9 + Math.cos(rad) * 7.2;
                  const y2 = 9 + Math.sin(rad) * 7.2;
                  return (
                    <line
                      key={angle}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  );
                })}
              </>
            )}
          </svg>
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
