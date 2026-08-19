"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/constants";

export interface IntakeField {
  name: string;
  label: string;
  type?: "text" | "tel" | "select" | "textarea";
  options?: string[];
  required?: boolean;
}

interface IntakeFormProps {
  fields: IntakeField[];
  submitLabel: string;
  formName: string;
}

export default function IntakeForm({ fields, submitLabel, formName }: IntakeFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(name: string, value: string) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // There's no backend/database wired up for this site yet, so instead
    // of silently discarding the form (or pretending to save it), this
    // builds a formatted WhatsApp message from every field the person
    // filled in and opens it pre-written to Kadtech's real WhatsApp number.
    // The person just has to hit send — nothing is lost, no server needed.
    const lines = fields
      .map((f) => `${f.label}: ${values[f.name]?.trim() || "—"}`)
      .join("\n");
    const message = `New ${formName} request from the website:\n\n${lines}`;

    if (BUSINESS.contact.whatsapp) {
      const url = `https://wa.me/${BUSINESS.contact.whatsapp}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-charcoal/15 p-10 text-center">
        <p className="font-display text-2xl text-charcoal">Almost done.</p>
        <p className="font-body text-charcoal/60 mt-3 max-w-md mx-auto">
          A WhatsApp message with your {formName.toLowerCase()} details should
          have opened in a new tab — just hit send there to reach Kadtech
          directly. If it didn't open, message us at{" "}
          <a
            href={`https://wa.me/${BUSINESS.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            wa.me/{BUSINESS.contact.whatsapp}
          </a>{" "}
          with the same details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {fields.map((field) => (
        <div key={field.name} className={field.type === "textarea" ? "md:col-span-2" : ""}>
          <label className="block font-body text-xs uppercase tracking-widest text-charcoal/50 mb-2">
            {field.label} {field.required && <span aria-hidden="true">*</span>}
          </label>

          {field.type === "select" ? (
            <select
              required={field.required}
              value={values[field.name] ?? ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="w-full border border-charcoal/20 bg-offwhite px-4 py-3 font-body text-sm focus:outline-none focus:border-midnight"
            >
              <option value="" disabled>Select {field.label.toLowerCase()}</option>
              {field.options?.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ) : field.type === "textarea" ? (
            <textarea
              required={field.required}
              value={values[field.name] ?? ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              rows={4}
              className="w-full border border-charcoal/20 bg-offwhite px-4 py-3 font-body text-sm focus:outline-none focus:border-midnight resize-none"
            />
          ) : (
            <input
              type={field.type ?? "text"}
              required={field.required}
              value={values[field.name] ?? ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="w-full border border-charcoal/20 bg-offwhite px-4 py-3 font-body text-sm focus:outline-none focus:border-midnight"
            />
          )}
        </div>
      ))}

      <div className="md:col-span-2 mt-2">
        <button type="submit" className="btn-primary w-full md:w-auto">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
