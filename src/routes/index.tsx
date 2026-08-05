import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Clock,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Sparkles,
  ShieldCheck,
  Leaf,
} from "lucide-react";

import mark from "@/assets/grapes-mark.png";
import heroSalon from "@/assets/hero-salon.jpg";
import aboutSpa from "@/assets/about-spa.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import panelGrape from "@/assets/panel-grape.jpg";
import panelStone from "@/assets/panel-stone.jpg";
import panelCream from "@/assets/panel-cream.jpg";
import heroSpa from "@/assets/hero-spa.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GRAPES Luxury Salon & Spa — Nagpur's Premium Salon" },
      {
        name: "description",
        content:
          "GRAPES Luxury Salon & Spa, Trimurti Nagar Nagpur. Hair artistry, vinotherapy, stone therapy and Ayurvedic rituals delivered with premium Indian hospitality. Call 080872 21025 to book.",
      },
      { property: "og:title", content: "GRAPES Luxury Salon & Spa — Nagpur" },
      {
        property: "og:description",
        content:
          "Signature hair, skin and body rituals in Trimurti Nagar, Nagpur. Book your appointment today.",
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
  { label: "Contact Us", href: "#contact" },
];

const SERVICES = [
  {
    name: "Signature Hair Styling",
    price: "from ₹1,200",
    note: "Precision cuts, gloss treatments and blowouts by senior stylists.",
    media: serviceHair,
  },
  {
    name: "Vinotherapy Ritual",
    price: "from ₹3,500",
    note: "Cold-pressed grape seed oils, slow deep pressure, full body renewal.",
    media: panelGrape,
  },
  {
    name: "Stone Therapy",
    price: "from ₹2,800",
    note: "Warm basalt stones traced along the meridians to release tension.",
    media: panelStone,
  },
  {
    name: "Radiance Facial",
    price: "from ₹2,200",
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
    price: "from ₹2,900",
    note: "Warm herbal oils applied in rhythmic strokes by trained therapists.",
    media: heroSpa,
  },
];

const ABOUT_TABS = [
  {
    key: "story",
    label: "Our Story",
    icon: Sparkles,
    heading: "A family-run house of beauty in Nagpur",
    body: "GRAPES began on Ring Road, Trimurti Nagar with one belief — luxury should feel welcoming. Today our stylists and therapists serve thousands of guests a year, blending grape-derived vinotherapy with time-honoured Ayurvedic technique in rooms that stay bright, quiet and unhurried.",
    stats: [
      ["16+", "Years of care"],
      ["4.6★", "Google rating"],
      ["200+", "Verified reviews"],
    ],
    media: aboutSpa,
  },
  {
    key: "hygiene",
    label: "Hygiene",
    icon: ShieldCheck,
    heading: "Sterilised in front of you, every time",
    body: "Tools are hospital-grade sterilised and unsealed at your chair. Linen is single-use, stations are sanitised between guests, and every therapist is certified and re-trained twice a year. Nothing about your comfort is left to chance.",
    stats: [
      ["100%", "Single-use linen"],
      ["UV+", "Tool sterilising"],
      ["Certified", "Therapists"],
    ],
    media: panelStone,
  },
  {
    key: "rituals",
    label: "The Ritual",
    icon: Leaf,
    heading: "Chosen for you, never a template",
    body: "You are greeted by name, offered chai, and consulted before anything begins. Your stylist maps hair history and scalp health; your therapist adjusts pressure, oils and temperature as the ritual unfolds. Transparent pricing, zero upselling.",
    stats: [
      ["15 min", "Consultation first"],
      ["Cruelty-free", "Product house"],
      ["No", "Upselling"],
    ],
    media: panelCream,
  },
] as const;

const SPECIALISTS = [
  {
    name: "Ananya Sharma",
    role: "Master Stylist",
    years: "12 years",
    note: "Precision cutting, balayage and bridal hair design.",
    photo: team1,
  },
  {
    name: "Rohit Menon",
    role: "Spa Director",
    years: "15 years",
    note: "Deep tissue, stone therapy and posture-led bodywork.",
    photo: team2,
  },
  {
    name: "Priya Iyer",
    role: "Skin & Radiance Expert",
    years: "9 years",
    note: "Clinical facials, pigmentation care and glow protocols.",
    photo: team3,
  },
  {
    name: "Kabir Anand",
    role: "Ayurvedic Therapist",
    years: "11 years",
    note: "Abhyanga, shirodhara and herbal oil therapies.",
    photo: team4,
  },
];

const REVIEWS = [
  {
    quote:
      "The vinotherapy ritual was pure indulgence. Spotless hygiene, warm staff and a calm I carried home for days.",
    name: "Meera Krishnan",
    city: "Nagpur",
  },
  {
    quote:
      "Best bridal package in the city. They planned every session around my schedule and the results were flawless.",
    name: "Sanya Kapoor",
    city: "Trimurti Nagar",
  },
  {
    quote:
      "My stylist actually listened. The cut still looks sharp eight weeks later — worth every rupee.",
    name: "Arjun Desai",
    city: "Jaitala",
  },
];

