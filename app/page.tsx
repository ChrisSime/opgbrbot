import { ContactCta } from "@/components/sections/contact-cta";
import { BusaStory } from "@/components/sections/busa-story";
import { EditorialHero } from "@/components/sections/editorial-hero";
import { FarmStory } from "@/components/sections/farm-story";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { GarlicStory } from "@/components/sections/garlic-story";

export default function Home() {
  return (
    <main>
      <EditorialHero />
      <FeaturedProducts />
      <FarmStory />
      <BusaStory />
      <GarlicStory />
      <ContactCta />
    </main>
  );
}
