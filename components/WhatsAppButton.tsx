import { BUSINESS, PLACEHOLDER } from "@/lib/constants";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  className?: string;
  iconOnly?: boolean;
}

function ChatIcon() {
  // A generic chat-bubble glyph, not a reproduction of WhatsApp's
  // trademarked logo mark.
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path
        d="M4 12a8 8 0 1 1 3.2 6.4L4 19.5l1.1-3.3A7.96 7.96 0 0 1 4 12Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="15" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export default function WhatsAppButton({
  message = "Hi Kadtech, I have an enquiry.",
  label = "WhatsApp Us",
  className = "",
  iconOnly = false,
}: WhatsAppButtonProps) {
  const number = BUSINESS.contact.whatsapp;

  if (!number) {
    // No verified number yet — render a disabled-state affordance instead
    // of a fabricated link, per the client's explicit instruction.
    if (iconOnly) {
      return (
        <span
          className={`inline-flex items-center justify-center rounded-full bg-midnight text-offwhite opacity-50 cursor-not-allowed ${className}`}
          title={PLACEHOLDER.whatsapp}
          aria-disabled="true"
        >
          <ChatIcon />
        </span>
      );
    }
    return (
      <span
        className={`btn-whatsapp opacity-50 cursor-not-allowed select-none ${className}`}
        title={PLACEHOLDER.whatsapp}
        aria-disabled="true"
      >
        {label}
        <span className="text-[10px] normal-case tracking-normal opacity-80">
          (number pending)
        </span>
      </span>
    );
  }

  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  if (iconOnly) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`inline-flex items-center justify-center rounded-full bg-midnight text-offwhite shadow-lg hover:bg-midnight-700 transition-colors duration-300 ${className}`}
      >
        <ChatIcon />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${className}`}
    >
      {label}
    </a>
  );
}
