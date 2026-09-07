import { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";

const SEEN_KEY = "grapes-consult-popup";
const WHATSAPP = "https://wa.me/918087221025";

/**
 * Exit-intent lead magnet. Purely client side: the phone number is remembered
 * in the browser and handed to WhatsApp — no server, no database.
 */
export function ConsultationPopup() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(SEEN_KEY)) return;

    let fired = false;
    const show = () => {
      if (fired) return;
      fired = true;
      setOpen(true);
      window.localStorage.setItem(SEEN_KEY, "1");
    };

    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show();
    };
    document.addEventListener("mouseout", onLeave);

    // Mobile has no exit intent — fall back to a scroll-depth trigger.
    const onScroll = () => {
      const depth =
        window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
      if (depth > 0.55) show();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("mouseout", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!open) return null;

  const digits = phone.replace(/\D/g, "");

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center px-5">
      <button
        type="button"
        aria-label="Close"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-onyx/80 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Complimentary consultation"
        className="animate-pop relative w-full max-w-md overflow-hidden rounded-sm border border-gold/35 bg-espresso p-9 text-center"
        style={{ boxShadow: "var(--shadow-soft)" }}
      >
        <div className="glow-veil pointer-events-none absolute inset-0" />
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close popup"
          className="absolute top-4 right-4 text-muted-foreground transition-colors hover:text-gold"
        >
          <X size={16} />
        </button>

        <div className="relative">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-gold">
            <Sparkles size={18} />
          </span>

          {done ? (
            <>
              <h3 className="mt-6 font-display text-3xl text-ivory">Thank you.</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Our concierge will call {phone} shortly. Prefer to chat now?
              </p>
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent(
                  `Hi GRAPES, I'd like my complimentary consultation. My number is ${phone}.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center rounded-sm px-7 py-3.5 text-[0.66rem] tracking-[0.26em] uppercase"
                style={{
                  background: "var(--gradient-gold)",
                  color: "var(--primary-foreground)",
                }}
              >
                Message on WhatsApp
              </a>
            </>
          ) : (
            <>
              <p className="mt-6 text-[0.6rem] tracking-[0.3em] text-gold uppercase">
                Before you go
              </p>
              <h3 className="mt-4 font-display text-3xl leading-snug text-ivory">
                A complimentary
                <br />
                consultation, on us
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Leave your number and a senior stylist will map your hair, skin or
                spa ritual — no charge, no obligation.
              </p>
              <form
                className="mt-7 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (digits.length < 10) return;
                  window.localStorage.setItem("grapes-lead-phone", phone);
                  setDone(true);
                }}
              >
                <input
                  type="tel"
                  required
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your mobile number"
                  className="w-full rounded-sm border border-border bg-onyx/60 px-5 py-3.5 text-center text-sm text-ivory placeholder:text-muted-foreground focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full rounded-sm px-7 py-3.5 text-[0.66rem] tracking-[0.26em] uppercase transition-transform duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "var(--gradient-gold)",
                    color: "var(--primary-foreground)",
                    boxShadow: "var(--shadow-gold)",
                  }}
                >
                  Claim my consultation
                </button>
              </form>
              <p className="mt-4 text-[0.58rem] tracking-[0.18em] text-muted-foreground uppercase">
                We never share your number
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
