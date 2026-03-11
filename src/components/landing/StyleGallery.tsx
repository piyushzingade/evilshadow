"use client";

import Link from "next/link";
import { stylesRegistry } from "@/lib/styles-registry";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight } from "lucide-react";

export function StyleGallery() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <AnimatedSection className="mb-4">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
            Design Systems
          </p>
        </AnimatedSection>

        <AnimatedSection className="mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-5xl italic text-[var(--color-fg)] md:text-6xl lg:text-7xl">
            Eight Paradigms
          </h2>
        </AnimatedSection>

        {/* Separator */}
        <div className="mb-12 h-px w-full bg-[var(--color-border)]" />

        {/* 2x4 Grid */}
        <div className="grid grid-cols-1 gap-px bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-4">
          {stylesRegistry.map((style, i) => (
            <AnimatedSection key={style.id} delay={i * 0.06}>
              <Link href={`/docs/${style.id}`} className="group block">
                <div className="flex h-full flex-col justify-between bg-[var(--color-bg)] p-6 transition-colors duration-200 hover:bg-[var(--color-surface)]">
                  {/* Color dot + Name */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className="h-2.5 w-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: style.color }}
                      />
                      <h3 className="text-base font-semibold tracking-tight text-[var(--color-fg)]">
                        {style.name}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
                      {style.tagline}
                    </p>
                  </div>

                  {/* Hover arrow */}
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-[var(--color-fg)] opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">
                    Explore
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom separator */}
        <div className="mt-0 h-px w-full bg-[var(--color-border)]" />
      </div>
    </section>
  );
}
