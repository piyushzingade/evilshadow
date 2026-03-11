"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Github } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { stylesRegistry } from "@/lib/styles-registry";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [stylesOpen, setStylesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top accent gradient line - 1px decorative strip */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
        }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-navbar-bg)] backdrop-blur-xl border-b border-dashed border-[var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-2xl italic text-[var(--color-fg)]"
          >
            EvilShadow
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="link-underline text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setStylesOpen(true)}
              onMouseLeave={() => setStylesOpen(false)}
            >
              <button className="link-underline flex items-center gap-1 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]">
                Styles
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    stylesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {stylesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 shadow-lg"
                  >
                    {/* Subtle accent line at the top of the dropdown */}
                    <div
                      className="absolute top-0 left-4 right-4 h-[1px]"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
                      }}
                    />
                    {stylesRegistry.map((style) => (
                      <Link
                        key={style.id}
                        href={`/docs/${style.id}`}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-[var(--color-fg-muted)] transition-all duration-200 hover:bg-[var(--color-border)] hover:text-[var(--color-fg)] hover:pl-4"
                        onClick={() => setStylesOpen(false)}
                      >
                        <span
                          className="h-2.5 w-2.5 rounded-full ring-2 ring-transparent transition-all duration-200"
                          style={{
                            backgroundColor: style.color,
                          }}
                        />
                        {style.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/docs"
              className="link-underline text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
            >
              Docs
            </Link>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-[var(--color-fg-muted)] transition-colors hover:bg-[var(--color-border)] hover:text-[var(--color-fg)]"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-[var(--color-fg)]" />
            ) : (
              <Menu className="h-5 w-5 text-[var(--color-fg)]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-72 border-l border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-6 pt-20 md:hidden"
          >
            {/* Decorative accent line at the top of drawer */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
              }}
            />

            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-lg text-[var(--color-fg)] transition-colors duration-200 hover:text-[var(--color-accent)]"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/docs"
                className="text-lg text-[var(--color-fg)] transition-colors duration-200 hover:text-[var(--color-accent)]"
                onClick={() => setMobileOpen(false)}
              >
                Docs
              </Link>

              {/* Styles section with dashed border */}
              <div className="border-t border-dashed border-[var(--color-border)] pt-4">
                <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[var(--color-fg-muted)]">
                  <span
                    className="inline-block h-1 w-4"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-accent), transparent)",
                    }}
                  />
                  Styles
                </p>
                {stylesRegistry.map((style) => (
                  <Link
                    key={style.id}
                    href={`/docs/${style.id}`}
                    className="flex items-center gap-3 py-2 text-sm text-[var(--color-fg-muted)] transition-all duration-200 hover:text-[var(--color-fg)] hover:pl-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: style.color }}
                    />
                    {style.name}
                  </Link>
                ))}
              </div>

              {/* Bottom section with dashed border */}
              <div className="border-t border-dashed border-[var(--color-border)] pt-4">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
