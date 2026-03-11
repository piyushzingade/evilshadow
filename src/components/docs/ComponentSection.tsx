"use client";

import { ComponentPreview } from "@/components/ui/ComponentPreview";
import { ComponentVariant, StyleId, ComponentType } from "@/types";
import { generateCodeString } from "@/lib/code-templates";
import { CustomizerState } from "@/types";

// Dynamic imports for style components
import dynamic from "next/dynamic";

const styleComponents: Record<
  string,
  Record<string, React.ComponentType<{ variant?: string; customStyle?: React.CSSProperties }>>
> = {
  glassmorphism: {
    card: dynamic(() => import("@/components/styles/glassmorphism/Card")),
    button: dynamic(() => import("@/components/styles/glassmorphism/Button")),
    input: dynamic(() => import("@/components/styles/glassmorphism/Input")),
  },
  "liquid-glass": {
    card: dynamic(() => import("@/components/styles/liquid-glass/Card")),
    button: dynamic(() => import("@/components/styles/liquid-glass/Button")),
    input: dynamic(() => import("@/components/styles/liquid-glass/Input")),
  },
  neobrutalism: {
    card: dynamic(() => import("@/components/styles/neobrutalism/Card")),
    button: dynamic(() => import("@/components/styles/neobrutalism/Button")),
    input: dynamic(() => import("@/components/styles/neobrutalism/Input")),
  },
  claymorphism: {
    card: dynamic(() => import("@/components/styles/claymorphism/Card")),
    button: dynamic(() => import("@/components/styles/claymorphism/Button")),
    input: dynamic(() => import("@/components/styles/claymorphism/Input")),
  },
  "metal-liquid": {
    card: dynamic(() => import("@/components/styles/metal-liquid/Card")),
    button: dynamic(() => import("@/components/styles/metal-liquid/Button")),
    input: dynamic(() => import("@/components/styles/metal-liquid/Input")),
  },
  minimalism: {
    card: dynamic(() => import("@/components/styles/minimalism/Card")),
    button: dynamic(() => import("@/components/styles/minimalism/Button")),
    input: dynamic(() => import("@/components/styles/minimalism/Input")),
  },
  neomorphism: {
    card: dynamic(() => import("@/components/styles/neomorphism/Card")),
    button: dynamic(() => import("@/components/styles/neomorphism/Button")),
    input: dynamic(() => import("@/components/styles/neomorphism/Input")),
  },
  skeuomorphism: {
    card: dynamic(() => import("@/components/styles/skeuomorphism/Card")),
    button: dynamic(() => import("@/components/styles/skeuomorphism/Button")),
    input: dynamic(() => import("@/components/styles/skeuomorphism/Input")),
  },
};

interface ComponentSectionProps {
  styleId: StyleId;
  componentType: ComponentType;
  variants: ComponentVariant[];
  customizerState?: CustomizerState;
  cssStyles?: React.CSSProperties;
}

export function ComponentSection({
  styleId,
  componentType,
  variants,
  customizerState,
  cssStyles,
}: ComponentSectionProps) {
  const StyleComponent = styleComponents[styleId]?.[componentType];

  if (!StyleComponent) {
    return (
      <div className="rounded-xl border border-[var(--color-border)] p-8 text-center text-[var(--color-fg-muted)]">
        Component not found
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {variants.map((variant) => (
        <ComponentPreview
          key={variant.id}
          name={variant.name}
          code={generateCodeString(styleId, componentType, variant.id, customizerState)}
        >
          <StyleComponent variant={variant.id} customStyle={cssStyles} />
        </ComponentPreview>
      ))}
    </div>
  );
}
