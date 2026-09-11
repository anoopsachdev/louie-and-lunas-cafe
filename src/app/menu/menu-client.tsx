"use client";

import { useState } from "react";
import { coffeeCategories, diningItems } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

export default function MenuPage() {
  const [active, setActive] = useState(coffeeCategories[0].id);
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
          Classic foundations, Louie’s darker cups, Luna’s lighter ones, fruit experiments,
          and seasonal rotations that change with Delhi’s weather. Food keeps you grounded —
          coffee keeps you coming back.
        </p>
        <div className="ornament-rule mt-10" />
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-10 md:px-8">
        <div
          role="tablist"
          aria-label="Coffee categories"
          className="flex gap-2 overflow-x-auto pb-2"
        >
          {coffeeCategories.map((cat) => {
            const selected = cat.id === active;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(cat.id)}
                className={cn(
                  "shrink-0 rounded-md border px-4 py-2 text-sm transition-colors duration-300",
                  selected
                    ? "border-espresso bg-espresso text-cream"
                    : "border-espresso/15 bg-cream/60 text-espresso/75 hover:border-espresso/30 hover:text-espresso"
                )}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        <div
          key={category.id}
          role="tabpanel"
          className="reveal-up mt-10"
        >
          <h2 className="font-display text-3xl text-espresso md:text-4xl">
            {category.title}
          </h2>
          <p className="mt-2 max-w-xl text-espresso/65">{category.subtitle}</p>

          <ul className="mt-8 divide-y divide-espresso/10">
            {category.items.map((item) => (
              <li
                key={item.name}
                className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline"
              >
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-2xl text-espresso">
                      {item.name}
                    </h3>
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

      <section className="mx-auto mt-20 max-w-6xl px-5 md:px-8">
        <div className="border-t border-espresso/10 pt-16">
          <p className="text-xs font-medium tracking-[0.2em] text-brass uppercase">
            From the kitchen
          </p>
          <h2 className="mt-3 font-display text-3xl text-espresso md:text-4xl">
            Simple plates for long stays
          </h2>
          <p className="mt-3 max-w-xl text-espresso/65">
            Not eight $900-looking dishes — just warm, careful food that belongs with
            coffee and conversation.
          </p>
          <ul className="mt-8 divide-y divide-espresso/10">
            {diningItems.map((item) => (
              <li
                key={item.name}
                className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline"
              >
                <div>
                  <h3 className="font-display text-2xl text-espresso">{item.name}</h3>
                  <p className="mt-1 max-w-2xl text-sm text-espresso/65">
                    {item.description}
                  </p>
                </div>
                <p className="text-sm font-medium text-espresso/80">{item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
