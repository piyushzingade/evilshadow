"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Droplets, Wind, MapPin } from "lucide-react";
import type { StyleComponentProps } from "@/types";

function CreditCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="font-[family-name:var(--font-clean)] relative w-full max-w-[400px] aspect-[1.586/1] rounded-[22px] overflow-hidden"
      style={customStyle}
    >
      {/* === Layer 1: Outer ambient glow === */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-[28px]"
        style={{
          boxShadow:
            "0 0 60px 8px rgba(167,139,250,0.08), 0 0 120px 20px rgba(96,165,250,0.05)",
        }}
      />

      {/* === Layer 2: Glass shell with heavy blur === */}
      <div
        className="absolute inset-0 rounded-[22px] backdrop-blur-[40px] backdrop-saturate-[180%]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0.08) 100%)",
          border: "1px solid rgba(255,255,255,0.35)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.25)",
        }}
      />

      {/* === Layer 3: Inner frost gradient === */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[22px]"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 35%, rgba(255,255,255,0.02) 60%, rgba(200,210,255,0.06) 100%)",
        }}
      />

      {/* === Layer 4: Refraction light streak — top left === */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rotate-[35deg]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* === Layer 5: Secondary refraction — bottom right pastel tint === */}
      <div
        className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rotate-[-20deg]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(167,139,250,0.08) 0%, rgba(96,165,250,0.04) 50%, transparent 80%)",
          filter: "blur(24px)",
        }}
      />

      {/* === Layer 6: Top edge highlight line === */}
      <div
        className="pointer-events-none absolute inset-x-6 top-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.5) 70%, transparent 100%)",
        }}
      />

      {/* Card content */}
      <div className="relative flex h-full flex-col justify-between p-6 z-10">
        {/* Top row -- chip + brand */}
        <div className="flex items-start justify-between">
          {/* EMV Chip */}
          <div
            className="h-10 w-13 rounded-md overflow-hidden"
            style={{
              background:
                "linear-gradient(145deg, rgba(253,224,71,0.45) 0%, rgba(250,204,21,0.25) 50%, rgba(234,179,8,0.2) 100%)",
              border: "1px solid rgba(253,224,71,0.3)",
              boxShadow:
                "inset 0 1px 2px rgba(255,255,255,0.2), inset 0 -1px 2px rgba(0,0,0,0.06)",
            }}
          >
            <div className="mt-2.5 ml-1.5 grid grid-cols-3 gap-[2px]">
              <div className="h-[3px] w-3 rounded-sm bg-yellow-600/25" />
              <div className="h-[3px] w-3 rounded-sm bg-yellow-600/15" />
              <div className="h-[3px] w-3 rounded-sm bg-yellow-600/25" />
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            {/* Mastercard overlapping circles */}
            <div className="flex items-center">
              <div
                className="h-8 w-8 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 40% 35%, rgba(239,68,68,0.9) 0%, rgba(220,38,38,0.7) 100%)",
                  boxShadow: "2px 0 8px rgba(239,68,68,0.2)",
                }}
              />
              <div
                className="-ml-3 h-8 w-8 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 60% 35%, rgba(251,146,60,0.9) 0%, rgba(234,88,12,0.7) 100%)",
                  boxShadow: "-2px 0 8px rgba(251,146,60,0.15)",
                }}
              />
            </div>
            {/* VISA text */}
            <span
              className="text-xl font-bold italic tracking-wider"
              style={{
                color: "rgba(26,31,113,0.65)",
                textShadow: "0 1px 2px rgba(255,255,255,0.15)",
              }}
            >
              VISA
            </span>
          </div>
        </div>

        {/* Card Number */}
        <div className="flex justify-between font-mono text-[22px] tracking-[0.18em] text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
          <span>4556</span>
          <span>3325</span>
          <span>8590</span>
          <span>3732</span>
        </div>

        {/* Bottom row -- holder name, expiry, CVV */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-0.5">
              owner&apos;s name
            </p>
            <p className="text-sm font-semibold tracking-wide text-white/90">
              Brian Jones
            </p>
          </div>
          <div className="text-center">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-0.5">
              Exp
            </p>
            <p className="text-sm font-semibold text-white/90">09/25</p>
          </div>
          <div className="text-right">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-0.5">
              CVV
            </p>
            <p className="text-sm font-semibold text-white/90">950</p>
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="font-[family-name:var(--font-clean)] relative w-full max-w-sm rounded-[22px] overflow-hidden"
      style={customStyle}
    >
      {/* === Layer 1: Outer ambient glow === */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-[28px]"
        style={{
          boxShadow:
            "0 0 50px 6px rgba(34,211,238,0.06), 0 0 100px 16px rgba(52,211,153,0.04)",
        }}
      />

      {/* === Layer 2: Glass shell === */}
      <div
        className="absolute inset-0 rounded-[22px] backdrop-blur-[40px] backdrop-saturate-[180%]"
        style={{
          background:
            "linear-gradient(155deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.06) 100%)",
          border: "1px solid rgba(255,255,255,0.3)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
      />

      {/* === Layer 3: Inner frost gradient === */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[22px]"
        style={{
          background:
            "linear-gradient(165deg, rgba(255,255,255,0.18) 0%, transparent 40%, rgba(34,211,238,0.03) 100%)",
        }}
      />

      {/* === Layer 4: Top refraction streak === */}
      <div
        className="pointer-events-none absolute -top-20 -left-20 h-60 w-60 rotate-[40deg]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)",
          filter: "blur(25px)",
        }}
      />

      {/* === Layer 5: Top edge highlight === */}
      <div
        className="pointer-events-none absolute inset-x-8 top-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.45) 50%, transparent)",
        }}
      />

      <div className="relative p-8 text-center z-10">
        {/* Avatar */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="mx-auto mb-5 flex h-22 w-22 items-center justify-center rounded-full"
          style={{
            background:
              "linear-gradient(135deg, rgba(34,211,238,0.35) 0%, rgba(52,211,153,0.25) 100%)",
            border: "2px solid rgba(255,255,255,0.35)",
            boxShadow:
              "0 0 30px rgba(34,211,238,0.12), 0 0 60px rgba(52,211,153,0.06), inset 0 1px 0 rgba(255,255,255,0.2)",
            backdropFilter: "blur(12px)",
          }}
        >
          <span className="text-2xl font-bold text-white tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.15)]">
            BJ
          </span>
        </motion.div>

        {/* Name & Title */}
        <h3 className="text-lg font-bold text-white tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
          Brian Jones
        </h3>
        <p className="mb-7 mt-1 text-sm text-white/50 font-medium">
          Senior Product Designer
        </p>

        {/* Stats row */}
        <div
          className="flex items-center justify-around rounded-xl py-4"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-0.5 ${
                i < stats.length - 1 ? "border-r border-white/10 pr-6" : ""
              }`}
            >
              <span className="text-xl font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                {stat.value}
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-white/40">
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="font-[family-name:var(--font-clean)] relative w-full max-w-sm rounded-[22px] overflow-hidden"
      style={customStyle}
    >
      {/* === Layer 1: Outer ambient glow — warm sun tint === */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-[28px]"
        style={{
          boxShadow:
            "0 0 50px 6px rgba(253,224,71,0.06), 0 0 100px 16px rgba(251,191,36,0.04)",
        }}
      />

      {/* === Layer 2: Glass shell with heavy blur === */}
      <div
        className="absolute inset-0 rounded-[22px] backdrop-blur-[40px] backdrop-saturate-[180%]"
        style={{
          background:
            "linear-gradient(150deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.06) 100%)",
          border: "1px solid rgba(255,255,255,0.3)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
      />

      {/* === Layer 3: Warm/cool frost gradient === */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[22px]"
        style={{
          background:
            "linear-gradient(155deg, rgba(253,224,71,0.06) 0%, transparent 40%, rgba(96,165,250,0.04) 100%)",
        }}
      />

      {/* === Layer 4: Top refraction streak === */}
      <div
        className="pointer-events-none absolute -top-20 -left-16 h-56 w-56 rotate-[40deg]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, transparent 55%)",
          filter: "blur(24px)",
        }}
      />

      {/* === Layer 5: Top edge highlight === */}
      <div
        className="pointer-events-none absolute inset-x-6 top-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.45) 50%, transparent)",
        }}
      />

      <div className="relative p-6 z-10">
        {/* Top -- Location */}
        <div className="mb-1 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <MapPin className="h-3 w-3 text-white/40" strokeWidth={2} />
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
                Current Weather
              </p>
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
              San Francisco
            </h3>
          </div>
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sun
              className="h-12 w-12 text-yellow-300"
              strokeWidth={1.5}
              style={{
                filter:
                  "drop-shadow(0 0 14px rgba(253,224,71,0.45)) drop-shadow(0 0 30px rgba(253,224,71,0.2))",
              }}
            />
          </motion.div>
        </div>

        {/* Temperature */}
        <div className="my-5">
          <span className="text-7xl font-extralight text-white tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
            23
          </span>
          <span className="relative -top-6 ml-1 text-2xl font-light text-white/55">
            °C
          </span>
        </div>

        {/* Details row */}
        <div className="flex gap-3">
          <div
            className="flex flex-1 items-center gap-2.5 rounded-xl px-4 py-3"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <Droplets
              className="h-4 w-4 text-blue-300/80"
              strokeWidth={2}
              style={{
                filter: "drop-shadow(0 0 4px rgba(147,197,253,0.3))",
              }}
            />
            <span className="text-xs font-medium text-white/45">Humidity</span>
            <span className="ml-auto text-sm font-bold text-white">62%</span>
          </div>
          <div
            className="flex flex-1 items-center gap-2.5 rounded-xl px-4 py-3"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <Wind
              className="h-4 w-4 text-cyan-300/80"
              strokeWidth={2}
              style={{
                filter: "drop-shadow(0 0 4px rgba(103,232,249,0.3))",
              }}
            />
            <span className="text-xs font-medium text-white/45">Wind</span>
            <span className="ml-auto text-sm font-bold text-white">
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
