"use client";

import React, { useEffect, useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button-shadcn";
import { GithubIcon, Star } from "lucide-react";
import { ThemeToggleCompact } from "@/components/ui/ThemeToggle";

const REPO_OWNER = "piyushzingade";
const REPO_NAME = "evilshadow";

function useStarCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`)
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.stargazers_count === "number") {
          setCount(data.stargazers_count);
        }
      })
      .catch(() => {});
  }, []);

  return count;
}

const DocsHeader = () => {
  const stars = useStarCount();

  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-2 border-b border-dashed px-4 sticky top-0 bg-background z-50">
      <SidebarTrigger />
      <div className="flex items-center gap-2">
        <ThemeToggleCompact />
        <Link
          href={`https://github.com/${REPO_OWNER}/${REPO_NAME}`}
          target="_blank"
        >
          <Button variant="secondary" className={cn("h-7 cursor-pointer gap-1.5")}>
            <GithubIcon size={12} />
            <span className="text-xs">Star</span>
            {stars !== null && (
              <>
                <span className="h-3 w-px bg-border" />
                <span className="flex items-center gap-0.5 text-xs tabular-nums">
                  <Star size={10} className="fill-current" />
                  {stars}
                </span>
              </>
            )}
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default DocsHeader;
