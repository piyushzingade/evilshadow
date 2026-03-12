"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronUp,
  ChevronDown,
  Snowflake,
  Wifi,
  Tv,
  Droplets,
  Sun,
  Moon,
  BarChart3,
  User,
  Thermometer,
  Wind,
} from "lucide-react";
import { useTheme } from "next-themes";
import type { StyleComponentProps } from "@/types";

// ─── dark-mode-aware token hook ─────────────────────────────────
function useNeuTokens() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== 'light';

  const bg = isDark ? '#2a2d35' : '#e0e5ec';
  const sd = isDark ? '#1e2127' : '#b8bec7';
  const sl = isDark ? '#3a3f48' : '#ffffff';
  const textPrimary = isDark ? '#e2e8f0' : '#4a5568';
  const textSecondary = isDark ? '#c8d0da' : '#5a6370';
  const textMuted = isDark ? '#8892a0' : '#a0a8b4';
  const textFaint = isDark ? '#4a5058' : '#c8ced6';
  const tickActive = isDark ? '#94a3b8' : '#6b7a8d';
  const tickInactive = isDark ? '#3a3f48' : '#c8ced6';
  const hoverBg = isDark ? '#353a42' : '#d8dde4';

  return {
    isDark, bg, sd, sl, textPrimary, textSecondary, textMuted, textFaint, tickActive, tickInactive, hoverBg,
    extruded: `6px 6px 12px ${sd}, -6px -6px 12px ${sl}`,
    extrudedSm: `4px 4px 8px ${sd}, -4px -4px 8px ${sl}`,
    extrudedXs: `3px 3px 6px ${sd}, -3px -3px 6px ${sl}`,
    inset: `inset 4px 4px 8px ${sd}, inset -4px -4px 8px ${sl}`,
    insetSm: `inset 3px 3px 6px ${sd}, inset -3px -3px 6px ${sl}`,
    insetLg: `inset 6px 6px 12px ${sd}, inset -6px -6px 12px ${sl}`,
  };
}

// ─── Dashboard (thermostat) ───────────────────────────────────────
function Dashboard({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [temp, setTemp] = useState(24);
  const neu = useNeuTokens();

  // Generate tick marks around the dial
  const ticks = Array.from({ length: 24 }, (_, i) => i);
  const minTemp = 16;
  const maxTemp = 32;
  const tempProgress = (temp - minTemp) / (maxTemp - minTemp);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-[family-name:var(--font-neu)] flex flex-col items-center gap-6 rounded-[24px] p-8"
      style={{ backgroundColor: neu.bg, boxShadow: neu.extruded, ...customStyle }}
    >
      {/* Title */}
      <p
        className="text-[10px] font-semibold tracking-[0.25em] uppercase"
        style={{ color: neu.textMuted }}
      >
        Neumorphism
      </p>

      {/* Air Conditioner label row */}
      <div className="flex w-full items-center gap-3">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ backgroundColor: neu.bg, boxShadow: neu.extrudedSm }}
        >
          <Snowflake size={18} style={{ color: neu.textMuted }} strokeWidth={2} />
        </div>
        <div>
          <p
            className="text-sm font-semibold tracking-wide"
            style={{ color: neu.textSecondary }}
          >
            Air Conditioner
          </p>
          <p
            className="text-[11px] font-medium"
            style={{ color: neu.textMuted }}
          >
            Auto Cooling
          </p>
        </div>
      </div>

      {/* Thermostat dial section */}
      <div className="relative flex flex-col items-center gap-5">
        {/* Up arrow */}
        <motion.button
          whileTap={{
            scale: 0.9,
            boxShadow: neu.insetSm,
          }}
          onClick={() => setTemp((t) => Math.min(t + 1, maxTemp))}
          className="flex h-9 w-9 items-center justify-center rounded-full"
          style={{ backgroundColor: neu.bg, color: neu.textMuted, boxShadow: neu.extrudedXs }}
        >
          <ChevronUp size={16} strokeWidth={2.5} />
        </motion.button>

        {/* Circular inset dial */}
        <div
          className="relative flex h-40 w-40 items-center justify-center rounded-full"
          style={{ backgroundColor: neu.bg, boxShadow: neu.insetLg }}
        >
          {/* Tick marks */}
          <div className="absolute inset-2">
            {ticks.map((i) => {
              const angle = (i / ticks.length) * 360 - 90;
              const rad = (angle * Math.PI) / 180;
              const r = 62;
              const x = 50 + (r / 68) * 50 * Math.cos(rad);
              const y = 50 + (r / 68) * 50 * Math.sin(rad);
              const isActive = i / ticks.length <= tempProgress;
              return (
                <div
                  key={i}
                  className="absolute h-1 w-1 rounded-full"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                    backgroundColor: isActive ? neu.tickActive : neu.tickInactive,
                  }}
                />
              );
            })}
          </div>

          {/* Temperature display */}
          <div className="flex flex-col items-center">
            <span
              className="text-[42px] font-bold leading-none tracking-tight"
              style={{ color: neu.textPrimary }}
            >
              {temp}&deg;
            </span>
            <span
              className="mt-1 text-[10px] font-medium tracking-widest uppercase"
              style={{ color: neu.textMuted }}
            >
              Celsius
            </span>
          </div>
        </div>

        {/* Down arrow */}
        <motion.button
          whileTap={{
            scale: 0.9,
            boxShadow: neu.insetSm,
          }}
          onClick={() => setTemp((t) => Math.max(t - 1, minTemp))}
          className="flex h-9 w-9 items-center justify-center rounded-full"
          style={{ backgroundColor: neu.bg, color: neu.textMuted, boxShadow: neu.extrudedXs }}
        >
          <ChevronDown size={16} strokeWidth={2.5} />
        </motion.button>
      </div>

      {/* Bottom info row */}
      <div className="flex w-full items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <Thermometer size={13} style={{ color: neu.textMuted }} />
          <span
            className="text-[11px] font-medium"
            style={{ color: neu.textMuted }}
          >
            Room: 26°
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Wind size={13} style={{ color: neu.textMuted }} />
          <span
            className="text-[11px] font-medium"
            style={{ color: neu.textMuted }}
          >
            Fan: Auto
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Device list ──────────────────────────────────────────────────
const devices = [
  { name: "Air Conditioner", icon: Snowflake, defaultOn: true },
  { name: "Mi Wi-Fi Router", icon: Wifi, defaultOn: true },
  { name: "Smart TV", icon: Tv, defaultOn: false },
  { name: "Humidifier", icon: Droplets, defaultOn: true },
] as const;

function DeviceCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [toggles, setToggles] = useState<Record<string, boolean>>(
    Object.fromEntries(devices.map((d) => [d.name, d.defaultOn]))
  );
  const neu = useNeuTokens();

  const toggle = (name: string) =>
    setToggles((prev) => ({ ...prev, [name]: !prev[name] }));

  const onlineCount = Object.values(toggles).filter(Boolean).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-[family-name:var(--font-neu)] flex flex-col gap-4 rounded-[24px] p-6"
      style={{ backgroundColor: neu.bg, boxShadow: neu.extruded, ...customStyle }}
    >
      {/* Profile header */}
      <div className="mb-1 flex items-center gap-3">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-full"
          style={{ backgroundColor: neu.bg, boxShadow: neu.extrudedSm }}
        >
          <User size={18} style={{ color: neu.textMuted }} strokeWidth={2} />
        </div>
        <div>
          <p
            className="text-[15px] font-semibold tracking-wide"
            style={{ color: neu.textPrimary }}
          >
            Hi, Larry Williams
          </p>
          <p
            className="text-[11px] font-medium"
            style={{ color: neu.textMuted }}
          >
            {onlineCount} devices online
          </p>
        </div>
      </div>

      {/* AI Power Analytics */}
      <div
        className="flex items-center justify-between rounded-2xl px-5 py-3.5"
        style={{ backgroundColor: neu.bg, boxShadow: neu.extrudedSm }}
      >
        <div className="flex items-center gap-2.5">
          <BarChart3 size={16} style={{ color: neu.textMuted }} strokeWidth={2} />
          <span
            className="text-xs font-semibold tracking-wide"
            style={{ color: neu.tickActive }}
          >
            AI Power Analytics
          </span>
        </div>
        <div className="flex items-center gap-2">
          {/* Mini progress bar */}
          <div
            className="h-1.5 w-16 rounded-full"
            style={{ backgroundColor: neu.bg, boxShadow: neu.insetSm }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "94%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full rounded-full bg-gradient-to-r from-[#7ec8a0] to-[#4ade80]"
            />
          </div>
          <span
            className="text-sm font-bold"
            style={{ color: neu.textPrimary }}
          >
            94%
          </span>
        </div>
      </div>

      {/* Device list */}
      <div className="flex flex-col gap-3">
        {devices.map(({ name, icon: Icon }, idx) => {
          const on = toggles[name];
          return (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="flex items-center justify-between rounded-2xl px-4 py-3"
              style={{ backgroundColor: neu.bg, boxShadow: neu.extrudedSm }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ backgroundColor: neu.bg, boxShadow: neu.insetSm }}
                >
                  <Icon size={14} style={{ color: neu.textMuted }} strokeWidth={2} />
                </div>
                <span
                  className="text-xs font-semibold tracking-wide"
                  style={{ color: neu.textSecondary }}
                >
                  {name}
                </span>
              </div>

              {/* Neumorphic toggle switch */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => toggle(name)}
                className="relative h-7 w-14 rounded-full"
                style={{ backgroundColor: neu.bg, boxShadow: neu.insetSm }}
              >
                <motion.span
                  animate={{
                    x: on ? 28 : 3,
                    backgroundColor: on ? "#4ade80" : neu.textFaint,
                    boxShadow: on
                      ? `2px 2px 4px ${neu.sd}, -2px -2px 4px ${neu.sl}, 0 0 8px rgba(74,222,128,0.3)`
                      : neu.extrudedXs,
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute top-[3px] block h-[22px] w-[22px] rounded-full"
                />
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

// ─── Scene selector ───────────────────────────────────────────────
function SceneCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [active, setActive] = useState("morning");
  const sceneCount = 8;
  const neu = useNeuTokens();

  const scenes = [
    {
      id: "morning",
      label: "Morning Scene",
      icon: Sun,
      activeColor: "text-amber-500",
      desc: "Bright & energetic",
    },
    {
      id: "night",
      label: "Night Scene",
      icon: Moon,
      activeColor: "text-slate-400",
      desc: "Calm & relaxing",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-[family-name:var(--font-neu)] flex flex-col items-center gap-5 rounded-[24px] p-8"
      style={{ backgroundColor: neu.bg, boxShadow: neu.extruded, ...customStyle }}
    >
      {/* Header */}
      <div className="flex w-full items-center justify-between">
        <p
          className="text-sm font-semibold tracking-wide"
          style={{ color: neu.textPrimary }}
        >
          Scene Mode
        </p>
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg"
          style={{ backgroundColor: neu.bg, boxShadow: neu.extrudedXs }}
        >
          <Sun size={14} style={{ color: neu.textMuted }} />
        </div>
      </div>

      {/* Scene buttons */}
      <div className="flex w-full gap-4">
        {scenes.map(({ id, label, icon: Icon, activeColor, desc }) => {
          const isActive = active === id;
          return (
            <motion.button
              key={id}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActive(id)}
              animate={{
                boxShadow: isActive ? neu.inset : neu.extruded,
              }}
              transition={{ duration: 0.2 }}
              className="flex flex-1 flex-col items-center gap-2 rounded-2xl px-5 py-5"
              style={{ backgroundColor: neu.bg }}
            >
              <Icon
                size={22}
                className={isActive ? activeColor : undefined}
                style={isActive ? undefined : { color: neu.textMuted }}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className="text-xs font-semibold tracking-wide"
                style={{ color: isActive ? neu.textPrimary : neu.textMuted }}
              >
                {label}
              </span>
              <span
                className="text-[10px] font-medium"
                style={{ color: isActive ? neu.textMuted : neu.textFaint }}
              >
                {desc}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Active scene indicator */}
      <div
        className="flex w-full items-center justify-between rounded-xl px-4 py-3"
        style={{ backgroundColor: neu.bg, boxShadow: neu.insetSm }}
      >
        <div className="flex items-center gap-2">
          <div
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor:
                active === "morning" ? "#f59e0b" : "#64748b",
              boxShadow:
                active === "morning"
                  ? "0 0 6px rgba(245,158,11,0.5)"
                  : "0 0 6px rgba(100,116,139,0.5)",
            }}
          />
          <span
            className="text-[11px] font-medium"
            style={{ color: neu.tickActive }}
          >
            Active: {active === "morning" ? "Morning" : "Night"} mode
          </span>
        </div>
      </div>

      {/* Scene counter */}
      <div className="flex w-full items-center justify-between px-1">
        <p
          className="text-[11px] font-medium"
          style={{ color: neu.textMuted }}
        >
          You created{" "}
          <span className="font-semibold" style={{ color: neu.tickActive }}>{sceneCount}</span>{" "}
          scenes
        </p>
        <button
          className="text-[11px] font-semibold transition-colors"
          style={{ color: neu.tickActive }}
          onMouseEnter={(e) => (e.currentTarget.style.color = neu.textPrimary)}
          onMouseLeave={(e) => (e.currentTarget.style.color = neu.tickActive)}
        >
          See All
        </button>
      </div>
    </motion.div>
  );
}

// ─── Exported wrapper ─────────────────────────────────────────────
export default function Card({
  variant = "dashboard",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "device":
      return <DeviceCard customStyle={customStyle} />;
    case "scene":
      return <SceneCard customStyle={customStyle} />;
    case "dashboard":
    default:
      return <Dashboard customStyle={customStyle} />;
  }
}
