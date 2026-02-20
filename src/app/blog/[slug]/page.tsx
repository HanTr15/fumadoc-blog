import { blogSource } from "@/lib/source";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import { PostActions } from "@/components/PostActions";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>; // Next 16
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const page = blogSource.getPage([slug]);

  if (!page) return {};
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: page.data.title,
        description: page.data.description,
        author: {
          "@type": "Person",
          name: "Hamdan Trisnawan",
        },
        datePublished: page.data.date,
        url: `https://ryosta.my.id/blog/${slug}`,
      }),
    }}
  />

  return {
    title: page.data.title,
    description: page.data.description,
    keywords: [
      "PNETLab",
      "iShare2",
      "Network Lab",
      "VirtualBox",
      "Cyber Security",
      "Networking",
    ],
    authors: [{ name: "Hamdan Trisnawan" }],
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      type: "article",
      publishedTime: page.data.date,
      url: `https://ryosta.my.id/blog/${slug}`,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description: page.data.description,
      images: ["/og.png"],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const page = blogSource.getPage([slug]);

  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 pt-5 py-20">
      <div className="mb-8">
        <InlineTOC items={page.data.toc}>
          Table of Contents
        </InlineTOC>
      </div>

      <h1 className="text-4xl font-bold mb-6">
        {page.data.title}
      </h1>

      <p className="text-lg text-muted-foreground mb-6">
        {page.data.description}
      </p>

      <PostActions />

      <div className="prose dark:prose-invert max-w-none">
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(blogSource, page),
          })}
        />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return blogSource.getPages().map((page) => ({
    slug: page.slugs[0]!,
  }));
}
