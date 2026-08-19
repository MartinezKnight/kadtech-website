import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import IntakeForm, { IntakeField } from "@/components/IntakeForm";

export const metadata: Metadata = {
  title: "Phone & Laptop Repair in Abuja | Kadtech",
  description:
    "Book a repair with Kadtech in Wuse 2, Abuja — phone repairs, laptop repairs, diagnostics, accessory replacement and technical support.",
  alternates: { canonical: "/services/repairs" },
};

const REPAIR_CATEGORIES = [
  { name: "Phone repairs", copy: "Diagnostics and repair for smartphones." },
  { name: "Laptop repairs", copy: "Diagnostics and repair for laptops." },
  { name: "Device diagnostics", copy: "Identify the issue before committing to a repair." },
  { name: "Accessory replacement", copy: "Replacement of eligible accessories and parts." },
  { name: "Technical support", copy: "General technical assistance for your devices." },
];

const fields: IntakeField[] = [
  { name: "deviceType", label: "Device type", type: "select", options: ["Smartphone", "Laptop", "Camera", "Drone", "Other"], required: true },
  { name: "brand", label: "Brand & model", type: "text", required: true },
  { name: "issue", label: "What's wrong with it?", type: "textarea", required: true },
  { name: "name", label: "Your name", type: "text", required: true },
  { name: "phone", label: "Phone / WhatsApp number", type: "tel", required: true },
];

export default function RepairsPage() {
  return (
    <div>
      <div className="container-kad py-16 md:py-24">
        <p className="eyebrow-label text-charcoal/40">Services / Fix</p>
        <h1 className="section-heading mt-3 max-w-2xl">Tech problems? Let's fix them.</h1>
        <p className="font-editorial text-lg text-charcoal/70 mt-6 max-w-xl leading-relaxed">
          Kadtech offers diagnostics and repair services for smartphones,
          laptops and related devices from our Wuse 2 store.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#repair-form" className="btn-primary">BOOK A REPAIR</a>
          <WhatsAppButton message="Hi Kadtech, I need a repair." />
        </div>
      </div>

      <div className="bg-silver-soft/40 py-16">
        <div className="container-kad">
          <h2 className="font-display text-2xl mb-10">Repair categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {REPAIR_CATEGORIES.map((c) => (
              <div key={c.name} className="border border-charcoal/10 bg-offwhite p-6">
                <h3 className="font-display text-lg">{c.name}</h3>
                <p className="font-body text-sm text-charcoal/60 mt-2">{c.copy}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-charcoal/40 mt-8 max-w-xl">
            Specific repair certifications and warranty terms have not been
            confirmed and are not claimed here. Please ask our team in-store
            for details on any given repair.
          </p>
        </div>
      </div>

      <div id="repair-form" className="container-kad py-16 md:py-24 scroll-mt-24">
        <h2 className="font-display text-2xl mb-10">Book a repair</h2>
        <IntakeForm fields={fields} submitLabel="Book Repair" formName="Repair" />
      </div>
    </div>
  );
}
