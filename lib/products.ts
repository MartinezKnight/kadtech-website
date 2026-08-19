import { CategorySlug } from "./constants";

// ---------------------------------------------------------------------------
// PRODUCT DATA LAYER
//
// Only real, verified listings live here now — no fictional "sample"
// products. A category with zero entries here is treated as empty
// (see isCategoryActive below) and its navigation is disabled sitewide
// until real entries are added.
//
// This file is intentionally shaped like an API response so it can be
// swapped for a real fetch() to a CMS/database without touching any
// component code. Components only ever import the functions below.
// ---------------------------------------------------------------------------

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  brand: string;
  condition: "New" | "Pre-Owned — Verified" | "Condition TBC";
  price: number | null; // null renders as "Price on enquiry"
  availability: "In Stock" | "Limited Stock" | "Enquire" | "Sold";
  description: string;
  specs: { label: string; value: string }[];
  images: string[];
  isPlaceholder: boolean;
}

export const PRODUCTS: Product[] = [
  // ---- Smartphones — real photos, IMEI/serial labels deliberately excluded ----
  {
    id: "smartphone-listing-1",
    slug: "smartphone-listing-1",
    name: "iPhone — Pink",
    category: "smartphones",
    brand: "Apple",
    condition: "Pre-Owned — Verified",
    price: null,
    availability: "In Stock",
    description:
      "Part of Kadtech's current pre-owned iPhone stock. Message us on WhatsApp for the exact model, storage size, battery health, and price.",
    specs: [
      { label: "Color", value: "Pink" },
      { label: "Storage & model", value: "Confirm on enquiry" },
    ],
    images: ["/store/gallery/stock-05.jpg"],
    isPlaceholder: false,
  },
  {
    id: "smartphone-listing-2",
    slug: "smartphone-listing-2",
    name: "iPhone — White/Starlight",
    category: "smartphones",
    brand: "Apple",
    condition: "Pre-Owned — Verified",
    price: null,
    availability: "In Stock",
    description:
      "Part of Kadtech's current pre-owned iPhone stock. Message us on WhatsApp for the exact model, storage size, battery health, and price.",
    specs: [
      { label: "Color", value: "White / Starlight" },
      { label: "Storage & model", value: "Confirm on enquiry" },
    ],
    images: ["/store/gallery/stock-15.jpg"],
    isPlaceholder: false,
  },
  {
    id: "smartphone-listing-3",
    slug: "smartphone-listing-3",
    name: "iPhone — Sealed, Boxed",
    category: "smartphones",
    brand: "Apple",
    condition: "New",
    price: null,
    availability: "In Stock",
    description:
      "Brand new, factory-sealed iPhones currently at Kadtech. Message us on WhatsApp for exact model, color, and storage options in stock.",
    specs: [
      { label: "Condition", value: "New, sealed" },
      { label: "Model & storage", value: "Confirm on enquiry" },
    ],
    images: ["/store/gallery/stock-25.jpg"],
    isPlaceholder: false,
  },

  // ---- Accessories — real screen replacement stock ----
  {
    id: "accessory-screen-15promax",
    slug: "screen-iphone-15-pro-max",
    name: "iPhone 15 Pro Max Screen — Soft OLED",
    category: "accessories",
    brand: "DD",
    condition: "New",
    price: null,
    availability: "In Stock",
    description:
      "Soft OLED replacement screen for iPhone 15 Pro Max, 120Hz. Fitted in-store or sold as a part — ask Kadtech for current pricing.",
    specs: [
      { label: "Compatible model", value: "iPhone 15 Pro Max" },
      { label: "Panel type", value: "Soft OLED, 120Hz" },
    ],
    images: ["/store/gallery/stock-59.jpg"],
    isPlaceholder: false,
  },
  {
    id: "accessory-screen-13pro",
    slug: "screen-iphone-13-pro",
    name: "iPhone 13 Pro Screen — Soft OLED",
    category: "accessories",
    brand: "DD",
    condition: "New",
    price: null,
    availability: "In Stock",
    description:
      "Soft OLED replacement screen for iPhone 13 Pro, high refresh rate. Fitted in-store or sold as a part — ask Kadtech for current pricing.",
    specs: [
      { label: "Compatible model", value: "iPhone 13 Pro" },
      { label: "Panel type", value: "Soft OLED" },
    ],
    images: ["/store/gallery/stock-63.jpg"],
    isPlaceholder: false,
  },
  {
    id: "accessory-screen-17pro",
    slug: "screen-iphone-17-pro",
    name: "iPhone 17 Pro Screen — Hard OLED",
    category: "accessories",
    brand: "DD",
    condition: "New",
    price: null,
    availability: "In Stock",
    description:
      "Hard OLED replacement screen for iPhone 17 Pro, high refresh rate. Fitted in-store or sold as a part — ask Kadtech for current pricing.",
    specs: [
      { label: "Compatible model", value: "iPhone 17 Pro" },
      { label: "Panel type", value: "Hard OLED" },
    ],
    images: ["/store/gallery/stock-67.jpg"],
    isPlaceholder: false,
  },
  {
    id: "accessory-screen-16promax",
    slug: "screen-iphone-16-pro-max",
    name: "iPhone 16 Pro Max Screen — Soft OLED",
    category: "accessories",
    brand: "DD",
    condition: "New",
    price: null,
    availability: "In Stock",
    description:
      "Soft OLED replacement screen for iPhone 16 Pro Max. Fitted in-store or sold as a part — ask Kadtech for current pricing.",
    specs: [
      { label: "Compatible model", value: "iPhone 16 Pro Max" },
      { label: "Panel type", value: "Soft OLED" },
    ],
    images: ["/store/gallery/stock-70.jpg"],
    isPlaceholder: false,
  },
];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductsByCategory(category: CategorySlug): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProductBySlug(category: CategorySlug, slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.category === category && p.slug === slug);
}

export function getFeaturedProducts(limit = 4): Product[] {
  return PRODUCTS.slice(0, limit);
}

// A category counts as "active" once it has at least one real listing.
// Nav links and category cards use this to disable navigation into
// categories that have nothing in them yet, rather than showing fake
// sample products. See README.md for how to activate a category.
export function isCategoryActive(category: CategorySlug): boolean {
  return PRODUCTS.some((p) => p.category === category);
}
