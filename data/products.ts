export type Product = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  image: string;
  alt: string;
  inquiryLabel: string;
  available: boolean;
  featured?: boolean;
  certifications?: string[];
};

export const products: Product[] = [
  {
    slug: "licki-podkapelski-cesnjak",
    name: "Lički podkapelski češnjak",
    category: "Istaknuti proizvod",
    shortDescription:
      "Autentični lički češnjak iz obiteljskog sjemena koje je Damir Brbot sačuvao i koje se prenosi generacijama.",
    image: "/images/products/cesnjak-01.png",
    alt: "Glavice ličkog podkapelskog češnjaka u toplom prirodnom svjetlu.",
    inquiryLabel: "Pošalji upit",
    available: false,
    featured: true,
    certifications: ["Lika Quality"],
  },
  {
    slug: "tradicijski-krumpir",
    name: "Tradicijske sorte krumpira",
    category: "Sezonska ponuda",
    shortDescription:
      "Krumpir iz ličkog podneblja dio je mješovite proizvodnje gospodarstva i prati ritam sezone.",
    image: "/images/products/licki-krumpir-01.jpg",
    alt: "Svježe izvađen lički krumpir na zemlji.",
    inquiryLabel: "Provjeri dostupnost",
    available: false,
    featured: true,
  },
  {
    slug: "sljiva-i-prerade",
    name: "Šljiva i prerade",
    category: "Voće i prerađevine",
    shortDescription:
      "Na gospodarstvu se uzgaja lička bistrica, a od šljive nastaju rakija i džem prema sezonskoj raspoloživosti.",
    image: "/images/products/sljiva-licka-bistrica-01.jpg",
    alt: "Plodovi šljive lička bistrica u krupnom kadru.",
    inquiryLabel: "Kontaktirajte nas",
    available: false,
    featured: true,
  },
];
