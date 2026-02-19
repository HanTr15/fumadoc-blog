import { MetadataRoute } from "next";
import { docsSource } from "@/lib/source";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = docsSource.getPages();

  const docsRoutes = pages.map((page) => ({
    url: `https://ryosta.my.id/docs/${page.slugs.join("/")}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://ryosta.my.id",
      lastModified: new Date(),
    },
    ...docsRoutes,
  ];
}
