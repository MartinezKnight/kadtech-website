import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Kadtech Innovative Solutions",
  description:
    "Kadtech Innovative Solutions Limited is a technology retail and service business in Wuse 2, Abuja, offering buy, sell, swap and repair services.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div>
      <div className="container-kad py-16 md:py-24">
        <p className="eyebrow-label text-charcoal/40">About</p>
        <h1 className="section-heading mt-3 max-w-2xl">
          {BUSINESS.legalName}
        </h1>
        <p className="font-editorial text-lg text-charcoal/70 mt-6 max-w-2xl leading-relaxed">
          Kadtech is a technology retail and service company operating from
          Old Banex Plaza in Wuse 2, Abuja. The business is built around four
          core services: buying, selling, swapping and fixing technology —
          smartphones, laptops, cameras, drones, accessories and Bluetooth
          speakers.
        </p>
        <p className="font-body text-xs text-charcoal/40 mt-6 max-w-xl">
          {BUSINESS.rcNumber}. Company history, founding details and
          additional background have not yet been supplied and are not
          represented here.
        </p>
      </div>

      <div className="bg-silver-soft/40 py-20">
        <div className="container-kad grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl mb-4">What Kadtech does</h2>
            <ul className="font-body text-sm text-charcoal/70 space-y-2">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>— {c.label}: {c.description}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl mb-4">Buy / Sell / Swap / Fix</h2>
            <ul className="font-body text-sm text-charcoal/70 space-y-2">
              <li>— <Link href="/services/buy" className="underline underline-offset-4">Buy</Link>: browse and purchase technology in-store or online.</li>
              <li>— <Link href="/services/sell" className="underline underline-offset-4">Sell</Link>: turn an eligible old device into value.</li>
              <li>— <Link href="/services/swap" className="underline underline-offset-4">Swap</Link>: trade in toward an upgrade.</li>
              <li>— <Link href="/services/repairs" className="underline underline-offset-4">Fix</Link>: diagnostics and repair services.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-kad py-16 md:py-24">
        <h2 className="font-display text-2xl mb-4">Physical presence</h2>
        <p className="font-body text-sm text-charcoal/70 max-w-xl leading-relaxed">
          {BUSINESS.address.full}. Customers are welcome to visit the store
          directly to buy, sell, swap or discuss a repair.
        </p>
        <Link href="/store" className="btn-secondary mt-8 inline-flex">Store details</Link>
      </div>
    </div>
  );
}
