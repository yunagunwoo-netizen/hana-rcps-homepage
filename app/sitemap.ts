import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://hanarcps.com/", changeFrequency: "monthly", priority: 1 },
    { url: "https://hanarcps.com/dangitalk", changeFrequency: "monthly", priority: .8 },
  ];
}
