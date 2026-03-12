"use client";

import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button-shadcn";
import { GithubIcon } from "lucide-react";
import { ThemeToggleCompact } from "@/components/ui/ThemeToggle";

const DocsHeader = () => {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-2 border-b border-dashed px-4 sticky top-0 bg-background z-50">
      <SidebarTrigger />
      <div className="flex items-center gap-2">
        <ThemeToggleCompact />
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
