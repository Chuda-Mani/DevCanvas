import type { MetadataRoute } from "next";

const siteUrl = "https://dev-canvas-liart.vercel.app";

// Single-page site: sections are anchors on the homepage, so only "/" is listed
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
