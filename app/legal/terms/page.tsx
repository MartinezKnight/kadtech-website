import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return (
    <div className="container-kad py-16 md:py-24 max-w-2xl">
      <h1 className="section-heading">Terms &amp; Conditions</h1>
      <p className="font-body text-charcoal/60 mt-6">
        Placeholder — Kadtech's terms and conditions have not yet been
        supplied. This page should be replaced with terms covering sales,
        trade-ins, swaps and repairs once confirmed by Kadtech.
      </p>
    </div>
  );
}
