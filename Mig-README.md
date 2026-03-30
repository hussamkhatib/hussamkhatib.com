# hussamkhatib.com — site reference (migration)

This document captures **colors, copy, links, and structure** from this repo so you can rebuild the site in **Next.js**, **Astro**, or another stack. **Arabic route content is intentionally omitted** (do not migrate that page’s text or data from here).

---

## Stack (current)

| Layer | Choice |
| --- | --- |
| Framework | [SvelteKit](https://kit.svelte.dev/) 2.x |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`), `tw-animate-css` |
| UI primitives | [bits-ui](https://bits-ui.com/) (Button, Tooltip) |
| Icons | `@lucide/svelte` |
| Deploy | `@sveltejs/adapter-vercel` → Vercel |
| Home page | Prerendered (`export const prerender = true` in `src/routes/+page.js`) |

Scripts: `pnpm dev`, `pnpm build`, `pnpm preview`, `pnpm check`, `pnpm test` (Playwright).

---

## Design tokens (source of truth: `src/app.css`)

The app imports **`../app.css`** from the root layout. The document root uses the **`:root`** block below (there is a `.dark` override in the same file; the layout does **not** add `class="dark"`, so **default** is `:root`).

### Core brand & surface (`:root`)

| Token | Value | Role |
| --- | --- | --- |
| `--background` | `#1c1c1c` | Page background |
| `--foreground` | `oklch(0.985 0.001 106.423)` | Main text |
| `--primary` | `#f3f26c` | Accent (name highlight, links, buttons) |
| `--primary-foreground` | `oklch(0.216 0.006 56.043)` | Text on primary surfaces |
| `--secondary` | `#6b7280` | Muted UI (e.g. footer) |
| `--secondary-foreground` | `oklch(0.985 0.001 106.423)` | |
| `--muted` | `oklch(0.268 0.007 34.298)` | |
| `--muted-foreground` | `oklch(0.709 0.01 56.259)` | Secondary text (e.g. “More updates…”) |
| `--card` | `rgba(30, 32, 40, 0.95)` | |
| `--border` | `oklch(1 0 0 / 10%)` | |
| `--input` | `oklch(1 0 0 / 15%)` | |
| `--ring` | `oklch(0.553 0.013 58.071)` | Focus ring |
| `--destructive` | `oklch(0.704 0.191 22.216)` | |

Charts / sidebar tokens are also defined (for shadcn-style completeness); use the same names if you port the theme.

### Tailwind v4 mapping

`@theme inline` in `app.css` exposes these as utilities such as `bg-background`, `text-foreground`, `text-primary`, `border-border`, etc.

### Base styles

- Global: `*` gets `border-border` and `outline-ring/50`; `body` uses `bg-background text-foreground`.

### Layout shell (`src/routes/+layout.svelte`)

- Outer: `min-h-screen flex flex-col p-8 box-border text-base leading-7`
- Main: `flex-1 flex flex-col w-full mx-auto box-border`
- Footer: `flex justify-between text-secondary text-xs py-3`

### Radius

`@theme inline` references `var(--radius)` for `--radius-sm` … `--radius-xl`. **`:root` does not define `--radius` in this repo**; when porting, set something like `0.5rem` or `0.625rem` on `:root` if you use those utilities.

---

## Legacy / unused CSS (`src/routes/styles.css`)

This file is **not imported** anywhere. It duplicates an older theme (light grays, `--color-theme-1: #f3f26c`, max-width `70ch`, Fira Mono for `pre`). **Safe to ignore for migration** unless you want historical reference; the live site uses `app.css` + Tailwind.

---

## English copy & data (home + chrome)

### `<title>` / identity

- **Document title:** `Hussam Khatib`
- **Footer name:** `Hussam Khatib`

### Hero (`src/routes/+page.svelte`)

- **H1:** `Hey, I'm ` + **Hussam** (accent `text-primary` on the name)
- **Body:** “I'm a Software Engineer,” then strikethrough line: “currently working at [ShipperCRM](https://shippercrm.com/)” (`target="_blank"`, `rel="noopener noreferrer"`)
- **Aside:** “More updates coming soon…” — `text-muted-foreground italic`
- **Primary actions:** outline link-style button → “View Arabic Progress” → `/arabic`; default button → “Contact Me” (no `href` or handler in the current codebase)

### Footer links

| Label | URL |
| --- | --- |
| Twitter / X | `https://twitter.com/hussamkhatib3` (shown as `@hussamkhatib3`, `text-primary`) |
| GitHub | `https://github.com/hussamkhatib` (`underline text-primary`) |

---

## Static assets

- `static/favicon.png` — referenced in `src/app.html` as `%sveltekit.assets%/favicon.png`
- `static/robots.txt` — `User-agent: *` / `Disallow:` (empty)

---

## UI components (for parity)

- **Button** (`src/lib/components/ui/button/`): [tailwind-variants](https://www.tailwind-variants.org/) `buttonVariants` with variants `default`, `destructive`, `outline`, `secondary`, `ghost`, `link` and sizes `default`, `sm`, `lg`, `icon`. Renders as `<a>` when `href` is set.
- **Tooltip** (`src/lib/components/ui/tooltip/`) — used on the Arabic page only.
- **Utilities** — `cn()` in `src/lib/utils.js` merges `clsx` + `tailwind-merge`.

---

## Routes (high level)

| Path | Note |
| --- | --- |
| `/` | English landing (content above) |
| `/arabic` | Separate page; **do not migrate content from this README** — see repo only if you still need that feature |

---

## Porting checklist

1. Copy **CSS variables** from `src/app.css` `:root` (and `@theme inline` names) into your new global CSS or theme provider.
2. Recreate **layout** spacing and footer structure from `+layout.svelte`.
3. Map **copy and URLs** from the “English copy & data” section.
4. Rebuild **Button** styles using the same variant tokens (`bg-primary`, `border`, etc.) or reuse shadcn/ui for your target framework.
5. Add **`--radius`** on `:root` if you use radius utilities.
6. Omit Arabic-specific strings and data unless you intentionally port that route from source.
