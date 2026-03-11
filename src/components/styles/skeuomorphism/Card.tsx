"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cloud, Sun } from "lucide-react";
import { StyleComponentProps } from "@/types";

// ---- Clock variant ----
// Realistic analog clock with multi-layer metallic bezel, white radial-gradient face,
// thin tick marks, hour numbers at 12/3/6/9, three hands, blue second hand, metallic center cap
function ClockCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  const [time, setTime] = useState({ h: 10, m: 10, s: 30 });

  useEffect(() => {
    const now = new Date();
    setTime({ h: now.getHours(), m: now.getMinutes(), s: now.getSeconds() });
    const id = setInterval(() => {
      const d = new Date();
      setTime({ h: d.getHours(), m: d.getMinutes(), s: d.getSeconds() });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const hourDeg = (time.h % 12) * 30 + time.m * 0.5;
  const minuteDeg = time.m * 6;
  const secondDeg = time.s * 6;

  const formatTime = () => {
    const h12 = time.h % 12 || 12;
    const ampm = time.h >= 12 ? "PM" : "AM";
    return `${h12}:${String(time.m).padStart(2, "0")} ${ampm}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center gap-3"
      style={{ fontFamily: "Inter, system-ui, sans-serif", ...customStyle }}
    >
      {/* Outermost metallic bezel - brushed silver with 5-stop gradient */}
      <div
        className="relative rounded-full p-[7px]"
        style={{
          background:
            "linear-gradient(145deg, #eaeaef 0%, #d0d0d8 20%, #b8b8c4 45%, #c8c8d2 70%, #e0e0e8 90%, #eeeef2 100%)",
          boxShadow: [
            "0 12px 32px rgba(0,0,0,0.28)",
            "0 4px 12px rgba(0,0,0,0.18)",
            "0 1px 3px rgba(0,0,0,0.12)",
            "inset 0 1px 0 rgba(255,255,255,0.65)",
            "inset 0 -1px 0 rgba(0,0,0,0.08)",
          ].join(", "),
        }}
      >
        {/* Second metallic ring - polished chrome inner edge */}
        <div
          className="rounded-full p-[3px]"
          style={{
            background:
              "linear-gradient(to bottom, #d8d8de 0%, #a8a8b2 25%, #909098 50%, #a8a8b2 75%, #c4c4cc 100%)",
            boxShadow:
              "inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -1px 3px rgba(0,0,0,0.2), inset 1px 0 2px rgba(255,255,255,0.15)",
          }}
        >
          {/* Third ring - thin highlight separator */}
          <div
            className="rounded-full p-[1.5px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.12) 50%, rgba(0,0,0,0.06) 100%)",
            }}
          >
            {/* Clock face - white with radial gradient for depth */}
            <div
              className="relative w-48 h-48 rounded-full overflow-hidden"
              style={{
                background:
                  "radial-gradient(circle at 50% 38%, #ffffff 0%, #fcfcfe 30%, #f5f5fa 55%, #eeeef4 75%, #e6e6ee 100%)",
                boxShadow: [
                  "inset 0 3px 10px rgba(0,0,0,0.1)",
                  "inset 0 1px 4px rgba(0,0,0,0.06)",
                  "inset 0 -2px 6px rgba(255,255,255,0.4)",
                  "inset 0 0 20px rgba(0,0,0,0.03)",
                ].join(", "),
              }}
            >
              {/* Subtle texture overlay on face */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 45% 35%, rgba(255,255,255,0.4) 0%, transparent 50%)",
                }}
              />

              {/* 60 minute tick marks */}
              {Array.from({ length: 60 }).map((_, i) => {
                const angle = i * 6;
                const isHour = i % 5 === 0;
                const isMain = i % 15 === 0;
                if (!isHour) {
                  return (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        left: "50%",
                        top: "50%",
                        width: 0.8,
                        height: 4,
                        background: "#c4c4cc",
                        borderRadius: 0.5,
                        transformOrigin: "50% 0",
                        transform: `translate(-50%, 0) rotate(${angle}deg) translate(0, -89px)`,
                      }}
                    />
                  );
                }
                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "50%",
                      width: isMain ? 2.5 : 1.8,
                      height: isMain ? 14 : 9,
                      background: isMain
                        ? "linear-gradient(to bottom, #3f3f46, #27272a)"
                        : "#71717a",
                      borderRadius: 1,
                      transformOrigin: "50% 0",
                      transform: `translate(-50%, 0) rotate(${angle}deg) translate(0, -88px)`,
                      boxShadow: isMain
                        ? "0 1px 1px rgba(0,0,0,0.15)"
                        : "none",
                    }}
                  />
                );
              })}

              {/* Hour numbers at 12, 3, 6, 9 */}
              {[
                { num: "12", x: 50, y: 15 },
                { num: "3", x: 85, y: 48 },
                { num: "6", x: 50, y: 82 },
                { num: "9", x: 15, y: 48 },
              ].map((item) => (
                <span
                  key={item.num}
                  className="absolute text-[11px] font-semibold"
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    transform: "translate(-50%, -50%)",
                    fontFamily: "Inter, system-ui, sans-serif",
                    color: "#52525b",
                    textShadow: "0 0.5px 0 rgba(255,255,255,0.7)",
                  }}
                >
                  {item.num}
                </span>
              ))}

              {/* Hour hand - tapered, dark steel */}
              <div
                className="absolute z-10"
                style={{
                  left: "50%",
                  top: "50%",
                  width: 4,
                  height: 36,
                  background:
                    "linear-gradient(90deg, #18181b 0%, #3f3f46 40%, #27272a 60%, #18181b 100%)",
                  borderRadius: "2px 2px 1px 1px",
                  transformOrigin: "50% 100%",
                  transform: `translate(-50%, -100%) rotate(${hourDeg}deg)`,
                  boxShadow:
                    "1px 2px 4px rgba(0,0,0,0.3), -0.5px 0 1px rgba(0,0,0,0.15)",
                }}
              />

              {/* Minute hand - thinner, slightly lighter steel */}
              <div
                className="absolute z-10"
                style={{
                  left: "50%",
                  top: "50%",
                  width: 2.8,
                  height: 54,
                  background:
                    "linear-gradient(90deg, #27272a 0%, #52525b 40%, #3f3f46 60%, #27272a 100%)",
                  borderRadius: "1.5px 1.5px 1px 1px",
                  transformOrigin: "50% 100%",
                  transform: `translate(-50%, -100%) rotate(${minuteDeg}deg)`,
                  boxShadow:
                    "1px 1px 3px rgba(0,0,0,0.25), -0.5px 0 1px rgba(0,0,0,0.1)",
                }}
              />

              {/* Second hand - thin blue with counterweight */}
              <div
                className="absolute z-10"
                style={{
                  left: "50%",
                  top: "50%",
                  width: 1.2,
                  height: 62,
                  background: "#3b82f6",
                  borderRadius: 0.6,
                  transformOrigin: "50% calc(100% + 14px)",
                  transform: `translate(-50%, calc(-100% - 14px)) rotate(${secondDeg}deg)`,
                  boxShadow: "0 0 3px rgba(59,130,246,0.45)",
                }}
              />
              {/* Second hand counterweight circle */}
              <div
                className="absolute z-10 rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  width: 6,
                  height: 6,
                  background: "#3b82f6",
                  transformOrigin: "50% calc(-62px)",
                  transform: `translate(-50%, 8px) rotate(${secondDeg}deg)`,
                  boxShadow: "0 0 2px rgba(59,130,246,0.4)",
                }}
              />

              {/* Center cap - polished metallic sphere */}
              <div
                className="absolute left-1/2 top-1/2 w-[18px] h-[18px] rounded-full z-20"
                style={{
                  transform: "translate(-50%, -50%)",
                  background:
                    "radial-gradient(circle at 38% 32%, #e8e8ea 0%, #a0a0a8 25%, #71717a 50%, #52525b 70%, #3f3f46 85%, #27272a 100%)",
                  boxShadow: [
                    "0 2px 4px rgba(0,0,0,0.35)",
                    "0 1px 2px rgba(0,0,0,0.2)",
                    "inset 0 1px 2px rgba(255,255,255,0.35)",
                    "inset 0 -1px 1px rgba(0,0,0,0.2)",
                  ].join(", "),
                }}
              >
                {/* Specular highlight on cap */}
                <div
                  className="absolute rounded-full"
                  style={{
                    top: 3,
                    left: 4,
                    width: 7,
                    height: 5,
                    background:
                      "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clock label - city and time */}
      <div className="text-center mt-1">
        <div
          className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400"
          style={{
            textShadow: "0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          New York
        </div>
        <div
          className="text-sm font-medium text-zinc-600 mt-0.5 tabular-nums"
          style={{
            textShadow: "0 1px 0 rgba(255,255,255,0.6)",
            letterSpacing: "-0.01em",
          }}
        >
          {formatTime()}
        </div>
      </div>
    </motion.div>
  );
}

// ---- Alarm variant ----
// iOS-style alarm list with gradient bg, white rounded alarm cards, toggle switches
function AlarmCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const initialAlarms = [
    {
      time: "2:45",
      period: "PM",
      label: "Alarm",
      activeDays: [1, 2, 3, 4, 5],
      on: true,
    },
    {
      time: "6:12",
      period: "AM",
      label: "Workout",
      activeDays: [1, 3, 5],
      on: true,
    },
    {
      time: "10:30",
      period: "AM",
      label: "Spanish Class",
      activeDays: [2, 4, 6],
      on: false,
    },
  ];

  const [alarms, setAlarms] = useState(initialAlarms);

  const toggleAlarm = (index: number) => {
    setAlarms((prev) =>
      prev.map((a, i) => (i === index ? { ...a, on: !a.on } : a))
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-[290px] rounded-3xl p-4"
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        background:
          "linear-gradient(180deg, #f0eff5 0%, #eae9f1 25%, #e5e4ed 50%, #e2e1ea 75%, #dddce6 100%)",
        boxShadow: [
          "0 10px 36px rgba(0,0,0,0.14)",
          "0 3px 10px rgba(0,0,0,0.08)",
          "0 1px 3px rgba(0,0,0,0.06)",
          "inset 0 1px 0 rgba(255,255,255,0.75)",
          "inset 0 -1px 0 rgba(0,0,0,0.04)",
        ].join(", "),
        ...customStyle,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500"
          style={{ textShadow: "0 1px 0 rgba(255,255,255,0.7)" }}
        >
          Alarms
        </span>
        <span
          className="text-[11px] font-semibold text-indigo-500 cursor-pointer"
          style={{ textShadow: "0 1px 0 rgba(255,255,255,0.5)" }}
        >
          + Add
        </span>
      </div>

      {/* Alarm entries */}
      <div className="space-y-2.5">
        {alarms.map((alarm, i) => (
          <div
            key={i}
            className="rounded-2xl px-4 py-3"
            style={{
              background:
                "linear-gradient(180deg, #ffffff 0%, #fdfdfff 30%, #f9f9fc 60%, #f5f5f9 100%)",
              boxShadow: [
                "0 3px 10px rgba(0,0,0,0.07)",
                "0 1px 4px rgba(0,0,0,0.04)",
                "0 0.5px 1px rgba(0,0,0,0.03)",
                "inset 0 1px 0 rgba(255,255,255,0.95)",
                "inset 0 -0.5px 0 rgba(0,0,0,0.02)",
              ].join(", "),
              border: "1px solid rgba(0,0,0,0.04)",
            }}
          >
            {/* Time and toggle row */}
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-baseline gap-1.5">
                <span
                  className="text-[26px] font-light text-zinc-700"
                  style={{
                    letterSpacing: "-0.03em",
                    textShadow: "0 0.5px 0 rgba(255,255,255,0.8)",
                  }}
                >
                  {alarm.time}
                </span>
                <span className="text-[11px] font-medium text-zinc-400">
                  {alarm.period}
                </span>
              </div>

              {/* iOS-style toggle with realistic physics */}
              <button
                onClick={() => toggleAlarm(i)}
                className="relative w-[46px] h-[28px] rounded-full cursor-pointer flex-shrink-0 focus:outline-none"
                style={{
                  background: alarm.on
                    ? "linear-gradient(180deg, #818cf8 0%, #6366f1 30%, #4f46e5 70%, #4338ca 100%)"
                    : "linear-gradient(180deg, #d4d4d8 0%, #b8b8be 30%, #a1a1aa 70%, #94949c 100%)",
                  boxShadow: [
                    "inset 0 2px 5px rgba(0,0,0,0.18)",
                    "inset 0 0.5px 1px rgba(0,0,0,0.1)",
                    `0 1px 0 rgba(255,255,255,0.5)`,
                    alarm.on
                      ? "inset 0 -1px 2px rgba(99,102,241,0.3)"
                      : "inset 0 -1px 2px rgba(0,0,0,0.05)",
                  ].join(", "),
                  border: `1px solid ${alarm.on ? "#3730a3" : "#88888e"}`,
                  transition: "background 0.25s ease, border-color 0.25s ease",
                }}
              >
                {/* Inner track shadow for depth */}
                <div
                  className="absolute inset-[1px] rounded-full"
                  style={{
                    boxShadow:
                      "inset 0 1px 3px rgba(0,0,0,0.12)",
                  }}
                />
                {/* Spherical metallic knob */}
                <motion.div
                  animate={{ x: alarm.on ? 18 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute top-[2px] left-[2px] w-[22px] h-[22px] rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 38% 32%, #ffffff 0%, #f5f5f7 15%, #e8e8ec 35%, #d4d4da 55%, #c4c4cc 75%, #b8b8c0 100%)",
                    boxShadow: [
                      "0 2px 5px rgba(0,0,0,0.22)",
                      "0 1px 2px rgba(0,0,0,0.12)",
                      "inset 0 1px 1px rgba(255,255,255,0.95)",
                      "inset 0 -1px 2px rgba(0,0,0,0.08)",
                    ].join(", "),
                    border: "0.5px solid rgba(255,255,255,0.6)",
                  }}
                >
                  {/* Specular highlight on knob */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      top: 3,
                      left: 4,
                      width: 10,
                      height: 7,
                      background:
                        "radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 100%)",
                    }}
                  />
                </motion.div>
              </button>
            </div>

            {/* Label */}
            <div
              className="text-[10px] font-medium text-zinc-400 mb-2 uppercase tracking-[0.08em]"
              style={{ textShadow: "0 0.5px 0 rgba(255,255,255,0.6)" }}
            >
              {alarm.label}
            </div>

            {/* Day selectors */}
            <div className="flex gap-1">
              {days.map((day, di) => {
                const isActive = alarm.activeDays.includes(di);
                return (
                  <span
                    key={di}
                    className="text-[9px] font-bold px-[6px] py-[3px] rounded-md"
                    style={{
                      color: isActive
                        ? alarm.on
                          ? "#4f46e5"
                          : "#6b7280"
                        : "#b0b0b8",
                      background: isActive
                        ? alarm.on
                          ? "linear-gradient(180deg, rgba(99,102,241,0.12) 0%, rgba(99,102,241,0.06) 100%)"
                          : "rgba(0,0,0,0.04)"
                        : "transparent",
                      boxShadow: isActive
                        ? "inset 0 0.5px 1px rgba(0,0,0,0.04)"
                        : "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {day}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ---- Weather variant ----
// Dark indigo pill badge + light weather detail card
function WeatherCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center gap-4"
      style={{ fontFamily: "Inter, system-ui, sans-serif", ...customStyle }}
    >
      {/* Floating dark indigo pill badge */}
      <div
        className="flex items-center gap-3.5 px-5 py-3.5 rounded-full"
        style={{
          background:
            "linear-gradient(135deg, #3730a3 0%, #312e81 25%, #1e1b4b 55%, #1a1836 80%, #1e293b 100%)",
          boxShadow: [
            "0 10px 28px rgba(30,27,75,0.55)",
            "0 4px 14px rgba(0,0,0,0.35)",
            "0 2px 6px rgba(0,0,0,0.2)",
            "inset 0 1px 0 rgba(255,255,255,0.12)",
            "inset 0 -1px 0 rgba(0,0,0,0.25)",
          ].join(", "),
          border: "1px solid rgba(99,102,241,0.18)",
        }}
      >
        {/* Time and city info */}
        <div className="flex flex-col">
          <span
            className="text-white font-bold text-lg leading-tight"
            style={{
              letterSpacing: "-0.02em",
              textShadow: "0 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            7:30 PM
          </span>
          <span
            className="text-indigo-300/80 text-[10px] font-medium tracking-wide"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
          >
            Today, +7Hrs
          </span>
          <span
            className="text-white text-[13px] font-semibold mt-0.5"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
          >
            Istanbul
          </span>
        </div>

        {/* Weather icon with ambient glow */}
        <div className="relative flex-shrink-0">
          <div
            className="relative w-11 h-11 flex items-center justify-center"
            style={{
              filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))",
            }}
          >
            {/* Ambient sun glow behind cloud */}
            <div
              className="absolute -top-1 -right-1 w-6 h-6 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(251,191,36,0.4) 0%, rgba(251,191,36,0) 70%)",
              }}
            />
            <Cloud className="w-7 h-7 text-slate-300/90" strokeWidth={2} />
            <Sun
              className="absolute -top-1.5 -right-1.5 w-[18px] h-[18px] text-amber-400"
              strokeWidth={2}
              style={{
                filter: "drop-shadow(0 0 4px rgba(251,191,36,0.65))",
              }}
            />
          </div>
        </div>
      </div>

      {/* Weather details card - light surface */}
      <div
        className="w-[268px] rounded-2xl p-5"
        style={{
          background:
            "linear-gradient(180deg, #f2f1f7 0%, #eceaf3 30%, #e8e7ef 60%, #e4e3ec 100%)",
          boxShadow: [
            "0 6px 20px rgba(0,0,0,0.1)",
            "0 2px 8px rgba(0,0,0,0.06)",
            "0 1px 3px rgba(0,0,0,0.04)",
            "inset 0 1px 0 rgba(255,255,255,0.75)",
            "inset 0 -0.5px 0 rgba(0,0,0,0.04)",
          ].join(", "),
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div
              className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400"
              style={{ textShadow: "0 1px 0 rgba(255,255,255,0.7)" }}
            >
              Weather
            </div>
            <div
              className="text-lg font-bold text-zinc-700 mt-0.5"
              style={{
                letterSpacing: "-0.01em",
                textShadow: "0 0.5px 0 rgba(255,255,255,0.6)",
              }}
            >
              Istanbul
            </div>
          </div>

          {/* Weather icon badge - raised surface */}
          <div
            className="w-[52px] h-[52px] rounded-xl flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #e8eeff 0%, #dde4ff 30%, #cdd6fe 60%, #c7d2fe 100%)",
              boxShadow: [
                "0 3px 8px rgba(99,102,241,0.15)",
                "0 1px 3px rgba(0,0,0,0.06)",
                "inset 0 1px 0 rgba(255,255,255,0.8)",
                "inset 0 -1px 2px rgba(99,102,241,0.08)",
              ].join(", "),
              border: "1px solid rgba(99,102,241,0.1)",
            }}
          >
            <Cloud className="w-6 h-6 text-indigo-400" strokeWidth={2} />
          </div>
        </div>

        {/* Temperature and condition */}
        <div className="flex items-end justify-between">
          <div
            className="text-[40px] font-extralight text-zinc-600 leading-none"
            style={{
              letterSpacing: "-0.04em",
              textShadow: "0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            22
            <span className="text-[22px] font-light text-zinc-400 ml-0.5">
              °C
            </span>
          </div>

          {/* Condition badge */}
          <div
            className="rounded-lg px-3 py-1.5 text-[11px] font-semibold text-indigo-600"
            style={{
              background:
                "linear-gradient(180deg, rgba(99,102,241,0.1) 0%, rgba(99,102,241,0.06) 100%)",
              border: "1px solid rgba(99,102,241,0.12)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.04)",
            }}
          >
            Partly Cloudy
          </div>
        </div>

        {/* Detail row - humidity and wind */}
        <div className="flex gap-2.5 mt-4">
          {[
            { label: "Humidity", value: "58%", color: "#60a5fa" },
            { label: "Wind", value: "14 km/h", color: "#34d399" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex-1 rounded-xl px-3 py-2.5"
              style={{
                background:
                  "linear-gradient(180deg, #ffffff 0%, #f8f8fc 50%, #f4f4f8 100%)",
                boxShadow: [
                  "0 2px 6px rgba(0,0,0,0.05)",
                  "0 0.5px 2px rgba(0,0,0,0.03)",
                  "inset 0 1px 0 rgba(255,255,255,0.9)",
                ].join(", "),
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="text-[9px] font-semibold uppercase tracking-[0.1em] text-zinc-400 mb-1"
                style={{ textShadow: "0 0.5px 0 rgba(255,255,255,0.6)" }}
              >
                {stat.label}
              </div>
              <div
                className="text-sm font-bold text-zinc-600"
                style={{
                  textShadow: "0 0.5px 0 rgba(255,255,255,0.5)",
                }}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ---- Main exported component ----
export default function Card({
  variant = "clock",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "alarm":
      return <AlarmCard customStyle={customStyle} />;
    case "weather":
      return <WeatherCard customStyle={customStyle} />;
    case "clock":
    default:
      return <ClockCard customStyle={customStyle} />;
  }
}
