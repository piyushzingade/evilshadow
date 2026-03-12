import { cn } from "@/lib/utils";
import { InfoIcon, ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

const DocsContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(className, "flex flex-col sm:gap-1")}>{children}</div>
  );
};

const DocsTitle = ({
  className,
  title,
}: {
  className?: string;
  title: string;
}) => {
  return (
    <h2 id={title} className={cn(className, "text-2xl sm:text-3xl font-bold")}>
      <a href={`#${title}`}>{title}</a>
    </h2>
  );
};

const DocsSubtitle = ({
  className,
  title,
  withoutLink = false,
}: {
  className?: string;
  title: string;
  withoutLink?: boolean;
}) => {
  return (
    <h3
      id={title}
      className={cn(
        className,
        "text-lg font-medium [&:not(:first-child)]:mt-2"
      )}
    >
      {withoutLink ? title : <a href={`#${title}`}>{title}</a>}
    </h3>
  );
};

const DocsDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn(className, "text-muted-foreground text-xs sm:text-sm")}>
      {children}
    </p>
  );
};

const DocsParagraph = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn(className, "text-muted-foreground text-sm")}>{children}</p>
  );
};

const DocsLink = ({
  children,
  className,
  href,
  _blank,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  _blank?: boolean;
}) => {
  return (
    <Link
      href={href}
      target={_blank ? "_blank" : "_self"}
      className={cn(className, "text-primary group")}
    >
      <span className="relative">
        <span className="absolute -bottom-px h-px rounded w-full bg-primary/50 transition-all duration-300 group-hover:w-full group-hover:bg-primary"></span>
        {children}
      </span>
      <ExternalLink className="inline ml-0.5 mb-0.5 group-hover:text-primary text-muted-foreground duration-200 size-2.5" />
    </Link>
  );
};

const DocsCodeBadge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        className,
        "text-xs mx-1 px-1.5 py-0.5 rounded-md bg-muted border border-white/10"
      )}
    >
      {children}
    </span>
  );
};

const DocsHint = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(className, "flex items-center text-muted-foreground/70 ")}
    >
      <InfoIcon className="inline size-3 mr-1" />
      <span className="text-xs">{children}</span>
    </div>
  );
};

export {
  DocsContainer,
  DocsTitle,
  DocsSubtitle,
  DocsParagraph,
  DocsDescription,
  DocsLink,
  DocsCodeBadge,
  DocsHint,
};
