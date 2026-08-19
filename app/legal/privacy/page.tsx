import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="container-kad py-16 md:py-24 max-w-2xl">
      <h1 className="section-heading">Privacy Policy</h1>
      <p className="font-body text-charcoal/60 mt-6">
        Placeholder — Kadtech's privacy policy has not yet been supplied. This
        page should be replaced with a policy describing what information is
        collected through this website (e.g. contact and enquiry forms), how
        it is used, and how customers can request it be removed.
      </p>
    </div>
  );
}
