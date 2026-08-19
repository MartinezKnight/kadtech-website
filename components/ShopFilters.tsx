"use client";

import { useMemo, useState } from "react";
import { Product } from "@/lib/products";
import ProductCard from "./ProductCard";
import { CATEGORIES } from "@/lib/constants";

export default function ShopFilters({ products }: { products: Product[] }) {
  const [category, setCategory] = useState<string>("all");
  const [brand, setBrand] = useState<string>("all");
  const [availability, setAvailability] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [query, setQuery] = useState("");

  const brands = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand))).sort(),
    [products]
  );

  const filtered = products.filter((p) => {
    if (category !== "all" && p.category !== category) return false;
    if (brand !== "all" && p.brand !== brand) return false;
    if (availability !== "all" && p.availability !== availability) return false;
    if (maxPrice > 0 && p.price !== null && p.price > maxPrice) return false;
    if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between border-y border-charcoal/10 py-6 mb-10">
        <input
          type="search"
          placeholder="Search products…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="font-body text-sm bg-transparent border-b border-charcoal/20 py-2 px-1 focus:outline-none focus:border-midnight w-full md:w-64"
          aria-label="Search products"
        />

        <div className="flex flex-wrap gap-3 font-body text-sm">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-charcoal/20 bg-offwhite px-3 py-2"
            aria-label="Filter by category"
          >
            <option value="all">All categories</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>{c.label}</option>
            ))}
          </select>

          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="border border-charcoal/20 bg-offwhite px-3 py-2"
            aria-label="Filter by brand"
          >
            <option value="all">All brands</option>
            {brands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>

          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="border border-charcoal/20 bg-offwhite px-3 py-2"
            aria-label="Filter by availability"
          >
            <option value="all">Any availability</option>
            <option value="In Stock">In Stock</option>
            <option value="Limited Stock">Limited Stock</option>
            <option value="Enquire">Enquire</option>
          </select>

          <select
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="border border-charcoal/20 bg-offwhite px-3 py-2"
            aria-label="Filter by maximum price"
          >
            <option value={0}>Any price</option>
            <option value={100000}>Under ₦100,000</option>
            <option value={500000}>Under ₦500,000</option>
            <option value={1000000}>Under ₦1,000,000</option>
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="py-24 text-center font-body text-charcoal/50">
          No products match those filters yet.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
