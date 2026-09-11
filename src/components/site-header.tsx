"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CatMark } from "@/components/cat-mark";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHome = pathname === "/";
  const overHero = onHome && !scrolled;

  useEffect(() => {
    if (!onHome) {
      setScrolled(false);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  return (
    <header
      className={cn(
        "z-40 w-full transition-colors duration-300",
        onHome
          ? cn(
              "fixed inset-x-0 top-0",
              overHero
                ? "border-b border-transparent bg-transparent"
                : "border-b border-espresso/10 bg-cream/90 backdrop-blur-md"
            )
          : "sticky top-0 border-b border-espresso/10 bg-cream/90 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
        <Link
          href="/"
          className={cn(
            "group flex items-center gap-2.5",
            overHero ? "text-cream" : "text-espresso"
          )}
          onClick={() => setOpen(false)}
        >
          <CatMark
            className={cn(
              "h-5 w-12 opacity-90 transition group-hover:opacity-100",
              overHero ? "text-brass-soft" : "text-brass"
            )}
          />
          <span className="font-display text-xl tracking-tight md:text-2xl">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm tracking-wide transition",
                  overHero
                    ? active
                      ? "text-cream"
                      : "text-cream/70 hover:text-cream"
                    : active
                      ? "text-espresso"
                      : "text-espresso/65 hover:text-espresso"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Button
            nativeButton={false}
            render={<Link href="/visit" />}
            size="lg"
            className={cn(
              "ml-3 rounded-md px-4",
              overHero
                ? "border border-brass/40 bg-brass/90 text-espresso hover:bg-brass"
                : "bg-espresso text-cream hover:bg-espresso-soft"
            )}
          >
            Plan a visit
          </Button>
        </nav>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md border md:hidden",
            overHero
              ? "border-cream/25 text-cream"
              : "border-espresso/20 text-espresso"
          )}
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-4 flex-col gap-1">
            <span className="block h-px w-full bg-current" />
            <span className="block h-px w-full bg-current" />
            <span className="block h-px w-full bg-current" />
          </div>
        </button>
      </div>

      {open ? (
        <div
          className={cn(
            "border-t px-5 py-4 backdrop-blur-md md:hidden",
            overHero
              ? "border-cream/15 bg-espresso/95"
              : "border-espresso/10 bg-cream/95"
          )}
        >
          <nav className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-2 py-3",
                  overHero ? "text-cream/90" : "text-espresso"
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
