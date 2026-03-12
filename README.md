# EvilShadow

A curated collection of copy-paste UI components across **8 design paradigms** — from Glassmorphism to Skeuomorphism and everything between.

Built with Next.js, Tailwind CSS, and Framer Motion.

## Design Systems

| Paradigm | Description |
|----------|-------------|
| **Glassmorphism** | Frosted glass effects with blur and transparency |
| **Neobrutalism** | Bold borders, raw aesthetics, offset shadows |
| **Claymorphism** | Soft, inflated 3D surfaces with inner shadows |
| **Minimalism** | Clean lines, maximum whitespace, zero noise |
| **Neomorphism** | Soft extruded surfaces with subtle light/shadow |
| **Skeuomorphism** | Realistic textures and physical-world metaphors |
| **Liquid Glass** | Fluid refractive surfaces with dynamic distortion |
| **Metal Liquid** | Polished metallic surfaces with liquid reflections |

Each paradigm includes **Cards**, **Buttons**, and **Inputs** — fully styled, dark mode ready, and customizable via an interactive playground.

## Getting Started

```bash
# Clone the repository
git clone https://github.com/piyushzingade/evilshadow.git
cd evilshadow

# Install dependencies
bun install

# Start the dev server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page, or navigate to [http://localhost:3000/docs](http://localhost:3000/docs) for the documentation.

## Tech Stack

- **Framework** — [Next.js 16](https://nextjs.org) (App Router)
- **Styling** — [Tailwind CSS v4](https://tailwindcss.com)
- **Animation** — [Framer Motion](https://www.framer.com/motion)
- **Icons** — [Lucide React](https://lucide.dev)
- **MDX** — [Fumadocs](https://fumadocs.vercel.app) (content layer)
- **Theme** — [next-themes](https://github.com/pacocoursey/next-themes)
- **Components** — [Radix UI](https://www.radix-ui.com) primitives

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout with theme provider
│   ├── globals.css           # Theme tokens and base styles
│   └── docs/
│       ├── layout.tsx        # Docs layout with custom sidebar
│       └── [[...slug]]/
│           └── page.tsx      # MDX doc pages
├── components/
│   ├── landing/              # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── StyleGallery.tsx
│   │   ├── InteractiveDemo.tsx
│   │   ├── Features.tsx
│   │   ├── Stats.tsx
│   │   ├── CTA.tsx
│   │   └── DotMatrix.tsx     # Shared dot matrix decorations
│   ├── docs/                 # Documentation layout components
│   │   └── layout/
│   │       ├── sidebar/      # Custom sidebar
│   │       └── header/       # Docs header
│   └── ui/                   # Shared UI primitives
├── lib/                      # Utilities and data
├── hooks/                    # Custom React hooks
├── types/                    # TypeScript type definitions
└── constants/                # Static configuration
content/
└── docs/                     # MDX documentation files
```

## Features

- **72+ component variants** across 8 design paradigms
- **Interactive customizer** — tweak blur, shadows, borders, and colors in real-time
- **Dark & light themes** with smooth transitions
- **Copy-paste ready** — every component is self-contained
- **TypeScript native** with full type safety
- **Zero extra dependencies** — components use only Tailwind CSS
- **Custom docs sidebar** matching the project aesthetic
- **Responsive** — works on all screen sizes

## Scripts

```bash
bun dev       # Start development server
bun build     # Build for production
bun start     # Start production server
bun lint      # Run ESLint
```

## License

MIT
