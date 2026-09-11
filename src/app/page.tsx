import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-espresso">
        <Image
          src="/images/hero-interior.png"
          alt="Ornate Belle Époque café interior with warm lamps, dark wood, and parchment walls"
          fill
          priority
          className="hero-veil object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/55 to-espresso/25" />
        <div
          aria-hidden
          className="lamp-glow pointer-events-none absolute top-[18%] right-[22%] h-40 w-40 rounded-full bg-brass/30 blur-3xl"
        />
        <div
          aria-hidden
          className="lamp-glow pointer-events-none absolute top-[28%] left-[18%] h-28 w-28 rounded-full bg-brass-soft/25 blur-3xl"
          style={{ animationDelay: "1.4s" }}
        />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
          <p className="reveal-up font-display text-4xl leading-none text-cream sm:text-5xl md:text-7xl">
            {site.name}
          </p>
          <h1 className="reveal-up reveal-delay-1 mt-5 max-w-xl font-display text-2xl leading-snug text-cream/95 sm:text-3xl md:text-4xl">
            Feels like it’s been here a hundred years — and you just found it.
          </h1>
          <p className="reveal-up reveal-delay-2 mt-4 max-w-lg text-base leading-relaxed text-cream/75 md:text-lg">
            An Old-World Parisian café in New Delhi’s Lodhi Estate — warm light,
            long stays, and a coffee list that keeps growing.
          </p>
          <div className="reveal-up reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<Link href="/menu" />}
              size="lg"
              className="rounded-md bg-brass px-5 text-espresso hover:bg-brass-soft"
            >
              See the coffees
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/visit#inquire" />}
              size="lg"
              variant="outline"
              className="rounded-md border-cream/35 bg-transparent px-5 text-cream hover:bg-cream/10 hover:text-cream"
            >
              Inquire for a table
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.2em] text-brass uppercase">
            The feel
          </p>
          <h2 className="mt-3 font-display text-3xl text-espresso md:text-5xl">
            Grand bones. Soft cats. Casual days.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-espresso/75 md:text-lg">
            Ornate mouldings and antique mirrors, then someone on a laptop, a first date,
            a three-hour sit, and a ridiculous Louie or Luna coffee. The cats keep the
            place from getting too serious.
          </p>
        </div>
      </section>

      <section className="border-y border-espresso/10 bg-cream/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:gap-14 md:px-8 md:py-24">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-brass uppercase">
              Spaces
            </p>
            <h2 className="mt-3 font-display text-3xl text-espresso md:text-4xl">
              Dining and co-working under one chandelier.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-espresso/75">
              Same historic room, two rhythms: marble tables for meals, quiet wood corners
              for work that runs long.
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/spaces" />}
              className="mt-6 rounded-md bg-espresso px-4 text-cream hover:bg-espresso-soft"
            >
              See the rooms
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/dining-nook.png"
                alt="Intimate dining nook with marble table and warm evening lamps"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden sm:mt-8">
              <Image
                src="/images/coworking-corner.png"
                alt="Quiet co-working corner with dark wood table and brass lamp"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-brass uppercase">
              Coffee
            </p>
            <h2 className="mt-3 font-display text-3xl text-espresso md:text-5xl">
              Wait… they have this many coffees?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-espresso/75 md:text-lg">
              Classic. Louie’s darker cups. Luna’s lighter ones. Seasonal drinks that
              change with Delhi’s weather. The room brings you in — the list brings you back.
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/menu" />}
              className="mt-6 rounded-md bg-brass px-4 text-espresso hover:bg-brass-soft"
            >
              Read the menu
            </Button>
          </div>
          <div className="space-y-5">
            {[
              { title: "Louie’s", line: "Darker, richer, bolder — spice, smoke, deep fruit." },
              { title: "Luna’s", line: "Lighter, floral, creamy — bright fruit welcome." },
              { title: "Seasonal", line: "Rotating cups that follow Delhi’s weather." },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-brass/50 pl-5">
                <p className="font-display text-2xl text-espresso">{item.title}</p>
                <p className="mt-1 text-sm text-espresso/65">{item.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-espresso text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[0.85fr_1.15fr] md:px-8 md:py-24">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/louie-portrait.png"
                alt="Louie, a fluffy black Persian cat"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 20vw"
              />
            </div>
            <div className="relative aspect-square overflow-hidden self-end">
              <Image
                src="/images/luna-portrait.png"
                alt="Luna, a fluffy white Persian cat"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 20vw"
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-brass-soft uppercase">
              The house cats
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Louie and Luna, quietly famous here.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/70">
              You won’t find cats on every poster. Just a black Persian and a white one —
              and a story best told over coffee.
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/story" />}
              variant="outline"
              className="mt-6 rounded-md border-cream/30 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
            >
              Hear their story
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
