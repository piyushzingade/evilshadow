"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen } from "lucide-react";
import { useState } from "react";
import { stylesRegistry } from "@/lib/styles-registry";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    {
      href: "/docs",
      label: "Getting Started",
      icon: <BookOpen className="h-4 w-4" />,
      color: "var(--color-accent)",
    },
    ...stylesRegistry.map((style) => ({
      href: `/docs/${style.id}`,
      label: style.name,
      icon: (
        <span
          className="inline-block h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: style.color }}
        />
      ),
      color: style.color,
    })),
  ];

  const navContent = (
    <nav className="flex flex-col gap-1 py-4">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
              isActive
                ? "bg-[var(--color-border-subtle)] font-medium text-[var(--color-fg)]"
                : "text-[var(--color-fg-muted)] hover:bg-[var(--color-border-subtle)] hover:text-[var(--color-fg)]"
            )}
          >
            {link.icon}
            {link.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-20 z-40 flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm lg:hidden"
        aria-label="Open sidebar"
      >
        <Menu className="h-4 w-4 text-[var(--color-fg)]" />
      </button>

      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-16 hidden h-[calc(100vh-4rem)] w-[260px] overflow-y-auto border-r border-[var(--color-sidebar-border)] bg-[var(--color-sidebar-bg)] px-4 lg:block">
        {navContent}
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 z-50 h-full w-[260px] overflow-y-auto border-r border-[var(--color-sidebar-border)] bg-[var(--color-sidebar-bg)] px-4 lg:hidden"
            >
              <div className="flex h-16 items-center justify-between">
                <span className="font-[family-name:var(--font-display)] text-lg italic text-[var(--color-fg)]">
                  EvilShadow
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close sidebar"
                >
                  <X className="h-5 w-5 text-[var(--color-fg)]" />
                </button>
              </div>
              {navContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
