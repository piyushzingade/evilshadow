import type { Metadata } from "next";
import {
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
  Space_Mono,
  Nunito,
  Playfair_Display,
  DM_Sans,
  Outfit,
  Sora,
  Archivo_Black,
  Quicksand,
  Orbitron,
  Cormorant_Garamond,
  Raleway,
  Crimson_Pro,
} from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./globals.css";

/* ── Display & Body ────────────────────────────────── */
const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/* ── Mono ──────────────────────────────────────────── */
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-brutalist",
  display: "swap",
});

/* ── Style-specific fonts ──────────────────────────── */

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-glass",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-liquid",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brutal-display",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-clay",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-soft",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-metal",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-serif-elegant",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-neu",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-skeu",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-clean",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EvilShadow — Premium UI Component Library",
  description:
    "Explore, preview, customize, and copy-paste components across 8 distinct design paradigms. Glassmorphism, Neobrutalism, Claymorphism, and more.",
};

const fontVars = [
  instrumentSerif,
  inter,
  jetbrainsMono,
  spaceMono,
  outfit,
  sora,
  archivoBlack,
  nunito,
  quicksand,
  orbitron,
  playfairDisplay,
  cormorantGaramond,
  raleway,
  crimsonPro,
  dmSans,
].map((f) => f.variable).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVars} antialiased`}>
        <RootProvider
          theme={{
            defaultTheme: "dark",
            attribute: "class",
            disableTransitionOnChange: true,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
