import type { MetadataRoute } from "next";
import { company, products, solutions } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/solutions",
    ...solutions.map((s) => `/solutions/${s.slug}`),
    "/products",
    ...products.map((p) => `/products/${p.slug}`),
    "/how-we-work",
    "/company",
    "/our-work",
    "/contact",
    "/privacy",
  ];
  return paths.map((p) => ({
    url: `${company.url}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : p === "/contact" ? 0.9 : 0.7,
  }));
}
