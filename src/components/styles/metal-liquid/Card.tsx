"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
  Keyboard,
  Brain,
  Sparkles,
  Wrench,
  Download,
  TrendingUp,
  DollarSign,
  Users,
} from "lucide-react";
import type { StyleComponentProps } from "@/types";

// ─── Shared Tokens ──────────────────────────────────────────────────────────
const rainbowGradient =
  "conic-gradient(from 0deg, #ff0000, #ff4400, #ff8800, #ffcc00, #ffff00, #88ff00, #00ff00, #00ff88, #00ffff, #0088ff, #0044ff, #0000ff, #4400ff, #8800ff, #cc00ff, #ff00cc, #ff0088, #ff0044, #ff0000)";

const chromeBezel =
  "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(200,200,210,0.25) 20%, rgba(80,80,90,0.12) 40%, rgba(60,60,70,0.18) 60%, rgba(160,160,170,0.25) 80%, rgba(255,255,255,0.3) 100%)";

const metallicSphere = (intensity: number = 1) =>
  `radial-gradient(ellipse at 35% 28%, rgba(${Math.round(100 * intensity)},${Math.round(100 * intensity)},${Math.round(110 * intensity)},0.55) 0%, rgba(50,50,55,0.3) 40%, rgba(25,25,30,1) 70%)`;

const sphereShadow =
  "inset 0 1px 3px rgba(255,255,255,0.1), inset 0 -2px 4px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.5)";

const ambientGlow =
  "0 0 24px 2px rgba(120,80,200,0.1), 0 0 48px 4px rgba(80,120,220,0.06)";

const innerAmbient =
  "inset 0 1px 1px rgba(255,255,255,0.04), 0 0 30px 2px rgba(139,92,246,0.08)";

// ─── Feature Card ───────────────────────────────────────────────────────────
function FeatureCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Outer rainbow refraction border */}
      <div
        className="rounded-2xl p-[1.5px]"
        style={{
          background: rainbowGradient,
          ...customStyle,
        }}
      >
        {/* Chrome / silver inner bezel */}
        <div
          className="rounded-2xl p-[1px]"
          style={{ background: chromeBezel }}
        >
          {/* Inner dark body */}
          <div className="relative overflow-hidden rounded-2xl bg-zinc-900 p-6">
            {/* Inner ambient glow overlay */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{ boxShadow: innerAmbient }}
            />

            {/* Subtle top-edge light reflection */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.06) 50%, transparent 90%)",
              }}
            />

            <div className="relative z-10 flex flex-col gap-4">
              {/* Metallic icon sphere */}
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{
                  background: metallicSphere(1),
                  boxShadow: sphereShadow,
                }}
              >
                <Zap
                  className="h-5 w-5 text-zinc-300"
                  style={{
                    filter: "drop-shadow(0 0 3px rgba(200,200,220,0.3))",
                  }}
                />
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-metal)] text-base font-light tracking-wide text-white">
                  Lightning Fast
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-zinc-500">
                  Optimized for speed with near-instant response times and
                  efficient resource allocation across all environments.
                </p>
              </div>

              {/* Subtle separator line */}
              <div
                className="h-px w-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(120,120,130,0.2) 50%, transparent 100%)",
                }}
              />

              {/* Bottom metric row */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-light text-zinc-600">
                  Avg. latency
                </span>
                <span className="text-xs font-light tracking-wider text-emerald-400/80">
                  12ms
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Outer ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ boxShadow: ambientGlow }}
      />
    </motion.div>
  );
}

