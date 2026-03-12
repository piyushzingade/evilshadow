"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CodeBlock } from "./CodeBlock";

interface ComponentPreviewProps {
  name: string;
  children: React.ReactNode;
  code: string;
  previewClassName?: string;
}

export function ComponentPreview({ name, children, code, previewClassName }: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const tabs = [
    { id: "preview" as const, label: "Preview" },
    { id: "code" as const, label: "Code" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-3">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-[var(--color-fg)]">{name}</span>
          <div className="relative flex gap-1 rounded-lg bg-[var(--color-border-subtle)] p-0.5">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className="relative z-10 rounded-md px-3 py-1 text-xs font-medium transition-colors"
                style={{
                  color:
                    tab === t.id
                      ? "var(--color-fg)"
                      : "var(--color-fg-muted)",
                }}
              >
                {tab === t.id && (
                  <motion.div
                    layoutId={`preview-tab-${name}`}
                    className="absolute inset-0 rounded-md bg-[var(--color-surface)]"
                    style={{ boxShadow: "0 1px 3px var(--color-shadow)" }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  />
                )}
                <span className="relative z-10">{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {tab === "preview" ? (
        <div className={previewClassName || "preview-grid flex min-h-[200px] items-center justify-center p-8 bg-[var(--color-preview-bg)]"}>
          {children}
        </div>
      ) : (
        <CodeBlock code={code} />
      )}
    </div>
  );
}
