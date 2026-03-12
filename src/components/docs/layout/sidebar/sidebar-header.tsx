import { SidebarHeader } from "@/components/ui/sidebar";
import Link from "next/link";
import React from "react";

const DocsSidebarHeader = () => {
  return (
    <SidebarHeader className="border-b border-dashed h-14 justify-center px-2">
      <Link href="/">
        <div className="flex items-center gap-2 px-2">
          <span className="font-[family-name:var(--font-display)] text-2xl italic tracking-tight">
            EvilShadow
            <span className="font-[family-name:var(--font-mono)] text-xs text-muted-foreground/50 font-light ml-1.5">
              v0.1
            </span>
          </span>
        </div>
      </Link>
    </SidebarHeader>
  );
};

export default DocsSidebarHeader;
