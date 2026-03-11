"use client";

import { getStyleById } from "@/lib/styles-registry";
import { StylePage } from "./StylePage";

export function StylePageWrapper({ styleId }: { styleId: string }) {
  const style = getStyleById(styleId);
  if (!style) return null;
  return <StylePage style={style} />;
}
