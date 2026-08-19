import Link from "next/link";
import { BUSINESS, NAV } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-midnight text-offwhite">
      <div className="container-kad py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <img src="/logo-v2.png" alt="Kadtech Innovative Solutions Limited" className="h-16 md:h-24 w-auto object-contain" />
          <p className="text-silver text-sm mt-4 max-w-xs leading-relaxed">
            {BUSINESS.legalName} — a technology retail and service company
            based in Abuja, Nigeria.
          </p>
          <p className="text-silver/60 text-xs mt-3 tracking-wide">{BUSINESS.rcNumber}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-silver font-body">
            <a href={`https://instagram.com/${BUSINESS.contact.instagram}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-offwhite">
              Instagram
            </a>
            <a href={`https://twitter.com/${BUSINESS.contact.twitter.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-offwhite">
              Twitter/X
            </a>
            <span className="underline-offset-4">Facebook: {BUSINESS.contact.facebook}</span>
            <a href={`https://tiktok.com/@${BUSINESS.contact.tiktok}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-offwhite">
              TikTok
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-silver mb-4">Navigate</div>
          <ul className="flex flex-col gap-3 text-sm font-body">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/services/sell">Sell / Trade-In</Link></li>
            <li><Link href="/services/repairs">Repairs</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-silver mb-4">Categories</div>
          <ul className="flex flex-col gap-3 text-sm font-body">
            {NAV.shop.map((c) => (
              <li key={c.slug}><Link href={`/shop/${c.slug}`}>{c.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-silver mb-4">Visit</div>
          <p className="text-sm font-body text-silver leading-relaxed">
            {BUSINESS.address.line1}<br />
            {BUSINESS.address.line2}<br />
            {BUSINESS.address.line3}
          </p>
          <Link href="/store" className="inline-block mt-4 text-sm underline underline-offset-4">
            Get directions
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-kad py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-silver font-body">
          <span>© {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/legal/privacy">Privacy Policy</Link>
            <Link href="/legal/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
