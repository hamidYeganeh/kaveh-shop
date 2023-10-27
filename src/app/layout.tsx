import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/theme/global-styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  viewport: {
    initialScale: 1,
    viewportFit: "auto",
  },
  title: "Create Next App",
  description: "Generated by create next app",
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="html">
      <body className={inter.className + "body"}>{children}</body>
    </html>
  );
}