const HOURS = [
  ["Monday – Thursday", "10:00 – 21:00"],
  ["Friday – Saturday", "10:00 – 22:00"],
  ["Sunday", "10:00 – 21:00"],
];

const PHONE_DISPLAY = "080872 21025";
const PHONE_LINK = "tel:+918087221025";
const ADDRESS_LINES = [
  "428P+FQW, Jaitala Road, Mankapur Ring Road,",
  "Trimurti Nagar, Nagpur, Maharashtra 440022",
];
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Grapes+Luxury+Salon+%26+Spa+Trimurti+Nagar+Nagpur";

function GoldButton({
  children,
  href = "#contact",
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
  const [tab, setTab] = useState<string>(ABOUT_TABS[0].key);
  const active = ABOUT_TABS.find((t) => t.key === tab) ?? ABOUT_TABS[0];

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
            src={heroSalon}
            alt="Marble and brass styling suite at GRAPES Luxury Salon & Spa in Nagpur"
            width={1920}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, oklch(0.99 0.006 90 / 0.95) 0%, oklch(0.98 0.01 88 / 0.78) 46%, oklch(0.2 0.01 285 / 0.18) 100%)",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
            <div className="animate-rise max-w-2xl">
              <SectionLabel>Trimurti Nagar · Nagpur</SectionLabel>
              <h1 className="mt-6 font-display text-4xl leading-[1.1] text-foreground sm:text-5xl md:text-6xl">
                Experience Ultimate
                <br />
                <span className="text-gold-plate">Luxury &amp; Wellness</span>
              </h1>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-charcoal-soft">
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
                  ["4.6★", "Google rating"],
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

        {/* About — interactive */}
        <section id="about" className="bg-cream">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
            <div className="max-w-xl">
              <SectionLabel>About Us</SectionLabel>
              <h2 className="mt-5 font-display text-3xl leading-tight text-foreground md:text-4xl">
                Devoted to premium Indian hospitality
              </h2>
              <div className="mt-6 h-px w-28 hairline-gold" />
            </div>

            <div className="mt-12 grid items-start gap-12 md:grid-cols-[0.95fr_1.05fr]">
              <div className="relative">
                <img
                  key={active.key}
                  src={active.media}
                  alt={active.heading}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="animate-rise aspect-4/5 w-full rounded-sm object-cover"
                  style={{ boxShadow: "var(--shadow-soft)" }}
                />
                <div
                  className="absolute -right-4 -bottom-6 hidden rounded-sm border border-gold/40 bg-pearl px-6 py-5 sm:block"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <p className="font-display text-2xl text-gold-deep">Since 2009</p>
                  <p className="text-[0.58rem] tracking-[0.24em] text-muted-foreground uppercase">
                    Nagpur original
                  </p>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-3">
                  {ABOUT_TABS.map((item) => {
                    const Icon = item.icon;
                    const isActive = item.key === active.key;
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setTab(item.key)}
                        aria-pressed={isActive}
                        className={`inline-flex items-center gap-2 rounded-sm border px-5 py-3 text-[0.62rem] tracking-[0.2em] uppercase transition-all duration-300 ${
                          isActive
                            ? "border-gold bg-pearl text-foreground"
                            : "border-border bg-transparent text-muted-foreground hover:border-gold/60 hover:text-foreground"
                        }`}
                        style={isActive ? { boxShadow: "var(--shadow-card)" } : undefined}
                      >
                        <Icon size={14} className="text-gold-deep" />
                        {item.label}
                      </button>
                    );
                  })}
                </div>

                <div key={active.key} className="animate-rise mt-9">
                  <h3 className="font-display text-2xl leading-snug text-foreground md:text-3xl">
                    {active.heading}
                  </h3>
                  <p className="mt-5 leading-relaxed text-foreground/80">{active.body}</p>
                  <div className="mt-9 grid gap-4 sm:grid-cols-3">
                    {active.stats.map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-sm border border-border bg-pearl px-5 py-5 transition-colors duration-300 hover:border-gold"
                      >
                        <p className="font-display text-xl text-gold-deep">{value}</p>
                        <p className="mt-1 text-[0.58rem] tracking-[0.2em] text-muted-foreground uppercase">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
                      href="#contact"
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
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Certified, continuously trained and chosen as much for warmth as
                for craft.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {SPECIALISTS.map((person) => (
                <article
                  key={person.name}
                  className="group overflow-hidden rounded-sm border border-border bg-pearl transition-all duration-500 hover:-translate-y-1.5 hover:border-gold"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="relative aspect-4/5 overflow-hidden">
                    <img
                      src={person.photo}
                      alt={`${person.name}, ${person.role} at GRAPES Luxury Salon & Spa`}
                      width={800}
                      height={1008}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, oklch(0.16 0.008 285 / 0.88) 0%, oklch(0.16 0.008 285 / 0.4) 30%, transparent 60%)",
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-[0.55rem] tracking-[0.26em] text-gold uppercase">
                        {person.years}
                      </p>
                      <h3 className="mt-1 font-display text-xl text-pearl">
                        {person.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[0.58rem] tracking-[0.24em] text-gold-deep uppercase">
                      {person.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {person.note}
                    </p>
                  </div>
                </article>
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
                Rated 4.6 by 200+ Google reviews
              </h2>
            </div>
            <div className="mt-14 grid gap-7 md:grid-cols-3">
              {REVIEWS.map((review) => (
                <figure
                  key={review.name}
                  className="rounded-sm border border-pearl/15 bg-charcoal-soft p-8 transition-colors duration-300 hover:border-gold/50"
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
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="bg-background">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
            <div className="max-w-xl">
              <SectionLabel>Contact Us</SectionLabel>
              <h2 className="mt-5 font-display text-3xl leading-tight text-foreground md:text-4xl">
                Reserve your chair in Trimurti Nagar
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Call, message on WhatsApp or simply walk in — our concierge will
                find you the calmest slot of the day.
              </p>
            </div>

            <div className="mt-14 grid gap-7 lg:grid-cols-[1fr_1.15fr]">
              <div className="grid content-start gap-5 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  {
                    icon: Phone,
                    label: "Call the salon",
                    value: PHONE_DISPLAY,
                    href: PHONE_LINK,
                    note: "Mon – Sun, 10:00 – 21:00",
                  },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp concierge",
                    value: "Chat with us",
                    href: "https://wa.me/918087221025",
                    note: "Share your date, we confirm in minutes",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    value: "@grapestheluxurysalon",
                    href: "https://instagram.com/grapestheluxurysalon",
                    note: "Latest transformations & offers",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-start gap-4 rounded-sm border border-border bg-pearl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold"
                      style={{ boxShadow: "var(--shadow-card)" }}
                    >
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-deep transition-colors duration-300 group-hover:border-gold">
                        <Icon size={16} />
                      </span>
                      <span>
                        <span className="block text-[0.56rem] tracking-[0.24em] text-muted-foreground uppercase">
                          {item.label}
                        </span>
                        <span className="mt-1 block font-display text-xl text-foreground">
                          {item.value}
                        </span>
                        <span className="mt-1 block text-xs text-muted-foreground">
                          {item.note}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>

              <div
                className="overflow-hidden rounded-sm border border-border bg-cream"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="grid gap-8 p-8 sm:grid-cols-2 md:p-10">
                  <div>
                    <h3 className="flex items-center gap-2 text-[0.6rem] tracking-[0.26em] text-gold-deep uppercase">
                      <MapPin size={14} /> Visit us
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                      {ADDRESS_LINES[0]}
                      <br />
                      {ADDRESS_LINES[1]}
                    </p>
                    <a
                      href={MAP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-block border-b border-gold/50 pb-1 text-[0.58rem] tracking-[0.26em] text-foreground uppercase transition-colors duration-200 hover:text-gold-deep"
                    >
                      Get directions
                    </a>
                  </div>
                  <div>
                    <h3 className="flex items-center gap-2 text-[0.6rem] tracking-[0.26em] text-gold-deep uppercase">
                      <Clock size={14} /> Opening hours
                    </h3>
                    <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
                      {HOURS.map(([days, time]) => (
                        <li key={days} className="flex justify-between gap-4">
                          <span>{days}</span>
                          <span className="text-muted-foreground">{time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="border-t border-border">
                  <iframe
                    title="GRAPES Luxury Salon & Spa location map"
                    src="https://www.google.com/maps?q=Grapes%20Luxury%20Salon%20%26%20Spa%20Trimurti%20Nagar%20Nagpur&output=embed"
                    loading="lazy"
                    className="h-72 w-full border-0 grayscale-[0.35] transition-all duration-500 hover:grayscale-0"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-8 py-6 md:px-10">
                  <p className="font-display text-xl text-foreground">
                    Same-week appointments available.
                  </p>
                  <GoldButton href={PHONE_LINK}>Book Appointment</GoldButton>
                </div>
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
              Luxury salon &amp; spa in Nagpur. Vinotherapy, hair artistry and
              Ayurvedic wellness under one bright roof.
            </p>
          </div>

          <div>
            <h3 className="text-[0.62rem] tracking-[0.26em] text-gold-deep uppercase">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold-deep" />
                <a href={PHONE_LINK} className="hover:text-foreground">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 text-gold-deep" />
                <span>
                  {ADDRESS_LINES[0]}
                  <br />
                  {ADDRESS_LINES[1]}
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
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {[...NAV, { label: "Reviews", href: "#reviews" }].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-7xl px-5 py-6 text-[0.6rem] tracking-[0.22em] text-muted-foreground uppercase md:px-10">
            © 2026 GRAPES Luxury Salon &amp; Spa · Trimurti Nagar, Nagpur
          </p>
        </div>
      </footer>
    </div>
  );
}
