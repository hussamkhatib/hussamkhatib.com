import type { Metadata } from "next"
import { SetterPerformanceTable } from "@/components/setter-performance-table"

export const metadata: Metadata = {
  title: "Sales Operations Build — Rizq Rise",
  description:
    "Six interconnected systems built for a high-ticket sales organization: booking automation, call recording routing, performance dashboards, and automated reporting.",
}

export default function RizqRiseCaseStudy() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mx-5 mt-24 flex w-full max-w-2xl flex-col gap-12">

        <header className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Case Study
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Sales Operations Build
          </h1>
          <p className="text-sm text-muted-foreground">
            Rizq Rise · High-ticket sales organization · 4 closers, 5 setters
          </p>
        </header>

        <section className="flex flex-col gap-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            The Situation
          </h2>
          <p className="text-sm leading-relaxed">
            The team was booking calls and closing deals. What they didn't have: any
            operational infrastructure underneath it.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Every booking field entered manually. Every call recording forwarded by
            hand. No leaderboards. No dashboards. Performance data lived in
            individual sheets no one was required to update on a schedule.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The setter manager had no way to see his team's numbers without messaging
            each person directly — which meant requesting information they should have
            been reporting automatically, every time he needed it.
          </p>
          <blockquote className="border-l-2 border-border pl-4 text-sm leading-relaxed">
            This wasn't just friction. It was a slow erosion of operational authority.
          </blockquote>
        </section>

        <section className="flex flex-col gap-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            What I Built
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Six systems, built to interlock — each one removing a manual step or
            creating visibility that didn't exist.
          </p>

          <div className="flex flex-col gap-3">
            <h3 className="text-base font-semibold">Booking Capture</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              When a setter books a call, five fields now auto-populate in the
              tracking sheet: name, email, appointment date, booking date, and lead
              source. The setter claims their name from a dropdown — they aren't
              identified in the booking system directly — and the rest writes itself.
              A Slack notification fires on every booking, and the setter's live
              counter increments for the day, feeding daily competition.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Before: all five fields filled manually, 2–3 minutes each. Roughly 20
              bookings a week across 5 setters.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-base font-semibold">Call Recording Router</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The team generates roughly 15 recordings a week — team meetings,
              coaching calls, closer sales calls. Each one now routes automatically to
              the correct Slack channel based on meeting type. Before, someone had to
              manually forward each one after it came in.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-base font-semibold">
              Closer Leaderboards — Weekly &amp; Monthly
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              An automated leaderboard pulls closer performance from the tracking
              sheet and posts to Slack — weekly on schedule, monthly on schedule.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Before, closers had no shared scoreboard. Now every Monday and the first
              of every month, the ranking is public to the whole team. That changes
              the culture of the floor — accountability without a manager having to
              manufacture it. This did not exist before I built it.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-base font-semibold">EOD &amp; EOW Setter Reports</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              An end-of-day summary posts automatically to the setter reporting
              channel. An end-of-week leaderboard posts to the wins channel, sorted
              by priority: clients closed → bookings → dials. The system identifies
              each setter's individual sheet by naming pattern — call setter vs. DM
              setter — and computes their metrics without manual input.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              These reports did not exist before.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-base font-semibold">Setter Performance Dashboard</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ten charts total — six for call setters (closed, booked, and dials
              across the current week and month), four for DM setters (no dials
              metric). Week-over-week and month-over-month comparison lines built in.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              One consolidated weekly performance table holds all five setters in a
              single tab with color coding: green if on target, red if significantly
              under, yellow in between.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Before this, the setter manager was messaging each setter individually
              to ask for their numbers. Now he opens one tab.
            </p>
            <SetterPerformanceTable />
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-base font-semibold">New Client Closed Capture</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Same logic as booking capture, applied to closes. Triggered from the
              closer side. Closers fill in a few fields manually at their convenience,
              guided by an end-of-day SOP.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Infrastructure
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Beyond the six systems: standardized and hardened the team's tracking
            spreadsheet. A silently miscategorized date field was corrupting monthly
            calculations — the numbers looked right until they didn't. Fixed it, and
            documented the template with clear instructions for year-on-year changes
            (month lengths, leap years) through 2027 and beyond. One canonical
            version the team can hand off without tribal knowledge.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Impact
          </h2>
          <p className="text-sm leading-relaxed">
            A high-ticket sales organization now has the operational infrastructure it
            should have had from the start — and the manager running the setter floor
            no longer has to ask his own team what's happening.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The leaderboards, dashboards, and reports didn't exist before. That's not
            time saved — it's capability created. The closer floor now has a public
            scoreboard. The setter manager has a single screen. The team has a record
            of every booking, every close, every call, logged automatically.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Conservative estimates on time returned:
          </p>
          <ul className="list-disc pl-5 text-sm leading-relaxed text-muted-foreground space-y-2">
            <li>~3.5 hours/month from booking entry alone</li>
            <li>~1.5 hours/month from call recording routing</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            What's Next
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A deduplication layer for call recording routing is designed but not yet
            implemented. When multiple team members attend the same call, the summary
            will route once instead of once per attendee. Scoped and ready to build.
          </p>
        </section>

      </div>
    </div>
  )
}
