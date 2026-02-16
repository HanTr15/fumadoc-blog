import { blogSource } from "@/lib/source";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { DocsPage } from 'fumadocs-ui/layouts/docs/page';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ← WAJIB di Next 16

  const page = blogSource.getPage([slug]);

  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage>
      <InlineTOC items={page.data.toc}>Table of Contents</InlineTOC>
  
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">
        {page.data.title}
      </h1>

      <div className="prose dark:prose-invert max-w-none">
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(blogSource, page),
          })}
        />
      </div>
    </div>
      </DocsPage>
  );
}

export async function generateStaticParams() {
  return blogSource.getPages().map((page) => ({
    slug: page.slugs[0]!,
  }));
}
