import type { Metadata } from "next";
import { Fragment } from "react";
import { Footer, Header, Main, NavbarHorizontal } from "@/layouts";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shopping",
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Header />
      <NavbarHorizontal />
      <Main>{children}</Main>
      <Footer></Footer>
    </Fragment>
  );
}
