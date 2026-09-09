import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border-soft)] bg-[color:var(--surface-strong)]">
      <div className="site-shell grid gap-10 py-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
            BRBOT / OPG Brbot
          </p>
          <h2 className="max-w-lg font-[family:var(--font-display)] text-3xl leading-tight text-[color:var(--foreground)]">
            Domaći proizvodi iz Lipica, oblikovani klimom Like i obiteljskim
            kontinuitetom.
          </h2>
        </div>
        <div className="space-y-3 text-sm text-[color:var(--muted-strong)] md:text-right">
          <p>Lipice 63, 53260 Brinje</p>
          <p>
            <a href="tel:+38598947015" className="hover:text-[color:var(--foreground)]">
              +385 98 947 015
            </a>
            {" · "}
            <a
              href="mailto:brbotdam@gmail.com"
              className="hover:text-[color:var(--foreground)]"
            >
              brbotdam@gmail.com
            </a>
          </p>
          <div className="flex flex-wrap justify-start gap-4 md:justify-end">
            <Link href="#proizvodi" className="hover:text-[color:var(--foreground)]">
              Proizvodi
            </Link>
            <Link href="#prica" className="hover:text-[color:var(--foreground)]">
              Priča gospodarstva
            </Link>
            <Link href="#kontakt" className="hover:text-[color:var(--foreground)]">
              Upit
            </Link>
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
            © BRBOT
          </p>
        </div>
      </div>
    </footer>
  );
}
