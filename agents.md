# AGENTS.md

## Project overview

This repository contains the official website for OPG Brbot, a small family farm from Lipice near Brinje, Lika, Croatia.

The website must present OPG Brbot as a trustworthy, contemporary Croatian food brand rooted in family tradition, local production, preserved seed varieties, and the landscape of Lika.

Before writing marketing copy, changing product information, or making branding decisions, read:

* `docs/brand-context.md`

Never invent facts, prices, certifications, product availability, delivery methods, awards, dates, or contact information. If required information is missing, use a clearly marked placeholder or ask the user.

## Communication

* Communicate with the user in Croatian unless requested otherwise.
* Keep explanations clear and practical.
* Explain important technical decisions without unnecessary jargon.
* Before making substantial changes, briefly state what will be changed.
* When requirements are ambiguous and materially affect the result, ask for clarification.
* Do not ask unnecessary questions when a safe and reasonable implementation is possible.

## Project goals

Build a fast, accessible, mobile-first website that:

* presents OPG Brbot and its family story;
* highlights Lički podkapelski češnjak as the flagship product;
* presents potatoes, meat, plums, rakija, jam, and other available products;
* communicates origin, authenticity, tradition, and quality;
* allows customers to contact the farm or send an order inquiry;
* can later be expanded with product management, online ordering, and payments.

The first version should remain simple. Do not introduce authentication, a database, shopping cart, Stripe, or a complex admin panel unless explicitly requested.

## Technology

Use the existing project stack. The expected initial stack is:

* Next.js with App Router
* TypeScript
* Tailwind CSS
* React Server Components by default
* Vercel-compatible deployment

Do not add a new dependency when the same result can be achieved cleanly with the existing stack.

Before adding a package:

1. Confirm that it solves a real project requirement.
2. Check whether the project already contains an equivalent solution.
3. Prefer well-maintained packages with limited impact on bundle size.
4. Explain why the dependency is needed.

## Project structure

Prefer the following organization:

```text
src/
├── app/
│   ├── page.tsx
│   ├── proizvodi/
│   ├── o-nama/
│   └── kontakt/
├── components/
│   ├── layout/
│   ├── sections/
│   ├── products/
│   └── ui/
├── data/
├── lib/
└── types/

public/
├── images/
├── logo/
└── certificates/

docs/
└── brand-context.md
```

Keep page files focused on composition. Move reusable sections and interface elements into components.

## Design direction

Create a contemporary, premium website comparable to modern direct-to-consumer food brands and high-quality agricultural product websites.

The website should feel intentionally designed by a professional digital studio, not generated from a generic farm template.

Prioritize:

* strong visual hierarchy;
* editorial typography;
* generous whitespace;
* high-quality photography;
* intentional image cropping;
* large and confident headings;
* modern product presentation;
* subtle motion;
* polished responsive layouts;
* clear calls to action;
* a warm, authentic, domestic character.

Avoid:

* generic bright-green agricultural themes;
* excessive gradients;
* clip art and decorative farm icons;
* outdated WordPress-style layouts;
* crowded sections;
* excessive borders and shadows;
* repetitive card grids;
* unnecessary icons;
* decorative animations that harm usability;
* clichés such as fields, leaves, mountains, and tractors used without purpose.

Use photography as a major design element. Do not cover important parts of photographs with text.

## Brand direction

Treat `BRBOT` as the primary consumer-facing brand.

`OPG` may appear as a smaller descriptor. The visual identity should be capable of representing multiple product categories, not only garlic.

Suggested visual character:

* premium but approachable;
* natural but not rustic or old-fashioned;
* grounded, honest, and distinctly connected to Lika;
* restrained use of dark green, graphite, cream, earth tones, and a small red accent inspired by the Lička kapa.

Do not redesign or materially alter the logo unless explicitly requested.

## Content rules

All public-facing text must be written in natural Croatian.

Use short, confident sentences and specific facts. Avoid exaggerated promotional language such as:

* “najbolji na svijetu”;
* “100% ekološki”;
* “potpuno organski”;
* “certificirano ekološki”;
* “najkvalitetniji hrvatski proizvod”;

unless documentary proof is available and the user explicitly confirms the wording.

It is acceptable to state that the farm is in a transitional period toward ecological production if that remains factually current. Do not present transitional status as completed ecological certification.

Mention Lika Quality only for products confirmed to carry that label. Do not automatically apply the certification to every product.

Never fabricate testimonials, customer reviews, production quantities, nutritional information, awards, certifications, or history.

Use placeholders such as `[POTREBNA CIJENA]` only during development. Do not leave placeholders on a production page.

## Products

Product content should use structured data rather than being repeated directly inside page components.

A product should support fields such as:

