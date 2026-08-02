import { createFileRoute } from "@tanstack/react-router";
import danceAsset from "@/assets/dance.jpeg.asset.json";
import hijrasAsset from "@/assets/hijras.jpeg.asset.json";
import punjabiAsset from "@/assets/punjabi.jpeg.asset.json";
import fallenAsset from "@/assets/fallen.jpeg.asset.json";
import stolenShoesAsset from "@/assets/stolen-shoes.jpeg.asset.json";
import breakingMoldAsset from "@/assets/breaking-mold.jpeg.asset.json";
import faizAsset from "@/assets/faiz.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Brown Perspective — By South Asians, for South Asians" },
      {
        name: "description",
        content:
          "The Brown Perspective is an online, youth-led organisation based off of Pakistan, uniting young South Asians through articles, art and cultural commentary.",
      },
      { property: "og:title", content: "The Brown Perspective" },
      {
        property: "og:description",
        content: "By South Asians. For South Asians.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://the-brown-perspective.lovable.app/",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://the-brown-perspective.lovable.app/",
      },
    ],
  }),
  component: Index,
});

const articles = [
  { src: stolenShoesAsset.url, title: "Stolen Shoes & Sweet Ransoms" },
  { src: breakingMoldAsset.url, title: "Breaking The Mold" },
  { src: faizAsset.url, title: "Celebrating 114 Years of Faiz" },
  { src: danceAsset.url, title: "Dance — The Oldest Language" },
  { src: hijrasAsset.url, title: "Hijras in the Peripheries of Mughal Courts" },
  { src: punjabiAsset.url, title: "Punjabi = Paindu?" },
  { src: fallenAsset.url, title: "Romanticizing “Fallen Women”" },
];

/* ---------- South Asian aesthetic SVG motifs ---------- */

function Kite({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 140" className={className} aria-hidden="true">
      <g transform="translate(50 40)">
        <polygon points="0,-30 26,0 0,30 -26,0" fill={color} stroke="hsl(var(--ink) / 0.5)" strokeWidth="1.2" />
        <line x1="0" y1="-30" x2="0" y2="30" stroke="hsl(var(--ink) / 0.35)" strokeWidth="0.8" />
        <line x1="-26" y1="0" x2="26" y2="0" stroke="hsl(var(--ink) / 0.35)" strokeWidth="0.8" />
      </g>
      <path
        d="M50 70 Q 56 82 48 92 Q 40 102 52 112 Q 60 120 50 132"
        fill="none"
        stroke="hsl(var(--ink) / 0.5)"
        strokeWidth="1"
      />
    </svg>
  );
}

function Bangle({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="38" fill="none" stroke={color} strokeWidth="6" />
      <circle cx="50" cy="50" r="30" fill="none" stroke={color} strokeWidth="2" strokeDasharray="2 3" opacity="0.7" />
    </svg>
  );
}

function MangoLeaf({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M50 8 C 78 22 86 55 50 92 C 14 55 22 22 50 8 Z"
        fill={color}
        opacity="0.9"
      />
      <path d="M50 12 L 50 88" stroke="hsl(var(--ink) / 0.55)" strokeWidth="1" />
      <path
        d="M50 30 Q 62 36 66 46 M50 45 Q 64 52 68 62 M50 60 Q 60 66 64 74 M50 30 Q 38 36 34 46 M50 45 Q 36 52 32 62 M50 60 Q 40 66 36 74"
        stroke="hsl(var(--ink) / 0.45)"
        strokeWidth="0.9"
        fill="none"
      />
    </svg>
  );
}

function TruckArtBorder({ className = "" }: { className?: string }) {
  // A repeating truck-art style scallop / floret band
  return (
    <svg viewBox="0 0 400 40" className={className} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id="truckband" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="var(--holi-pink)" />
          <path d="M0 20 Q 10 0 20 20 Q 30 40 40 20" fill="none" stroke="var(--mustard)" strokeWidth="3" />
          <circle cx="20" cy="20" r="4" fill="var(--holi-blue)" />
          <circle cx="0" cy="20" r="3" fill="var(--saffron)" />
          <circle cx="40" cy="20" r="3" fill="var(--saffron)" />
          <path d="M8 32 L 12 36 L 16 32" stroke="var(--holi-green)" strokeWidth="1.5" fill="none" />
          <path d="M24 32 L 28 36 L 32 32" stroke="var(--holi-green)" strokeWidth="1.5" fill="none" />
        </pattern>
      </defs>
      <rect width="400" height="40" fill="url(#truckband)" />
    </svg>
  );
}

