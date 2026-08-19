import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CATEGORIES, BUSINESS } from "@/lib/constants";
import { getFeaturedProducts } from "@/lib/products";

const SERVICES = [
  { name: "Buy", href: "/services/buy", copy: "Find the technology you need." },
  { name: "Sell", href: "/services/sell", copy: "Turn your old device into value." },
  { name: "Swap", href: "/services/swap", copy: "Upgrade through device trade-in." },
  { name: "Fix", href: "/services/repairs", copy: "Get your device professionally serviced." },
];

export default function HomePage() {
  const featured = getFeaturedProducts(4);

  return (
    <>
      <Hero />

      {/* Explore the world of tech */}
      <section className="py-24 md:py-32">
        <div className="container-kad">
          <Reveal>
            <h2 className="section-heading max-w-2xl">Explore the world of tech.</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <CategoryCard category={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-24 md:py-32 bg-silver-soft/40">
        <div className="container-kad">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h2 className="section-heading max-w-xl">Featured listings.</h2>
              <Link href="/shop" className="font-body text-sm underline underline-offset-4">
                View all products →
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 mt-14">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Buy / Sell / Swap / Fix */}
      <section className="py-24 md:py-32 bg-midnight text-offwhite">
        <div className="container-kad">
          <Reveal>
            <h2 className="section-heading text-offwhite max-w-2xl">Buy. Sell. Swap. Fix.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 mt-14">
            {SERVICES.map((s, i) => (
              <Reveal key={s.href} delay={i * 0.06}>
                <Link
                  href={s.href}
                  className="group relative block bg-midnight p-8 h-72 flex flex-col justify-between hover:bg-midnight-700 transition-colors duration-500"
                >
                  <span className="font-body text-xs text-silver uppercase tracking-widest">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl tracking-tight">{s.name}</h3>
                    <p className="text-silver text-sm mt-2 font-body">{s.copy}</p>
                    <span className="inline-block mt-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Store / trust section */}
      <section className="py-24 md:py-32">
        <div className="container-kad grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="aspect-[4/3] overflow-hidden">
              <img src="/store/storefront.png" alt="Kadtech storefront at Old Banex Plaza, Wuse 2" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow-label text-charcoal/40">Why Kadtech</p>
            <h2 className="section-heading mt-3">A real store, a real address, in Wuse 2.</h2>
            <p className="font-editorial text-lg text-charcoal/70 mt-6 leading-relaxed">
              Kadtech is a technology retail and service business built around
              four things: buying, selling, swapping, and fixing devices —
              backed by a physical presence customers can walk into.
            </p>
            <ul className="mt-8 space-y-3 font-body text-sm text-charcoal/70">
              <li>— Smartphones, laptops, cameras, drones, accessories and speakers</li>
              <li>— A physical store in Old Banex Plaza, Wuse 2, Abuja</li>
              <li>— Trade-in and swap options for eligible devices</li>
              <li>— Technical support and repair services</li>
            </ul>
            <div className="mt-10 flex gap-4">
              <Link href="/about" className="btn-secondary">Learn more</Link>
              <Link href="/store" className="btn-primary">Visit our store</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trade-in CTA */}
      <section className="py-24 md:py-32 bg-midnight-700 text-offwhite">
        <div className="container-kad grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="section-heading text-offwhite">Your old tech still has value.</h2>
            <p className="font-body text-silver mt-6 max-w-md">
              Sell or swap an eligible device with Kadtech. Tell us what you
              have and we'll take it from there.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services/sell" className="bg-offwhite text-midnight font-display font-medium px-7 py-4 hover:bg-electric-soft transition-colors">
                GET A TRADE-IN QUOTE
              </Link>
              <WhatsAppButton />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Store location */}
      <section className="py-24 md:py-32">
        <div className="container-kad">
          <Reveal>
            <p className="eyebrow-label text-charcoal/40">Store location</p>
            <h2 className="section-heading mt-3">Find us in Wuse 2.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Reveal>
              <div className="aspect-video overflow-hidden">
                <iframe
                  title="Kadtech Innovative Solutions Limited — Old Banex Plaza, Wuse 2, Abuja"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.address.full)}&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="font-body text-charcoal/80 leading-relaxed">
                <p className="font-display text-xl text-charcoal mb-4">
                  {BUSINESS.legalName}
                </p>
                <p>{BUSINESS.address.line1}</p>
                <p>{BUSINESS.address.line2}</p>
                <p>{BUSINESS.address.line3}</p>
                <Link href="/store" className="btn-secondary mt-8 inline-flex">
                  Visit our store
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
