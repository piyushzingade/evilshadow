import { CustomizerState } from "@/types";

export function generateCodeString(
  styleId: string,
  componentType: string,
  variantId: string,
  customizer?: CustomizerState
): string {
  const styleName = styleId
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
  const typeName = componentType.charAt(0).toUpperCase() + componentType.slice(1);

  const customStyles = customizer
    ? generateCustomStyles(customizer)
    : "";

  const componentMap: Record<string, string> = {
    card: generateCardCode(styleId, variantId, customStyles),
    button: generateButtonCode(styleId, variantId, customStyles),
    input: generateInputCode(styleId, variantId, customStyles),
  };

  return componentMap[componentType] || `// ${styleName}${typeName} - ${variantId}`;
}

function generateCustomStyles(c: CustomizerState): string {
  const lines: string[] = [];
  if (c.blur > 0) lines.push(`  backdropFilter: "blur(${c.blur}px)",`);
  if (c.borderRadius > 0) lines.push(`  borderRadius: "${c.borderRadius}px",`);
  if (c.borderWidth > 0) {
    lines.push(`  border: "${c.borderWidth}px solid ${c.borderColor}",`);
  }
  if (c.bgColor) {
    const opacity = c.opacity / 100;
    lines.push(`  backgroundColor: "${c.bgColor}${Math.round(opacity * 255).toString(16).padStart(2, "0")}",`);
  }
  if (c.shadowBlur > 0 || c.shadowX !== 0 || c.shadowY !== 0) {
    const shadowOpacity = c.shadowOpacity / 100;
    lines.push(
      `  boxShadow: "${c.shadowX}px ${c.shadowY}px ${c.shadowBlur}px ${c.shadowSpread}px ${c.shadowColor}${Math.round(shadowOpacity * 255).toString(16).padStart(2, "0")}",`
    );
  }
  return lines.length > 0 ? `\n  style={{\n${lines.join("\n")}\n  }}` : "";
}

function generateCardCode(styleId: string, variantId: string, customStyles: string): string {
  return `<div
  className="${getCardClasses(styleId, variantId)}"${customStyles}
>
  <h3 className="text-lg font-semibold">Card Title</h3>
  <p className="text-sm opacity-70">Card description goes here.</p>
</div>`;
}

function generateButtonCode(styleId: string, variantId: string, customStyles: string): string {
  return `<button
  className="${getButtonClasses(styleId, variantId)}"${customStyles}
>
  Button Label
</button>`;
}

function generateInputCode(styleId: string, variantId: string, customStyles: string): string {
  return `<input
  type="text"
  placeholder="Type here..."
  className="${getInputClasses(styleId, variantId)}"${customStyles}
/>`;
}

function getCardClasses(styleId: string, _variantId: string): string {
  const base: Record<string, string> = {
    glassmorphism: "p-6 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-lg",
    "liquid-glass": "p-6 rounded-3xl bg-white/10 backdrop-blur-[40px] backdrop-saturate-[180%] border border-white/25 shadow-xl",
    neobrutalism: "p-6 rounded-lg bg-yellow-200 border-3 border-black shadow-[4px_4px_0px_#000]",
    claymorphism: "p-6 rounded-3xl bg-amber-100 shadow-[8px_8px_16px_#d1d5db,-4px_-4px_12px_#ffffff,inset_2px_2px_4px_rgba(255,255,255,0.6),inset_-1px_-1px_3px_rgba(0,0,0,0.1)]",
    "metal-liquid": "p-6 rounded-2xl bg-zinc-900 border border-zinc-700 shadow-xl",
    minimalism: "p-6 rounded-lg border border-zinc-200 bg-white",
    neomorphism: "p-6 rounded-2xl bg-[#e0e5ec] shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]",
    skeuomorphism: "p-6 rounded-xl bg-gradient-to-b from-zinc-100 to-zinc-200 border border-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_2px_4px_rgba(0,0,0,0.2)]",
  };
  return base[styleId] || "p-6 rounded-lg border";
}

function getButtonClasses(styleId: string, _variantId: string): string {
  const base: Record<string, string> = {
    glassmorphism: "px-6 py-2.5 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 text-white hover:bg-white/30 transition",
    "liquid-glass": "px-6 py-2.5 rounded-full bg-white/15 backdrop-blur-[30px] backdrop-saturate-150 border border-white/20 text-white hover:bg-white/25 transition",
    neobrutalism: "px-6 py-2.5 rounded-lg bg-pink-400 border-3 border-black shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold",
    claymorphism: "px-6 py-2.5 rounded-2xl bg-amber-200 shadow-[4px_4px_8px_#d1d5db,-2px_-2px_6px_#ffffff,inset_1px_1px_2px_rgba(255,255,255,0.5)] active:shadow-[inset_2px_2px_4px_#d1d5db] transition",
    "metal-liquid": "px-6 py-2.5 rounded-xl bg-zinc-800 border border-zinc-600 text-white hover:border-zinc-400 transition shadow-lg",
    minimalism: "px-6 py-2.5 rounded border border-zinc-300 text-zinc-800 hover:bg-zinc-50 transition",
    neomorphism: "px-6 py-2.5 rounded-xl bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] transition",
    skeuomorphism: "px-6 py-2.5 rounded-lg bg-gradient-to-b from-blue-400 to-blue-600 border border-blue-700 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.3)] active:from-blue-500 active:to-blue-700 active:translate-y-[1px] transition",
  };
  return base[styleId] || "px-6 py-2.5 rounded border";
}

function getInputClasses(styleId: string, _variantId: string): string {
  const base: Record<string, string> = {
    glassmorphism: "w-full px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/50 focus:border-white/40 outline-none transition",
    "liquid-glass": "w-full px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-[30px] backdrop-saturate-150 border border-white/15 text-white placeholder-white/40 focus:border-white/30 outline-none transition",
    neobrutalism: "w-full px-4 py-2.5 rounded-lg bg-white border-3 border-black focus:shadow-[2px_2px_0px_#000] outline-none transition font-medium",
    claymorphism: "w-full px-4 py-2.5 rounded-2xl bg-amber-50 shadow-[inset_2px_2px_4px_#d1d5db,inset_-1px_-1px_3px_#ffffff] focus:shadow-[inset_3px_3px_6px_#d1d5db,inset_-2px_-2px_4px_#ffffff] outline-none transition",
    "metal-liquid": "w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:border-zinc-400 outline-none transition",
    minimalism: "w-full px-0 py-2.5 border-b border-zinc-300 bg-transparent focus:border-zinc-800 outline-none transition",
    neomorphism: "w-full px-4 py-2.5 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] outline-none transition",
    skeuomorphism: "w-full px-4 py-2.5 rounded-lg bg-white border border-zinc-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:border-blue-500 outline-none transition",
  };
  return base[styleId] || "w-full px-4 py-2.5 rounded border outline-none";
}
