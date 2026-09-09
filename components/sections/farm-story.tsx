import Image from "next/image";

export function FarmStory() {
  return (
    <section id="prica" className="section-space">
      <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-4">
          <p className="eyebrow">Priča gospodarstva</p>
          <h2 className="section-title">
            Malo obiteljsko gospodarstvo čiji je identitet vezan uz sjeme,
            kontinuitet i ličku klimu.
          </h2>
          <p className="section-copy">
            OPG Brbot djeluje u Lipicama pokraj Brinja, u krajoliku koji određuje
            ritam rada, uzgoja i sezone. Mješovita proizvodnja spaja biljni i
            životinjski dio gospodarstva, a obiteljsko sjeme ostaje važan dio
            naslijeđa. U središtu priče je obitelj s osmero djece i rad koji se
            prenosi kroz svakodnevicu, a ne samo kroz riječi.
          </p>
        </div>

        <div className="grid gap-6">
          <article className="grid gap-6 rounded-[2rem] bg-[color:var(--surface-strong)] p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--muted)]">
                Obiteljski kontinuitet
              </p>
              <p className="text-lg leading-8 text-[color:var(--foreground)]">
                Damir Brbot sačuvao je ovu sortu češnjaka od nestanka. Sjeme se
                prenosi unutar obitelji i danas je temelj uzgoja ličkog
                podkapelskog češnjaka.
              </p>
              <p className="text-base leading-7 text-[color:var(--muted-strong)]">
                Godinama se prilagođavalo oštroj klimi kraja gdje se spaja kapela sa Velebitom. Taj
                odnos prema sjemenu temelj je načina na koji gospodarstvo radi i
                razvija se.
              </p>
            </div>
            <div className="relative min-h-72 overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/gallery/busa-05.jpeg"
                alt="Član obitelji OPG-a Brbot s teletom ličke buše na pašnjaku."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </article>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--surface)] p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Podrijetlo
              </p>
              <p className="mt-4 text-base leading-7 text-[color:var(--foreground)]">
                Lipice, općina Brinje, Lika, Hrvatska.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--surface)] p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Način proizvodnje
              </p>
              <p className="mt-4 text-base leading-7 text-[color:var(--foreground)]">
                Ekološki uzgoj koji povezuje povrće, voće, češnjak i stočarstvo.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--surface)] p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Fokus
              </p>
              <p className="mt-4 text-base leading-7 text-[color:var(--foreground)]">
                Domaći proizvodi, tradicijske sorte i transparentna komunikacija
                bez neprovjerenih tvrdnji.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