// ─── Steps Card ─────────────────────────────────────────────────────────────
function StepsCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  const steps = [
    {
      number: 1,
      title: "Input",
      description:
        "Upload, paste, or type anything. Our system accepts all major formats with a streamlined AI-powered processing pipeline.",
      icon: Keyboard,
    },
    {
      number: 2,
      title: "Understand",
      description:
        "AI interprets your content's context, intent, and the direction needed to produce highly accurate results.",
      icon: Brain,
    },
    {
      number: 3,
      title: "Generate",
      description:
        "You receive a polished, optimized output crafted in seconds, tailored precisely to your content needs.",
      icon: Sparkles,
    },
    {
      number: 4,
      title: "Refine",
      description:
        "Fine-tune your content using iterative editing controls and smart AI suggestions for perfect alignment.",
      icon: Wrench,
    },
    {
      number: 5,
      title: "Export",
      description:
        "Copy, download, or export your finalized content to any workflow, platform, or format seamlessly.",
      icon: Download,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
      style={customStyle}
    >
      {/* Steps row */}
      <div className="flex items-start gap-2">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            {/* Step card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="flex flex-1 flex-col"
            >
              <div
                className="relative overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900 p-4"
                style={{
                  boxShadow:
                    "0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
                }}
              >
                {/* Subtle top-edge specular highlight */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.05) 50%, transparent 80%)",
                  }}
                />

                {/* Icon area */}
                <div
                  className="relative z-10 mb-3 flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{
                    background: metallicSphere(0.8),
                    boxShadow:
                      "inset 0 1px 2px rgba(255,255,255,0.07), inset 0 -1px 2px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.35)",
                  }}
                >
                  <step.icon className="h-4 w-4 text-zinc-400" />
                </div>

                {/* Step number and title */}
                <p className="relative z-10 text-[10px] font-light uppercase tracking-widest text-zinc-600">
                  #{step.number}
                </p>
                <h4 className="relative z-10 mt-0.5 font-[family-name:var(--font-metal)] text-sm font-light tracking-wide text-white">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="relative z-10 mt-2 text-[11px] font-light leading-relaxed text-zinc-600">
                  {step.description}
                </p>
              </div>
            </motion.div>

            {/* Arrow between steps */}
            {index < steps.length - 1 && (
              <div className="flex shrink-0 items-center self-center pt-2">
                <ArrowRight className="h-3.5 w-3.5 text-zinc-700" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Get Started button */}
      <div className="mt-6 flex justify-center">
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="cursor-pointer"
        >
          {/* Rainbow border wrapper */}
          <div
            className="rounded-lg p-[1px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(139,92,246,0.6) 0%, rgba(59,130,246,0.4) 40%, rgba(6,182,212,0.25) 70%, rgba(139,92,246,0.5) 100%)",
            }}
          >
            <div
              className="rounded-lg bg-zinc-900 px-7 py-2.5"
              style={{
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
              }}
            >
              <span className="text-sm font-light tracking-wider text-zinc-400">
                Get Started
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Dashboard Card ─────────────────────────────────────────────────────────
function DashboardCard({
  customStyle,
}: {
  customStyle?: React.CSSProperties;
}) {
  const sparklineHeights = [30, 50, 42, 68, 58, 78, 65, 85, 72];

  const metrics = [
    {
      label: "Users",
      value: "24.8K",
      change: "+8.2%",
      icon: Users,
    },
    {
      label: "Growth",
      value: "18.4%",
      change: "+3.1%",
      icon: TrendingUp,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Chrome border */}
      <div
        className="rounded-2xl p-[1px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(200,200,210,0.3) 0%, rgba(100,100,110,0.12) 35%, rgba(60,60,70,0.08) 65%, rgba(180,180,190,0.3) 100%)",
          ...customStyle,
        }}
      >
        <div className="relative overflow-hidden rounded-2xl bg-zinc-900 p-6">
          {/* Top-edge specular highlight */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.06) 50%, transparent 95%)",
            }}
          />

          {/* Inner ambient glow */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              boxShadow: "inset 0 1px 1px rgba(255,255,255,0.03)",
            }}
          />

          <div className="relative z-10 flex flex-col gap-5">
            {/* Header row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{
                    background: metallicSphere(0.7),
                    boxShadow:
                      "inset 0 1px 1px rgba(255,255,255,0.06), 0 1px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  <DollarSign className="h-3.5 w-3.5 text-zinc-400" />
                </div>
                <p className="font-[family-name:var(--font-metal)] text-xs font-light uppercase tracking-[0.2em] text-zinc-500">
                  Revenue
                </p>
              </div>

              {/* Period pill */}
              <div
                className="rounded-md border border-zinc-800/60 px-2.5 py-1"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
                }}
              >
                <span className="text-[10px] font-light text-zinc-600">
                  Last 30 days
                </span>
              </div>
            </div>

            {/* Main value + sparkline */}
            <div className="flex items-end justify-between">
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-3xl font-light tracking-tight text-white"
                >
                  $48.2K
                </motion.p>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="text-sm font-light text-emerald-400/90">
                    +12.5%
                  </span>
                  <span className="text-[11px] font-light text-zinc-600">
                    vs last month
                  </span>
                </div>
              </div>

              {/* Metallic sparkline bars */}
              <div className="flex items-end gap-[3px]">
                {sparklineHeights.map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-[5px] rounded-sm"
                    style={{
                      height: `${height}%`,
                      maxHeight: "48px",
                      background:
                        index === sparklineHeights.length - 1
                          ? "linear-gradient(to top, rgba(139,92,246,0.3) 0%, rgba(139,92,246,0.6) 100%)"
                          : "linear-gradient(to top, rgba(80,80,90,0.35) 0%, rgba(160,160,170,0.55) 100%)",
                      boxShadow:
                        index === sparklineHeights.length - 1
                          ? "0 0 6px rgba(139,92,246,0.3)"
                          : "none",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Separator */}
            <div
              className="h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(100,100,110,0.2) 50%, transparent 100%)",
              }}
            />

            {/* Bottom metrics row */}
            <div className="flex gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="flex flex-1 items-center gap-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{
                      background: metallicSphere(0.6),
                      boxShadow:
                        "inset 0 1px 1px rgba(255,255,255,0.05), 0 1px 3px rgba(0,0,0,0.25)",
                    }}
                  >
                    <metric.icon className="h-3.5 w-3.5 text-zinc-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-light text-white">
                      {metric.value}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-light text-emerald-400/70">
                        {metric.change}
                      </span>
                      <span className="text-[10px] font-light text-zinc-700">
                        {metric.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Outer ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          boxShadow:
            "0 0 20px 1px rgba(120,80,200,0.06), 0 0 40px 2px rgba(80,120,220,0.04)",
        }}
      />
    </motion.div>
  );
}

// ─── Exported Wrapper ───────────────────────────────────────────────────────
export default function Card({
  variant = "feature",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "steps":
      return <StepsCard customStyle={customStyle} />;
    case "dashboard":
      return <DashboardCard customStyle={customStyle} />;
    case "feature":
    default:
      return <FeatureCard customStyle={customStyle} />;
  }
}
