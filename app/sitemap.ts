import { MetadataRoute } from "next";
import { CATEGORIES, SITE_URL } from "@/lib/constants";
import { getAllProducts } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/shop",
    "/services/buy",
    "/services/sell",
    "/services/swap",
    "/services/repairs",
    "/about",
    "/store",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const categoryRoutes = CATEGORIES.map((c) => ({
    url: `${SITE_URL}/shop/${c.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = getAllProducts().map((p) => ({
    url: `${SITE_URL}/shop/${p.category}/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
