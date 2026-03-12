"use client";

import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button-shadcn";
import { useTheme } from "next-themes";
import { GithubIcon, Lightbulb } from "lucide-react";

const DocsHeader = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-2 border-b border-dashed px-4 sticky top-0 bg-background z-50">
      <SidebarTrigger />
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className={cn("h-7 w-7 cursor-pointer")}
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          <Lightbulb className="size-4" />
        </Button>
        <Link
          href="https://github.com"
          target="_blank"
        >
          <Button variant="secondary" className={cn("h-7 cursor-pointer")}>
            <span className="text-xs">Star Github</span>
            <GithubIcon size={10} />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default DocsHeader;
