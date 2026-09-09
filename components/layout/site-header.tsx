import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "#proizvodi", label: "Proizvodi" },
  { href: "#prica", label: "Priča" },
  { href: "#busa", label: "Buša" },
  { href: "#cesnjak", label: "Češnjak" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border-soft)] bg-[color:color-mix(in_oklab,var(--surface)_84%,transparent)] backdrop-blur-xl">
      <div className="site-shell flex min-h-18 items-center justify-between gap-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-4 rounded-full pr-3 transition-transform hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
          aria-label="BRBOT naslovnica"
        >
          <div className="relative h-16 w-16 overflow-hidden rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface-strong)] shadow-[var(--shadow-soft)]">
            <Image
              src="/logo/logo-01.png"
              alt=""
              fill
              className="object-contain p-1"
              sizes="64px"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-[family:var(--font-display)] text-2xl leading-none tracking-[0.14em] text-[color:var(--foreground)]">
              BRBOT
            </span>
            <span className="text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--muted-strong)]">
              OPG iz Lipica, Lika
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-[color:var(--muted-strong)] md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-1 py-2 transition-colors hover:text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#kontakt"
          className="hidden rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface-strong)] px-5 py-3 text-sm font-medium text-[color:var(--foreground)] transition-colors hover:bg-[color:var(--surface-inverse)] hover:text-[color:var(--surface)] md:inline-flex"
        >
          Upit za ponudu
        </Link>

        <details className="group md:hidden">
          <summary className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface-strong)] text-[color:var(--foreground)] marker:content-none">
            <span className="sr-only">Otvori navigaciju</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span className="h-px w-full bg-current transition-transform group-open:translate-y-[7px] group-open:rotate-45" />
              <span className="h-px w-full bg-current transition-opacity group-open:opacity-0" />
              <span className="h-px w-full bg-current transition-transform group-open:-translate-y-[7px] group-open:-rotate-45" />
            </span>
          </summary>
          <nav className="absolute inset-x-4 top-[calc(100%+0.75rem)] rounded-[2rem] border border-[color:var(--border-strong)] bg-[color:var(--surface)] p-4 shadow-[var(--shadow-soft)]">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-base text-[color:var(--foreground)] transition-colors hover:bg-[color:var(--surface-strong)]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#kontakt"
                className="mt-2 rounded-2xl bg-[color:var(--foreground)] px-4 py-3 text-base text-[color:var(--surface)]"
              >
                Upit za ponudu
              </Link>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
