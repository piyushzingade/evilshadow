"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight } from "lucide-react";
import { DotCluster, DotNebula, DotCorner } from "./DotMatrix";

const footerLinks = [
  { label: "Documentation", href: "/docs" },
  { label: "GitHub", href: "https://github.com", external: true },
  { label: "Glassmorphism", href: "/docs/glassmorphism" },
  { label: "Neobrutalism", href: "/docs/neobrutalism" },
  { label: "Minimalism", href: "/docs/minimalism" },
];

/* ── Floating accent crosses ── */
function FloatingCross({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -45 }}
      whileInView={{ opacity: 0.12, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", damping: 20 }}
      className={`absolute pointer-events-none hidden lg:block ${className}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <line
          x1="8"
          y1="0"
          x2="8"
          y2="16"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />
        <line
          x1="0"
          y1="8"
          x2="16"
          y2="8"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />
      </svg>
    </motion.div>
  );
}

export function CTA() {
  return (
    <>
      {/* CTA Section */}
      <section className="relative px-6 py-32 overflow-hidden">
        {/* Dashed border top */}
        <div className="absolute top-0 left-6 right-6">
          <svg
            width="100%"
            height="1"
            preserveAspectRatio="none"
            className="block"
          >
            <line
              x1="0"
              y1="0.5"
              x2="100%"
              y2="0.5"
              stroke="var(--color-border)"
              strokeDasharray="8 6"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Subtle gradient glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="h-[400px] w-[600px] rounded-full opacity-[0.04] blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, var(--color-accent), transparent 70%)",
            }}
          />
        </div>

        {/* Dot nebula — left side */}
        <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-[4%] hidden lg:block">
          <DotNebula animationDelay={0.3} color="var(--color-accent)" className="opacity-40" />
        </div>

        {/* Dot cluster — right side */}
        <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-[5%] hidden lg:block">
          <DotCluster
            rows={18}
            cols={14}
            dotSize={3}
            gap={4}
            seed={50}
            density={0.5}
            color="var(--color-accent)"
            className="opacity-20"
            animationDelay={0.4}
          />
        </div>

        {/* Corner dot accents */}
        <div className="pointer-events-none absolute top-8 left-8 hidden xl:block">
          <DotCorner size={6} dotSize={3} gap={4} animationDelay={0.2} />
        </div>
        <div className="pointer-events-none absolute bottom-8 right-8 hidden xl:block">
          <DotCorner size={6} dotSize={3} gap={4} mirror animationDelay={0.3} />
        </div>

        {/* Floating crosses */}
        <FloatingCross className="top-[20%] left-[15%]" delay={0.2} />
        <FloatingCross className="bottom-[25%] right-[12%]" delay={0.4} />
        <FloatingCross className="top-[30%] right-[20%]" delay={0.5} />
        <FloatingCross className="bottom-[20%] left-[18%]" delay={0.6} />

        <div className="relative mx-auto max-w-4xl text-center">
          <AnimatedSection className="mb-4">
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
              Get Started
            </p>
          </AnimatedSection>

          {/* Dashed accent line under "Get Started" */}
          <AnimatedSection delay={0.05}>
            <div className="mx-auto mb-6 w-16">
              <svg
                width="100%"
                height="2"
                viewBox="0 0 64 2"
                preserveAspectRatio="none"
              >
                <line
                  x1="0"
                  y1="1"
                  x2="64"
                  y2="1"
                  stroke="var(--color-accent)"
                  strokeDasharray="4 3"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2
              className="font-[family-name:var(--font-display)] italic text-[var(--color-fg)] leading-[0.95]"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
            >
              Start Building.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-[var(--color-fg-muted)]">
              Explore all eight design systems and find the perfect components
              for your next project.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Link
              href="/docs"
              className="group mt-10 inline-flex h-12 items-center justify-center gap-2 bg-[var(--color-fg)] px-10 text-sm font-medium tracking-wide text-[var(--color-bg)] transition-opacity hover:opacity-85"
            >
              Browse Components
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-12">
        {/* Dashed top border */}
        <div className="absolute top-0 left-6 right-6">
          <svg
            width="100%"
            height="1"
            preserveAspectRatio="none"
            className="block"
          >
            <line
              x1="0"
              y1="0.5"
              x2="100%"
              y2="0.5"
              stroke="var(--color-border)"
              strokeDasharray="8 6"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
          {/* Footer brand + links row */}
          <div className="flex w-full flex-col items-center gap-8 md:flex-row md:justify-between md:items-start">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="font-[family-name:var(--font-display)] italic text-lg text-[var(--color-fg)]">
                EvilShadow
              </span>
              <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-muted)] opacity-50">
                8 paradigms. One library.
              </span>
            </div>

            {/* Footer links */}
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-end">
              {footerLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="link-underline text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Dashed separator */}
          <div className="w-full">
            <svg
              width="100%"
              height="1"
              preserveAspectRatio="none"
              className="block"
            >
              <line
                x1="0"
                y1="0.5"
                x2="100%"
                y2="0.5"
                stroke="var(--color-border)"
                strokeDasharray="4 4"
                strokeWidth="1"
              />
            </svg>
          </div>

          {/* Copyright */}
          <div className="flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between">
            <p className="text-xs text-[var(--color-fg-muted)] opacity-50">
              &copy; {new Date().getFullYear()} EvilShadow
            </p>
            <p className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-fg-muted)] opacity-30">
              Built with intention, not templates.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
