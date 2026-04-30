import Link from "next/link"

const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  // { label: "About", href: "/about" },
]

export function Header() {
  return (
    <header className="w-full max-w-4xl mx-auto p-4 bg-background">

      <nav className="w-full">
        <ul className="flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  )
}
