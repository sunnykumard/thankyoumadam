import { createFileRoute } from "@tanstack/react-router";
import { Universe } from "@/components/universe/Universe";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Our Little Universe — a digital keepsake" },
      { name: "description", content: "A romantic keepsake of photos, letters, memories and promises." },
      { property: "og:title", content: "Our Little Universe" },
      { property: "og:description", content: "A romantic keepsake of photos, letters, memories and promises." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Universe,
});