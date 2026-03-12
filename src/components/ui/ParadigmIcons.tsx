import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

/* ─── Glassmorphism: Overlapping frosted glass panes ────────── */
export function GlassmorphismIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="8" y="3" width="12" height="12" rx="2.5" fill="currentColor" opacity="0.2" />
      <rect x="4" y="8" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/* ─── Liquid Glass: Fluid lens with refraction arc ─────────── */
export function LiquidGlassIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7.5 10.5Q12 7 16.5 10.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="9" cy="11.5" r="1.5" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

/* ─── Neobrutalism: Bold square with hard offset shadow ────── */
export function NeobrutalismIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="7" y="7" width="13" height="13" rx="2" fill="currentColor" />
      <rect
        x="4"
        y="4"
        width="13"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.12"
      />
    </svg>
  );
}

/* ─── Claymorphism: Soft puffy rounded form ─────────────────── */
export function ClaymorphismIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="7" fill="currentColor" opacity="0.3" />
      <path
        d="M7 9Q12 5 17 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

/* ─── Metal Liquid: Faceted crystalline diamond ─────────────── */
export function MetalLiquidIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 2.5L21.5 12L12 21.5L2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M12 2.5L8 12L12 21.5"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
}

/* ─── Minimalism: Pure restraint — circle and point ─────────── */
export function MinimalismIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

/* ─── Neomorphism: Raised surface with soft dual shadows ───── */
export function NeomorphismIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.08" />
      <circle
        cx="12"
        cy="12"
        r="5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.15"
      />
    </svg>
  );
}

/* ─── Skeuomorphism: Stacked physical layers ────────────────── */
export function SkeuomorphismIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="5" y="3" width="14" height="11" rx="2"
        stroke="currentColor" strokeWidth="1" opacity="0.25"
        fill="currentColor" fillOpacity="0.03"
      />
      <rect
        x="5" y="6.5" width="14" height="11" rx="2"
        stroke="currentColor" strokeWidth="1" opacity="0.45"
        fill="currentColor" fillOpacity="0.05"
      />
      <rect
        x="5" y="10" width="14" height="11" rx="2"
        stroke="currentColor" strokeWidth="1.5"
        fill="currentColor" fillOpacity="0.08"
      />
    </svg>
  );
}

/* ─── Paradigm ID → Icon lookup ─────────────────────────────── */
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
