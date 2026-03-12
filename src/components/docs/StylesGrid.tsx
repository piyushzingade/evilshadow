"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { stylesRegistry } from "@/lib/styles-registry";
import { ArrowRight } from "lucide-react";

const easeOutQuint: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function StylesGrid() {
  return (
    <div className="not-prose grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {stylesRegistry.map((style, i) => (
        <motion.div
          key={style.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            ease: easeOutQuint,
            delay: 0.25 + i * 0.05,
          }}
        >
          <Link
            href={`/docs/${style.id}`}
            className="group relative flex flex-col justify-between border border-dashed border-border bg-card p-5 transition-all duration-200 hover:border-solid hover:bg-accent/5 overflow-hidden"
            style={{ borderRadius: "2px" }}
          >
            {/* Hover glow */}
            <div
              className="pointer-events-none absolute -top-12 -right-12 h-24 w-24 rounded-full opacity-0 blur-[30px] transition-opacity duration-300 group-hover:opacity-[0.08]"
              style={{ backgroundColor: style.color }}
            />

            <div>
              <div className="flex items-center gap-3 mb-3">
                {/* Color indicator */}
                <span
                  className="h-2.5 w-2.5 rounded-full flex-shrink-0 transition-shadow duration-300"
                  style={{
                    backgroundColor: style.color,
                  }}
                />
                <h3 className="text-sm font-semibold text-foreground tracking-tight">
                  {style.name}
                </h3>
              </div>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {style.tagline}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-dashed border-border pt-3">
              <div className="flex items-center gap-2">
                <span className="font-[family-name:var(--font-mono)] text-[10px] text-muted-foreground uppercase tracking-wider">
                  {style.components.reduce(
                    (sum, c) => sum + c.variants.length,
                    0
                  )}{" "}
                  variants
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5">
                <span className="hidden sm:inline">Explore</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>

            {/* Left accent bar on hover */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[2px] origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
              style={{ backgroundColor: style.color }}
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
