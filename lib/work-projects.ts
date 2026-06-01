import type { LucideIcon } from "lucide-react"
import { CircleDollarSign, Globe2 } from "lucide-react"

export type WorkProject = {
  id: string
  /** Decorative icon beside the title on the Work page */
  icon: LucideIcon
  title: string
  /** Role / client context line */
  meta?: string
  /** Primary positioning line (Notion-style callout) */
  thesis: string
  bullets?: string[]
  /** Extra paragraphs (e.g. problem → solution) */
  paragraphs?: string[]
  /** Loom embed URL (iframe src), when present */
  loomEmbedUrl?: string
  externalLink?: { label: string; href: string }
}

export const workProjects: WorkProject[] = [
  {
    id: "commissionpro",
    icon: CircleDollarSign,
    title: "CommissionPro",
    meta: "Product · commissionpro.io",
    thesis:
      "Building a system to help sales teams track commissions and payouts in real time.",
    paragraphs: [
      "Problem: payout logic lives in spreadsheets and ad-hoc updates — reps don’t trust the numbers, and ops burns time reconciling.",
      "Solution: CommissionPro centralizes plans and payouts so teams see accurate earnings as deals move, without the weekly spreadsheet scramble.",
    ],
    bullets: [
      "Single source of truth for commissions and payouts.",
      "Designed for teams where trust and speed actually affect retention.",
    ],
    loomEmbedUrl: "https://www.loom.com/embed/4f173cf11f974bca8c1f7f80a5dd77b0",
    externalLink: {
      label: "commissionpro.io",
      href: "https://www.commissionpro.io",
    },
  },
  {
    id: "rizq-morocco-retreat",
    icon: Globe2,
    title: "Premium event landing page",
    meta: "Marwan Duibi · Rizq Rise — Morocco retreat (The Muslim Wealth circle)",
    thesis:
      "Built a premium event page for a high-ticket retreat in Morocco — positioning, credibility, and a clear apply flow so the right attendees move from interest to booking.",
    bullets: [
      "Event-grade storytelling: venue, speakers, workshops, and social proof in one cohesive narrative.",
      "Outcome-focused structure built around applications — not a generic brochure site.",
    ],
    loomEmbedUrl: "https://www.loom.com/embed/cc40b8e859e6467195aa12c135c2f235",
    externalLink: {
      label: "rizqriseretreats.com",
      href: "https://rizqriseretreats.com/",
    },
  },
]
