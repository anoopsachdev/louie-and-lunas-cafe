import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How an Indian couple in their forties became Louie and Luna — two Persian cats and the soul of a New Delhi café.",
  openGraph: {
    title: "Our Story · Louie & Luna’s",
    description:
      "They were a couple. Then they were cats. The café in Lodhi Estate kept going.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story · Louie & Luna’s",
    description:
      "They were a couple. Then they were cats. The café in Lodhi Estate kept going.",
    images: ["/og.png"],
  },
};

export default function StoryPage() {
  return (
    <div className="pb-24">
      <section className="mx-auto max-w-6xl px-5 pt-14 md:px-8 md:pt-20">
        <p className="text-xs font-medium tracking-[0.2em] text-brass uppercase">
          Our story
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl text-espresso md:text-6xl">
          They were a couple. Then they were cats. The café kept going.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-espresso/75 md:text-lg">
          Louie and Luna were once an Indian couple in their forties who loved
          long conversations over coffee. One ordinary Delhi afternoon, they
          stayed too long in a café that felt older than the city around it —
          and somehow became two Persian cats: Louie, black as espresso; Luna,
          white as cream.
        </p>
        <div className="ornament-rule mt-10" />
      </section>

      <section className="mx-auto mt-14 grid max-w-6xl items-start gap-10 px-5 md:grid-cols-2 md:px-8">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src="/images/louie-portrait.png"
            alt="Louie, black Persian cat"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
        <div className="md:pt-8">
          <h2 className="font-display text-3xl text-espresso md:text-4xl">Louie</h2>
          <p className="mt-4 text-base leading-relaxed text-espresso/75">
            He prefers the darker corners near the wood bar, the richer cups,
            and people who don’t rush. Louie’s Coffees on the menu are named for
            that temperament — bold, deep, a little mysterious, never showy.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl items-start gap-10 px-5 md:grid-cols-2 md:px-8">
        <div className="order-2 md:order-1 md:pt-8">
          <h2 className="font-display text-3xl text-espresso md:text-4xl">Luna</h2>
          <p className="mt-4 text-base leading-relaxed text-espresso/75">
            She claims the sunlit windowsill and anything floral. Luna’s Coffees
            lean lighter — creamy, fragrant, gently fruity — the kind of cup that
            makes a first date feel inevitable.
          </p>
        </div>
        <div className="relative order-1 aspect-square overflow-hidden md:order-2">
          <Image
            src="/images/luna-portrait.png"
            alt="Luna, white Persian cat"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-5 md:px-8">
        <div className="max-w-3xl border-l-2 border-brass/60 bg-cream/40 py-8 pr-6 pl-6 md:pl-8">
          <h2 className="font-display text-3xl text-espresso">
            Why the architecture still matters
          </h2>
          <p className="mt-4 text-base leading-relaxed text-espresso/75">
            The café kept its Belle Époque bones — mouldings, marble, brass lamps,
            antique mirrors — as if the room itself refused to modernize. The cats
            made it warmer. Grand rooms alone can feel exclusive; soft, fluffy
            mascots and casual laptop culture pull the place back to earth.
          </p>
          <p className="mt-4 text-base leading-relaxed text-espresso/75">
            Nobody claims to understand the transformation. Guests just notice that
            somewhere between the chandelier and the fruit-coffee list, Louie and
            Luna are watching — little celebrities of Lodhi Estate.
          </p>
        </div>
        <Button
          nativeButton={false}
          render={<Link href="/visit" />}
          className="mt-10 rounded-md bg-espresso px-4 text-cream hover:bg-espresso-soft"
        >
          Find the bungalow
        </Button>
      </section>
    </div>
  );
}
