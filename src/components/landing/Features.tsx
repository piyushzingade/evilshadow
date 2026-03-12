import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { DotCluster, DotDivider, DotNebula } from "./DotMatrix";

const features = [
  {
    title: "Copy & Paste Ready",
    description:
      "Every component is self-contained. Grab the code and drop it into your project -- no extra configuration, no hidden dependencies.",
  },
  {
    title: "Real-Time Customization",
    description:
      "Adjust blur, shadows, borders, and colors with an interactive panel. See changes instantly and export the exact CSS you need.",
  },
  {
    title: "Light & Dark Themes",
    description:
      "All components work beautifully in both light and dark modes. Theme support is built in from the ground up.",
  },
  {
    title: "Eight Design Systems",
    description:
      "From Glassmorphism to Skeuomorphism, explore the full spectrum of contemporary interface design paradigms.",
  },
  {
    title: "TypeScript Native",
    description:
      "Built with TypeScript from the ground up. Full type safety, IntelliSense, and clean interfaces for every component.",
  },
  {
    title: "Zero Dependencies",
    description:
      "Components use only Tailwind CSS. No extra libraries to install, no version conflicts, no bloat in your bundle.",
  },
];

export function Features() {
  return (
    <section className="relative px-6 py-28 overflow-hidden">
      {/* Dot nebula — left side atmosphere */}
      <div className="pointer-events-none absolute top-[15%] left-[2%] hidden xl:block">
        <DotNebula animationDelay={0.3} className="opacity-50" />
      </div>

      {/* Dot cluster — right side accent */}
      <div className="pointer-events-none absolute bottom-[20%] right-[3%] hidden lg:block">
        <DotCluster
          rows={20}
          cols={16}
          dotSize={3}
          gap={3}
          seed={44}
          density={0.55}
          className="opacity-12"
          animationDelay={0.5}
        />
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <AnimatedSection className="mb-4">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
            Why EvilShadow
          </p>
        </AnimatedSection>

        <AnimatedSection className="mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-5xl italic text-[var(--color-fg)] md:text-6xl">
            Built for Developers
          </h2>
        </AnimatedSection>

        {/* Features list in 2 columns */}
        <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.06}>
              {/* Top dashed border for each item */}
              <div className="group relative border-t border-dashed border-[var(--color-border)] py-8 transition-all duration-300">
                {/* Left accent gradient line - visible on hover */}
                <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-gradient-to-b from-[var(--color-accent)] to-transparent opacity-0 transition-all duration-500 group-hover:scale-y-100 group-hover:opacity-100" />

                <div className="flex gap-4 pl-1 transition-all duration-300 group-hover:pl-3">
                  {/* Number prefix - accent highlight on hover */}
                  <span className="font-[family-name:var(--font-mono)] text-xs pt-0.5 flex-shrink-0 text-[var(--color-fg-muted)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-[var(--color-fg)] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Dot divider at the bottom */}
        <div className="mt-16">
          <DotDivider animationDelay={0.4} />
        </div>
      </div>
    </section>
  );
}
