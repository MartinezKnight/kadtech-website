import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Visit Kadtech | Old Banex Plaza, Wuse 2, Abuja",
  description:
    "Kadtech Innovative Solutions Limited — Shop FC1143, Old Banex Plaza, 2nd Floor, By Access Bank, Wuse 2, Abuja.",
  alternates: { canonical: "/store" },
};

export default function StorePage() {
  return (
    <div>
      <div className="container-kad py-16 md:py-24">
        <p className="eyebrow-label text-charcoal/40">Our Store</p>
        <h1 className="section-heading mt-3 max-w-2xl">Find Kadtech in Wuse 2.</h1>
      </div>

      <div className="container-kad grid md:grid-cols-2 gap-12 pb-16 md:pb-24">
        <div className="aspect-video bg-silver-soft flex items-center justify-center overflow-hidden">
          <img src="/store/storefront.png" alt="Kadtech storefront at Old Banex Plaza, Wuse 2" className="w-full h-full object-cover" />
        </div>

        <div>
          <p className="font-display text-xl text-charcoal mb-4">{BUSINESS.legalName}</p>
          <address className="not-italic font-body text-charcoal/70 leading-relaxed">
            {BUSINESS.address.line1}<br />
            {BUSINESS.address.line2}<br />
            {BUSINESS.address.line3}
          </address>

          <div className="mt-8">
            <span className="font-body text-xs uppercase tracking-widest text-charcoal/40">Opening hours</span>
            <p className="font-body text-charcoal/70 mt-2">{BUSINESS.openingHours}</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppButton message="Hi Kadtech, I'd like directions to your store." />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      <div className="bg-silver-soft/40 py-20">
        <div className="container-kad">
          <h2 className="font-display text-2xl mb-6">Find us on the map</h2>
          <div className="aspect-video w-full overflow-hidden">
            <iframe
              title="Kadtech Innovative Solutions Limited — Old Banex Plaza, Wuse 2, Abuja"
              src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.address.full)}&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container-kad text-center">
          <p className="font-display text-xl text-charcoal">Looking for current stock?</p>
          <p className="font-body text-sm text-charcoal/60 mt-3 max-w-md mx-auto">
            Browse real listings — including pre-owned iPhones and screen
            replacements — in the shop.
          </p>
          <a href="/shop" className="btn-secondary mt-6 inline-flex">Go to Shop</a>
        </div>
      </div>

      <div className="bg-silver-soft/40 py-20">
        <div className="container-kad">
          <h2 className="font-display text-2xl mb-6">Inside Kadtech</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="aspect-[4/3] overflow-hidden">
              <img src="/store/interior-1.png" alt="Inside the Kadtech store" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img src="/store/interior-2.png" alt="Inside the Kadtech store, display cases" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
