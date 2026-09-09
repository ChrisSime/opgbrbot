import Image from "next/image";
import Link from "next/link";

import { products } from "@/data/products";

export function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section id="proizvodi" className="section-space">
      <div className="site-shell space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="eyebrow">Istaknuti proizvodi</p>
          <h2 className="section-title">
            Ponuda oblikovana sezonom, tlom i onim što gospodarstvo zaista
            uzgaja.
          </h2>
          <p className="section-copy">
            Trenutna dostupnost, pakiranja i količine potvrđuju se kroz izravni
            upit. Stranica ovdje namjerno ne prikazuje neprovjerene cijene.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <article
              key={product.slug}
              className={`group overflow-hidden rounded-[2rem] border border-[color:var(--border-soft)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)] ${
                index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-[1.05fr_0.95fr]" : ""
              }`}
            >
              <div className="relative min-h-80 overflow-hidden bg-[color:var(--surface-strong)]">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes={
                    index === 0
                      ? "(max-width: 1024px) 100vw, 42vw"
                      : "(max-width: 1024px) 100vw, 28vw"
                  }
                />
              </div>
              <div className="flex flex-col justify-between gap-8 p-6 sm:p-8">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-[color:var(--border-soft)] px-3 py-1 text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
                      {product.category}
                    </span>
                    {product.certifications?.map((certification) => (
                      <span
                        key={certification}
                        className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[color:var(--accent-ink)]"
                      >
                        {certification}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-[family:var(--font-display)] text-3xl leading-tight text-[color:var(--foreground)]">
                    {product.name}
                  </h3>
                  <p className="text-base leading-7 text-[color:var(--muted-strong)]">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-[color:var(--border-soft)] pt-5">
                  <span className="text-sm text-[color:var(--muted)]">
                    Dostupnost na upit
                  </span>
                  <Link href="#kontakt" className="button-secondary">
                    {product.inquiryLabel}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
