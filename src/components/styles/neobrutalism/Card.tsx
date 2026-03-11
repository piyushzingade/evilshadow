"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plane, TrendingUp, ChevronRight } from "lucide-react";
import type { StyleComponentProps } from "@/types";

// ---------------------------------------------------------------------------
// Neobrutalism Card
// Variants: "balance" | "travel" | "score"
// BOLD. CHUNKY. CONFIDENT. 3px borders, 4px offset shadows, pastel fills.
// ---------------------------------------------------------------------------

function BalanceCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  const accounts = [
    { name: "CHASE MAIN", amount: "$12,402", color: "bg-[#bbf7d0]" },
    { name: "BOFA VAULT", amount: "$71,927", color: "bg-[#fde68a]" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative w-80 rounded-lg border-[3px] border-black bg-white p-6 font-[family-name:var(--font-brutalist)] shadow-[4px_4px_0px_#000]"
      style={customStyle}
    >
      {/* Header row */}
      <div className="mb-5 flex items-center justify-between">
        <span className="rounded-md border-[3px] border-black bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-black">
          MAIN BALANCE
        </span>
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="rounded-md border-[3px] border-black bg-[#fde68a] px-3 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-black shadow-[2px_2px_0px_#000]"
        >
          <TrendingUp size={10} strokeWidth={3} className="mr-1 inline-block" />
          +2.4% YTD
        </motion.span>
      </div>

      {/* Main balance */}
      <p className="text-5xl font-black tracking-tight text-black">
        $84,329
      </p>
      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
        TOTAL ACROSS 2 ACCOUNTS
      </p>

      {/* Sub-accounts */}
      <div className="mt-5 space-y-0">
        {accounts.map((account, i) => (
          <div
            key={account.name}
            className={`flex items-center justify-between border-b-[2px] border-black/10 py-3 ${
              i === accounts.length - 1 ? "border-b-0" : ""
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div
                className={`h-3 w-3 rounded-sm border-[2px] border-black ${account.color}`}
              />
              <span className="text-[11px] font-black uppercase tracking-[0.15em] text-black/50">
                {account.name}
              </span>
            </div>
            <span className="text-sm font-black text-black">{account.amount}</span>
          </div>
        ))}
      </div>

      {/* Manage link */}
      <div className="mt-4 border-t-[3px] border-black/10 pt-4">
        <motion.button
          whileTap={{ scale: 0.96 }}
          whileHover={{ x: 4 }}
          className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-black/40 transition-colors hover:text-black"
        >
          MANAGE ACCOUNTS
          <ChevronRight size={14} strokeWidth={3} />
        </motion.button>
      </div>
    </motion.div>
  );
}

function TravelCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  const current = 4200;
  const goal = 6000;
  const progress = Math.round((current / goal) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative w-80 rounded-lg border-[3px] border-black bg-white p-6 font-[family-name:var(--font-brutalist)] shadow-[4px_4px_0px_#000]"
      style={customStyle}
    >
      {/* Header label */}
      <span className="inline-block rounded-md border-[3px] border-black bg-[#bbf7d0] px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-black shadow-[2px_2px_0px_#000]">
        MAIN GOAL
      </span>

      {/* Destination and amount */}
      <div className="mt-4 flex items-baseline gap-3">
        <h2 className="text-4xl font-black uppercase tracking-tight text-black">
          JAPAN
        </h2>
        <p className="text-sm font-bold text-black/50">
          <span className="font-black text-black">
            ${current.toLocaleString()}
          </span>
          <span className="text-black/30">
            {" "}
            / ${goal.toLocaleString()}
          </span>
        </p>
      </div>

      {/* Progress bar */}
      <div className="mt-5">
        <div className="h-6 w-full overflow-hidden rounded-md border-[3px] border-black bg-[#fef9c3]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="h-full bg-black"
          />
        </div>
        <div className="mt-1.5 flex justify-between">
          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-black/30">
            {progress}% SAVED
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-black/30">
            ${(goal - current).toLocaleString()} TO GO
          </span>
        </div>
      </div>

      {/* Message banner */}
      <div className="mt-4 rounded-md border-[3px] border-black/20 bg-[#fef9c3] px-4 py-2.5">
        <p className="text-[11px] font-bold leading-relaxed text-black/60">
          You saved{" "}
          <span className="rounded-sm border-[2px] border-black/20 bg-[#bbf7d0] px-1.5 py-0.5 font-black text-black">
            $126
          </span>{" "}
          on food. You&apos;re one step closer to sushi.
        </p>
      </div>

      {/* Bottom row */}
      <div className="mt-5 flex items-center justify-between">
        {/* Airplane icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-md border-[3px] border-black bg-[#fde68a] shadow-[2px_2px_0px_#000]">
          <Plane size={22} strokeWidth={3} className="text-black" />
        </div>

        {/* Book flight button */}
        <motion.button
          whileTap={{ scale: 0.96, translateX: 2, translateY: 2 }}
          whileHover={{ translateX: 2, translateY: 2 }}
          className="rounded-md border-[3px] border-black bg-black px-6 py-3 text-[11px] font-black uppercase tracking-[0.15em] text-white shadow-[4px_4px_0px_rgba(0,0,0,0.3)] transition-shadow hover:shadow-[2px_2px_0px_rgba(0,0,0,0.3)]"
        >
          BOOK FLIGHT
        </motion.button>
      </div>
    </motion.div>
  );
}

function ScoreCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  const score = 785;
  const maxScore = 850;
  const percentage = (score / maxScore) * 100;

  // SVG arc for circular indicator
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative w-80 rounded-lg border-[3px] border-black bg-[#1a1a1a] p-6 font-[family-name:var(--font-brutalist)] shadow-[4px_4px_0px_#000]"
      style={customStyle}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
          YOUR SCORE
        </p>
        <span className="rounded-md border-[3px] border-white/20 bg-white/5 px-3 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-[#4ade80]">
          EXCELLENT
        </span>
      </div>

      {/* Score display */}
      <div className="mt-5 flex flex-col items-center">
        {/* Circular progress */}
        <div className="relative">
          <svg width="150" height="150" viewBox="0 0 150 150">
            {/* Background track */}
            <circle
              cx="75"
              cy="75"
              r={radius}
              fill="none"
              stroke="white"
              strokeOpacity={0.06}
              strokeWidth={10}
            />
            {/* Score arc */}
            <motion.circle
              cx="75"
              cy="75"
              r={radius}
              fill="none"
              stroke="#4ade80"
              strokeWidth={10}
              strokeLinecap="butt"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              transform="rotate(-90 75 75)"
            />
            {/* Thick outer ring for brutalist feel */}
            <circle
              cx="75"
              cy="75"
              r={62}
              fill="none"
              stroke="white"
              strokeOpacity={0.03}
              strokeWidth={3}
            />
          </svg>
          {/* Center score number */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-black tracking-tight text-white">
              {score}
            </span>
            <span className="mt-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-white/25">
              OUT OF {maxScore}
            </span>
          </div>
        </div>

        {/* Score label with indicator */}
        <div className="mt-4 flex items-center gap-2.5">
          <div className="h-3 w-3 rounded-sm border-[2px] border-[#4ade80] bg-[#4ade80]" />
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#4ade80]">
            EXCELLENT RATING
          </span>
        </div>

        {/* Score range bar */}
        <div className="mt-5 flex w-full items-center gap-2.5">
          <span className="text-[10px] font-black tracking-wider text-white/25">
            300
          </span>
          <div className="h-3 flex-1 overflow-hidden rounded-sm border-[2px] border-white/10 bg-white/5">
            <div
              className="h-full bg-gradient-to-r from-red-500 via-[#fde68a] to-[#4ade80]"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="text-[10px] font-black tracking-wider text-white/25">
            850
          </span>
        </div>

        {/* Bottom stats */}
        <div className="mt-5 flex w-full gap-2">
          <div className="flex-1 rounded-md border-[2px] border-white/10 bg-white/5 px-3 py-2.5 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-white/30">
              INQUIRIES
            </p>
            <p className="mt-0.5 text-lg font-black text-white">2</p>
          </div>
          <div className="flex-1 rounded-md border-[2px] border-white/10 bg-white/5 px-3 py-2.5 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-white/30">
              ACCOUNTS
            </p>
            <p className="mt-0.5 text-lg font-black text-white">7</p>
          </div>
          <div className="flex-1 rounded-md border-[2px] border-white/10 bg-white/5 px-3 py-2.5 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-white/30">
              UTIL %
            </p>
            <p className="mt-0.5 text-lg font-black text-[#4ade80]">12%</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Card({
  variant = "balance",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "travel":
      return <TravelCard customStyle={customStyle} />;
    case "score":
      return <ScoreCard customStyle={customStyle} />;
    case "balance":
    default:
      return <BalanceCard customStyle={customStyle} />;
  }
}
