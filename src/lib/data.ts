export type Project = {
  index: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  demoUrl: string;
  urlSlug: string;
  repoUrl: string;
  image: string;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "PostPulse",
    tagline: "AI content scheduler · X + LinkedIn",
    description:
      "Plan on a calendar, sharpen hooks with GPT-4o-mini, and let an Inngest durable worker sleep until publish time. AES-256-GCM encrypted OAuth tokens, transactional job teardown, Clerk auth, Prisma on Postgres.",
    stack: ["Next.js 16", "Inngest", "OpenAI", "Prisma", "Clerk"],
    demoUrl: "https://post-pulse-dun.vercel.app",
    urlSlug: "post-pulse-dun.vercel.app",
    repoUrl: "https://github.com/o-sharaf5/PostPulse",
    image: "/shots/postpulse.png",
  },
  {
    index: "02",
    name: "BioLink Pro",
    tagline: "Link-in-bio SaaS · tips + analytics",
    description:
      "Claim-a-handle profile pages with Stripe tips, first-party click analytics, and a creator dashboard. Zod-validated API, webhook-synced users, graceful degradation when payment keys are absent.",
    stack: ["Next.js 16", "Stripe", "Clerk", "Prisma", "PostgreSQL"],
    demoUrl: "https://biolink-pro-ten.vercel.app",
    urlSlug: "biolink-pro-ten.vercel.app",
    repoUrl: "https://github.com/o-sharaf5/biolink-pro",
    image: "/shots/biolink.png",
  },
  {
    index: "03",
    name: "DocCraft",
    tagline: "Markdown → PDF / Image / HTML",
    description:
      "A fully client-side Markdown exporter: CodeMirror 6 split editor, three typography themes, and pixel-identical multi-page A4 PDF export via canvas page-slicing. No servers, no uploads, no accounts.",
    stack: ["Next.js 14", "CodeMirror", "html2canvas", "jsPDF"],
    demoUrl: "https://doccraft-tau.vercel.app",
    urlSlug: "doccraft-tau.vercel.app",
    repoUrl: "https://github.com/o-sharaf5/DocCraft",
    image: "/shots/doccraft.png",
  },
  {
    index: "04",
    name: "SigFlow",
    tagline: "HTML email signature generator",
    description:
      "Paste-safe signatures for Gmail, Outlook, and Apple Mail — table layouts and inline styles that survive every email sanitizer. Live preview, XSS-escaped input, one-click rich and plain copy.",
    stack: ["Next.js 16", "React 19", "Tailwind v4", "100% static"],
    demoUrl: "https://sigflow-henna.vercel.app",
    urlSlug: "sigflow-henna.vercel.app",
    repoUrl: "https://github.com/o-sharaf5/SigFlow",
    image: "/shots/sigflow.png",
  },
];

export const stackMarquee = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL",
  "Clerk",
  "Stripe",
  "Inngest",
  "OpenAI",
  "Vercel",
  "Git + CI",
];

export const principles = [
  {
    number: "01",
    title: "Ship first, polish with purpose",
    body: "Every project on this page runs right now — open the tabs, break things. Demos beat screenshots.",
  },
  {
    number: "02",
    title: "Security is not a feature",
    body: "Encrypted OAuth tokens at rest, webhook signatures verified, input validated with zod, XSS-escaped HTML output.",
  },
  {
    number: "03",
    title: "Architecture that answers 'what if'",
    body: "Job queues with retry and race guards, cascade-safe data models, graceful degradation when third-party keys are absent.",
  },
  {
    number: "04",
    title: "Boring tools, sharp results",
    body: "The boring stack, used well: Next.js App Router, Postgres, Tailwind, Vercel. Novelty belongs in the product, not the pipeline.",
  },
];
