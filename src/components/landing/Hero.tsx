"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { DotCluster, DotNebula } from "./DotMatrix";

const words = ["EXPLORE.", "CUSTOMIZE.", "SHIP."];

/* ── Floating style preview cards for the right side ── */
function FloatingStyles() {
  const styles = [
    {
      name: "Glassmorphism",
      label: "Glass",
      color: "#c2783a",
      bg: "rgba(194, 120, 58, 0.08)",
      borderColor: "rgba(194, 120, 58, 0.2)",
      blur: true,
    },
    {
      name: "Neobrutalism",
      label: "Brutal",
      color: "#f43f5e",
      bg: "rgba(244, 63, 94, 0.06)",
      borderColor: "#f43f5e",
      offset: true,
    },
    {
      name: "Claymorphism",
      label: "Clay",
      color: "#d97706",
      bg: "rgba(217, 119, 6, 0.06)",
      borderColor: "rgba(217, 119, 6, 0.15)",
      rounded: true,
    },
    {
      name: "Minimalism",
      label: "Minimal",
      color: "var(--color-fg)",
      bg: "transparent",
      borderColor: "var(--color-border)",
      minimal: true,
    },
  ];

  return (
    <div className="relative h-[420px] w-[320px]">
      {styles.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 50, rotate: -6 + i * 4 }}
          animate={{ opacity: 1, y: 0, rotate: -6 + i * 4 }}
          transition={{
            delay: 0.9 + i * 0.15,
            type: "spring",
            damping: 22,
            stiffness: 100,
          }}
          className="absolute"
          style={{
            top: `${i * 85}px`,
            left: `${i * 22}px`,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.04, rotate: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="cursor-default select-none"
            style={{
              width: "220px",
              padding: "16px 20px",
              background: s.bg,
              border: s.offset
                ? `2px solid ${s.borderColor}`
                : `1px solid ${s.borderColor}`,
              borderRadius: s.rounded ? "16px" : s.offset ? "0px" : "8px",
              backdropFilter: s.blur ? "blur(12px)" : undefined,
              boxShadow: s.offset
                ? `3px 3px 0px ${s.borderColor}`
                : s.rounded
                  ? "4px 8px 20px rgba(217, 119, 6, 0.08), inset 0 1px 0 rgba(255,255,255,0.05)"
                  : "0 2px 12px rgba(0,0,0,0.04)",
            }}
          >
            {/* Card header */}
            <div className="flex items-center justify-between mb-3">
              <span
                className="text-[11px] font-medium uppercase tracking-[0.08em] font-[family-name:var(--font-mono)]"
                style={{ color: s.color.startsWith("#") ? s.color : "var(--color-fg)" }}
              >
                {s.label}
              </span>
              <div
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: typeof s.color === "string" && s.color.startsWith("#") ? s.color : "var(--color-fg-muted)",
                }}
              />
            </div>
            {/* Fake component preview lines */}
            <div className="space-y-2">
              <div
                className="h-2 rounded-full"
                style={{
                  width: "75%",
                  backgroundColor: typeof s.color === "string" && s.color.startsWith("#") ? `${s.color}22` : "var(--color-border)",
                }}
              />
              <div
                className="h-2 rounded-full"
                style={{
                  width: "50%",
                  backgroundColor: typeof s.color === "string" && s.color.startsWith("#") ? `${s.color}15` : "var(--color-border-subtle)",
                }}
              />
            </div>
            {/* Fake button */}
            <div
              className="mt-3 h-6 flex items-center justify-center"
              style={{
                borderRadius: s.rounded ? "10px" : s.offset ? "0px" : "4px",
                backgroundColor: typeof s.color === "string" && s.color.startsWith("#") ? `${s.color}18` : "var(--color-surface)",
                border: s.minimal ? "1px solid var(--color-border)" : "none",
              }}
            >
              <span
                className="text-[9px] font-medium uppercase tracking-wider font-[family-name:var(--font-mono)]"
                style={{
                  color: typeof s.color === "string" && s.color.startsWith("#") ? `${s.color}` : "var(--color-fg-muted)",
                  opacity: 0.7,
                }}
              >
                Button
              </span>
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Decorative dashed connector lines between cards */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute inset-0 pointer-events-none"
        width="320"
        height="420"
        viewBox="0 0 320 420"
        fill="none"
      >
        <line
          x1="110"
          y1="80"
          x2="132"
          y2="105"
          stroke="var(--color-fg)"
          strokeDasharray="3 3"
          strokeWidth="1"
        />
        <line
          x1="132"
          y1="165"
          x2="154"
          y2="190"
          stroke="var(--color-fg)"
          strokeDasharray="3 3"
          strokeWidth="1"
        />
        <line
          x1="154"
          y1="250"
          x2="176"
          y2="275"
          stroke="var(--color-fg)"
          strokeDasharray="3 3"
          strokeWidth="1"
        />
      </motion.svg>
    </div>
  );
}

