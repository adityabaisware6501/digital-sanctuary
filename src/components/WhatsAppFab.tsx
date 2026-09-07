const WHATSAPP =
  "https://wa.me/918087221025?text=" +
  encodeURIComponent("Hi GRAPES, I'd like to book an appointment.");

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with GRAPES on WhatsApp"
      className="group fixed right-4 bottom-4 z-[80] flex items-center gap-3 rounded-full border border-gold/40 bg-espresso/95 py-2.5 pr-5 pl-2.5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 sm:right-7 sm:bottom-7"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <span
        className="flex h-11 w-11 items-center justify-center rounded-full"
        style={{ background: "var(--gradient-gold)" }}
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
          fill="currentColor"
          className="text-onyx"
        >
          <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.54 3.75 1.48 5.3L2 22l4.98-1.62a9.8 9.8 0 0 0 5.06 1.4c5.44 0 9.84-4.4 9.84-9.84S17.48 2 12.04 2Zm0 17.9a8.1 8.1 0 0 1-4.4-1.3l-.31-.19-2.95.96.96-2.87-.2-.32a8.06 8.06 0 0 1-1.24-4.34 8.13 8.13 0 1 1 8.14 8.06Zm4.6-6.02c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.57.13-.16.25-.65.81-.8.98-.14.16-.29.19-.54.06a6.6 6.6 0 0 1-1.95-1.2 7.3 7.3 0 0 1-1.35-1.68c-.14-.25-.02-.39.11-.52.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.55-1.36-.76-1.86-.2-.49-.4-.42-.55-.43h-.47c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.68 2.68 4.08 3.66.57.25 1.02.4 1.37.5.58.19 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.15.2-.56.2-1.05.14-1.15-.06-.1-.23-.16-.48-.29Z" />
        </svg>
      </span>
      <span className="hidden text-[0.6rem] tracking-[0.24em] text-ivory uppercase sm:block">
        WhatsApp us
      </span>
    </a>
  );
}
