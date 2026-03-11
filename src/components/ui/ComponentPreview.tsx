"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { CodeBlock } from "./CodeBlock";
import { Theme } from "@/types";

interface ComponentPreviewProps {
  name: string;
  children: React.ReactNode;
  code: string;
}

export function ComponentPreview({ name, children, code }: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [previewTheme, setPreviewTheme] = useState<Theme>("dark");

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
        {tab === "preview" && (
          <button
            onClick={() =>
              setPreviewTheme((t) => (t === "dark" ? "light" : "dark"))
            }
            className="flex h-7 w-7 items-center justify-center rounded-md text-[var(--color-fg-muted)] transition-colors hover:bg-[var(--color-border)]"
            aria-label="Toggle preview theme"
          >
            {previewTheme === "dark" ? (
              <Moon className="h-3.5 w-3.5" />
            ) : (
              <Sun className="h-3.5 w-3.5" />
            )}
          </button>
        )}
      </div>

      {tab === "preview" ? (
        <div
          data-theme={previewTheme}
          className="preview-grid flex min-h-[200px] items-center justify-center p-8"
          style={{
            backgroundColor:
              previewTheme === "dark" ? "#18181b" : "#f5f5f5",
          }}
        >
          {children}
        </div>
      ) : (
        <CodeBlock code={code} />
      )}
    </div>
  );
}
