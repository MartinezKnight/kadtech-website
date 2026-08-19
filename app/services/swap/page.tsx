import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import IntakeForm, { IntakeField } from "@/components/IntakeForm";

export const metadata: Metadata = {
  title: "Swap / Trade-In Your Device in Abuja | Kadtech",
  description:
    "Upgrade your smartphone, laptop or camera through Kadtech's device swap and trade-in service in Wuse 2, Abuja.",
  alternates: { canonical: "/services/swap" },
};

const fields: IntakeField[] = [
  { name: "currentDevice", label: "Device you're trading in", type: "text", required: true },
  { name: "desiredDevice", label: "Device you'd like instead", type: "text", required: true },
  { name: "condition", label: "Condition of your device", type: "select", options: ["Like New", "Good", "Fair", "Faulty / Needs Repair"], required: true },
  { name: "name", label: "Your name", type: "text", required: true },
  { name: "phone", label: "Phone / WhatsApp number", type: "tel", required: true },
  { name: "notes", label: "Additional information", type: "textarea" },
];

const steps = [
  { n: "01", title: "Tell us your current device", copy: "Share what you have and what you're hoping to upgrade to." },
  { n: "02", title: "We assess in-store", copy: "Bring your device in so our team can confirm eligibility and condition." },
  { n: "03", title: "Agree the swap", copy: "We confirm the terms of the trade-in before finalising the swap." },
  { n: "04", title: "Walk out with your upgrade", copy: "Complete the swap and take your new device home." },
];

export default function SwapPage() {
  return (
    <div>
      <div className="container-kad py-16 md:py-24">
        <p className="eyebrow-label text-charcoal/40">Services / Swap</p>
        <h1 className="section-heading mt-3 max-w-2xl">Ready for your next upgrade?</h1>
        <p className="font-editorial text-lg text-charcoal/70 mt-6 max-w-xl leading-relaxed">
          Trade in an eligible device toward something new. Kadtech's swap
          service lets you upgrade without starting from zero.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#swap-form" className="btn-primary">START YOUR SWAP</a>
          <WhatsAppButton message="Hi Kadtech, I'd like to swap my device." />
        </div>
      </div>

      <div className="bg-midnight text-offwhite py-20">
        <div className="container-kad">
          <h2 className="font-display text-2xl mb-12">How swap works</h2>
          <div className="grid md:grid-cols-4 gap-px bg-white/10">
            {steps.map((s) => (
              <div key={s.n} className="bg-midnight p-6">
                <span className="font-body text-xs text-silver">{s.n}</span>
                <h3 className="font-display text-lg mt-3 mb-2">{s.title}</h3>
                <p className="text-silver text-sm font-body">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="swap-form" className="container-kad py-16 md:py-24 scroll-mt-24">
        <h2 className="font-display text-2xl mb-10">Start your swap</h2>
        <IntakeForm fields={fields} submitLabel="Start My Swap" formName="Swap" />
      </div>
    </div>
  );
}
