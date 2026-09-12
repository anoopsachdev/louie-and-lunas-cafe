# Louie & Luna's

Marketing site for a fictional Old-World Parisian café in New Delhi, built with Next.js and Tailwind CSS.

## What this is

A personal project by someone who spends too much time thinking about coffee menus. Louie & Luna's is not a real café — it is a made-up one in Lodhi Estate, New Delhi, with Belle Époque interiors, a dining room, a co-working corner, and two Persian cats named Louie and Luna.

The site exists as a design and front-end exercise: a brand-led landing page, a coffee list deep enough to be the actual hook, a real food menu, and a table-inquiry path that goes to email instead of a booking system.

Live: [louie-and-lunas-cafe.vercel.app](https://louie-and-lunas-cafe.vercel.app)

## Screenshots

Home

![Home hero](docs/home.png)

Menu — coffee categories and the food section

![Menu page](docs/menu.png)

Spaces

![Spaces page](docs/spaces.png)

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4
- shadcn/ui primitives
- Cormorant Garamond + Figtree via `next/font`

## Run locally

```bash
npm install
npm run dev
```

The dev server listens on [http://127.0.0.1:4321](http://127.0.0.1:4321) (port set in `package.json`).

Production build:

```bash
npm run build
npm run start -- -p 4321
```

## Pages

| Path | What's there |
|------|--------------|
| `/` | Hero, the feel of the room, spaces tease, coffee identity, the two cats |
| `/menu` | Coffee in four lists (Classic, Louie's, Luna's, Seasonal) plus the full food menu |
| `/spaces` | Dining room and co-working corner, with house rules |
| `/story` | How Louie and Luna came to run the place |
| `/visit` | Address, hours, Metro directions, and a table inquiry form |

## Design notes

**Palette.** Warm parchment and cream against espresso brown, with brass as the only accent. Defined as CSS custom properties in `src/app/globals.css` and exposed to Tailwind through `@theme inline`. No pure black, no pure white — everything is slightly aged.

**The cats are subtle.** Louie and Luna are the reason the place has a name, not the wallpaper. They appear as a small two-silhouette mark in the header and footer, once on the home page, and once properly on `/story`. The rest of the site is about the room and the coffee.

**Coffee is the identity.** The menu splits into four lists instead of one long one, and two of them are named after the cats: Louie's are the darker, richer, spice-and-smoke cups, Luna's are lighter, floral, and creamy. Categories switch via `?cat=` on a server component, so the tabs work without client-side JavaScript.

**Motion is restrained.** A slow lamp flicker in the hero, a staggered reveal on first paint, and nothing else. All of it is disabled under `prefers-reduced-motion`.

## Deploy

Deployed on Vercel from the `main` branch of this repo. Pushing to `main` triggers a production deploy; pull requests get preview deploys.

One environment variable matters:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Deployment origin used as `metadataBase` so Open Graph and Twitter card image URLs resolve absolutely. Falls back to `https://louieandlunas.in` (the café's fictional domain) when unset. |

Set it to the real origin in the Vercel project settings — for this deployment, `https://louie-and-lunas-cafe.vercel.app`.

Social assets live in `public/`: `og.png` (1200×630), `icon.svg`, and `apple-icon.png`.

## A note on the content

Everything here is fictional: the café, the address, the phone number, the email, the prices, and the cats' backstory. The inquiry form opens a prefilled email draft — there is no backend, no database, no accounts, and no reservation system behind it.
