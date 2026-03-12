"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { DotCluster, DotSparse } from "./DotMatrix";

const stats = [
  {
    value: 8,
    label: "Design paradigms spanning the full spectrum of modern interface aesthetics",
    suffix: "",
    display: "8",
  },
  {
    value: 24,
    label: "Production-ready components you can copy, customize, and ship today",
    suffix: "+",
    display: "24",
  },
  {
    value: 72,
    label: "Unique variants across cards, buttons, and inputs in every style",
    suffix: "+",
    display: "72",
  },
];

function CountUp({
  target,
  suffix,
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame: number;
    const duration = 1800;
    const start = Date.now();

    function tick() {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
];

export function Stats() {
  return (
    <section className="relative px-6 py-28 overflow-hidden">
      {/* Sparse dot texture — full width background */}
      <div className="pointer-events-none absolute top-[30%] left-1/2 -translate-x-1/2 hidden md:block">
        <DotSparse
          rows={6}
          cols={60}
          dotSize={2}
          gap={16}
          seed={99}
          sparsity={0.85}
          className="opacity-50"
          animationDelay={0.2}
        />
      </div>

      {/* Dot cluster — between stats */}
      <div className="pointer-events-none absolute top-[40%] left-[6%] hidden xl:block">
        <DotCluster
          rows={10}
          cols={10}
          dotSize={3}
          gap={4}
          seed={7}
          density={0.45}
          className="opacity-10"
          animationDelay={0.6}
        />
      </div>

      {/* Dot cluster — right side */}
      <div className="pointer-events-none absolute bottom-[25%] right-[5%] hidden xl:block">
        <DotCluster
          rows={12}
          cols={8}
          dotSize={3}
          gap={4}
          seed={19}
          density={0.5}
          className="opacity-12"
          animationDelay={0.8}
        />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Top dashed separator */}
        <div className="mb-16 w-full border-t border-dashed border-[var(--color-border)]" />

        {/* Stats row */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.12}>
              <div className="group">
                {/* Stat number with subtle accent glow */}
                <div className="relative inline-block">
                  {/* Glow layer behind the number */}
                  <div
                    className="absolute inset-0 blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-20"
                    style={{ background: "var(--color-accent)" }}
                  />
                  <div className="relative font-[family-name:var(--font-display)] text-7xl italic tracking-tight text-[var(--color-fg)] md:text-8xl lg:text-[7rem]">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                </div>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-fg-muted)]">
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom dashed separator */}
        <div className="mt-16 mb-12 w-full border-t border-dashed border-[var(--color-border)]" />

        {/* Tech stack row with dot indicators */}
        <AnimatedSection delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="group flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-fg-muted)] opacity-60 transition-opacity duration-300 hover:opacity-100"
              >
                {/* Dot indicator */}
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
                {tech}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Final dashed separator */}
        <div className="mt-12 w-full border-t border-dashed border-[var(--color-border)]" />
      </div>
    </section>
  );
}
