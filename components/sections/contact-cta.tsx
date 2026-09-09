import { ContactForm } from "@/components/ui/contact-form";

export function ContactCta() {
  return (
    <section id="kontakt" className="section-space pt-8">
      <div className="site-shell">
        <div className="grid gap-8 rounded-[2.4rem] bg-[color:var(--surface-inverse)] px-6 py-8 text-[color:var(--surface)] shadow-[var(--shadow-soft)] sm:px-8 sm:py-10 lg:grid-cols-[1fr_0.8fr] lg:px-12 lg:py-14">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Kontaktni CTA
            </p>
            <h2 className="font-[family:var(--font-display)] text-4xl leading-[0.96] sm:text-5xl">
              Za aktualnu ponudu i sezonsku dostupnost pošaljite izravan upit.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-white/78">
              Najbrži put do informacija o količinama, dostupnosti i preuzimanju
              je izravni kontakt s gospodarstvom. Obrazac niže priprema poruku
              za slanje na službeni e-mail.
            </p>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              <a
                href="https://maps.google.com/?q=Lipice+63,+53260+Brinje"
                className="rounded-[1.5rem] bg-white/8 p-4 transition-colors hover:bg-white/12"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Adresa
                </p>
                <p className="mt-2 text-sm leading-6 text-white/88">
                  Lipice 63
                  <br />
                  53260 Brinje
                </p>
              </a>
              <a
                href="tel:+38598947015"
                className="rounded-[1.5rem] bg-white/8 p-4 transition-colors hover:bg-white/12"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Telefon
                </p>
                <p className="mt-2 text-sm leading-6 text-white/88">
                  +385 98 947 015
                </p>
              </a>
              <a
                href="mailto:brbotdam@gmail.com"
                className="rounded-[1.5rem] bg-white/8 p-4 transition-colors hover:bg-white/12"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  E-mail
                </p>
                <p className="mt-2 text-sm leading-6 text-white/88">
                  brbotdam@gmail.com
                </p>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-[1.8rem] bg-white/8 p-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.22em] text-white/60">
                Predloženi sadržaj upita
              </p>
              <ul className="space-y-2 text-sm leading-7 text-white/82">
                <li>Ime i prezime</li>
                <li>Proizvod koji vas zanima</li>
                <li>Okvirna količina</li>
                <li>Način kontakta koji vam odgovara</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
