import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { coffeeCategories, foodSections } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Classic coffee, Louie’s darker cups, Luna’s lighter blends, seasonal rotations, and a full café kitchen at Louie & Luna’s in New Delhi.",
  openGraph: {
    title: "Menu · Louie & Luna’s",
    description:
      "Classic, Louie’s, Luna’s, and seasonal coffees — plus breakfast, shareables, and desserts.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu · Louie & Luna’s",
    description:
      "Classic, Louie’s, Luna’s, and seasonal coffees — plus breakfast, shareables, and desserts.",
    images: ["/og.png"],
  },
};

type MenuPageProps = {
  searchParams: Promise<{ cat?: string }>;
};

export default async function MenuPage({ searchParams }: MenuPageProps) {
  const { cat } = await searchParams;
  const active =
    coffeeCategories.find((c) => c.id === cat)?.id ?? coffeeCategories[0].id;
  const category =
    coffeeCategories.find((c) => c.id === active) ?? coffeeCategories[0];

  return (
    <div className="pb-24">
      <section className="mx-auto max-w-6xl px-5 pt-14 md:px-8 md:pt-20">
        <p className="text-xs font-medium tracking-[0.2em] text-brass uppercase">
          Menu
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl text-espresso md:text-6xl">
          Wait… they have this many coffees?
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-espresso/75 md:text-lg">
          Classic cups, Louie’s darker ones, Luna’s lighter ones, and seasonal
          rotations that change with Delhi’s weather. Food is here so you can stay.
        </p>
        <div className="ornament-rule mt-10" />
      </section>

      <section className="mx-auto grid max-w-6xl items-end gap-10 px-5 pt-10 md:grid-cols-[1.2fr_0.8fr] md:px-8">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-brass uppercase">
            Coffee
          </p>
          <h2 className="mt-3 font-display text-3xl text-espresso md:text-4xl">
            Four lists. Plenty of reasons to come back.
          </h2>
        </div>
        <div className="relative hidden aspect-[4/3] overflow-hidden md:block">
          <Image
            src="/images/menu-still.png"
            alt="Espresso and pastry on a marble café table"
            fill
            className="object-cover"
            sizes="30vw"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-8 md:px-8">
        <div
          role="tablist"
          aria-label="Coffee categories"
          className="flex gap-2 overflow-x-auto pb-2"
        >
          {coffeeCategories.map((c) => {
            const selected = c.id === active;
            return (
              <Link
                key={c.id}
                href={`/menu?cat=${c.id}`}
                role="tab"
                aria-selected={selected}
                scroll={false}
                className={cn(
                  "shrink-0 rounded-md border px-4 py-2 text-sm transition-colors duration-300",
                  selected
                    ? "border-espresso bg-espresso text-cream"
                    : "border-espresso/15 bg-cream/60 text-espresso/75 hover:border-espresso/30 hover:text-espresso"
                )}
              >
                {c.title}
              </Link>
            );
          })}
        </div>

        <div role="tabpanel" className="reveal-up mt-10">
          <h3 className="font-display text-3xl text-espresso md:text-4xl">
            {category.title}
          </h3>
          <p className="mt-2 max-w-xl text-espresso/65">{category.subtitle}</p>

          <ul className="mt-8 divide-y divide-espresso/10">
            {category.items.map((item) => (
              <li
                key={item.name}
                className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline"
              >
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h4 className="font-display text-2xl text-espresso">
                      {item.name}
                    </h4>
                    {item.note ? (
                      <span className="text-xs tracking-wide text-brass uppercase">
                        {item.note}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-espresso/65">
                    {item.description}
                  </p>
                </div>
                <p className="text-sm font-medium text-espresso/80">{item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="food" className="mx-auto mt-20 max-w-6xl px-5 md:px-8">
        <div className="border-t border-espresso/10 pt-16">
          <p className="text-xs font-medium tracking-[0.2em] text-brass uppercase">
            Food
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl text-espresso md:text-5xl">
            Real plates for long stays
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-espresso/75 md:text-lg">
            Breakfast through dessert — café prices, nothing precious. Coffee is still
            why you come; food is why you don’t have to leave.
          </p>

          <div className="mt-14 space-y-16">
            {foodSections.map((section) => (
              <div key={section.id}>
                <h3 className="font-display text-3xl text-espresso md:text-4xl">
                  {section.title}
                </h3>
                <p className="mt-2 max-w-xl text-espresso/65">{section.subtitle}</p>
                <ul className="mt-8 divide-y divide-espresso/10">
                  {section.items.map((item) => (
                    <li
                      key={item.name}
                      className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline"
                    >
                      <div>
                        <h4 className="font-display text-2xl text-espresso">
                          {item.name}
                        </h4>
                        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-espresso/65">
                          {item.description}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-espresso/80">
                        {item.price}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
