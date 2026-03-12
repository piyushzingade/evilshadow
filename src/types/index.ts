export type StyleId =
  | "glassmorphism"
  | "liquid-glass"
  | "neobrutalism"
  | "claymorphism"
  | "metal-liquid"
  | "minimalism"
  | "neomorphism"
  | "skeuomorphism";

export type ComponentType = "card" | "button" | "input";

export interface ComponentVariant {
  id: string;
  name: string;
  description: string;
}

export interface ComponentDefinition {
  type: ComponentType;
  variants: ComponentVariant[];
}

export interface StyleDefinition {
  id: StyleId;
  name: string;
  description: string;
  tagline: string;
  color: string;
  font: string;
  fontVariable: string;
  techniques: string[];
  cssHighlights: string[];
  components: ComponentDefinition[];
}

export interface CustomizerState {
  blur: number;
  opacity: number;
  shadowX: number;
  shadowY: number;
  shadowBlur: number;
  shadowSpread: number;
  shadowColor: string;
  shadowOpacity: number;
  borderRadius: number;
  bgColor: string;
  borderColor: string;
  borderWidth: number;
}

export interface StyleComponentProps {
  variant?: string;
  customStyle?: React.CSSProperties;
}
