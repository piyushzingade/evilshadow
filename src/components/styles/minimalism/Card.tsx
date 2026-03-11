"use client";

import { motion } from "framer-motion";
import { StyleComponentProps } from "@/types";

const NOISE_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==";

function NoiseLayer({ opacity = 0.03 }: { opacity?: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{ opacity, backgroundImage: "url('" + NOISE_URL + "')" }}
    />
  );
}

// ---------------------------------------------------------------------------
// Stat Card
// Large serif number etched into a grainy surface. Feels like a concrete
// plaque in a museum -- the number is the ONLY thing that matters.
// ---------------------------------------------------------------------------
function StatCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="relative w-72 bg-zinc-100 px-10 py-16 overflow-hidden"
      style={customStyle}
    >
      {/* Light noise texture */}
      <NoiseLayer opacity={0.03} />
      {/* Heavier noise layer for concrete / etched feel */}
      <NoiseLayer opacity={0.07} />

      {/* Subtle top-left emboss highlight */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/[0.02]" />

      <p className="relative font-[family-name:var(--font-editorial)] text-7xl tracking-tight text-zinc-800 leading-none mix-blend-multiply">
        1,284
      </p>
      <div className="relative mt-6 h-px w-8 bg-zinc-300" />
      <p className="relative mt-4 text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-[family-name:var(--font-mono)]">
        Active Users
      </p>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Content Card
// Typography-first: a serif headline, long-form body, a barely-there link.
// No borders -- just whitespace and hierarchy do the work.
// ---------------------------------------------------------------------------
function ContentCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="relative w-80 bg-white border border-zinc-100 px-10 py-14"
      style={customStyle}
    >
      {/* Hairline top accent */}
      <div className="absolute top-0 left-10 right-10 h-px bg-zinc-200" />

      <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-[family-name:var(--font-mono)] mb-6">
        Principle 10
      </p>

      <h3 className="font-[family-name:var(--font-editorial)] text-2xl text-zinc-900 leading-[1.2] tracking-tight">
        Less, but better
      </h3>

      <p className="mt-6 text-[13px] leading-[2] text-zinc-400 font-light">
        Good design is as little design as possible. Concentrate on the
        essential aspects, and the products are not burdened with
        non-essentials. Back to purity, back to simplicity.
      </p>

      <div className="mt-10 h-px w-full bg-zinc-100" />

      <a
        href="#"
        className="group mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-[family-name:var(--font-mono)] transition-colors duration-500 hover:text-zinc-900"
      >
        <span>Read more</span>
        <motion.span
          className="inline-block"
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.3 }}
        >
          &rarr;
        </motion.span>
      </a>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Quote Card -- "ON/OFF" typographic poster
// Bold black & white composition. The pill+circle forms the "O", massive "N"
// beside it, "FF" below. Thin divider. Italic serif quote at the bottom.
// Zero colour. Pure print-poster energy.
// ---------------------------------------------------------------------------
function QuoteCard({ customStyle }: { customStyle?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="relative w-80 bg-white px-10 py-16 overflow-hidden"
      style={customStyle}
    >
      <NoiseLayer />
      {/* ON/OFF typographic composition */}
      <div className="flex items-start gap-[2px] mb-10">
        {/* Pill with white circle = the "O" */}
        <div className="relative w-[60px] h-[108px] bg-zinc-900 rounded-full flex flex-col items-center pt-[6px]">
          <div
            className="w-[44px] h-[44px] rounded-full bg-white"
            style={{
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.06)",
            }}
          />
        </div>

        {/* N stacked with FF */}
        <div className="flex flex-col -ml-[2px]">
          <span className="font-[family-name:var(--font-editorial)] text-[76px] font-black text-zinc-900 leading-[0.82] tracking-[-0.02em]">
            N
          </span>
          <span className="font-[family-name:var(--font-editorial)] text-[50px] font-black text-zinc-900 leading-[0.88] tracking-[-0.01em]">
            FF
          </span>
        </div>
      </div>

      {/* Thin divider */}
      <div className="h-px w-full bg-zinc-200 mb-8" />

      {/* Quote in italic serif */}
      <blockquote className="font-[family-name:var(--font-editorial)] text-[17px] italic leading-[1.7] text-zinc-600 text-center">
        &ldquo;Do the best you can with what you have, where you are&rdquo;
      </blockquote>

      {/* Tiny attribution */}
      <p className="mt-5 text-center text-[9px] uppercase tracking-[0.35em] text-zinc-300 font-[family-name:var(--font-mono)]">
        Theodore Roosevelt
      </p>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------
export default function MinimalismCard({
  variant = "stat",
  customStyle,
}: StyleComponentProps) {
  switch (variant) {
    case "content":
      return <ContentCard customStyle={customStyle} />;
    case "quote":
      return <QuoteCard customStyle={customStyle} />;
    case "stat":
    default:
      return <StatCard customStyle={customStyle} />;
  }
}
