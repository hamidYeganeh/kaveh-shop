import type { Metadata } from "next";

export const metadata: Metadata = {
  viewport: { initialScale: 1, viewportFit: "auto" },
  title: "Marketing",
  description: "Generated by create next app",
  icons: "favicon.ico",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
