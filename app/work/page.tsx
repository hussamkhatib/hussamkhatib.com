import type { Metadata } from "next"
import Link from "next/link"

import { workProjects } from "@/lib/work-projects"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work: sales operations systems, premium event landing pages, and CommissionPro.",
}

function LoomEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="mt-4 overflow-hidden rounded-md border border-border">
      <div className="relative aspect-video w-full bg-muted">
        <iframe
          src={src}
          title={title}
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  )
}

export default function WorkPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mx-5 mt-24 flex w-full max-w-2xl flex-col gap-10">
        <header className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Work
          </h1>
          <p className="text-muted-foreground max-w-prose leading-relaxed text-sm">
            A snapshot of selected projects — operations, premium events, and product.
          </p>
        </header>

        <section
          aria-label="Selected work"
          className="flex flex-col gap-8"
        >
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Selected work
          </h2>

          <ul className="flex list-none flex-col gap-6 p-0">
            {workProjects.map((project) => {
              const Icon = project.icon
              return (
              <li key={project.id}>
                <article className="rounded-lg border border-border bg-muted/30 p-6">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <Icon
                      className="size-5 shrink-0 text-muted-foreground"
                      aria-hidden
                    />
                    <h3 className="text-lg font-semibold leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  {project.meta ? (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {project.meta}
                    </p>
                  ) : null}

                  <blockquote className="mt-4 border-l-2 border-border pl-4 text-sm leading-relaxed text-foreground">
                    {project.thesis}
                  </blockquote>

                  {project.paragraphs?.length ? (
                    <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
                      {project.paragraphs.map((p) => (
                        <p key={`${project.id}:${p}`}>{p}</p>
                      ))}
                    </div>
                  ) : null}

                  {project.bullets?.length ? (
                    <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                      {project.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}

                  {project.externalLink ? (
                    <p className="mt-4 text-sm">
                      <Link
                        href={project.externalLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline underline-offset-4 hover:text-foreground"
                      >
                        {project.externalLink.label}
                      </Link>
                    </p>
                  ) : null}

                  {project.loomEmbedUrl ? (
                    <LoomEmbed
                      src={project.loomEmbedUrl}
                      title="CommissionPro product overview"
                    />
                  ) : null}
                </article>
              </li>
              )
            })}
          </ul>
        </section>
      </div>
    </div>
  )
}
