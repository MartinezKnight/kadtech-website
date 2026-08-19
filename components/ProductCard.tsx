import Link from "next/link";
import { Product } from "@/lib/products";

function formatPrice(price: number | null) {
  if (price === null) return "Price on enquiry";
  return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(price);
}

const availabilityStyles: Record<Product["availability"], string> = {
  "In Stock": "bg-emerald-700 text-offwhite",
  "Limited Stock": "bg-amber-600 text-offwhite",
  Enquire: "bg-charcoal/60 text-offwhite",
  Sold: "bg-charcoal/30 text-offwhite",
};

export default function ProductCard({ product }: { product: Product }) {
  const photo = product.images[0];
  const hasRealPhoto = !product.isPlaceholder && photo;

  return (
    <Link
      href={`/shop/${product.category}/${product.slug}`}
      className="group flex flex-col"
    >
      <div className="relative aspect-square bg-silver-soft overflow-hidden">
        {hasRealPhoto ? (
          <img
            src={photo}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-charcoal/20 font-display text-sm">
            IMAGE PENDING
          </div>
        )}
        <span className={`absolute top-3 left-3 text-[10px] font-body uppercase tracking-wide px-2 py-1 ${availabilityStyles[product.availability]}`}>
          {product.availability}
        </span>
        {product.isPlaceholder && (
          <span className="absolute top-3 right-3 placeholder-tag">Sample listing</span>
        )}
      </div>
      <div className="mt-4">
        <div className="font-display text-base text-charcoal group-hover:text-midnight transition-colors">
          {product.name}
        </div>
        <div className="flex items-center justify-between gap-2 mt-1">
          <div className="text-xs text-charcoal/50 font-body uppercase tracking-wide">
            {product.category}
          </div>
          <div className="font-body text-sm text-charcoal whitespace-nowrap shrink-0">
            {formatPrice(product.price)}
          </div>
        </div>
      </div>
    </Link>
  );
}
