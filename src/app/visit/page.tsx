"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

export default function VisitPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const party = String(data.get("party") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Table inquiry — ${name || "Guest"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nParty size: ${party}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="pb-24">
      <section className="mx-auto max-w-6xl px-5 pt-14 md:px-8 md:pt-20">
        <p className="text-xs font-medium tracking-[0.2em] text-brass uppercase">
          Visit
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl text-espresso md:text-6xl">
          A leafy Lodhi Estate bungalow in New Delhi
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-espresso/75 md:text-lg">
          Parisian interiors inside an old Delhi setting — a short walk from Jor Bagh,
          quiet enough to feel found.
        </p>
        <div className="ornament-rule mt-10" />
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-5 md:px-8">
        <div className="relative aspect-[21/9] overflow-hidden md:aspect-[2.4/1]">
          <Image
            src="/images/bungalow-exterior.png"
            alt="Cream Lodhi Estate bungalow café exterior with warm evening light"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-8">
        <div className="space-y-10">
          <div>
            <h2 className="font-display text-2xl text-espresso">Address</h2>
            <p className="mt-3 text-base leading-relaxed text-espresso/75">
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-espresso">Hours</h2>
            <ul className="mt-3 space-y-2 text-espresso/75">
              {site.hours.map((row) => (
                <li
                  key={row.day}
                  className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-6"
                >
                  <span>{row.day}</span>
                  <span className="text-espresso/90">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-espresso">Getting here</h2>
            <p className="mt-3 text-base leading-relaxed text-espresso/75">
              Metro: {site.metro}. Autos and cabs know Lodhi Estate Lane — look for the
              cream bungalow with brass lamps in the windows.
            </p>
            <p className="mt-4 text-sm text-espresso/70">
              <a
                className="text-brass underline-offset-2 hover:underline"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
              <span className="mx-2 text-espresso/40">·</span>
              <a className="hover:text-espresso" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                {site.phone}
              </a>
            </p>
          </div>
          <div>
            <Button
              nativeButton={false}
              render={
                <a href={`mailto:${site.email}?subject=${encodeURIComponent("Table inquiry")}`} />
              }
              className="rounded-md bg-brass px-4 text-espresso hover:bg-brass-soft"
            >
              Inquire for a table
            </Button>
          </div>
        </div>

        <div id="inquire" className="scroll-mt-28 bg-cream/70 p-6 md:p-8">
          <h2 className="font-display text-2xl text-espresso">
            Inquire for a table
          </h2>
          <p className="mt-2 text-sm text-espresso/65">
            No online booking — send a note and we’ll reply by email. This opens your
            mail app with the details filled in.
          </p>

          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="party">Party size</Label>
              <Input id="party" name="party" placeholder="e.g. 2" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Preferred day, time, dining or co-working…"
              />
            </div>
            <Button
              type="submit"
              className="rounded-md bg-espresso px-4 text-cream hover:bg-espresso-soft"
            >
              Open email inquiry
            </Button>
            {sent ? (
              <p className="text-sm text-espresso/65" role="status">
                If your mail app didn’t open, write us at {site.email}.
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </div>
  );
}
