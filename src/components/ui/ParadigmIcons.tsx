import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

/* ─── Glassmorphism: Two overlapping frosted panes ─────────── */
export function GlassmorphismIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="8" y="3" width="12" height="12" rx="2.5" fill="currentColor" opacity="0.35" />
      <rect x="4" y="8" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
    </svg>
  );
}

/* ─── Liquid Glass: Droplet lens ──────────────────────────── */
export function LiquidGlassIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
      <path
        d="M8 10.5Q12 7.5 16 10.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

/* ─── Neobrutalism: Bold offset square ───────────────────── */
export function NeobrutalismIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="7" y="7" width="13" height="13" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="4" y="4" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

/* ─── Claymorphism: Puffy rounded pill ───────────────────── */
export function ClaymorphismIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="6" width="18" height="12" rx="6" fill="currentColor" opacity="0.3" />
      <rect x="3" y="6" width="18" height="12" rx="6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/* ─── Metal Liquid: Faceted diamond ──────────────────────── */
export function MetalLiquidIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3L21 12L12 21L3 12Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M12 3L7.5 12L12 21" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}

/* ─── Minimalism: Circle with center dot ─────────────────── */
export function MinimalismIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    </svg>
  );
}

/* ─── Neomorphism: Raised concentric circles ─────────────── */
export function NeomorphismIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.12" />
      <circle cx="12" cy="12" r="5.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

/* ─── Skeuomorphism: Stacked layers ──────────────────────── */
export function SkeuomorphismIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="5" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.3" fill="currentColor" fillOpacity="0.05" />
      <rect x="5" y="7" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.55" fill="currentColor" fillOpacity="0.08" />
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.12" />
    </svg>
  );
}

/* ─── Paradigm ID → Icon lookup ─────────────────────────── */
export const paradigmIconMap: Record<string, (props: IconProps) => React.JSX.Element> = {
  glassmorphism: GlassmorphismIcon,
  "liquid-glass": LiquidGlassIcon,
  neobrutalism: NeobrutalismIcon,
  claymorphism: ClaymorphismIcon,
  "metal-liquid": MetalLiquidIcon,
  minimalism: MinimalismIcon,
  neomorphism: NeomorphismIcon,
  skeuomorphism: SkeuomorphismIcon,
};
