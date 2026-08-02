import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Brown Perspective" },
      {
        name: "description",
        content:
          "The Brown Perspective — stories, culture, and conversation from a fresh point of view. Visit our official website or connect with us on Instagram.",
      },
      { property: "og:title", content: "The Brown Perspective" },
      {
        property: "og:description",
        content:
          "Stories, culture, and conversation from a fresh point of view. Connect with us on Instagram.",
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
});

function Index() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: "#fcfbf8" }}
    >
      <div className="max-w-xl space-y-8">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          The Brown Perspective
        </h1>
        <p className="text-lg text-muted-foreground">
          Stories, culture, and conversation from a fresh point of view.
        </p>

        <a
          href="https://www.instagram.com/thebrownperspective_/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          aria-label="Visit The Brown Perspective on Instagram (opens in a new tab)"
        >
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
            aria-hidden="true"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          Visit our Instagram page
        </a>

        <p className="text-sm text-muted-foreground">
          This link opens our official Instagram profile in a new tab.
        </p>
      </div>
    </main>
  );
}
