import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Find Louie & Luna’s in Lodhi Estate, New Delhi — hours, Metro directions, and a soft table inquiry.",
  openGraph: {
    title: "Visit · Louie & Luna’s",
    description:
      "Lodhi Estate Lane, New Delhi — hours, Metro notes, and a soft table inquiry.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visit · Louie & Luna’s",
    description:
      "Lodhi Estate Lane, New Delhi — hours, Metro notes, and a soft table inquiry.",
    images: ["/og.png"],
  },
};

export default function VisitLayout({ children }: { children: React.ReactNode }) {
  return children;
}