```ts
type Product = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description?: string;
  image: string;
  gallery?: string[];
  price?: number;
  priceUnit?: string;
  available: boolean;
  featured?: boolean;
  certifications?: string[];
};
```

Do not assume a product is currently available.

When prices or availability are unknown, use a neutral inquiry action such as:

* “Pošalji upit”
* “Provjeri dostupnost”
* “Kontaktirajte nas”

Do not display fake prices.

## Pages and sections

The initial website should contain:

* Home
* Products
* About
* Contact

The homepage may contain:

1. Header
2. Editorial hero
3. Featured products
4. Flagship garlic story
5. Family farm story
6. Origin and production principles
7. Lika Quality section
8. Gallery
9. Contact or order inquiry
10. Footer

Avoid placing every section inside an identical card container. Use varied editorial layouts and visual rhythm.

## Components

* Components should have one clear responsibility.
* Prefer reusable components when the same pattern appears more than once.
* Avoid unnecessary abstraction for elements used only once.
* Use semantic HTML.
* Keep client components limited to functionality requiring browser state or events.
* Do not add `"use client"` to entire pages without a specific reason.
* Use Next.js image optimization for website photographs.
* Provide meaningful alternative text for informative images.
* Use empty alternative text for purely decorative images.

## TypeScript and code quality

* Use TypeScript strictly.
* Do not use `any` unless unavoidable and explained.
* Prefer explicit, readable names.
* Use English for variable, function, component, and file names.
* Use Croatian for customer-facing content.
* Remove unused imports and dead code.
* Do not duplicate constants or product information.
* Avoid oversized components.
* Preserve established conventions in the repository.
* Do not reformat unrelated files.

## Responsive behavior

Design mobile-first.

Every implemented page must be checked at approximately:

* 375 px mobile width;
* 768 px tablet width;
* 1440 px desktop width.

Ensure:

* no horizontal scrolling;
* readable typography;
* comfortable touch targets;
* sensible image cropping;
* navigation that works without precision tapping;
* forms that remain usable on mobile;
* no important content visible only on hover.

## Accessibility

* Use semantic landmarks such as `header`, `nav`, `main`, `section`, and `footer`.
* Maintain visible keyboard focus.
* Ensure sufficient color contrast.
* Associate every form field with a label.
* Do not communicate information using color alone.
* Respect reduced-motion preferences.
* Use buttons for actions and links for navigation.
* Ensure interactive controls are usable with a keyboard.

## SEO

Every public page should have:

* a unique Croatian title;
* a useful meta description;
* a canonical URL when the production domain is known;
* appropriate Open Graph metadata;
* meaningful heading hierarchy;
* indexable text content.

Use structured data only when the represented facts are verified.

Do not invent ratings, prices, availability, addresses, or business data for structured markup.

When the production domain is known, include:

* sitemap;
* robots configuration;
* favicon and application icons;
* Open Graph image;
* local business or organization schema where factually appropriate.

## Performance

* Prefer Server Components.
* Avoid unnecessary JavaScript.
* Optimize and appropriately size images.
* Prevent layout shifts by defining image dimensions or aspect ratios.
* Lazy-load content below the fold when appropriate.
* Avoid autoplay video.
* Keep animations lightweight.
* Do not sacrifice readability or accessibility for animation.

## Forms and privacy

For initial order inquiries, collect only information necessary to respond.

Typical fields:

* name;
* phone or email;
* requested product;
* quantity;
* message.

Do not store personal information without a defined requirement and privacy explanation.

Add spam protection before exposing a production contact form.

Never commit credentials, API keys, access tokens, passwords, or `.env` files.

Provide required environment variables through `.env.example` using placeholder values.

## Git and change safety

* Inspect the existing code before editing.
* Preserve user changes.
* Do not delete or replace unrelated work.
* Keep changes focused on the requested task.
* Do not use destructive Git commands.
* Do not commit generated secrets or local configuration.
* Summarize changed files after completing the task.

## Verification

Before declaring work complete:

1. Review the changed files.
2. Run the relevant lint command.
3. Run TypeScript checks if configured.
4. Run available tests.
5. Run a production build for substantial changes.
6. Check that no secrets or development placeholders were introduced.
7. Check responsive behavior for user-facing layout changes.
8. Report any checks that could not be run.

Typical commands:

```bash
npm run lint
npm run build
```

If the repository defines tests or a separate type-check command, run those as well.

Do not claim that a command passed unless it was actually executed successfully.

## Definition of done

A task is complete when:

* the requested behavior is implemented;
* the result follows the brand and design direction;
* Croatian content is grammatically correct;
* mobile and desktop layouts are usable;
* accessibility basics are respected;
* relevant checks pass;
* no unverified business claims were introduced;
* no secrets were committed;
* the final response clearly summarizes the work and any remaining limitations.
