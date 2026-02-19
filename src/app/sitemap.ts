import { MetadataRoute } from "next";
import { docsSource, blogSource } from "@/lib/source";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ryosta.my.id";

  // Docs pages
  const docsRoutes = docsSource.getPages().map((page) => ({
    url: `${baseUrl}/docs/${page.slugs.join("/")}`,
    lastModified: new Date(),
  }));

  // Blog pages
  const blogRoutes = blogSource.getPages().map((page) => ({
    url: `${baseUrl}/blog/${page.slugs.join("/")}`,
    lastModified: page.data.date
      ? new Date(page.data.date)
      : new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }
  ));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...docsRoutes,
    ...blogRoutes,
  ];
}
