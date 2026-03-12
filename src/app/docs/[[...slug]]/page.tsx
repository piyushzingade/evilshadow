import { source } from "@/lib/source";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const page = source.getPage(slug);

  if (!page) notFound();

  const { body: Mdx } = await page.data.load();

  return (
    <div className="page">
      <div className="flex flex-col sm:gap-1">
        <h1 className="text-2xl sm:text-3xl font-bold">{page.data.title}</h1>
        <p className="text-muted-foreground text-xs sm:text-sm">
          {page.data.description}
        </p>
      </div>
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <Mdx />
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug = [] } = await params;
  const page = source.getPage(slug);

  if (!page) return {};

  return {
    title: `${page.data.title} — EvilShadow`,
    description: page.data.description,
  };
}

export function generateStaticParams() {
  return source.generateParams();
}
