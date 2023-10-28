import type { Metadata } from "next";
import { Section } from "@/layouts";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shopping",
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Section>{children}</Section>;
}
