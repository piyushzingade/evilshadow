import { BookOpen } from "lucide-react";
import { SidebarOptionsProps } from "@/types/docs/sidebar-types";
import {
  GlassmorphismIcon,
  LiquidGlassIcon,
  NeobrutalismIcon,
  ClaymorphismIcon,
  MetalLiquidIcon,
  MinimalismIcon,
  NeomorphismIcon,
  SkeuomorphismIcon,
} from "@/components/ui/ParadigmIcons";

export const SIDEBAR_OPTIONS: SidebarOptionsProps = {
  gettingStarted: [
    {
      title: "Getting Started",
      url: "/docs",
      items: [
        {
          title: "Introduction",
          url: "/docs",
          icon: <BookOpen className="size-4" />,
        },
      ],
    },
  ],
  components: [
    {
      title: "Design Systems",
      url: "#",
      items: [
        {
          title: "Glassmorphism",
          url: "/docs/glassmorphism",
          icon: <GlassmorphismIcon className="size-4" />,
        },
        {
          title: "Liquid Glass",
          url: "/docs/liquid-glass",
          icon: <LiquidGlassIcon className="size-4" />,
        },
        {
          title: "Neobrutalism",
          url: "/docs/neobrutalism",
          icon: <NeobrutalismIcon className="size-4" />,
        },
        {
          title: "Claymorphism",
          url: "/docs/claymorphism",
          icon: <ClaymorphismIcon className="size-4" />,
        },
        {
          title: "Metal Liquid",
          url: "/docs/metal-liquid",
          icon: <MetalLiquidIcon className="size-4" />,
        },
        {
          title: "Minimalism",
          url: "/docs/minimalism",
          icon: <MinimalismIcon className="size-4" />,
        },
        {
          title: "Neomorphism",
          url: "/docs/neomorphism",
          icon: <NeomorphismIcon className="size-4" />,
        },
        {
          title: "Skeuomorphism",
          url: "/docs/skeuomorphism",
          icon: <SkeuomorphismIcon className="size-4" />,
        },
      ],
    },
  ],
};
