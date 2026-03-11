import { source } from "@/lib/source";
import { notFound } from "next/navigation";
import {
  DocsPage,
  DocsBody,
} from "fumadocs-ui/layouts/docs/page";
import type { Metadata } from "next";

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const page = source.getPage(slug);

  if (!page) notFound();

  const { body: Mdx, toc } = await page.data.load();

  return (
    <DocsPage toc={toc}>
      <h1 className="text-3xl font-bold">{page.data.title}</h1>
      <p className="mb-6 mt-2 text-lg text-fd-muted-foreground">
        {page.data.description}
      </p>
      <DocsBody>
        <Mdx />
      </DocsBody>
    </DocsPage>
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
