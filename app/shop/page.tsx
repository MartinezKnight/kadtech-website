import type { Metadata } from "next";
import Link from "next/link";
import ShopFilters from "@/components/ShopFilters";
import CategoryCard from "@/components/CategoryCard";
import { CATEGORIES } from "@/lib/constants";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop Smartphones, Laptops, Cameras & More | Kadtech Abuja",
  description:
    "Browse Kadtech's technology listings in Abuja — smartphones, laptops, cameras, drones, accessories and Bluetooth speakers.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  const products = getAllProducts();

  return (
    <div className="container-kad py-16 md:py-24">
      <p className="eyebrow-label text-charcoal/40">Shop</p>
      <h1 className="section-heading mt-3">Everything Kadtech sells.</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14 mb-20">
        {CATEGORIES.map((c) => (
          <CategoryCard key={c.slug} category={c} />
        ))}
      </div>

      <h2 className="font-display text-2xl mb-2">All listings</h2>
      <p className="font-body text-sm text-charcoal/50 mb-10">
        Sample listings shown below — real Kadtech inventory to be connected.
      </p>
      <ShopFilters products={products} />
    </div>
  );
}
