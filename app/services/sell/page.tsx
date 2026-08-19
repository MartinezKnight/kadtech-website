import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import IntakeForm, { IntakeField } from "@/components/IntakeForm";

export const metadata: Metadata = {
  title: "Sell Your Device in Abuja | Kadtech",
  description:
    "Sell your smartphone, laptop, camera, drone or Bluetooth speaker to Kadtech in Wuse 2, Abuja. Tell us about your device and we'll follow up.",
  alternates: { canonical: "/services/sell" },
};

const fields: IntakeField[] = [
  { name: "deviceType", label: "Device type", type: "select", options: ["Smartphone", "Laptop", "Camera", "Drone", "Bluetooth Speaker", "Accessory"], required: true },
  { name: "brand", label: "Brand", type: "text", required: true },
  { name: "model", label: "Model", type: "text", required: true },
  { name: "storage", label: "Storage / Capacity", type: "text" },
  { name: "condition", label: "Condition", type: "select", options: ["Like New", "Good", "Fair", "Faulty / Needs Repair"], required: true },
  { name: "name", label: "Your name", type: "text", required: true },
  { name: "phone", label: "Phone / WhatsApp number", type: "tel", required: true },
  { name: "notes", label: "Additional information", type: "textarea" },
];

export default function SellPage() {
  return (
    <div>
      <div className="container-kad py-16 md:py-24">
        <p className="eyebrow-label text-charcoal/40">Services / Sell</p>
        <h1 className="section-heading mt-3 max-w-2xl">Turn your old tech into value.</h1>
        <p className="font-editorial text-lg text-charcoal/70 mt-6 max-w-xl leading-relaxed">
          Kadtech buys eligible smartphones, laptops, cameras, drones and
          Bluetooth speakers. Share your device details below or message us
          directly on WhatsApp, and our team will follow up with next steps.
        </p>
        <div className="mt-8">
          <WhatsAppButton label="WhatsApp Us Instead" message="Hi Kadtech, I'd like to sell a device." />
        </div>
      </div>

      <div className="bg-silver-soft/40 py-16">
        <div className="container-kad grid md:grid-cols-3 gap-8 font-body text-sm text-charcoal/70">
          <div>
            <span className="font-display text-2xl text-charcoal">01</span>
            <h3 className="font-display text-lg text-charcoal mt-2 mb-2">Tell us about your device</h3>
            <p>Submit the form with your device's brand, model and condition.</p>
          </div>
          <div>
            <span className="font-display text-2xl text-charcoal">02</span>
            <h3 className="font-display text-lg text-charcoal mt-2 mb-2">We follow up</h3>
            <p>Our team reviews the details and reaches out to confirm next steps.</p>
          </div>
          <div>
            <span className="font-display text-2xl text-charcoal">03</span>
            <h3 className="font-display text-lg text-charcoal mt-2 mb-2">Bring it in</h3>
            <p>Visit the store to inspect and complete the sale in person.</p>
          </div>
        </div>
      </div>

      <div className="container-kad py-16 md:py-24">
        <h2 className="font-display text-2xl mb-10">Tell us about your device</h2>
        <IntakeForm fields={fields} submitLabel="Submit for Review" formName="Sell" />
      </div>
    </div>
  );
}
