import Link from "next/link";
import { CatMark } from "@/components/cat-mark";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-espresso/10 bg-espresso text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <CatMark className="h-5 w-12 text-brass-soft" />
            <p className="font-display text-2xl">{site.name}</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            Grand mouldings, soft cats, and more coffees than you meant to try — in a
            leafy Lodhi Estate bungalow.
          </p>
          <p className="mt-5">
            <Link
              href="/visit#inquire"
              className="text-sm font-medium text-brass-soft underline-offset-4 hover:underline"
            >
              Inquire for a table
            </Link>
          </p>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-brass-soft uppercase">
            Find us
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream/80">
            {site.address.line1}
            <br />
            {site.address.line2}
          </p>
          <p className="mt-3 text-sm text-cream/60">{site.metro}</p>
          <p className="mt-3 text-sm text-cream/60">
            <a href={`mailto:${site.email}`} className="hover:text-cream">
              {site.email}
            </a>
            <br />
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-cream">
              {site.phone}
            </a>
          </p>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-brass-soft uppercase">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/visit#inquire" className="hover:text-cream">
                Inquire for a table
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-cream/45 md:px-8">
          © {new Date().getFullYear()} {site.name}. A fictional café concept for this
          project — come for the coffee list, stay for Louie and Luna.
        </p>
      </div>
    </footer>
  );
}
