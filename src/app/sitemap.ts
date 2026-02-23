import type { MetadataRoute } from "next";

const baseUrl = "https://itechsol.ae";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/solutions", "/projects", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
