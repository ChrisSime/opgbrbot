import Image from "next/image";
import Link from "next/link";

export function GarlicStory() {
  return (
    <section id="cesnjak" className="section-space">
      <div className="site-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative min-h-[26rem] overflow-hidden rounded-[2.2rem] bg-[color:var(--surface-strong)]">
          <Image
            src="/images/gallery/cesnjak-14.jpeg"
            alt="Redovi ličkog podkapelskog češnjaka u polju pod ličkim brdima."
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 46vw"
          />
        </div>

        <div className="space-y-6">
          <p className="eyebrow">Lički podkapelski češnjak</p>
          <h2 className="section-title">
            Sačuvano sjeme, oštra klima i okus koji nosi Liku.
          </h2>
          <p className="section-copy">
            OPG Brbot u Lipicama uzgaja autentični lički podkapelski češnjak iz
            tradicijskog sjemena koje je Damir Brbot sačuvao. Sjeme
            se prenosi kroz obitelj i prilagodilo se specifičnim, oštrim uvjetima
            ličkog kraja.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] bg-[color:var(--surface-strong)] p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                Tradicijsko sjeme
              </p>
              <p className="mt-3 text-base leading-7 text-[color:var(--foreground)]">
                Generacijama se čuva, sadi i obnavlja unutar obitelji.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-[color:var(--surface-strong)] p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                Prepoznatljiv karakter
              </p>
              <p className="mt-3 text-base leading-7 text-[color:var(--foreground)]">
                Intenzivan miris i okus čine ga vodećim proizvodom gospodarstva.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-[color:var(--surface-strong)] p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                Zaštićena sorta
              </p>
              <p className="mt-3 text-base leading-7 text-[color:var(--foreground)]">
                Lički podkapelski češnjak zaštićen je kao izvorna, čuvana
                tradicijska sorta.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-[color:var(--surface-strong)] p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                Lika Quality
              </p>
              <p className="mt-3 text-base leading-7 text-[color:var(--foreground)]">
                Lički podkapelski češnjak nosi regionalnu oznaku Lika Quality.
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-[color:var(--border-strong)] bg-[color:var(--surface)] p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
              Češnjak u prehrani
            </p>
            <p className="mt-3 text-base leading-7 text-[color:var(--muted-strong)]">
              U narodnoj se predaji češnjak često naziva prirodnim antibiotikom.
              Za nas je prije svega snažan, prirodan sastojak u kuhinji. Ne
              zamjenjuje antibiotike ni liječnički savjet.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="https://www.lika-destination.hr/lika-quality/proizvod/opg-brbot"
                className="button-secondary"
                target="_blank"
                rel="noreferrer"
              >
                OPG Brbot i Lika Quality
              </Link>
              <Link
                href="https://www.plivazdravlje.hr/centar/prehrana/19/namirnica/3/Cesnjak.html"
                className="button-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Češnjak i zdravlje
              </Link>
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-[color:var(--accent-soft)] p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent-ink)]">
              Prilog o sjemenu
            </p>
            <p className="mt-3 text-base leading-7 text-[color:var(--foreground)]">
              U video prilogu poslušajte priču o sjemenu češnjaka OPG-a Brbot,
              od 2:30 do 3:32 minute.
            </p>
            <Link
              href="https://www.facebook.com/watch/?v=1287007335392213&t=150"
              className="mt-5 inline-flex rounded-full bg-[color:var(--accent-ink)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[color:var(--foreground)]"
              target="_blank"
              rel="noreferrer"
            >
              Pogledajte video prilog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
