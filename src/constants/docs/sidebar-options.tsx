import {
  Palette,
  BookOpen,
  Sparkles,
  Layers,
  Box,
  Minimize2,
  Circle,
  Gem,
  Droplets,
  Zap,
} from "lucide-react";
import { SidebarOptionsProps } from "@/types/docs/sidebar-types";

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
          icon: <Sparkles className="size-4" />,
        },
        {
          title: "Liquid Glass",
          url: "/docs/liquid-glass",
          icon: <Droplets className="size-4" />,
        },
        {
          title: "Neobrutalism",
          url: "/docs/neobrutalism",
          icon: <Zap className="size-4" />,
        },
        {
          title: "Claymorphism",
          url: "/docs/claymorphism",
          icon: <Box className="size-4" />,
        },
        {
          title: "Metal Liquid",
          url: "/docs/metal-liquid",
          icon: <Gem className="size-4" />,
        },
        {
          title: "Minimalism",
          url: "/docs/minimalism",
          icon: <Minimize2 className="size-4" />,
        },
        {
          title: "Neomorphism",
          url: "/docs/neomorphism",
          icon: <Circle className="size-4" />,
        },
        {
          title: "Skeuomorphism",
          url: "/docs/skeuomorphism",
          icon: <Layers className="size-4" />,
        },
      ],
    },
  ],
};
