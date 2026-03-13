"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Droplets, Wind, MapPin } from "lucide-react";
import type { StyleComponentProps } from "@/types";

function CreditCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  /*
   * Glass defaults tuned to the reference:
   *  – backdrop-blur 14px: soft enough to still see the gradient blobs through
   *  – white overlay ~0.18: barely-there milky tint, not opaque
   *  – saturate(160%): keeps colours vibrant behind the glass
   *  – border: thin 1px white at 0.4 — visible but gossamer
   */
  const defaultGlass: React.CSSProperties = {
    backdropFilter: "blur(14px) saturate(160%)",
    WebkitBackdropFilter: "blur(14px) saturate(160%)",
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0.10) 100%)",
    border: "1px solid rgba(255,255,255,0.4)",
    borderRadius: "18px",
    boxShadow:
      "0 4px 24px rgba(0,0,0,0.04), 0 1px 6px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.35)",
  };

  const glassStyle = customStyle
    ? { ...defaultGlass, ...customStyle }
    : defaultGlass;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="font-[family-name:var(--font-clean)] relative w-full max-w-[420px] aspect-[1.586/1] overflow-hidden"
      style={{ borderRadius: glassStyle.borderRadius }}
    >
      {/* === Glass shell — customizer targets this layer === */}
      <div className="absolute inset-0" style={glassStyle} />

      {/* === Subtle inner frost — top-left light catch === */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          borderRadius: glassStyle.borderRadius,
          background:
            "linear-gradient(155deg, rgba(255,255,255,0.12) 0%, transparent 45%)",
        }}
      />

      {/* === Top edge highlight === */}
      <div
        className="pointer-events-none absolute inset-x-6 top-[1px] h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 30%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.55) 70%, transparent 100%)",
        }}
      />

      {/* ── Card content ── */}
      <div className="relative flex h-full flex-col justify-between px-8 py-7 z-10">
        {/* Top: Mastercard (left) · VISA (right) */}
        <div className="flex items-center justify-between">
          {/* Mastercard overlapping circles */}
          <div className="flex items-center">
            <div
              className="h-[34px] w-[34px] rounded-full"
              style={{
                background: "#eb001b",
                boxShadow: "2px 0 8px rgba(235,0,27,0.18)",
              }}
            />
            <div
              className="-ml-3 h-[34px] w-[34px] rounded-full"
              style={{
                background: "#f79e1b",
                boxShadow: "-2px 0 8px rgba(247,158,27,0.14)",
              }}
            />
          </div>

          {/* VISA wordmark */}
          <span
            className="text-[24px] font-extrabold italic tracking-wide leading-none"
            style={{ color: "#1a1f71" }}
          >
            VISA
          </span>
        </div>

        {/* Card Number — sans-serif, centered */}
        <div
          className="text-center text-[26px] tracking-[0.08em] leading-none"
          style={{
            fontWeight: 400,
            color: "rgba(20,20,35,0.78)",
          }}
        >
          4556 3325 8590 3732
        </div>

        {/* Bottom: holder · exp · cvv */}
        <div className="flex items-end gap-8">
          <div className="flex-1 min-w-0">
            <p
              className="mb-1 text-[13px] leading-none"
              style={{
                color: "rgba(60,60,75,0.50)",
                letterSpacing: "0.03em",
                fontWeight: 400,
              }}
            >
              owner&apos;s name
            </p>
            <p
              className="text-[17px] leading-tight truncate"
              style={{ color: "rgba(20,20,35,0.75)", fontWeight: 500 }}
            >
              Brian Jones
            </p>
          </div>
          <div className="shrink-0">
            <p
              className="mb-1 text-[13px] leading-none"
              style={{
                color: "rgba(60,60,75,0.50)",
                letterSpacing: "0.03em",
                fontWeight: 400,
              }}
            >
              Exp
            </p>
            <p
              className="text-[17px] leading-tight"
              style={{ color: "rgba(20,20,35,0.75)", fontWeight: 500 }}
            >
              09/25
            </p>
          </div>
          <div className="shrink-0">
            <p
              className="mb-1 text-[13px] leading-none"
              style={{
                color: "rgba(60,60,75,0.50)",
                letterSpacing: "0.03em",
                fontWeight: 400,
              }}
            >
              CVV
            </p>
            <p
              className="text-[17px] leading-tight"
              style={{ color: "rgba(20,20,35,0.75)", fontWeight: 500 }}
            >
              950
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProfileCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  const stats = [
    { label: "Posts", value: "248" },
    { label: "Followers", value: "18.3K" },
    { label: "Following", value: "412" },
  ];

  const defaultGlass: React.CSSProperties = {
    backdropFilter: "blur(14px) saturate(160%)",
    WebkitBackdropFilter: "blur(14px) saturate(160%)",
    background:
      "linear-gradient(155deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0.10) 100%)",
    border: "1px solid rgba(255,255,255,0.4)",
    borderRadius: "22px",
    boxShadow:
      "0 4px 24px rgba(0,0,0,0.04), 0 1px 6px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.35)",
  };

  const glassStyle = customStyle
    ? { ...defaultGlass, ...customStyle }
    : defaultGlass;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="font-[family-name:var(--font-clean)] relative w-full max-w-sm overflow-hidden"
      style={{ borderRadius: glassStyle.borderRadius }}
    >
      {/* Glass shell */}
      <div className="absolute inset-0" style={glassStyle} />

      {/* Inner frost */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          borderRadius: glassStyle.borderRadius,
          background:
            "linear-gradient(155deg, rgba(255,255,255,0.12) 0%, transparent 45%)",
        }}
      />

      {/* Top edge highlight */}
      <div
        className="pointer-events-none absolute inset-x-8 top-[1px] h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.55) 50%, transparent)",
        }}
      />

      <div className="relative p-8 text-center z-10">
        {/* Avatar */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full"
          style={{
            background:
              "linear-gradient(135deg, rgba(120,110,200,0.35) 0%, rgba(170,175,210,0.30) 100%)",
            border: "2px solid rgba(255,255,255,0.45)",
            boxShadow:
              "0 4px 20px rgba(120,110,200,0.12), inset 0 1px 0 rgba(255,255,255,0.3)",
            backdropFilter: "blur(12px)",
          }}
        >
          <span
            className="text-xl tracking-wide"
            style={{ color: "rgba(20,20,35,0.70)", fontWeight: 600 }}
          >
            BJ
          </span>
        </motion.div>

        {/* Name & Title */}
        <h3
          className="text-lg tracking-wide"
          style={{ color: "rgba(20,20,35,0.80)", fontWeight: 600 }}
        >
          Brian Jones
        </h3>
        <p
          className="mb-7 mt-1 text-sm"
          style={{ color: "rgba(60,60,75,0.50)", fontWeight: 500 }}
        >
          Senior Product Designer
        </p>

        {/* Stats row */}
        <div
          className="flex items-center justify-around rounded-xl py-4 px-2"
          style={{
            background: "rgba(255,255,255,0.18)",
            border: "1px solid rgba(255,255,255,0.35)",
            backdropFilter: "blur(8px)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.25), 0 2px 8px rgba(0,0,0,0.03)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-1 ${
                i < stats.length - 1
                  ? "border-r pr-5"
                  : ""
              }`}
              style={{
                borderColor:
                  i < stats.length - 1
                    ? "rgba(60,60,75,0.10)"
                    : undefined,
              }}
            >
              <span
                className="text-xl"
                style={{ color: "rgba(20,20,35,0.78)", fontWeight: 700 }}
              >
                {stat.value}
              </span>
              <span
                className="text-[11px] uppercase tracking-wider"
                style={{ color: "rgba(60,60,75,0.45)", fontWeight: 500 }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function WeatherCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  const defaultGlass: React.CSSProperties = {
    backdropFilter: "blur(14px) saturate(160%)",
    WebkitBackdropFilter: "blur(14px) saturate(160%)",
    background:
      "linear-gradient(150deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0.10) 100%)",
    border: "1px solid rgba(255,255,255,0.4)",
    borderRadius: "22px",
    boxShadow:
      "0 4px 24px rgba(0,0,0,0.04), 0 1px 6px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.35)",
  };

  const glassStyle = customStyle
    ? { ...defaultGlass, ...customStyle }
    : defaultGlass;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="font-[family-name:var(--font-clean)] relative w-full max-w-sm overflow-hidden"
      style={{ borderRadius: glassStyle.borderRadius }}
    >
      {/* Glass shell */}
      <div className="absolute inset-0" style={glassStyle} />

      {/* Inner frost */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          borderRadius: glassStyle.borderRadius,
          background:
            "linear-gradient(155deg, rgba(255,255,255,0.12) 0%, transparent 45%)",
        }}
      />

      {/* Top edge highlight */}
      <div
        className="pointer-events-none absolute inset-x-6 top-[1px] h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.55) 50%, transparent)",
        }}
      />

      <div className="relative p-7 z-10">
        {/* Top — Location + Sun */}
        <div className="mb-1 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <MapPin
                className="h-3 w-3"
                strokeWidth={2}
                style={{ color: "rgba(60,60,75,0.40)" }}
              />
              <p
                className="text-[11px] uppercase tracking-[0.18em]"
                style={{ color: "rgba(60,60,75,0.45)", fontWeight: 500 }}
              >
                Current Weather
              </p>
            </div>
            <h3
              className="text-xl tracking-wide"
              style={{ color: "rgba(20,20,35,0.80)", fontWeight: 700 }}
            >
              San Francisco
            </h3>
          </div>
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sun
              className="h-11 w-11"
              strokeWidth={1.5}
              style={{
                color: "#e59c1a",
                filter:
                  "drop-shadow(0 0 10px rgba(229,156,26,0.35)) drop-shadow(0 0 24px rgba(229,156,26,0.15))",
              }}
            />
          </motion.div>
        </div>

        {/* Temperature */}
        <div className="my-5">
          <span
            className="text-7xl tracking-tighter"
            style={{ color: "rgba(20,20,35,0.78)", fontWeight: 200 }}
          >
            23
          </span>
          <span
            className="relative -top-6 ml-1 text-2xl"
            style={{ color: "rgba(60,60,75,0.40)", fontWeight: 300 }}
          >
            °C
          </span>
        </div>

        {/* Details row */}
        <div className="flex gap-3">
          <div
            className="flex flex-1 items-center gap-2.5 rounded-xl px-4 py-3"
            style={{
              background: "rgba(255,255,255,0.18)",
              border: "1px solid rgba(255,255,255,0.35)",
              backdropFilter: "blur(8px)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
            }}
          >
            <Droplets
              className="h-4 w-4"
              strokeWidth={2}
              style={{
                color: "rgba(80,130,200,0.70)",
                filter: "drop-shadow(0 0 3px rgba(80,130,200,0.2))",
              }}
            />
            <span
              className="text-xs"
              style={{ color: "rgba(60,60,75,0.50)", fontWeight: 500 }}
            >
              Humidity
            </span>
            <span
              className="ml-auto text-sm"
              style={{ color: "rgba(20,20,35,0.78)", fontWeight: 700 }}
            >
              62%
            </span>
          </div>
          <div
            className="flex flex-1 items-center gap-2.5 rounded-xl px-4 py-3"
            style={{
              background: "rgba(255,255,255,0.18)",
              border: "1px solid rgba(255,255,255,0.35)",
              backdropFilter: "blur(8px)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
            }}
          >
            <Wind
              className="h-4 w-4"
              strokeWidth={2}
              style={{
                color: "rgba(70,150,170,0.70)",
                filter: "drop-shadow(0 0 3px rgba(70,150,170,0.2))",
              }}
            />
            <span
              className="text-xs"
              style={{ color: "rgba(60,60,75,0.50)", fontWeight: 500 }}
            >
              Wind
            </span>
            <span
              className="ml-auto text-sm"
              style={{ color: "rgba(20,20,35,0.78)", fontWeight: 700 }}
            >
              12 km/h
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Card({
  variant = "credit",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "profile":
      return <ProfileCard customStyle={customStyle} />;
    case "weather":
      return <WeatherCard customStyle={customStyle} />;
    case "credit":
    default:
      return <CreditCard customStyle={customStyle} />;
  }
}
