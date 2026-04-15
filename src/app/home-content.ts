import { Gauge, Layers3, MessageSquareCode, Sparkles, Workflow } from "lucide-react";

export const homeFeatures = [
  {
    title: "Message discipline",
    description:
      "Capture value proposition, positioning, proof, and CTA structure in one place so the page does not drift into generic copy.",
    icon: MessageSquareCode,
  },
  {
    title: "Reusable page sections",
    description:
      "Compose the marketing surface from focused sections and shadcn primitives instead of one oversized homepage file.",
    icon: Layers3,
  },
  {
    title: "Fast iteration on Vercel",
    description:
      "Lean into static defaults, preview deployments, and a file structure that stays simple while the product evolves.",
    icon: Gauge,
  },
];

export const homePrinciples = [
  {
    title: "App Router for route ownership",
    description:
      "Route files stay thin. Marketing composition lives in components, while metadata and routing remain at the app boundary.",
    icon: Workflow,
  },
  {
    title: "shadcn for primitives, not templates",
    description:
      "Use shadcn for buttons, cards, inputs, and future form primitives. Keep brand expression inside page-specific components.",
    icon: Sparkles,
  },
];

export const homeProcessSteps = [
  {
    title: "Define the offer",
    description:
      "Keep the actual product promise, proof points, and CTA explicit before creating more pages.",
  },
  {
    title: "Ship the static surface",
    description:
      "Add the homepage, about page, privacy policy, and any other static legal or company pages as direct routes.",
  },
  {
    title: "Expand only when needed",
    description:
      "Introduce forms, analytics, and any richer content system only after the static marketing surface is working.",
  },
];
