# Kadtech Innovative Solutions — Website

A multi-page Next.js (App Router) site for Kadtech Innovative Solutions
Limited, Abuja. Built with React, TypeScript, Tailwind CSS and Framer Motion.

## Run it locally

```
npm install
npm run dev
```

Then open http://localhost:3000. Requires internet access for `npm install`
and for Google Fonts at build time (Montserrat, via `next/font/google`).

## Sitemap

```
/                          Homepage
/shop                      All categories + filterable product grid
/shop/[category]           Smartphones · Laptops · Cameras · Drones ·
                            Accessories · Speakers
/shop/[category]/[product] Product detail (gallery, specs, WhatsApp CTA)
/services/buy
/services/sell             + trade-in intake form
/services/swap             + step process + intake form
/services/repairs          + repair categories + booking form
/about
/store                     Address, real map, real store photos
/contact
/legal/privacy             Placeholder — needs real policy
/legal/terms               Placeholder — needs real terms
/sitemap.xml, /robots.txt  Generated
```

---

## Managing the store yourself — the two things you'll actually touch

### 1. Adding a photo

- **Category card photo** (the 6 tiles on the homepage/shop page): drop a
  file into `public/categories/`, named exactly `smartphones.jpg`,
  `laptops.jpg`, `cameras.jpg`, `drones.jpg`, `accessories.jpg`, or
  `speakers.jpg`. It replaces the existing one automatically.
- **Hero banner slide**: drop a file into `public/hero/`, named
  `slide-smartphones.jpg`, `slide-laptops.jpg`, `slide-cameras.jpg`,
  `slide-drones.jpg`, `slide-speakers.jpg`, or `slide-accessories.jpg`.
- **A product's own photo**: put it anywhere under `public/` (e.g.
  `public/products/`), then reference that path in the product's `images`
  field — see step 2 below.
- File type doesn't matter — `.jpg` or `.png` both work regardless of what
  the file is actually named; the browser reads the image data, not the
  extension.

### 2. Adding, editing, or removing a product — and "unblocking" a category

All real products live in **`lib/products.ts`**, inside the `PRODUCTS`
array. Open it in Notepad or (better) VS Code.

**A category with zero products in this file is automatically treated as
empty** — its link in the navigation and its category card are both greyed
out and unclickable, showing "Coming soon" instead of sending customers to
an empty page. This is handled by the `isCategoryActive()` function at the
bottom of the file — you don't need to touch that function, it just reads
whatever is in `PRODUCTS`.

**To unblock a category (e.g. Laptops), add at least one entry for it.**
Copy an existing product block and edit it — for example:

```ts
{
  id: "laptop-listing-1",
  slug: "laptop-listing-1",
  name: "HP EliteBook — 16GB RAM",
  category: "laptops",
  brand: "HP",
  condition: "Pre-Owned — Verified",
  price: null,                 // or a number, e.g. 350000
  availability: "In Stock",    // "In Stock" | "Limited Stock" | "Enquire" | "Sold"
  description: "Short, honest description of the actual unit.",
  specs: [
    { label: "RAM", value: "16GB" },
    { label: "Storage", value: "512GB SSD" },
  ],
  images: ["/products/hp-elitebook-1.jpg"],
  isPlaceholder: false,
},
```

Save the file. As soon as it contains one real entry for "laptops", the
Laptops link in the nav and its category card both re-enable themselves —
nothing else to change.

To remove a product (sold out, discontinued), delete its whole `{ ... }`
block from the array. If that was the last item in a category, that
category automatically goes back to "Coming soon."

**Don't break the file structure:** every product needs a comma after its
closing `}` (except the very last one in the array), and every value needs
to stay inside quotes if it's text. If the site fails to load after an
edit, it's almost always a missing comma or quote — VS Code will underline
it in red before you even save.

---

## Design system

