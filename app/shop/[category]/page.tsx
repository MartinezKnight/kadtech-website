import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ShopFilters from "@/components/ShopFilters";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CATEGORIES, CategorySlug } from "@/lib/constants";
import { getProductsByCategory, isCategoryActive } from "@/lib/products";

interface Props {
  params: { category: string };
}

function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getCategory(params.category);
  if (!category) return {};
  return {
    title: `${category.label} in Abuja | Kadtech`,
    description: `${category.description} Browse ${category.label.toLowerCase()} available from Kadtech in Wuse 2, Abuja.`,
    alternates: { canonical: `/shop/${category.slug}` },
  };
}

export default function CategoryPage({ params }: Props) {
  const category = getCategory(params.category);
  if (!category) notFound();

  const active = isCategoryActive(category.slug as CategorySlug);
  const products = getProductsByCategory(category.slug as CategorySlug);

  return (
    <div className="container-kad py-16 md:py-24">
      <p className="eyebrow-label text-charcoal/40">Shop / {category.label}</p>
      <h1 className="section-heading mt-3">{category.label}</h1>
      <p className="font-editorial text-lg text-charcoal/70 mt-4 max-w-xl">
        {category.description}
      </p>

      {active ? (
        <div className="mt-14">
          <ShopFilters products={products} />
        </div>
      ) : (
        <div className="mt-14 border border-charcoal/10 py-16 px-8 text-center max-w-xl">
          <p className="font-display text-xl text-charcoal">Listings coming soon.</p>
          <p className="font-body text-sm text-charcoal/60 mt-3">
            We haven't listed {category.label.toLowerCase()} online yet, but Kadtech
            may have stock in-store. Message us on WhatsApp to check.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton message={`Hi Kadtech, do you currently have any ${category.label.toLowerCase()} in stock?`} />
          </div>
        </div>
      )}
    </div>
  );
}
