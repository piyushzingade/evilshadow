"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

/** Round to 4 decimal places for SSR/client hydration consistency */
function roundOpacity(value: number): number {
  return Math.round(value * 10000) / 10000;
}

/* ── Organic Cluster ── */
/* Dense center, organic radial falloff — the signature EvilShadow dot pattern */
export function DotCluster({
  rows = 20,
  cols = 20,
  dotSize = 4,
  gap = 3,
  color = "var(--color-fg)",
  className,
  seed: seedOffset = 0,
  density = 0.6,
  animationDelay = 0,
}: {
  rows?: number;
  cols?: number;
  dotSize?: number;
  gap?: number;
  color?: string;
  className?: string;
  seed?: number;
  density?: number;
  animationDelay?: number;
}) {
  const dots = useMemo(() => {
    const result: { row: number; col: number; opacity: number }[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const centerR = rows / 2;
        const centerC = cols / 2;
        const dist = Math.sqrt(
          Math.pow((r - centerR) / centerR, 2) +
            Math.pow((c - centerC) / centerC, 2)
        );
        const s = (r * cols + c) + seedOffset * 1000;
        if (dist < 0.85 && seededRandom(s) > dist * density) {
          result.push({
            row: r,
            col: c,
            opacity: roundOpacity(Math.max(0.1, 1 - dist * 1.3)),
          });
        }
      }
    }
    return result;
  }, [rows, cols, seedOffset, density]);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: animationDelay, duration: 0.8 }}
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${rows}, ${dotSize}px)`,
        gridTemplateColumns: `repeat(${cols}, ${dotSize}px)`,
        gap: `${gap}px`,
      }}
    >
      {dots.map((dot, i) => (
        <motion.div
          key={`${dot.row}-${dot.col}`}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: dot.opacity, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: animationDelay + 0.1 + i * 0.002,
            duration: 0.3,
            type: "spring",
            damping: 25,
          }}
          style={{
            gridRow: dot.row + 1,
            gridColumn: dot.col + 1,
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            backgroundColor: color,
            borderRadius: "0.5px",
          }}
        />
      ))}
    </motion.div>
  );
}

/* ── Nebula Field ── */
/* Multiple overlapping clusters that form a wider atmospheric dot cloud */
export function DotNebula({
  className,
  color = "var(--color-fg)",
  animationDelay = 0,
}: {
  className?: string;
  color?: string;
  animationDelay?: number;
}) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <DotCluster
        rows={18}
        cols={22}
        dotSize={3}
        gap={4}
        color={color}
        seed={42}
        density={0.55}
        animationDelay={animationDelay}
        className="opacity-30"
      />
      <DotCluster
        rows={12}
        cols={14}
        dotSize={3}
        gap={4}
        color={color}
        seed={77}
        density={0.45}
        animationDelay={animationDelay + 0.2}
        className="absolute -top-4 -left-6 opacity-15"
      />
      <DotCluster
        rows={10}
        cols={12}
        dotSize={3}
        gap={4}
        color={color}
        seed={13}
        density={0.5}
        animationDelay={animationDelay + 0.35}
        className="absolute -bottom-3 -right-5 opacity-20"
      />
    </div>
  );
}

/* ── Sparse Grid ── */
/* Scattered dots in a loose grid pattern — subtle background texture */
export function DotSparse({
  rows = 8,
  cols = 40,
  dotSize = 2,
  gap = 12,
  color = "var(--color-fg)",
  className,
  seed: seedOffset = 0,
  sparsity = 0.7,
  animationDelay = 0,
}: {
  rows?: number;
  cols?: number;
  dotSize?: number;
  gap?: number;
  color?: string;
  className?: string;
  seed?: number;
  sparsity?: number;
  animationDelay?: number;
}) {
  const dots = useMemo(() => {
    const result: { row: number; col: number; opacity: number }[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const s = (r * cols + c) + seedOffset * 1000;
        if (seededRandom(s) > sparsity) {
          result.push({
            row: r,
            col: c,
            opacity: roundOpacity(0.08 + seededRandom(s + 500) * 0.15),
          });
        }
      }
    }
    return result;
  }, [rows, cols, seedOffset, sparsity]);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: animationDelay, duration: 1 }}
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${rows}, ${dotSize}px)`,
        gridTemplateColumns: `repeat(${cols}, ${dotSize}px)`,
        gap: `${gap}px`,
      }}
    >
      {dots.map((dot) => (
        <div
          key={`${dot.row}-${dot.col}`}
          style={{
            gridRow: dot.row + 1,
            gridColumn: dot.col + 1,
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            backgroundColor: color,
            opacity: dot.opacity,
            borderRadius: "0.5px",
          }}
        />
      ))}
    </motion.div>
  );
}

