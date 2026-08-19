import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import IntakeForm, { IntakeField } from "@/components/IntakeForm";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Kadtech | Abuja",
  description: "Get in touch with Kadtech Innovative Solutions Limited in Wuse 2, Abuja.",
  alternates: { canonical: "/contact" },
};

const fields: IntakeField[] = [
  { name: "name", label: "Your name", type: "text", required: true },
  { name: "phone", label: "Phone / WhatsApp number", type: "tel", required: true },
  { name: "subject", label: "What's this about?", type: "select", options: ["General enquiry", "Buy", "Sell", "Swap", "Repair"], required: true },
  { name: "message", label: "Message", type: "textarea", required: true },
];

export default function ContactPage() {
  return (
    <div>
      <div className="container-kad py-16 md:py-24">
        <p className="eyebrow-label text-charcoal/40">Contact</p>
        <h1 className="section-heading mt-3 max-w-2xl">Get in touch with Kadtech.</h1>
      </div>

      <div className="container-kad grid md:grid-cols-3 gap-8 pb-16">
        <div className="border border-charcoal/10 p-8">
          <h3 className="font-display text-lg mb-3">WhatsApp</h3>
          <WhatsAppButton />
        </div>
        <div className="border border-charcoal/10 p-8">
          <h3 className="font-display text-lg mb-3">Phone</h3>
          <a href={`tel:${BUSINESS.contact.phone}`} className="font-body text-sm text-charcoal/70 hover:text-midnight">
            {BUSINESS.contact.phone}
          </a>
        </div>
        <div className="border border-charcoal/10 p-8">
          <h3 className="font-display text-lg mb-3">Email</h3>
          <a href={`mailto:${BUSINESS.contact.email}`} className="font-body text-sm text-charcoal/70 hover:text-midnight break-all">
            {BUSINESS.contact.email}
          </a>
        </div>
      </div>

      <div className="container-kad pb-24">
        <h2 className="font-display text-2xl mb-10">Send a message</h2>
        <IntakeForm fields={fields} submitLabel="Send Message" formName="Contact" />
      </div>
    </div>
  );
}
