"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  contact: string;
  product: string;
  quantity: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  contact: "",
  product: "",
  quantity: "",
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Upit s web stranice - ${formState.product || "OPG Brbot"}`
    );
    const body = encodeURIComponent(
      [
        `Ime i prezime: ${formState.name}`,
        `Kontakt: ${formState.contact}`,
        `Proizvod: ${formState.product || "Nije navedeno"}`,
        `Količina: ${formState.quantity || "Nije navedena"}`,
        "",
        "Poruka:",
        formState.message,
      ].join("\n")
    );

    window.location.href = `mailto:brbotdam@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-white/82">Ime i prezime</span>
          <input
            type="text"
            name="name"
            required
            value={formState.name}
            onChange={(event) =>
              setFormState((current) => ({ ...current, name: event.target.value }))
            }
            className="w-full rounded-[1rem] border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/42"
            placeholder="Vaše ime"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-white/82">Telefon ili e-mail</span>
          <input
            type="text"
            name="contact"
            required
            value={formState.contact}
            onChange={(event) =>
              setFormState((current) => ({ ...current, contact: event.target.value }))
            }
            className="w-full rounded-[1rem] border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/42"
            placeholder="Kako da vam se jave"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-[1fr_0.65fr]">
        <label className="space-y-2">
          <span className="text-sm text-white/82">Proizvod</span>
          <input
            type="text"
            name="product"
            value={formState.product}
            onChange={(event) =>
              setFormState((current) => ({ ...current, product: event.target.value }))
            }
            className="w-full rounded-[1rem] border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/42"
            placeholder="Češnjak, krumpir, šljiva..."
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-white/82">Količina</span>
          <input
            type="text"
            name="quantity"
            value={formState.quantity}
            onChange={(event) =>
              setFormState((current) => ({ ...current, quantity: event.target.value }))
            }
            className="w-full rounded-[1rem] border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/42"
            placeholder="Po želji"
          />
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm text-white/82">Poruka</span>
        <textarea
          name="message"
          required
          value={formState.message}
          onChange={(event) =>
            setFormState((current) => ({ ...current, message: event.target.value }))
          }
          className="min-h-36 w-full rounded-[1rem] border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/42"
          placeholder="Napišite što vas zanima."
        />
      </label>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          className="inline-flex w-fit items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--surface-inverse)] transition-transform hover:translate-y-[-1px]"
        >
          Pošalji upit e-mailom
        </button>
        <p className="text-xs leading-6 text-white/60">
          Klik na gumb otvara vaš e-mail klijent s pripremljenom porukom za
          `brbotdam@gmail.com`.
        </p>
      </div>
    </form>
  );
}
