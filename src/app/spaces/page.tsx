import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Spaces",
  description:
    "Dining and co-working inside Louie & Luna’s — a Belle Époque café bungalow in New Delhi.",
};

export default function SpacesPage() {
  return (
    <div className="pb-24">
      <section className="mx-auto max-w-6xl px-5 pt-14 md:px-8 md:pt-20">
        <p className="text-xs font-medium tracking-[0.2em] text-brass uppercase">
          Spaces
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl text-espresso md:text-6xl">
          One historic envelope. Two ways to linger.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-espresso/75 md:text-lg">
          Walk in and you notice ornate curves, parchment walls, marble, dark wood,
          beautiful lamps. Then you notice the people: someone on a laptop, someone
          reading, someone on a first date, someone three hours into the afternoon.
        </p>
        <div className="ornament-rule mt-10" />
      </section>

      <section className="mx-auto mt-14 grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-center md:px-8">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/images/dining-nook.png"
            alt="Dining nook with marble table for two"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl text-espresso md:text-4xl">
            The dining room
          </h2>
          <p className="mt-4 text-base leading-relaxed text-espresso/75">
            Intimate tables under warm light. Evening chandeliers. Plates that don’t
            perform — they accompany the coffee conversation. Come for breakfast
            toast, stay through a late dessert and another fruit espresso.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-espresso/70">
            <li>Tables for two and four; a longer communal for evenings</li>
            <li>Warm sunlight by day, intimate lamps after dusk</li>
            <li>Ideal for slow meals, dates, and catch-ups</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-center md:px-8">
        <div className="order-2 md:order-1">
          <h2 className="font-display text-3xl text-espresso md:text-4xl">
            The co-working corner
          </h2>
          <p className="mt-4 text-base leading-relaxed text-espresso/75">
            Not a glass office with hot desks — a quiet historic room with brass lamps,
            long wood tables, and the soft murmur of the café. Stay as long as the
            coffee list holds your curiosity.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-espresso/70">
            <li>Power points at the long tables</li>
            <li>Wi‑Fi steady enough for real work</li>
            <li>No desk booking — arrive, settle, order another cup</li>
          </ul>
        </div>
        <div className="relative order-1 aspect-[4/3] overflow-hidden md:order-2">
          <Image
            src="/images/coworking-corner.png"
            alt="Co-working corner with wood table and brass lamp"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-5 md:px-8">
        <div className="bg-espresso px-6 py-12 text-cream md:px-12">
          <h2 className="font-display text-3xl md:text-4xl">
            Somewhere around the room: Louie and Luna
          </h2>
          <p className="mt-4 max-w-2xl text-cream/70">
            Their presence is subtle — a silhouette on a chair, a nap on the sill —
            enough to make the grand room feel personal.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<Link href="/menu" />}
              className="rounded-md bg-brass px-4 text-espresso hover:bg-brass-soft"
            >
              See the coffee list
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/visit" />}
              variant="outline"
              className="rounded-md border-cream/30 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
            >
              Plan your visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