/* ── Animated dashed line separator ── */
function DashedAccent() {
  return (
    <div className="relative w-full max-w-xs mx-auto lg:mx-0 my-6">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="origin-left"
      >
        <svg width="100%" height="2" viewBox="0 0 320 2" preserveAspectRatio="none">
          <motion.line
            x1="0"
            y1="1"
            x2="320"
            y2="1"
            stroke="var(--color-accent)"
            strokeDasharray="6 4"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          />
        </svg>
      </motion.div>
      {/* Small accent dot at the end of the line */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring", damping: 15 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 0.8px, transparent 0.8px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Gradient glow - shifted left for split layout */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full opacity-[0.06] blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent), transparent 70%)",
        }}
      />

      {/* Secondary subtle glow on right for the floating cards */}
      <div
        className="pointer-events-none absolute top-1/3 right-[10%] hidden lg:block h-[400px] w-[400px] rounded-full opacity-[0.03] blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, #d97706, transparent 70%)",
        }}
      />

      {/* Main split layout container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        {/* Left side: text content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-1 lg:max-w-[55%]">
          {/* Version badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 200,
              delay: 0,
            }}
            className="mb-2"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-fg-muted)]">
                v0.1.0 — 8 design systems, 72+ variants
              </span>
            </div>
          </motion.div>

          {/* Dashed accent line after badge */}
          <DashedAccent />

          {/* Main editorial typography */}
          <div className="flex flex-col items-center gap-0 lg:items-start">
            {words.map((word, i) => (
              <motion.h1
                key={word}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 80,
                  delay: 0.15 + i * 0.12,
                }}
                className="font-[family-name:var(--font-display)] italic leading-[0.9] tracking-[-0.03em] text-[var(--color-fg)]"
                style={{
                  fontSize: "clamp(3.5rem, 9vw, 10rem)",
                }}
              >
                {word}
              </motion.h1>
            ))}
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 100,
              delay: 0.6,
            }}
            className="mt-10 max-w-lg font-[family-name:var(--font-sans)] text-base leading-relaxed text-[var(--color-fg-muted)]"
          >
            Copy-paste UI components across eight design paradigms.
            <br className="hidden sm:block" />
            Glassmorphism to Skeuomorphism and everything between.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 100,
              delay: 0.75,
            }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:items-start"
          >
            <Link
              href="/docs"
              className="group inline-flex h-12 items-center justify-center gap-2 bg-[var(--color-fg)] px-8 text-sm font-medium tracking-wide text-[var(--color-bg)] transition-all hover:opacity-90"
            >
              Browse Components
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://github.com/piyushzingade/evilshadow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 border border-[var(--color-border)] px-8 text-sm font-medium text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Right side: floating style preview cards (desktop only) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="hidden lg:flex items-center justify-center lg:flex-shrink-0"
        >
          <FloatingStyles />
        </motion.div>
      </div>

      {/* Dot matrix cluster — bottom right */}
      <div className="pointer-events-none absolute right-[2%] bottom-[15%] hidden xl:block">
        <DotCluster rows={25} cols={18} className="opacity-20" animationDelay={0.8} />
      </div>

      {/* Dot nebula — top left atmosphere */}
      <div className="pointer-events-none absolute top-[8%] left-[3%] hidden lg:block">
        <DotNebula animationDelay={1.2} className="opacity-60" />
      </div>

      {/* Small dot cluster — left edge midway */}
      <div className="pointer-events-none absolute left-[1%] top-[55%] hidden xl:block">
        <DotCluster
          rows={12}
          cols={10}
          dotSize={3}
          gap={4}
          seed={88}
          density={0.5}
          className="opacity-15"
          animationDelay={1.5}
        />
      </div>

      {/* Bottom dashed line separator */}
      <div className="absolute bottom-0 left-6 right-6">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="origin-left"
        >
          <svg
            width="100%"
            height="1"
            preserveAspectRatio="none"
            className="block"
          >
            <line
              x1="0"
              y1="0.5"
              x2="100%"
              y2="0.5"
              stroke="var(--color-border)"
              strokeDasharray="8 6"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
