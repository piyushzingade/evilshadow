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
import type { StyleComponentProps } from "@/types";

// ─── shadow tokens ────────────────────────────────────────────────
const extruded = "6px 6px 12px #b8bec7, -6px -6px 12px #ffffff";
const extrudedSm = "4px 4px 8px #b8bec7, -4px -4px 8px #ffffff";
const extrudedXs = "3px 3px 6px #b8bec7, -3px -3px 6px #ffffff";
const inset = "inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff";
const insetSm = "inset 3px 3px 6px #b8bec7, inset -3px -3px 6px #ffffff";
const insetLg = "inset 6px 6px 12px #b8bec7, inset -6px -6px 12px #ffffff";

// ─── Dashboard (thermostat) ───────────────────────────────────────
function Dashboard({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [temp, setTemp] = useState(24);

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
      className="font-[family-name:var(--font-neu)] flex flex-col items-center gap-6 rounded-[24px] bg-[#e0e5ec] p-8"
      style={{ boxShadow: extruded, ...customStyle }}
    >
      {/* Title */}
      <p className="text-[10px] font-semibold tracking-[0.25em] text-[#a0a8b4] uppercase">
        Neumorphism
      </p>

      {/* Air Conditioner label row */}
      <div className="flex w-full items-center gap-3">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e0e5ec]"
          style={{ boxShadow: extrudedSm }}
        >
          <Snowflake size={18} className="text-[#8a93a0]" strokeWidth={2} />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-[#5a6370]">
            Air Conditioner
          </p>
          <p className="text-[11px] font-medium text-[#a0a8b4]">
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
            boxShadow: insetSm,
          }}
          onClick={() => setTemp((t) => Math.min(t + 1, maxTemp))}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e0e5ec] text-[#8a93a0]"
          style={{ boxShadow: extrudedXs }}
        >
          <ChevronUp size={16} strokeWidth={2.5} />
        </motion.button>

        {/* Circular inset dial */}
        <div
          className="relative flex h-40 w-40 items-center justify-center rounded-full bg-[#e0e5ec]"
          style={{ boxShadow: insetLg }}
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
                    backgroundColor: isActive ? "#6b7a8d" : "#c8ced6",
                  }}
                />
              );
            })}
          </div>

          {/* Temperature display */}
          <div className="flex flex-col items-center">
            <span className="text-[42px] font-bold leading-none tracking-tight text-[#4a5568]">
              {temp}&deg;
            </span>
            <span className="mt-1 text-[10px] font-medium tracking-widest text-[#a0a8b4] uppercase">
              Celsius
            </span>
          </div>
        </div>

        {/* Down arrow */}
        <motion.button
          whileTap={{
            scale: 0.9,
            boxShadow: insetSm,
          }}
          onClick={() => setTemp((t) => Math.max(t - 1, minTemp))}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e0e5ec] text-[#8a93a0]"
          style={{ boxShadow: extrudedXs }}
        >
          <ChevronDown size={16} strokeWidth={2.5} />
        </motion.button>
      </div>

      {/* Bottom info row */}
      <div className="flex w-full items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <Thermometer size={13} className="text-[#a0a8b4]" />
          <span className="text-[11px] font-medium text-[#a0a8b4]">
            Room: 26°
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Wind size={13} className="text-[#a0a8b4]" />
          <span className="text-[11px] font-medium text-[#a0a8b4]">
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

  const toggle = (name: string) =>
    setToggles((prev) => ({ ...prev, [name]: !prev[name] }));

  const onlineCount = Object.values(toggles).filter(Boolean).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-[family-name:var(--font-neu)] flex flex-col gap-4 rounded-[24px] bg-[#e0e5ec] p-6"
      style={{ boxShadow: extruded, ...customStyle }}
    >
      {/* Profile header */}
      <div className="mb-1 flex items-center gap-3">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e0e5ec]"
          style={{ boxShadow: extrudedSm }}
        >
          <User size={18} className="text-[#8a93a0]" strokeWidth={2} />
        </div>
        <div>
          <p className="text-[15px] font-semibold tracking-wide text-[#4a5568]">
            Hi, Larry Williams
          </p>
          <p className="text-[11px] font-medium text-[#a0a8b4]">
            {onlineCount} devices online
          </p>
        </div>
      </div>

      {/* AI Power Analytics */}
      <div
        className="flex items-center justify-between rounded-2xl bg-[#e0e5ec] px-5 py-3.5"
        style={{ boxShadow: extrudedSm }}
      >
        <div className="flex items-center gap-2.5">
          <BarChart3 size={16} className="text-[#8a93a0]" strokeWidth={2} />
          <span className="text-xs font-semibold tracking-wide text-[#6b7a8d]">
            AI Power Analytics
          </span>
        </div>
        <div className="flex items-center gap-2">
          {/* Mini progress bar */}
          <div
            className="h-1.5 w-16 rounded-full bg-[#e0e5ec]"
            style={{ boxShadow: insetSm }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "94%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full rounded-full bg-gradient-to-r from-[#7ec8a0] to-[#4ade80]"
            />
          </div>
          <span className="text-sm font-bold text-[#4a5568]">94%</span>
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
              className="flex items-center justify-between rounded-2xl bg-[#e0e5ec] px-4 py-3"
              style={{ boxShadow: extrudedSm }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e0e5ec]"
                  style={{ boxShadow: insetSm }}
                >
                  <Icon size={14} className="text-[#8a93a0]" strokeWidth={2} />
                </div>
                <span className="text-xs font-semibold tracking-wide text-[#5a6370]">
                  {name}
                </span>
              </div>

              {/* Neumorphic toggle switch */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => toggle(name)}
                className="relative h-7 w-14 rounded-full bg-[#e0e5ec]"
                style={{ boxShadow: insetSm }}
              >
                <motion.span
                  animate={{
                    x: on ? 28 : 3,
                    backgroundColor: on ? "#4ade80" : "#c8ced6",
                    boxShadow: on
                      ? "2px 2px 4px #b8bec7, -2px -2px 4px #ffffff, 0 0 8px rgba(74,222,128,0.3)"
                      : extrudedXs,
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
      activeColor: "text-indigo-400",
      desc: "Calm & relaxing",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-[family-name:var(--font-neu)] flex flex-col items-center gap-5 rounded-[24px] bg-[#e0e5ec] p-8"
      style={{ boxShadow: extruded, ...customStyle }}
    >
      {/* Header */}
      <div className="flex w-full items-center justify-between">
        <p className="text-sm font-semibold tracking-wide text-[#4a5568]">
          Scene Mode
        </p>
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e0e5ec]"
          style={{ boxShadow: extrudedXs }}
        >
          <Sun size={14} className="text-[#a0a8b4]" />
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
                boxShadow: isActive ? inset : extruded,
              }}
              transition={{ duration: 0.2 }}
              className="flex flex-1 flex-col items-center gap-2 rounded-2xl bg-[#e0e5ec] px-5 py-5"
            >
              <Icon
                size={22}
                className={isActive ? activeColor : "text-[#a0a8b4]"}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={`text-xs font-semibold tracking-wide ${
                  isActive ? "text-[#4a5568]" : "text-[#a0a8b4]"
                }`}
              >
                {label}
              </span>
              <span
                className={`text-[10px] font-medium ${
                  isActive ? "text-[#8a93a0]" : "text-[#c8ced6]"
                }`}
              >
                {desc}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Active scene indicator */}
      <div
        className="flex w-full items-center justify-between rounded-xl bg-[#e0e5ec] px-4 py-3"
        style={{ boxShadow: insetSm }}
      >
        <div className="flex items-center gap-2">
          <div
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor:
                active === "morning" ? "#f59e0b" : "#818cf8",
              boxShadow:
                active === "morning"
                  ? "0 0 6px rgba(245,158,11,0.5)"
                  : "0 0 6px rgba(129,140,248,0.5)",
            }}
          />
          <span className="text-[11px] font-medium text-[#6b7a8d]">
            Active: {active === "morning" ? "Morning" : "Night"} mode
          </span>
        </div>
      </div>

      {/* Scene counter */}
      <div className="flex w-full items-center justify-between px-1">
        <p className="text-[11px] font-medium text-[#a0a8b4]">
          You created{" "}
          <span className="font-semibold text-[#6b7a8d]">{sceneCount}</span>{" "}
          scenes
        </p>
        <button className="text-[11px] font-semibold text-[#6b7a8d] transition-colors hover:text-[#4a5568]">
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
