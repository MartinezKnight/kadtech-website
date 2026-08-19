import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CategorySlug } from "@/lib/constants";
import { getProductBySlug, getProductsByCategory } from "@/lib/products";

interface Props {
  params: { category: string; product: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProductBySlug(params.category as CategorySlug, params.product);
  if (!product) return {};
  return {
    title: `${product.name} | Kadtech`,
    description: product.description,
    alternates: { canonical: `/shop/${params.category}/${params.product}` },
  };
}

function formatPrice(price: number | null) {
  if (price === null) return "Price on enquiry";
  return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(price);
}

export default function ProductPage({ params }: Props) {
  const category = params.category as CategorySlug;
  const product = getProductBySlug(category, params.product);
  if (!product) notFound();

  const related = getProductsByCategory(category).filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="container-kad py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Gallery */}
        <div>
          <div className="aspect-square bg-silver-soft flex items-center justify-center overflow-hidden">
            {!product.isPlaceholder && product.images[0] ? (
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
            ) : (
              <span className="placeholder-tag">Product photography pending</span>
            )}
          </div>
          <div className="grid grid-cols-4 gap-3 mt-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-silver-soft/60" />
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          {product.isPlaceholder && (
            <span className="placeholder-tag mb-4 inline-block">Sample listing — real inventory pending</span>
          )}
          <p className="eyebrow-label text-charcoal/40">{product.brand}</p>
          <h1 className="font-display text-3xl md:text-4xl tracking-tight mt-2">{product.name}</h1>
          <p className="font-body text-xl mt-4">{formatPrice(product.price)}</p>
          <p className="font-body text-sm text-charcoal/50 mt-1">{product.condition} · {product.availability}</p>

          <p className="font-editorial text-lg text-charcoal/70 mt-8 leading-relaxed">
            {product.description}
          </p>

          <dl className="mt-8 border-t border-charcoal/10">
            {product.specs.map((s, i) => (
              <div key={i} className="flex justify-between py-3 border-b border-charcoal/10 font-body text-sm">
                <dt className="text-charcoal/50">{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppButton
              label="Enquire on WhatsApp"
              message={`Hi Kadtech, I'm interested in: ${product.name}`}
              className="px-7 py-4"
            />
            <a href="/store" className="btn-secondary">Visit store</a>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-28">
          <h2 className="font-display text-2xl mb-10">You may also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
