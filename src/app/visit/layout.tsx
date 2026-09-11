import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Find Louie & Luna’s in Lodhi Estate, New Delhi — hours, Metro directions, and a soft table inquiry.",
};

export default function VisitLayout({ children }: { children: React.ReactNode }) {
  return children;
}
