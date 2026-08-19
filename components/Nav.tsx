"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV, BUSINESS } from "@/lib/constants";
import { isCategoryActive } from "@/lib/products";
import WhatsAppButton from "./WhatsAppButton";

export default function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-offwhite/95 backdrop-blur border-b border-charcoal/10">
        <div className="container-kad flex items-center justify-between h-[84px] md:h-[100px]">
          <Link href="/" className="flex items-center h-14 md:h-[72px] shrink-0">
            <img src="/logo-navy.png" alt="Kadtech Innovative Solutions Limited" className="h-full w-auto object-contain" />
          </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10 font-body text-sm">
          <Link href="/" className="hover:text-midnight/70 transition-colors">Home</Link>

          <div
            className="relative"
            onMouseEnter={() => setOpen("shop")}
            onMouseLeave={() => setOpen(null)}
          >
            <button className="hover:text-midnight/70 transition-colors">Shop</button>
            <AnimatePresence>
              {open === "shop" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[560px]"
                >
                  <div className="bg-midnight text-offwhite p-8 grid grid-cols-2 gap-x-8 gap-y-4 shadow-xl">
                    {NAV.shop.map((c) => {
                      const active = isCategoryActive(c.slug);
                      if (!active) {
                        return (
                          <div key={c.slug} className="opacity-40 cursor-default">
                            <div className="font-display text-base flex items-center gap-2">
                              {c.label}
                              <span className="text-[9px] font-body uppercase tracking-wide border border-silver/40 px-1.5 py-0.5">
                                Soon
                              </span>
                            </div>
                            <div className="text-xs text-silver mt-1">{c.description}</div>
                          </div>
                        );
                      }
                      return (
                        <Link key={c.slug} href={`/shop/${c.slug}`} className="group">
                          <div className="font-display text-base group-hover:text-electric-soft transition-colors">
                            {c.label}
                          </div>
                          <div className="text-xs text-silver mt-1">{c.description}</div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpen("services")}
            onMouseLeave={() => setOpen(null)}
          >
            <button className="hover:text-midnight/70 transition-colors">Services</button>
            <AnimatePresence>
              {open === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[320px]"
                >
                  <div className="bg-midnight text-offwhite p-6 flex flex-col gap-3 shadow-xl">
                    {NAV.services.map((s) => (
                      <Link key={s.href} href={s.href} className="font-display text-base hover:text-electric-soft transition-colors">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpen("about")}
            onMouseLeave={() => setOpen(null)}
          >
            <button className="hover:text-midnight/70 transition-colors">About</button>
            <AnimatePresence>
              {open === "about" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[260px]"
                >
                  <div className="bg-midnight text-offwhite p-6 flex flex-col gap-3 shadow-xl">
                    {NAV.about.map((a) => (
                      <Link key={a.href} href={a.href} className="font-display text-base hover:text-electric-soft transition-colors">
                        {a.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact" className="hover:text-midnight/70 transition-colors">Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <WhatsAppButton />
          <span className="text-sm text-charcoal/70 font-body font-medium tracking-wide whitespace-nowrap">
            {BUSINESS.rcNumber}
          </span>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-end justify-center shrink-0"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={`h-0.5 bg-midnight transition-all ${mobileOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
          <span className={`h-0.5 bg-midnight transition-all ${mobileOpen ? "opacity-0" : "w-4"}`} />
          <span className={`h-0.5 bg-midnight transition-all ${mobileOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
        </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-midnight text-offwhite"
            >
              <div className="container-kad py-8 flex flex-col gap-6 font-display text-lg">
                <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>

                <div>
                  <div className="text-silver text-xs font-body uppercase tracking-widest mb-3">Shop</div>
                  <div className="flex flex-col gap-3 pl-2">
                    {NAV.shop.map((c) => {
                      const active = isCategoryActive(c.slug);
                      if (!active) {
                        return (
                          <span key={c.slug} className="opacity-40 flex items-center gap-2">
                            {c.label}
                            <span className="text-[9px] font-body uppercase tracking-wide border border-silver/40 px-1.5 py-0.5">
                              Soon
                            </span>
                          </span>
                        );
                      }
                      return (
                        <Link key={c.slug} href={`/shop/${c.slug}`} onClick={() => setMobileOpen(false)}>
                          {c.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="text-silver text-xs font-body uppercase tracking-widest mb-3">Services</div>
                  <div className="flex flex-col gap-3 pl-2">
                    {NAV.services.map((s) => (
                      <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}>
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-silver text-xs font-body uppercase tracking-widest mb-3">About</div>
                  <div className="flex flex-col gap-3 pl-2">
                    {NAV.about.map((a) => (
                      <Link key={a.href} href={a.href} onClick={() => setMobileOpen(false)}>
                        {a.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>

                <WhatsAppButton className="mt-4 w-full py-4" />
                <span className="text-sm text-silver/70 font-body tracking-wide text-center">
                  {BUSINESS.rcNumber}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating mobile WhatsApp button — deliberately a sibling of
          <header>, not nested inside it, so its fixed positioning is
          anchored to the viewport with nothing else in between that could
          interfere. */}
      <WhatsAppButton
        iconOnly
        className="lg:hidden fixed bottom-5 right-5 z-40 w-14 h-14"
      />
    </>
  );
}
