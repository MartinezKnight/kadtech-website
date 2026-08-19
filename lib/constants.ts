// ---------------------------------------------------------------------------
// KADTECH — VERIFIED BUSINESS DATA
// Only facts confirmed by the client (signage + brief) live here as real
// values. Anything not confirmed is represented as an explicit placeholder
// string so it's obvious in the UI and easy to find/replace later.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// LIVE DOMAIN — placeholder until Kadtech has a real domain. Every file
// that needs the site's URL (metadata, sitemap.xml, robots.txt) reads from
// here, so launching for real means changing exactly one line, not three.
// ---------------------------------------------------------------------------
export const SITE_URL = "https://www.kadtech.example"; // TODO: replace with live domain before launch

export const BUSINESS = {
  legalName: "Kadtech Innovative Solutions Limited",
  shortName: "Kadtech",
  rcNumber: "RC 9098441",
  tagline: "BUY. SELL. SWAP. FIX.",
  address: {
    line1: "Shop FC11, Old Banex Plaza",
    line2: "2nd Floor, By Access Bank",
    line3: "Wuse 2, Abuja, Nigeria",
    full: "Shop FC11, Old Banex Plaza, 2nd Floor, By Access Bank, Wuse 2, Abuja, Nigeria",
  },
  // Verified by the client on 2026-08-09.
  contact: {
    whatsapp: "2348130333033",
    phone: "+2347063676767",
    email: "Kadtechinnovativesolutions@gmail.com",
    instagram: "abujagadget.ng",
    twitter: "@Kadtech3033",
    facebook: "Kadtech Ventures",
    tiktok: "kadtech_innovative",
  },
  openingHours: "Monday – Saturday: 8:00 AM – 6:00 PM. Closed Sundays and public holidays.",
};

export const PLACEHOLDER = {
  whatsapp: "[WHATSAPP NUMBER — TO BE SUPPLIED BY KADTECH]",
  phone: "[PHONE NUMBER — TO BE SUPPLIED BY KADTECH]",
  email: "[EMAIL ADDRESS — TO BE SUPPLIED BY KADTECH]",
  hours: "[OPENING HOURS — TO BE SUPPLIED BY KADTECH]",
  social: "[SOCIAL LINK — TO BE SUPPLIED]",
  map: "[GOOGLE MAPS EMBED — TO BE CONNECTED]",
};

export type CategorySlug =
  | "smartphones"
  | "laptops"
  | "cameras"
  | "drones"
  | "accessories"
  | "speakers";

export interface CategoryDef {
  slug: CategorySlug;
  name: string;
  label: string;
  description: string;
}

export const CATEGORIES: CategoryDef[] = [
  {
    slug: "smartphones",
    name: "Smartphones",
    label: "Smartphones",
    description: "Flagship and pre-owned devices, verified and ready to use.",
  },
  {
    slug: "laptops",
    name: "Laptops",
    label: "Laptops",
    description: "Machines for work, creative production, and everyday use.",
  },
  {
    slug: "cameras",
    name: "Cameras",
    label: "Cameras",
    description: "Imaging equipment for professionals and enthusiasts.",
  },
  {
    slug: "drones",
    name: "Drones",
    label: "Drones",
    description: "Aerial platforms for photography, video, and inspection.",
  },
  {
    slug: "accessories",
    name: "Accessories",
    label: "Accessories",
    description: "The essentials that keep every device running well.",
  },
  {
    slug: "speakers",
    name: "Bluetooth Speakers",
    label: "Bluetooth Speakers",
    description: "Portable and home audio, chosen for sound and build.",
  },
];

export const NAV = {
  shop: CATEGORIES,
  services: [
    { name: "Buy", href: "/services/buy" },
    { name: "Sell", href: "/services/sell" },
    { name: "Swap", href: "/services/swap" },
    { name: "Fix / Repairs", href: "/services/repairs" },
  ],
  about: [
    { name: "About Kadtech", href: "/about" },
    { name: "Our Store", href: "/store" },
  ],
};
