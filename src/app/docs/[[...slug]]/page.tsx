import { source } from "@/lib/source";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DocsPageContent } from "@/components/docs/DocsPageContent";

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const page = source.getPage(slug);

  if (!page) notFound();

  const { body: Mdx } = await page.data.load();

  const isIndex = slug.length === 0;

  if (isIndex) {
    return (
      <DocsPageContent
        title={page.data.title}
        description={page.data.description}
      >
        <Mdx />
      </DocsPageContent>
    );
  }

  // Style pages — StylePageWrapper handles its own header
  return (
    <div className="docs-page">
      <Mdx />
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
