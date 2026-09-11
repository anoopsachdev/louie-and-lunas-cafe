import type { Metadata } from "next";
import MenuClient from "./menu-client";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Classic coffee, Louie’s darker cups, Luna’s lighter blends, fruit × coffee, and seasonal rotations at Louie & Luna’s in New Delhi.",
};

export default function MenuPage() {
  return <MenuClient />;
}
