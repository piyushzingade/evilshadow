"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Heart,
  X,
  Bell,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import type { StyleComponentProps } from "@/types";

/* ──────────────────────────────────────────────
   MUSIC PLAYER — Liquid Glass Music Card
   Flowing glass pill over abstract background.
   Album art, equalizer, progress, controls.
   ────────────────────────────────────────────── */

function MusicCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [liked, setLiked] = useState(false);

  const equalizerBars = [0.35, 0.7, 0.45, 0.9, 0.55, 0.8, 0.3, 0.75, 0.5, 0.85, 0.4, 0.65];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-md rounded-[28px] backdrop-blur-[40px] backdrop-saturate-[180%] bg-white/10 border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.15),0_2px_12px_rgba(0,0,0,0.08)] font-[family-name:var(--font-clean)] overflow-hidden"
      style={customStyle}
    >
      {/* Inner glass highlight — top edge refraction */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="p-5">
        <div className="flex gap-4">
          {/* Album Art — vibrant gradient with vinyl inner circle */}
          <motion.div
            className="w-[88px] h-[88px] rounded-[20px] shrink-0 overflow-hidden relative"
            style={{
              background:
                "linear-gradient(145deg, rgba(139,92,246,0.8), rgba(59,130,246,0.8), rgba(236,72,153,0.5))",
            }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Vinyl ring detail */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-11 h-11 rounded-full border-[3px] border-white/15 bg-white/10 backdrop-blur-sm" />
              <div className="absolute w-3 h-3 rounded-full bg-white/30" />
            </div>
            {/* Shimmer overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Right Side — Song Info + Equalizer */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h3 className="text-white text-[15px] font-bold tracking-tight truncate leading-tight">
                  L&apos;AMOUR DE MA VIE
                </h3>
                <p className="text-white/45 text-[13px] mt-0.5 font-medium">
                  Billie Eilish
                </p>
              </div>

              {/* Like Button */}
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={() => setLiked(!liked)}
                className="shrink-0 mt-0.5"
              >
                <Heart
                  size={18}
                  className={
                    liked
                      ? "text-pink-400 fill-pink-400 drop-shadow-[0_0_6px_rgba(244,114,182,0.5)]"
                      : "text-white/30 hover:text-white/50 transition-colors"
                  }
                />
              </motion.button>
            </div>

            {/* Equalizer Visualization */}
            <div className="flex items-end gap-[2.5px] h-7 mt-3">
              {equalizerBars.map((height, i) => (
                <motion.div
                  key={i}
                  className="w-[3px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(255,255,255,0.3), rgba(255,255,255,0.6))",
                  }}
                  initial={{ height: 3 }}
                  animate={
                    isPlaying
                      ? {
                          height: [
                            height * 26,
                            height * 8,
                            height * 22,
                            height * 6,
                            height * 26,
                          ],
                        }
                      : { height: 3 }
                  }
                  transition={
                    isPlaying
                      ? {
                          duration: 1.0 + i * 0.08,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                      : { duration: 0.4, ease: "easeOut" }
                  }
                />
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full h-[3px] rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.8))",
              }}
              initial={{ width: "0%" }}
              animate={{ width: "68%" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-white/35 text-[11px] tabular-nums font-medium">
              3:24
            </span>
            <span className="text-white/35 text-[11px] tabular-nums font-medium">
              -1:49
            </span>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center justify-center gap-6 mt-2">
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            className="text-white/35 hover:text-white/60 transition-colors"
          >
            <Shuffle size={16} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.88 }}
            className="text-white/50 hover:text-white/80 transition-colors"
          >
            <SkipBack size={20} fill="currentColor" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="h-12 w-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white shadow-[0_4px_20px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-white/25 transition-colors"
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Pause size={20} fill="currentColor" />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Play size={20} fill="currentColor" className="ml-0.5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.88 }}
            className="text-white/50 hover:text-white/80 transition-colors"
          >
            <SkipForward size={20} fill="currentColor" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            className="text-white/35 hover:text-white/60 transition-colors"
          >
            <Repeat size={16} />
          </motion.button>
        </div>
      </div>

      {/* Bottom edge refraction */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   STATS WIDGET — Total Subnets 77
   Square-ish card with EXTREME blur, large
   number, sub-stat, and animated bar chart.
   ────────────────────────────────────────────── */

function StatsCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  const barCount = 20;
  const barHeights = Array.from(
    { length: barCount },
    (_, i) =>
      25 +
      Math.abs(Math.sin(i * 0.7)) * 55 +
      Math.abs(Math.cos(i * 1.3)) * 20
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[240px] rounded-[28px] backdrop-blur-[40px] backdrop-saturate-[180%] bg-white/12 border border-white/20 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.15),0_2px_12px_rgba(0,0,0,0.08)] font-[family-name:var(--font-clean)] overflow-hidden"
      style={customStyle}
    >
      {/* Top edge refraction */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/5 blur-2xl" />

      {/* Label */}
      <p className="relative text-white/60 text-[13px] font-semibold tracking-wide">
        Total Subnets
      </p>

      {/* Large Number */}
      <motion.h2
        className="relative text-white text-[56px] font-bold tracking-tight leading-none mt-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        77
      </motion.h2>

      {/* Sub-stat with trend indicator */}
      <div className="relative flex items-center gap-1.5 mt-1.5 mb-5">
        <span className="text-emerald-300/70 text-[13px] font-semibold">+12</span>
        <span className="text-white/35 text-[13px]">sn / 1m</span>
      </div>

      {/* Bar Chart Visualization */}
      <div className="relative flex items-end gap-[3px] h-[60px]">
        {barHeights.map((height, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-[2px]"
            style={{
              background:
                "linear-gradient(to top, rgba(255,255,255,0.12), rgba(255,255,255,0.28))",
            }}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{
              duration: 0.6,
              delay: 0.25 + i * 0.025,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              background:
                "linear-gradient(to top, rgba(255,255,255,0.2), rgba(255,255,255,0.45))",
              transition: { duration: 0.15 },
            }}
          />
        ))}
      </div>

      {/* Axis Labels */}
      <div className="relative flex justify-between mt-2">
        <span className="text-white/25 text-[10px] tabular-nums font-medium">0</span>
        <span className="text-white/25 text-[10px] tabular-nums font-medium">50</span>
        <span className="text-white/25 text-[10px] tabular-nums font-medium">100</span>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   NOTIFICATION — Dismissable glass alert
   Glass card with pulsing indicator, content,
   action link, and smooth dismiss animation.
   ────────────────────────────────────────────── */

function NotificationCard({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{
            opacity: 0,
            x: 60,
            scale: 0.95,
            filter: "blur(4px)",
            transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-sm rounded-[24px] backdrop-blur-[40px] backdrop-saturate-[180%] bg-white/10 border border-white/20 p-5 shadow-[0_8px_40px_rgba(0,0,0,0.15),0_2px_12px_rgba(0,0,0,0.08)] font-[family-name:var(--font-clean)] overflow-hidden"
          style={customStyle}
        >
          {/* Top edge refraction */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

          <div className="flex items-start gap-3.5">
            {/* Icon Container */}
            <div className="relative mt-0.5 shrink-0">
              <motion.div
                className="h-9 w-9 rounded-[12px] bg-blue-500/20 backdrop-blur-sm border border-blue-400/20 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59,130,246,0)",
                    "0 0 0 6px rgba(59,130,246,0.1)",
                    "0 0 0 0 rgba(59,130,246,0)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Bell size={16} className="text-blue-300" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-white text-[14px] font-semibold leading-tight">
                New Update Available
              </h3>
              <p className="text-white/45 text-[13px] mt-1.5 leading-relaxed">
                Version 3.2.0 includes performance improvements, new glass
                effects, and security patches.
              </p>

              {/* Action Row */}
              <div className="flex items-center gap-4 mt-3">
                <motion.button
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-1 text-blue-300/80 hover:text-blue-300 text-[13px] font-semibold transition-colors"
                >
                  View Details
                  <ChevronRight size={14} />
                </motion.button>
                <span className="text-white/20 text-[11px] uppercase tracking-wider font-medium">
                  2 min ago
                </span>
              </div>
            </div>

            {/* Dismiss Button */}
            <motion.button
              whileHover={{
                scale: 1.12,
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
              whileTap={{ scale: 0.88 }}
              onClick={() => setDismissed(true)}
              className="shrink-0 h-7 w-7 rounded-full bg-white/8 flex items-center justify-center text-white/40 hover:text-white/70 transition-colors"
            >
              <X size={13} strokeWidth={2.5} />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ──────────────────────────────────────────────
   EXPORT — Default variant switch
   ────────────────────────────────────────────── */

export default function Card({
  variant = "music",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "music":
      return <MusicCard customStyle={customStyle} />;
    case "stats":
      return <StatsCard customStyle={customStyle} />;
    case "notification":
      return <NotificationCard customStyle={customStyle} />;
    default:
      return <MusicCard customStyle={customStyle} />;
  }
}
