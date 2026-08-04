import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Star } from "lucide-react";

import mark from "@/assets/grapes-mark.png";
import heroSpa from "@/assets/hero-spa.jpg";
import aboutSpa from "@/assets/about-spa.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import panelGrape from "@/assets/panel-grape.jpg";
import panelStone from "@/assets/panel-stone.jpg";
import panelCream from "@/assets/panel-cream.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GRAPES Luxury Salon & Spa — Ultimate Luxury & Wellness" },
      {
        name: "description",
        content:
          "Experience ultimate luxury and wellness at GRAPES Luxury Salon & Spa. Hair styling, vinotherapy, stone therapy and signature rituals delivered with premium Indian hospitality. Book your appointment today.",
      },
      { property: "og:title", content: "GRAPES Luxury Salon & Spa" },
      {
        property: "og:description",
        content:
          "Signature hair, skin and body rituals crafted with premium Indian hospitality. Book your appointment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Specialists", href: "#specialists" },
  { label: "Reviews", href: "#reviews" },
];

const SERVICES = [
  {
    name: "Signature Hair Styling",
    price: "from ₹2,400",
    note: "Precision cuts, gloss treatments and blowouts by senior stylists.",
    media: serviceHair,
  },
  {
    name: "Vinotherapy Ritual",
    price: "from ₹4,800",
    note: "Cold-pressed grape seed oils, slow deep pressure, full body renewal.",
    media: panelGrape,
  },
  {
    name: "Stone Therapy",
    price: "from ₹3,900",
    note: "Warm basalt stones traced along the meridians to release tension.",
    media: panelStone,
  },
  {
    name: "Radiance Facial",
    price: "from ₹3,200",
    note: "Polyphenol resurfacing finished with a cooling jade massage.",
    media: panelCream,
  },
  {
    name: "Bridal & Occasion",
    price: "on consultation",
    note: "Curated multi-session packages for the bride and her family.",
    media: aboutSpa,
  },
  {
    name: "Ayurvedic Abhyanga",
    price: "from ₹4,200",
    note: "Warm herbal oils applied in rhythmic strokes by trained therapists.",
    media: heroSpa,
  },
];

const SPECIALISTS = [
  { name: "Ananya Sharma", role: "Master Stylist · 12 yrs" },
  { name: "Rohit Menon", role: "Spa Director · 15 yrs" },
  { name: "Priya Iyer", role: "Skin & Radiance Expert · 9 yrs" },
  { name: "Kabir Anand", role: "Ayurvedic Therapist · 11 yrs" },
];

const REVIEWS = [
  {
    quote:
      "The vinotherapy ritual was pure indulgence. Spotless hygiene, warm staff and a calm I carried home for days.",
    name: "Meera Krishnan",
    city: "Bengaluru",
  },
  {
    quote:
      "Best bridal package in the city. They planned every session around my schedule and the results were flawless.",
    name: "Sanya Kapoor",
    city: "New Delhi",
  },
  {
    quote:
      "My stylist actually listened. The cut still looks sharp eight weeks later — worth every rupee.",
    name: "Arjun Desai",
    city: "Mumbai",
  },
];

const HOURS = [
  ["Monday – Thursday", "10:00 – 20:00"],
  ["Friday – Saturday", "09:00 – 21:00"],
  ["Sunday", "10:00 – 18:00"],
];

function GoldButton({
  children,
  href = "#book",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-sm px-7 py-3 text-[0.68rem] tracking-[0.26em] uppercase transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
      style={{
        background: "var(--gradient-gold)",
        color: "var(--primary-foreground)",
        boxShadow: "var(--shadow-gold)",
      }}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.62rem] tracking-lux text-gold-deep uppercase">{children}</p>
  );
}

