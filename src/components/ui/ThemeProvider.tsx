"use client";

import { useEffect } from "react";
import { ThemeContext, useThemeState } from "@/hooks/useTheme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeState = useThemeState();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeState.theme);
  }, [themeState.theme]);

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
}
