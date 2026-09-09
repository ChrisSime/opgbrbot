import Image from "next/image";
import Link from "next/link";

export function EditorialHero() {
  return (
    <section className="site-shell grid gap-10 pb-18 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-14 lg:pb-24 lg:pt-12">
      <div className="space-y-8">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
            Izvorno iz Like
          </p>
          <h1 className="max-w-4xl font-[family:var(--font-display)] text-5xl leading-[0.94] tracking-[-0.03em] text-[color:var(--foreground)] sm:text-6xl lg:text-8xl">
            Sjeme koje se u obitelji čuva generacijama.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-[color:var(--muted-strong)] sm:text-xl">
            Na približno 700 metara nadmorske visine, u Lipicama pokraj Brinja,
            OPG Brbot ekološki uzgaja lički podkapelski češnjak, stare sorte
            povrća i ličku bušu.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="#proizvodi" className="button-primary">
            Pogledajte proizvode
          </Link>
          <Link href="#prica" className="button-secondary">
            Upoznajte gospodarstvo
          </Link>
        </div>

        <dl className="grid gap-4 border-t border-[color:var(--border-soft)] pt-6 sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
              Lokacija
            </dt>
            <dd className="mt-2 text-base text-[color:var(--foreground)]">
              Lipice, Brinje
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
              Nadmorska visina
            </dt>
            <dd className="mt-2 text-base text-[color:var(--foreground)]">
              Oko 700 m
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
              Smjer proizvodnje
            </dt>
            <dd className="mt-2 text-base text-[color:var(--foreground)]">
              Ekološki uzgoj
            </dd>
          </div>
        </dl>
      </div>

      <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr] lg:gap-5">
        <div className="relative min-h-[25rem] overflow-hidden rounded-[2rem] bg-[color:var(--surface-strong)] shadow-[var(--shadow-soft)] sm:min-h-[34rem]">
          <Image
            src="/images/hero/cesnjak-02.png"
            alt="Ruka drži glavicu ličkog podkapelskog češnjaka ispred polja u Lipicama."
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>
        <div className="grid gap-4 sm:grid-rows-[1fr_auto]">
          <div className="relative min-h-52 overflow-hidden rounded-[2rem] bg-[color:var(--surface-strong)]">
            <Image
              src="/images/gallery/cesnjak-13.jpeg"
              alt="Prikolica puna ubranog češnjaka u ličkom krajoliku."
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 24vw"
            />
          </div>
          <div className="rounded-[2rem] border border-[color:var(--border-soft)] bg-[color:var(--surface)] p-6">
            <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--muted)]">
              U fokusu
            </p>
            <p className="mt-4 font-[family:var(--font-display)] text-2xl leading-tight text-[color:var(--foreground)]">
              Lički podkapelski češnjak nosi središnje mjesto identiteta
              gospodarstva.
            </p>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted-strong)]">
              Ovdje je predstavljen kao vodeći proizvod, bez prikaza cijena i
              dostupnosti dok podaci ne budu potvrđeni.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
