import Image from "next/image";
import Link from "next/link";

export function BusaStory() {
  return (
    <section id="busa" className="section-space bg-[color:var(--surface-inverse)] text-[color:var(--surface)]">
      <div className="site-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr] lg:grid-cols-1">
          <div className="relative min-h-[25rem] overflow-hidden rounded-[2.2rem] bg-black/10">
            <Image
              src="/images/gallery/busa-02.jpeg"
              alt="Bik ličke buše na zelenom pašnjaku gospodarstva."
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 58vw, 42vw"
            />
          </div>
          <div className="relative min-h-56 overflow-hidden rounded-[2rem] border border-white/15 bg-black/10">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Lička buša na pašnjaku gospodarstva"
            >
              <source src="/images/gallery/busa-01.mp4" type="video/mp4" />
            </video>
            <p className="absolute bottom-4 left-4 rounded-full bg-black/45 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/85">
              Na pašnjaku
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-white/60">
            Lička buša
          </p>
          <h2 className="font-[family:var(--font-display)] text-4xl leading-[0.96] sm:text-5xl">
            Autohtona pasmina na domaćem planinskom pašnjaku.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-white/75">
            Buša je hrvatska izvorna pasmina goveda. Na gospodarstvu je uzgajamo
            na približno 700 metara nadmorske visine, u krajoliku u kojem se
            prirodno snalazi i u kojem pašnjak određuje svakodnevni ritam stada.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/15 bg-white/8 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                Pašnjački uzgoj
              </p>
              <p className="mt-3 leading-7 text-white/80">
                Krave pasu trave, brste grmlje i divlje voće, uz vlastite žitarice
                gospodarstva.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/15 bg-white/8 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                Uz majku
              </p>
              <p className="mt-3 leading-7 text-white/80">
                Telad ostaje uz krave najmanje prvih pet mjeseci života.
              </p>
            </div>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/65">
            Naš je cilj okupiti stare sorte povrća i očuvati ličku bušu kao živu
            poveznicu između obiteljskog gospodarstva, pašnjaka i ličke baštine.
          </p>
          <Link
            href="https://banka-gena.mps.hr/hrvatske-izvorne-i-ugrozene-pasmine/busa/"
            className="inline-flex rounded-full border border-white/25 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[color:var(--surface-inverse)]"
            target="_blank"
            rel="noreferrer"
          >
            Više o pasmini buša
          </Link>
        </div>
      </div>
    </section>
  );
}
