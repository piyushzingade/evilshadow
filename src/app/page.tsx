import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/landing/Hero";
import { StyleGallery } from "@/components/landing/StyleGallery";
import { InteractiveDemo } from "@/components/landing/InteractiveDemo";
import { Features } from "@/components/landing/Features";
import { Stats } from "@/components/landing/Stats";
import { CTA } from "@/components/landing/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StyleGallery />
        <InteractiveDemo />
        <Features />
        <Stats />
        <CTA />
      </main>
    </>
  );
}
