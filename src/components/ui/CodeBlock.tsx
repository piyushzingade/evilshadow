"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedHtml, setHighlightedHtml] = useState<string>("");
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    async function highlight() {
      try {
        const shiki = await import("shiki");
        const highlighter = await shiki.createHighlighter({
          themes: ["github-light", "github-dark"],
          langs: [language],
        });
        const html = highlighter.codeToHtml(code, {
          lang: language,
          themes: {
            light: "github-light",
            dark: "github-dark",
          },
          defaultColor: false,
        });
        setHighlightedHtml(html);
      } catch {
        setHighlightedHtml("");
      }
    }
    highlight();
  }, [code, language]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-xl bg-[var(--color-code-bg)] font-[family-name:var(--font-mono)]">
      {/* Top accent gradient */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
          opacity: 0.35,
        }}
      />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--color-code-border)] bg-[var(--color-code-header)] px-4 py-2">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-code-muted)]">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex h-7 items-center gap-1.5 rounded-lg px-2.5 text-[var(--color-code-muted)] transition-all duration-150 hover:bg-[var(--color-code-hover)] hover:text-[var(--color-fg)]"
          aria-label="Copy code"
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-1.5"
              >
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                <span className="text-[10px] font-medium text-emerald-500">
                  Copied!
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-1.5"
              >
                <Copy className="h-3.5 w-3.5" />
                <span className="text-[10px] font-medium">Copy</span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Code content */}
      <div className="code-scroll overflow-x-auto p-4 text-[13px] leading-[1.7]">
        {highlightedHtml ? (
          <div dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
        ) : (
          <pre className="text-[var(--color-code-muted)]">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
