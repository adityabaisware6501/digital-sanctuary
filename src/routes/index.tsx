import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import logo from "@/assets/grapes-logo.png";
import panelGrape from "@/assets/panel-grape.jpg";
import panelCream from "@/assets/panel-cream.jpg";
import panelStone from "@/assets/panel-stone.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GRAPES Luxury Salon & Spa — A Ritual for the Senses" },
      {
        name: "description",
        content:
          "Vinotherapy rituals, radiance facials and stone therapy at GRAPES Luxury Salon & Spa. Enter your digital sanctuary and let our concierge curate your ritual.",
      },
      { property: "og:title", content: "GRAPES Luxury Salon & Spa" },
      {
        property: "og:description",
        content:
          "A bespoke sanctuary of vinotherapy, radiance and stone rituals. Curated by concierge.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = ["Rituals", "Treatments", "Our Story", "Gallery", "Concierge"];

const PANELS = [
  { src: panelGrape, alt: "Macro view of a deep purple grape with a serum droplet" },
  { src: panelCream, alt: "Silken swirl of rich white body cream" },
  { src: panelStone, alt: "Candlelit stone treatment room with warm massage stones" },
];

const RITUALS = [
  {
    name: "Vinotherapy Massage",
    duration: "90 minutes",
    note: "Cold-pressed grape seed oils, deep pressure, slow cadence.",
    media: panelGrape,
  },
  {
    name: "Radiance Facial",
    duration: "75 minutes",
    note: "Polyphenol resurfacing with a cool jade finish.",
    media: panelCream,
  },
  {
    name: "Stone Therapy",
    duration: "60 minutes",
    note: "Basalt warmth traced along the meridians.",
    media: panelStone,
  },
];

function Index() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Split-panel cinematic background */}
      <div className="fixed inset-0" aria-hidden="true">
        <div className="grid h-full w-full grid-cols-3">
          {PANELS.map((panel, i) => (
            <div key={panel.alt} className="relative overflow-hidden">
              <img
                src={panel.src}
                alt=""
                className="animate-drift h-full w-full object-cover"
                style={{ animationDelay: `${i * -7}s` }}
              />
            </div>
          ))}
        </div>
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-veil)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 45% at 50% 42%, oklch(0.79 0.09 88 / 0.1), transparent 70%)",
          }}
        />
      </div>

      <div className="relative">
        {/* Nav */}
        <header className="flex flex-wrap items-center justify-between gap-4 px-6 py-7 md:px-14">
          <span className="font-display text-lg tracking-[0.34em] text-silver-plate uppercase">
            Grapes
          </span>
          <nav className="hidden items-center gap-10 lg:flex">
            {NAV.map((item) => (
              <a
                key={item}
                href="#rituals"
                className="text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase transition-colors duration-500 hover:text-gold"
              >
                {item}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="rounded-xs px-6 py-2.5 text-[0.62rem] tracking-[0.3em] uppercase transition-all duration-500"
            style={{
              background: "var(--gradient-gold)",
              color: "var(--primary-foreground)",
              boxShadow: "var(--shadow-gold)",
            }}
          >
            Book
          </button>
        </header>

        {/* Hero */}
        <section className="animate-rise flex flex-col items-center px-6 pt-16 pb-10 text-center md:pt-24">
          <p className="text-[0.6rem] tracking-lux text-gold uppercase">
            Discover your digital sanctuary
          </p>
          <div className="mt-8 h-px w-40 hairline" />

          <h1 className="mt-10 w-full max-w-4xl">
            <img
              src={logo}
              alt="GRAPES Luxury Salon &amp; Spa"
              width={1536}
              height={768}
              className="w-full drop-shadow-[0_40px_60px_rgba(0,0,0,0.75)]"
            />
          </h1>

          <div className="mt-10 h-px w-40 hairline" />
          <p className="mt-9 font-display text-2xl tracking-[0.24em] text-silver-plate uppercase md:text-3xl">
            A ritual for the senses
          </p>
        </section>

        {/* Key rituals */}
        <section id="rituals" className="px-6 pb-40 md:px-14">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {RITUALS.map((ritual, i) => (
              <article
                key={ritual.name}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="glass-panel group relative overflow-hidden rounded-xs p-8 transition-all duration-700"
                style={{
                  transitionTimingFunction: "var(--ease-lux)",
                  transform: active === i ? "translateY(-10px)" : "none",
                }}
              >
                <img
                  src={ritual.media}
                  alt=""
                  loading="lazy"
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-0 transition-all duration-1000 group-hover:scale-100 group-hover:opacity-40"
                />
                <div className="relative">
                  <p className="text-[0.55rem] tracking-[0.3em] text-gold uppercase">
                    {ritual.duration}
                  </p>
                  <h2 className="mt-4 font-display text-3xl text-foreground">
                    {ritual.name}
                  </h2>
                  <div
                    className="overflow-hidden transition-all duration-700"
                    style={{
                      transitionTimingFunction: "var(--ease-lux)",
                      maxHeight: active === i ? "8rem" : "0rem",
                      opacity: active === i ? 1 : 0,
                    }}
                  >
                    <p className="pt-4 text-sm leading-relaxed text-muted-foreground">
                      {ritual.note}
                    </p>
                    <span className="mt-5 inline-block text-[0.58rem] tracking-[0.3em] text-gold-bright uppercase">
                      Preview the ritual
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Concierge */}
        <aside className="glass-panel fixed bottom-6 left-6 z-10 hidden max-w-xs rounded-xs p-6 md:block">
          <p className="text-[0.55rem] tracking-[0.3em] text-gold uppercase">
            Concierge
          </p>
          <p className="mt-3 font-display text-xl leading-snug text-foreground">
            Let us curate your ritual.
          </p>
          <button
            type="button"
            className="mt-5 border-b pb-1 text-[0.58rem] tracking-[0.3em] uppercase transition-colors duration-500 hover:text-gold-bright"
            style={{ borderColor: "color-mix(in oklab, var(--gold) 45%, transparent)" }}
          >
            Connect
          </button>
        </aside>
      </div>
    </main>
  );
}
