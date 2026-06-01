import type { Metadata } from "next"
import Link from "next/link"
import { Brain } from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "In-depth breakdowns of operational systems I've built for sales teams.",
}

const caseStudies = [
  {
    href: "/case-studies/rizq-rise",
    icon: Brain,
    title: "Sales Operations Build",
    meta: "Rizq Rise · High-ticket sales organization",
    description:
      "Six interconnected systems that gave a 4-closer, 5-setter team the operational infrastructure it didn't have — automated booking capture, call routing, performance dashboards, and reporting that didn't exist before.",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mx-5 mt-24 flex w-full max-w-2xl flex-col gap-10">
        <header className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Case Studies
          </h1>
        </header>

        <section aria-label="Case studies" className="flex flex-col gap-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            In-depth work
          </h2>

          <ul className="flex list-none flex-col gap-6 p-0">
            {caseStudies.map(({ href, icon: Icon, title, meta, description }) => (
              <li key={href}>
                <Link href={href} className="block group">
                  <article className="rounded-lg border border-border bg-muted/30 p-6 transition-colors group-hover:bg-muted/50">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <Icon
                        className="size-5 shrink-0 text-muted-foreground"
                        aria-hidden
                      />
                      <h3 className="text-lg font-semibold leading-snug transition-colors group-hover:underline underline-offset-4">
                        {title}
                      </h3>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{meta}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