/* ── Section Divider ── */
/* A full-width atmospheric dot band that sits between sections */
export function DotDivider({
  className,
  color = "var(--color-fg)",
  animationDelay = 0,
}: {
  className?: string;
  color?: string;
  animationDelay?: number;
}) {
  const dots = useMemo(() => {
    const result: { row: number; col: number; opacity: number }[] = [];
    const rows = 6;
    const cols = 80;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const centerR = rows / 2;
        const distY = Math.abs(r - centerR) / centerR;
        const s = r * cols + c;
        // Denser in the middle row, sparse at edges
        if (seededRandom(s) > 0.65 + distY * 0.2) {
          const distFromCenter = Math.abs(c - cols / 2) / (cols / 2);
          result.push({
            row: r,
            col: c,
            opacity: roundOpacity(Math.max(0.04, (1 - distFromCenter * 0.8) * (1 - distY) * 0.2)),
          });
        }
      }
    }
    return result;
  }, []);

  return (
    <motion.div
      className={`w-full flex justify-center overflow-hidden ${className ?? ""}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: animationDelay, duration: 1.2 }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateRows: "repeat(6, 2px)",
          gridTemplateColumns: "repeat(80, 2px)",
          gap: "8px",
        }}
      >
        {dots.map((dot) => (
          <div
            key={`${dot.row}-${dot.col}`}
            style={{
              gridRow: dot.row + 1,
              gridColumn: dot.col + 1,
              width: "2px",
              height: "2px",
              backgroundColor: color,
              opacity: dot.opacity,
              borderRadius: "0.5px",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ── Corner Accent ── */
/* Small L-shaped dot accent for corners of cards and sections */
export function DotCorner({
  size = 6,
  dotSize = 3,
  gap = 4,
  color = "var(--color-accent)",
  className,
  animationDelay = 0,
  mirror = false,
}: {
  size?: number;
  dotSize?: number;
  gap?: number;
  color?: string;
  className?: string;
  animationDelay?: number;
  mirror?: boolean;
}) {
  const dots = useMemo(() => {
    const result: { row: number; col: number; opacity: number }[] = [];
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        // L-shape: first row and first column
        const isEdge = mirror ? (r === 0 || c === size - 1) : (r === 0 || c === 0);
        const dist = mirror
          ? Math.min(r, size - 1 - c) / size
          : Math.min(r, c) / size;
        if (isEdge || (dist < 0.3 && seededRandom(r * size + c + 999) > 0.6)) {
          result.push({
            row: r,
            col: c,
            opacity: roundOpacity(Math.max(0.15, 1 - dist * 3)),
          });
        }
      }
    }
    return result;
  }, [size, mirror]);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.25 }}
      viewport={{ once: true }}
      transition={{ delay: animationDelay, duration: 0.6 }}
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${size}, ${dotSize}px)`,
        gridTemplateColumns: `repeat(${size}, ${dotSize}px)`,
        gap: `${gap}px`,
      }}
    >
      {dots.map((dot) => (
        <div
          key={`${dot.row}-${dot.col}`}
          style={{
            gridRow: dot.row + 1,
            gridColumn: dot.col + 1,
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            backgroundColor: color,
            opacity: dot.opacity,
            borderRadius: "0.5px",
          }}
        />
      ))}
    </motion.div>
  );
}
