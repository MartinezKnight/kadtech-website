import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CATEGORIES } from "@/lib/constants";
import { getFeaturedProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Buy Technology in Abuja | Kadtech",
  description:
    "Buy smartphones, laptops, cameras, drones, accessories and Bluetooth speakers from Kadtech in Wuse 2, Abuja.",
  alternates: { canonical: "/services/buy" },
};

export default function BuyPage() {
  const featured = getFeaturedProducts(4);

  return (
    <div>
      <div className="container-kad py-16 md:py-24">
        <p className="eyebrow-label text-charcoal/40">Services / Buy</p>
        <h1 className="section-heading mt-3 max-w-2xl">Find the technology you need.</h1>
        <p className="font-editorial text-lg text-charcoal/70 mt-6 max-w-xl leading-relaxed">
          Kadtech sells smartphones, laptops, cameras, drones, accessories and
          Bluetooth speakers from our store in Old Banex Plaza, Wuse 2. Browse
          by category online, then message us or visit in person to complete
          your purchase.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/shop" className="btn-primary">Shop Now</Link>
          <WhatsAppButton />
          <Link href="/store" className="btn-secondary">Visit Store</Link>
        </div>
      </div>

      <div className="container-kad pb-16 md:pb-24">
        <h2 className="font-display text-2xl mb-10">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/shop/${c.slug}`}
              className="border border-charcoal/10 p-6 hover:border-midnight transition-colors"
            >
              <div className="font-display text-lg">{c.label}</div>
              <div className="font-body text-sm text-charcoal/50 mt-1">{c.description}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="container-kad pb-24">
        <h2 className="font-display text-2xl mb-10">Featured listings</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      <div className="bg-silver-soft/50 py-20">
        <div className="container-kad grid md:grid-cols-3 gap-10 font-body text-sm text-charcoal/70">
          <div>
            <h3 className="font-display text-lg text-charcoal mb-3">How to buy</h3>
            <p>Browse products online or in-store, then confirm availability with our team before your visit or purchase.</p>
          </div>
          <div>
            <h3 className="font-display text-lg text-charcoal mb-3">Payment</h3>
            <p className="placeholder-tag">Payment methods to be confirmed by Kadtech</p>
          </div>
          <div>
            <h3 className="font-display text-lg text-charcoal mb-3">Delivery</h3>
            <p className="placeholder-tag">Delivery options to be confirmed by Kadtech</p>
          </div>
        </div>
      </div>
    </div>
  );
}
