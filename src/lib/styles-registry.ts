import { StyleDefinition } from "@/types";

export const stylesRegistry: StyleDefinition[] = [
  {
    id: "glassmorphism",
    name: "Glassmorphism",
    description:
      "Frosted glass aesthetics with translucent layers, backdrop blur, and subtle borders that create depth through transparency.",
    tagline: "Frosted glass for modern interfaces",
    color: "#6366f1",
    font: "Outfit",
    fontVariable: "--font-glass",
    techniques: [
      "backdrop-filter: blur() for frosted glass effect",
      "Semi-transparent backgrounds with rgba/white alpha",
      "Layered borders with white alpha for glass edge highlight",
      "Gradient overlays for light refraction simulation",
      "Box-shadow with spread for outer glow depth",
    ],
    cssHighlights: [
      "backdrop-blur-xl",
      "bg-white/15",
      "border border-white/30",
      "shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
    ],
    components: [
      {
        type: "card",
        variants: [
          { id: "credit", name: "Credit Card", description: "Frosted Visa-style card with glass effect, EMV chip, and card number display" },
          { id: "profile", name: "Profile Card", description: "Avatar with stats and glass background, social media style" },
          { id: "weather", name: "Weather Card", description: "Temperature widget with glass overlay and weather details" },
        ],
      },
      {
        type: "button",
        variants: [
          { id: "primary", name: "Primary", description: "Gradient glass button with cyan-to-emerald fill and dot texture" },
          { id: "outline", name: "Outline", description: "Transparent glass border button with hover fill" },
          { id: "icon", name: "Icon", description: "Circular glass icon button with backdrop blur" },
        ],
      },
      {
        type: "input",
        variants: [
          { id: "search", name: "Search", description: "Glass search input with frosted background and icon" },
          { id: "text", name: "Text Input", description: "Floating label glass input with animated label" },
        ],
      },
    ],
  },
  {
    id: "liquid-glass",
    name: "Liquid Glass",
    description:
      "Apple-inspired depth with heavy saturation, rich blur, and fluid glass surfaces that feel alive and dimensional.",
    tagline: "Apple-inspired fluid depth",
    color: "#0ea5e9",
    font: "Sora",
    fontVariable: "--font-liquid",
    techniques: [
      "backdrop-filter: blur(40px) saturate(180%) for rich Apple-style glass",
      "Heavy saturation creates vibrant color bleed-through",
      "Multiple shadow layers for floating depth",
      "Subtle dot-grid texture patterns for materiality",
      "Large border-radius for pill/capsule shapes",
    ],
    cssHighlights: [
      "backdrop-blur-[40px]",
      "backdrop-saturate-[180%]",
      "bg-white/10",
      "rounded-3xl",
    ],
    components: [
      {
        type: "card",
        variants: [
          { id: "music", name: "Music Player", description: "Album art with progress bar, playback controls, and time display" },
          { id: "stats", name: "Stats Widget", description: "Large number display with bar chart visualization" },
          { id: "notification", name: "Notification", description: "Alert card with dismiss action and glass depth" },
        ],
      },
      {
        type: "button",
        variants: [
          { id: "pill", name: "Pill", description: "Rounded pill button with subtle glass and outer shadow depth" },
          { id: "segmented", name: "Segmented", description: "Multi-option control with animated active indicator" },
          { id: "fab", name: "Floating Action", description: "Circular FAB with heavy glass blur" },
        ],
      },
      {
        type: "input",
        variants: [
          { id: "search", name: "Search Bar", description: "Rounded glass search with keyboard shortcut hint" },
          { id: "text", name: "Text Field", description: "Glass text field with label and helper text" },
        ],
      },
    ],
  },
  {
    id: "neobrutalism",
    name: "Neobrutalism",
    description:
      "Bold borders, offset shadows, and vivid pastel fills that reject polish in favor of raw, confident expression.",
    tagline: "Raw, bold, unapologetically loud",
    color: "#f43f5e",
    font: "Space Mono + Archivo Black",
    fontVariable: "--font-brutalist",
    techniques: [
      "Thick 3px solid black borders on everything",
      "Offset box-shadow: 4px 4px 0 #000 for 3D depth",
      "Bold pastel background fills (yellow, pink, green, cream)",
      "Monospace typography for that raw, technical feel",
      "translateX/Y on hover to compress shadow illusion",
    ],
    cssHighlights: [
      "border-[3px] border-black",
      "shadow-[4px_4px_0px_#000]",
      "font-[family-name:var(--font-brutalist)]",
      "hover:translate-x-[2px] hover:translate-y-[2px]",
    ],
    components: [
      {
        type: "card",
        variants: [
          { id: "balance", name: "Balance Card", description: "Financial dashboard showing $84,329 with sub-accounts and manage link" },
          { id: "travel", name: "Travel Goal", description: "Japan travel savings tracker with progress bar and book flight CTA" },
          { id: "score", name: "Credit Score", description: "Dark score display showing 785 with circular SVG indicator" },
        ],
      },
      {
        type: "button",
        variants: [
          { id: "primary", name: "Primary", description: "Red filled button with thick border, offset shadow, and icon" },
          { id: "secondary", name: "Secondary", description: "Black filled button with export icon and border" },
          { id: "pill", name: "Pill Tag", description: "Circular FAB-style button with bold + icon" },
        ],
      },
      {
        type: "input",
        variants: [
          { id: "text", name: "Text Input", description: "Thick-bordered input with monospace placeholder and focus shadow" },
          { id: "search", name: "Search", description: "Search input with cream background and thick border" },
        ],
      },
    ],
  },
  {
    id: "claymorphism",
    name: "Claymorphism",
    description:
      "Soft, puffy 3D surfaces with inner highlight shadows that make elements look like sculpted clay or plasticine.",
    tagline: "Soft, puffy, 3D clay surfaces",
    color: "#a855f7",
    font: "Nunito",
    fontVariable: "--font-clay",
    techniques: [
      "Dual inner shadows: top-left highlight + bottom-right shadow",
      "Outer shadow for surface elevation",
      "Large border-radius (rounded-2xl/3xl) for puffy feel",
      "Soft pastel color palette (lavender, mint, orange, pink)",
      "Shadow inversion on press for sunken/pressed state",
    ],
    cssHighlights: [
      "shadow-[8px_8px_16px_dark,-4px_-4px_12px_light,inset_2px_2px_4px_highlight,inset_-1px_-1px_3px_shadow]",
      "rounded-3xl",
      "font-[family-name:var(--font-clay)]",
      "active: inset shadow swap",
    ],
    components: [
      {
        type: "card",
        variants: [
          { id: "dialog", name: "Dialog Card", description: "\"Hey, Wait!!\" dialog with character, purple text, and clay CTA buttons" },
          { id: "notification", name: "Notification", description: "Puffy notification card with bell icon and soft shadows" },
          { id: "pricing", name: "Pricing Card", description: "Clay pricing tier with feature list and rounded CTA" },
        ],
      },
      {
        type: "button",
        variants: [
          { id: "action", name: "Action", description: "Orange puffy 3D button with inner highlight and press-to-sink effect" },
          { id: "toggle", name: "Toggle", description: "Clay toggle button with raised/pressed states" },
          { id: "pill", name: "Pill", description: "Rounded clay pill button with soft emerald fill" },
        ],
      },
      {
        type: "input",
        variants: [
          { id: "rounded", name: "Rounded Input", description: "Sunken clay input with inset shadows and rounded corners" },
          { id: "select", name: "Select", description: "Clay-styled dropdown with custom chevron" },
        ],
      },
    ],
  },
  {
    id: "metal-liquid",
    name: "Metal Liquid",
    description:
      "Dark chrome surfaces with rainbow refraction borders, conic gradients, and liquid metal reflections.",
    tagline: "Chrome and rainbow refraction",
    color: "#8b5cf6",
    font: "Orbitron",
    fontVariable: "--font-metal",
    techniques: [
      "conic-gradient for rainbow refraction border effect",
      "Wrapper div with p-[1.5px] + inner bg for border simulation",
      "Dark zinc-900 surfaces for chrome contrast",
      "Gradient overlay for metallic surface highlight",
      "Subtle glow shadows for neon depth",
    ],
    cssHighlights: [
      "background: conic-gradient(from 0deg, #ff0000, #ff8800, ...)",
      "p-[1.5px] border wrapper technique",
      "bg-zinc-900",
      "shadow-[0_0_20px_rgba(139,92,246,0.3)]",
    ],
    components: [
      {
        type: "card",
        variants: [
          { id: "feature", name: "Feature Card", description: "Dark chrome card with rainbow refraction conic-gradient border" },
          { id: "steps", name: "Step Flow", description: "5-step process flow with numbered dark cards and arrows" },
          { id: "dashboard", name: "Dashboard", description: "Chrome dashboard stat widget with sparkline" },
        ],
      },
      {
        type: "button",
        variants: [
          { id: "chrome", name: "Chrome Submit", description: "Premium pill button with rainbow refraction border and metallic icon" },
          { id: "icon", name: "Icon Button", description: "Circular chrome button with rotating icon on hover" },
          { id: "gradient", name: "Gradient Edge", description: "Button with purple-to-blue gradient border" },
        ],
      },
      {
        type: "input",
        variants: [
          { id: "metal", name: "Metal Input", description: "Dark metal input with chrome border and focus glow" },
          { id: "search", name: "Glow Search", description: "Search input with conic-gradient glow on focus" },
        ],
      },
    ],
  },
  {
    id: "minimalism",
    name: "Minimalism",
    description:
      "Pure monochrome restraint with hairline borders, generous whitespace, and typography-first hierarchy.",
    tagline: "Less is more, precisely",
    color: "#737373",
    font: "Playfair Display + Cormorant Garamond",
    fontVariable: "--font-editorial",
    techniques: [
      "Strict monochrome palette — zinc/gray only",
      "Typography as primary design element",
      "Hairline 1px borders for subtle definition",
      "Generous negative space and padding",
      "Grain/noise texture overlay for materiality",
    ],
    cssHighlights: [
      "border border-zinc-200",
      "font-[family-name:var(--font-editorial)]",
      "tracking-[0.2em] uppercase",
      "Noise texture via CSS background-image",
    ],
    components: [
      {
        type: "card",
        variants: [
          { id: "stat", name: "Stat Card", description: "Ultra-minimal large serif number with uppercase label and noise texture" },
          { id: "content", name: "Content Card", description: "Typography-first card with serif title and plain text link" },
          { id: "quote", name: "Quote Card", description: "Large editorial serif italic quote with thin divider" },
        ],
      },
      {
        type: "button",
        variants: [
          { id: "text", name: "Text Only", description: "No-border button with animated hover underline" },
          { id: "outlined", name: "Outlined", description: "Monochrome 1px border button with minimal hover" },
          { id: "toggle", name: "Toggle", description: "Realistic minimal toggle with inset track and serif label" },
        ],
      },
      {
        type: "input",
        variants: [
          { id: "underline", name: "Underline", description: "Bottom-border-only input with uppercase label" },
          { id: "search", name: "Search", description: "Borderless search — just icon and text, pure minimalism" },
        ],
      },
    ],
  },
  {
    id: "neomorphism",
    name: "Neomorphism",
    description:
      "Soft extruded and inset surfaces created by dual light and dark shadows on a matching background.",
    tagline: "Soft shadows, extruded surfaces",
    color: "#ec4899",
    font: "Raleway",
    fontVariable: "--font-neu",
    techniques: [
      "Dual shadows: dark bottom-right + light top-left for extrusion",
      "Inset shadows for pressed/sunken elements",
      "Background color MUST match parent for seamless effect",
      "#e0e5ec as canonical neumorphic gray",
      "Color variants (pink) use tinted shadow pairs",
    ],
    cssHighlights: [
      "shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]",
      "shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]",
      "bg-[#e0e5ec]",
      "rounded-full for pill shapes",
    ],
    components: [
      {
        type: "card",
        variants: [
          { id: "dashboard", name: "Dashboard", description: "Thermostat card with circular dial, temperature, and controls" },
          { id: "device", name: "Device List", description: "Smart home devices with icons and neumorphic toggle switches" },
          { id: "scene", name: "Scene Selector", description: "Morning/Night scene buttons with Sun/Moon icons" },
        ],
      },
      {
        type: "button",
        variants: [
          { id: "power", name: "Power Button", description: "Large circular pink button with off/on/glow states" },
          { id: "rectangular", name: "Rectangular", description: "Extruded rectangular button with pressed state" },
          { id: "circular", name: "Circular Icon", description: "Small circular icon button with inset shadow" },
        ],
      },
      {
        type: "input",
        variants: [
          { id: "extruded", name: "Extruded", description: "Pill-shaped input pressed into neumorphic surface" },
          { id: "inset", name: "Inset Search", description: "Sunken search input with search icon" },
        ],
      },
    ],
  },
  {
    id: "skeuomorphism",
    name: "Skeuomorphism",
    description:
      "Realistic material textures, beveled edges, multi-layer gradients, and tangible physical metaphors.",
    tagline: "Real-world textures, digital craft",
    color: "#f59e0b",
    font: "Crimson Pro",
    fontVariable: "--font-skeu",
    techniques: [
      "Multi-layer linear gradients for metallic surfaces",
      "Radial gradient for spherical knob/button 3D effect",
      "Inner highlight shadow for top-left light source",
      "translateY on active for physical press simulation",
      "Beveled edges via gradient + border combination",
    ],
    cssHighlights: [
      "bg-gradient-to-b from-zinc-200 to-zinc-300",
      "radial-gradient(circle at 35% 35%, #fff, #ccc, #999)",
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]",
      "active:translate-y-[1px]",
    ],
    components: [
      {
        type: "card",
        variants: [
          { id: "clock", name: "Clock", description: "Analog clock face with metallic beveled frame and hour/minute hands" },
          { id: "alarm", name: "Alarm List", description: "Multiple alarms with times, day selectors, and toggle switches" },
          { id: "weather", name: "Weather Card", description: "Weather display with textured background and floating badge" },
        ],
      },
      {
        type: "button",
        variants: [
          { id: "push", name: "3D Push", description: "Raised button with gradient, inner highlight, and press-to-sink effect" },
          { id: "toggle", name: "Toggle Switch", description: "Brushed metal track with spherical gradient knob" },
          { id: "segmented", name: "Segmented", description: "iOS-style segmented control with active recessed state" },
        ],
      },
      {
        type: "input",
        variants: [
          { id: "embossed", name: "Embossed", description: "Sunken input with metallic bezel frame" },
          { id: "search", name: "Metallic Search", description: "Chrome-framed search with raised key cap shortcut badge" },
        ],
      },
    ],
  },
];

export function getStyleById(id: string): StyleDefinition | undefined {
  return stylesRegistry.find((s) => s.id === id);
}