function Paisley({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M20 80 C 10 55 25 20 55 20 C 80 20 85 45 65 55 C 50 62 48 45 58 40"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Festive top ribbon */}
      <div className="flex h-2 w-full">
        <div className="h-full flex-1 bg-secondary" />
        <div className="h-full flex-1 bg-primary" />
        <div className="h-full flex-1 bg-accent" />
        <div className="h-full flex-1 bg-holi-pink" />
        <div className="h-full flex-1 bg-holi-green" />
      </div>

      {/* Truck-art band */}
      <TruckArtBorder className="h-6 w-full" />

      {/* Decorative color bursts */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-96 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-40 right-10 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

      {/* Floating kites */}
      <Kite className="pointer-events-none absolute right-8 top-16 h-28 w-20 rotate-12 opacity-90" color="var(--holi-pink)" />
      <Kite className="pointer-events-none absolute left-6 top-40 h-20 w-16 -rotate-12 opacity-80" color="var(--holi-blue)" />
      <Kite className="pointer-events-none absolute right-24 top-56 hidden h-24 w-16 rotate-6 opacity-80 md:block" color="var(--mustard)" />

      {/* Hero */}
      <header className="relative px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-secondary">
            The Brown Perspective
          </p>
          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            <span className="text-foreground">By South Asians, </span>
            <span className="text-secondary">for South Asians.</span>
          </h1>
          <div className="mt-8 flex items-center gap-4">
            <Bangle className="h-8 w-8" color="var(--secondary)" />
            <Bangle className="h-8 w-8" color="var(--primary)" />
            <Bangle className="h-8 w-8" color="var(--accent)" />
            <Bangle className="h-8 w-8" color="var(--holi-pink)" />
          </div>
        </div>
      </header>

      {/* Mission */}
      <section className="relative px-6 py-20">
        {/* mango leaves in the margins */}
        <MangoLeaf className="pointer-events-none absolute left-2 top-10 hidden h-16 w-16 -rotate-12 md:block" color="var(--holi-green)" />
        <MangoLeaf className="pointer-events-none absolute right-2 bottom-8 hidden h-20 w-20 rotate-12 md:block" color="var(--holi-green)" />
        <Paisley className="pointer-events-none absolute right-6 top-6 h-14 w-14 opacity-60" color="var(--saffron)" />

        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary">
              Our Mission
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
          </div>
          <p className="font-serif text-xl leading-relaxed md:text-2xl">
            The Brown Perspective is an online, youth-led organisation based off
            of Pakistan. It brings together passionate and open-minded young
            people from all across South Asia to work together on articles,
            share opinions and provide meaningful cultural and social
            commentary. In addition, it invites young South Asian artists to
            design instagram posts for those articles based on the brown
            traditions and history, often involving maximalism and signature
            symbols like bangles.
          </p>
          <p className="mt-8 font-serif text-2xl italic text-secondary md:text-3xl">
            By South Asians. For South Asians.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Paisley className="h-10 w-10" color="var(--holi-pink)" />
            <Paisley className="h-10 w-10 -scale-x-100" color="var(--holi-blue)" />
            <Paisley className="h-10 w-10" color="var(--mustard)" />
          </div>
        </div>
      </section>

      <TruckArtBorder className="h-5 w-full" />

      {/* Articles */}
      <section className="relative px-6 py-20">
        <MangoLeaf className="pointer-events-none absolute -left-4 top-24 h-24 w-24 -rotate-45 opacity-80" color="var(--holi-green)" />
        <Kite className="pointer-events-none absolute right-4 top-8 h-20 w-16 rotate-12 opacity-80" color="var(--saffron)" />

        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary">
              Featured Articles
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-secondary/60 to-transparent" />
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a, i) => {
              const accents = ["bg-secondary", "bg-primary", "bg-accent", "bg-holi-pink", "bg-holi-blue", "bg-holi-green", "bg-mustard"];
              return (
                <figure
                  key={a.title}
                  className="group relative rounded-xl bg-card p-3 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <Bangle
                    className="absolute -left-3 -top-3 h-8 w-8 rotate-12"
                    color={
                      i % 4 === 0
                        ? "var(--holi-pink)"
                        : i % 4 === 1
                        ? "var(--mustard)"
                        : i % 4 === 2
                        ? "var(--holi-blue)"
                        : "var(--saffron)"
                    }
                  />
                  <div className="overflow-hidden rounded-lg bg-muted">
                    <img
                      src={a.src}
                      alt={a.title}
                      className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-4 px-1 font-serif text-lg text-foreground">
                    {a.title}
                  </figcaption>
                  <div className="mt-3 flex gap-2 px-1">
                    <span className={`h-1.5 w-8 rounded-full ${accents[i % accents.length]}`} />
                    <span className="h-1.5 w-3 rounded-full bg-muted-foreground/30" />
                  </div>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative border-t border-border px-6 py-20">
        <MangoLeaf className="pointer-events-none absolute left-6 top-6 h-14 w-14 -rotate-12" color="var(--holi-green)" />
        <MangoLeaf className="pointer-events-none absolute right-6 top-6 h-14 w-14 rotate-12" color="var(--holi-green)" />
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-secondary">
            Our Team
          </h2>
          <p className="font-serif text-xl leading-relaxed md:text-2xl">
            Because it is <em>The Brown Perspective</em>, all South Asians work
            for it — across our content writing and design departments.
          </p>
          <div className="mt-10 flex justify-center gap-3">
            <Bangle className="h-10 w-10" color="var(--secondary)" />
            <Bangle className="h-10 w-10" color="var(--primary)" />
            <Bangle className="h-10 w-10" color="var(--accent)" />
            <Bangle className="h-10 w-10" color="var(--holi-pink)" />
            <Bangle className="h-10 w-10" color="var(--holi-blue)" />
          </div>
        </div>
      </section>

      <TruckArtBorder className="h-6 w-full" />

      <footer className="relative bg-ink px-6 py-12 text-center">
        <div className="mb-4 flex justify-center gap-3">
          <Kite className="h-10 w-8" color="var(--holi-pink)" />
          <Kite className="h-10 w-8" color="var(--mustard)" />
          <Kite className="h-10 w-8" color="var(--holi-blue)" />
          <Kite className="h-10 w-8" color="var(--saffron)" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream">
          The Brown Perspective
        </p>

        {/* Instagram link — clearly labeled website/social link */}
        <a
          href="https://www.instagram.com/thebrownperspective_/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-cream/90"
          aria-label="Visit The Brown Perspective on Instagram (opens in a new tab)"
        >
          <InstagramIcon />
          <span>Follow us on Instagram — @thebrownperspective_</span>
        </a>
        <p className="mt-3 text-xs text-cream/70">
          This link opens our official Instagram profile in a new tab.
        </p>
      </footer>
    </div>
  );
}