function Index() {
  return (
    <div id="home" className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 md:px-10">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={mark}
              alt="GRAPES Luxury Salon & Spa logo"
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
            />
            <span className="leading-none">
              <span className="block font-display text-lg tracking-[0.28em] text-foreground uppercase">
                Grapes
              </span>
              <span className="block text-[0.5rem] tracking-[0.28em] text-muted-foreground uppercase">
                Luxury Salon &amp; Spa
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[0.66rem] tracking-[0.24em] text-muted-foreground uppercase transition-colors duration-200 hover:text-gold-deep"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <GoldButton className="shrink-0">Book Appointment</GoldButton>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <img
            src={heroSpa}
            alt="Bright marble treatment room at GRAPES Luxury Salon & Spa"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, oklch(0.99 0.006 90 / 0.94) 0%, oklch(0.98 0.01 88 / 0.72) 48%, oklch(0.97 0.014 86 / 0.3) 100%)",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
            <div className="animate-rise max-w-2xl">
              <SectionLabel>Est. 2009 · Bengaluru</SectionLabel>
              <h1 className="mt-6 font-display text-4xl leading-[1.1] text-foreground sm:text-5xl md:text-6xl">
                Experience Ultimate
                <br />
                <span className="text-gold-plate">Luxury &amp; Wellness</span>
              </h1>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">
                A bright, serene sanctuary where master stylists and trained
                therapists craft hair, skin and body rituals around you — with the
                warmth of true Indian hospitality.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <GoldButton>Book Your Ritual</GoldButton>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-sm border border-gold/50 bg-card/70 px-7 py-3 text-[0.68rem] tracking-[0.26em] text-foreground uppercase transition-colors duration-200 hover:border-gold hover:bg-card"
                >
                  View Services
                </a>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
                {[
                  ["16+", "Years of care"],
                  ["48k", "Rituals delivered"],
                  ["4.9★", "Average rating"],
                ].map(([stat, label]) => (
                  <div key={label}>
                    <p className="font-display text-2xl text-foreground">{stat}</p>
                    <p className="text-[0.6rem] tracking-[0.24em] text-muted-foreground uppercase">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-cream">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-10 md:py-32">
            <div>
              <SectionLabel>About Us</SectionLabel>
              <h2 className="mt-5 font-display text-3xl leading-tight text-foreground md:text-4xl">
                Devoted to premium Indian hospitality
              </h2>
              <div className="mt-6 h-px w-28 hairline-gold" />
              <p className="mt-7 leading-relaxed text-foreground/80">
                GRAPES began with a simple belief: luxury should feel welcoming.
                For over sixteen years our family-run salon and spa has blended
                grape-derived vinotherapy with time-honoured Ayurvedic technique,
                delivered in rooms that are bright, spotless and unhurried.
              </p>
              <p className="mt-5 leading-relaxed text-foreground/80">
                Every therapist is certified and continuously trained. Every tool
                is sterilised in view. Every guest is greeted by name, offered
                chai, and guided through a ritual chosen for them — never a
                template.
              </p>
              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                {[
                  "Certified therapists",
                  "Hospital-grade hygiene",
                  "Cruelty-free products",
                ].map((item) => (
                  <p
                    key={item}
                    className="rounded-sm border border-border bg-pearl px-4 py-3 text-[0.68rem] tracking-[0.14em] text-foreground/80 uppercase"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutSpa}
                alt="White orchid, rolled towels and a brass bowl of grapes on marble"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full rounded-sm object-cover"
                style={{ boxShadow: "var(--shadow-soft)" }}
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-background">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
            <div className="max-w-xl">
              <SectionLabel>Services &amp; Rituals</SectionLabel>
              <h2 className="mt-5 font-display text-3xl leading-tight text-foreground md:text-4xl">
                Curated for hair, skin and stillness
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Transparent pricing, no upselling. Choose a single service or let
                our concierge build a half-day escape.
              </p>
            </div>

            <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <article
                  key={service.name}
                  className="group overflow-hidden rounded-sm border border-border bg-pearl transition-all duration-300 hover:-translate-y-1 hover:border-gold"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={service.media}
                      alt={service.name}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <p className="text-[0.58rem] tracking-[0.26em] text-gold-deep uppercase">
                      {service.price}
                    </p>
                    <h3 className="mt-3 font-display text-2xl text-foreground">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.note}
                    </p>
                    <a
                      href="#book"
                      className="mt-6 inline-block border-b border-gold/50 pb-1 text-[0.6rem] tracking-[0.26em] text-foreground uppercase transition-colors duration-200 group-hover:text-gold-deep"
                    >
                      Book this
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Specialists */}
        <section id="specialists" className="bg-cream">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
            <div className="max-w-xl">
              <SectionLabel>Our Specialists</SectionLabel>
              <h2 className="mt-5 font-display text-3xl leading-tight text-foreground md:text-4xl">
                The hands behind every ritual
              </h2>
            </div>
            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {SPECIALISTS.map((person) => (
                <div key={person.name} className="text-center">
                  <div
                    className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-gold/40 bg-pearl"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <span className="font-display text-3xl text-gold-deep">
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl text-foreground">
                    {person.name}
                  </h3>
                  <p className="mt-2 text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
                    {person.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-charcoal">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
            <div className="max-w-xl">
              <p className="text-[0.62rem] tracking-lux text-gold uppercase">
                Customer Reviews
              </p>
              <h2 className="mt-5 font-display text-3xl leading-tight text-pearl md:text-4xl">
                Loved by 48,000 guests
              </h2>
            </div>
            <div className="mt-14 grid gap-7 md:grid-cols-3">
              {REVIEWS.map((review) => (
                <figure
                  key={review.name}
                  className="rounded-sm border border-pearl/15 bg-charcoal-soft p-8"
                >
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="mt-6 font-display text-lg leading-relaxed text-pearl/90">
                    “{review.quote}”
                  </blockquote>
                  <figcaption className="mt-7 text-[0.62rem] tracking-[0.24em] text-pearl/60 uppercase">
                    {review.name} · {review.city}
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-14" id="book">
              <div className="flex flex-wrap items-center justify-between gap-6 rounded-sm border border-gold/30 px-8 py-8">
                <p className="font-display text-2xl text-pearl">
                  Ready for your ritual? Same-week slots available.
                </p>
                <GoldButton href="tel:+918000000000">Book Appointment</GoldButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-pearl">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-4 md:px-10">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={mark}
                alt=""
                width={36}
                height={36}
                loading="lazy"
                className="h-8 w-8 object-contain"
              />
              <span className="font-display text-base tracking-[0.28em] text-foreground uppercase">
                Grapes
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Luxury salon &amp; spa. Vinotherapy, hair artistry and Ayurvedic
              wellness under one bright roof.
            </p>
          </div>

          <div>
            <h3 className="text-[0.62rem] tracking-[0.26em] text-gold-deep uppercase">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold-deep" />
                <a href="tel:+918000000000" className="hover:text-foreground">
                  +91 80 0000 0000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 text-gold-deep" />
                <span>
                  12 Vittal Mallya Road, Ashok Nagar,
                  <br />
                  Bengaluru 560001
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.62rem] tracking-[0.26em] text-gold-deep uppercase">
              Opening Hours
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {HOURS.map(([days, time]) => (
                <li key={days} className="flex items-center gap-2">
                  <Clock size={14} className="text-gold-deep" />
                  <span>
                    {days} · {time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.62rem] tracking-[0.26em] text-gold-deep uppercase">
              Find Us
            </h3>
            <div className="mt-5 flex h-36 items-center justify-center rounded-sm border border-border bg-cream text-center text-[0.6rem] tracking-[0.24em] text-muted-foreground uppercase">
              Map placeholder
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-7xl px-5 py-6 text-[0.6rem] tracking-[0.22em] text-muted-foreground uppercase md:px-10">
            © 2026 GRAPES Luxury Salon &amp; Spa
          </p>
        </div>
      </footer>
    </div>
  );
}