- **Colour** — Deep midnight navy (`#0B1220`) as primary, warm off-white
  (`#F7F5F1`) background, charcoal text, restrained electric blue accent
  (`#3E6BFF`) for interactive states only. Red exists only in the logo mark.
- **Type** — Montserrat throughout (`next/font/google`), bold weight applied
  automatically to every real heading tag (h1–h6) via `app/globals.css`,
  normal weight for body text.
- **Motion** — Framer Motion scroll-reveals (`components/Reveal.tsx`), a
  6-slide autoplay hero carousel (`components/Hero.tsx`), dropdown/mobile
  drawer transitions in `components/Nav.tsx`. All respect
  `prefers-reduced-motion`.
- **Logo** — `public/logo-v2.png`, transparent background, used in both nav
  and footer. RC number is shown as a separate element (nav: beside the
  WhatsApp button; footer: its own line) rather than baked into the logo
  file or run into a sentence.

## Content integrity

- Real, verified contact info lives in `lib/constants.ts` (`BUSINESS.contact`,
  `BUSINESS.openingHours`) — every page that shows a phone number, WhatsApp
  link, email, or hours reads from this one file.
- Product listings in `lib/products.ts` are real (no fabricated prices,
  specs, or stock claims). Where a detail isn't confirmed (exact model,
  price), the listing says "Confirm on enquiry" / "Price on enquiry" rather
  than inventing one.
- Photos with visible IMEI, serial numbers, or unlock-status labels were
  deliberately excluded from public listings — that information shouldn't
  be publicly visible on a live product photo.
- `LocalBusiness` structured data in `app/layout.tsx` reflects verified
  contact info and hours.

## Getting found on Google (SEO) — what's already done vs. what's left

**Already built in:**
- `/sitemap.xml` and `/robots.txt` are generated automatically from every
  real page and product (see `app/sitemap.ts`, `app/robots.ts`).
- Every page has its own title and description for search results.
- `LocalBusiness` structured data (the invisible tag that can make your
  address/hours show up directly in Google) is wired to your real info.

**Still needed once you have a real domain — none of this works on
`localhost`:**
1. Buy a domain and deploy the site (e.g. to Vercel) so it has a real URL.
2. Update `SITE_URL` in `lib/constants.ts` — it's currently a placeholder
   (`kadtech.example`) and every other file reads from it, so this is the
   only line that needs to change.
3. Go to Google Search Console, verify you own the domain, and submit
   `https://yourdomain.com/sitemap.xml`. This is what actually tells
   Google the site exists — none of the above matters to search rankings
   until this step is done.
4. Ranking itself takes time after that (usually weeks), and isn't
   something a website's code can guarantee — the sitemap and metadata
   just make sure Google can find and understand the site correctly once
   it does crawl it.

## How the forms currently work

There's no backend or database wired up. Submitting the Sell, Swap,
Repairs, or Contact form builds a message from whatever was typed and
opens it pre-written in WhatsApp to Kadtech's real number — the person
just has to hit send. Nothing is silently lost, but it does mean:
- Someone has to actually press "send" in WhatsApp for the enquiry to
  reach you (if they close the tab first, it doesn't arrive).
- There's no saved record on the website itself — WhatsApp is the record.

If that's not solid enough long-term, the real fix is wiring
`components/IntakeForm.tsx`'s `handleSubmit` to a proper `/api/enquiries`
route that stores submissions and/or emails them — a bigger job that needs
either a database or an email-sending service (e.g. Resend) with its own
API key.

## Wiring up real data later (optional, bigger job)

- Swap `lib/products.ts` for a fetch to a real CMS/database — every
  component consumes `getAllProducts()` / `getProductsByCategory()` /
  `getProductBySlug()` / `isCategoryActive()`, so no component code needs
  to change if the data shape stays the same.
- `components/IntakeForm.tsx` (used on Sell/Swap/Repairs/Contact) currently
  only confirms submission in the browser. Wire its `handleSubmit` to a
  `/api/enquiries` route to actually store or forward enquiries.
