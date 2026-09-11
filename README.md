# Louie & Luna’s

Marketing site for **Louie & Luna’s** — an Old-World Parisian café with Belle Époque interiors in Lodhi Estate, New Delhi. Dining, co-working, a coffee-forward menu (Classic, Louie’s, Luna’s, Seasonal), and two Persian cat mascots with an improbable origin story.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321).

Production:

```bash
npm run build
npm run start -- -p 4321 -H 0.0.0.0
```

## Pages

| Path | Purpose |
|------|---------|
| `/` | Brand-first landing |
| `/menu` | Coffee categories + full food menu |
| `/spaces` | Dining room & co-working |
| `/story` | Louie & Luna lore |
| `/visit` | Address, hours, table inquiry |

## Social / favicon

- Favicon: `public/icon.svg` (Louie + Luna mark) and `public/apple-icon.png`
- Open Graph image: `public/og.png` (1200×630)
- Set `NEXT_PUBLIC_SITE_URL` to your deployed origin so OG/Twitter absolute URLs resolve correctly (defaults to `https://louieandlunas.in`).

## Note

Address, phone, and email are fictional concept details for this project.
