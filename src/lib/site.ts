export const site = {
  name: "Louie & Luna’s",
  shortName: "Louie & Luna’s",
  tagline: "A Parisian café hiding in a New Delhi bungalow.",
  description:
    "Old-World Parisian café in Lodhi Estate, New Delhi — Belle Époque interiors, a long coffee list, dining, and quiet co-working. Home to Louie and Luna, two Persian cats with an improbable past.",
  email: "hello@louieandlunas.in",
  phone: "+91 11 4567 8901",
  address: {
    line1: "14A, Lodhi Estate Lane",
    line2: "Near Jor Bagh, New Delhi 110003",
    city: "New Delhi",
    neighborhood: "Lodhi Estate",
  },
  hours: [
    { day: "Monday – Thursday", time: "8:00 AM – 9:00 PM" },
    { day: "Friday – Saturday", time: "8:00 AM – 11:00 PM" },
    { day: "Sunday", time: "9:00 AM – 8:00 PM" },
  ],
  metro: "Jor Bagh (Yellow Line) — 8-minute walk",
  nav: [
    { href: "/menu", label: "Menu" },
    { href: "/spaces", label: "Spaces" },
    { href: "/story", label: "Story" },
    { href: "/visit", label: "Visit" },
  ],
} as const;
