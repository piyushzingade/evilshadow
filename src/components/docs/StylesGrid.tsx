"use client";

import Link from "next/link";
import { stylesRegistry } from "@/lib/styles-registry";
import { ArrowRight } from "lucide-react";

export function StylesGrid() {
  return (
    <div className="not-prose grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {stylesRegistry.map((style) => (
        <Link
          key={style.id}
          href={`/docs/${style.id}`}
          className="group flex flex-col justify-between rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:bg-fd-accent/5"
        >
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: style.color }}
              />
              <h3 className="font-semibold text-fd-foreground">
                {style.name}
              </h3>
            </div>
            <p className="mt-2 text-sm text-fd-muted-foreground">
              {style.tagline}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-fd-muted-foreground">
              {style.components.reduce(
                (sum, c) => sum + c.variants.length,
                0
              )}{" "}
              variants
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-fd-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
          </div>
        </Link>
      ))}
    </div>
  );
}
