"use client";

import { NAVBAR_CONFIG } from "@/config";
import Styles from "./navbar-horizontal.module.scss";
import Link from "next/link";
import { Container, Iconify, MegaMenu } from "@/components";
import { IoIosArrowDown } from "react-icons/io";
import { classnames } from "@/helpers";
import { boolean } from "yup";
import { useState } from "react";

export const NavbarHorizontal = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  function handleMouseEnter(hasChildren: boolean) {
    if (!hasChildren) return;
    setShowMegaMenu(true);
  }
  function handleMouseLeave(hasChildren: boolean) {
    if (!hasChildren) return;
    setShowMegaMenu(false);
  }

  return (
    <Container>
      <nav className={Styles.nav_container}>
        <ul className={Styles.nav_wrapper}>
          {NAVBAR_CONFIG.map((navItem) => {
            const { title, children, path } = navItem;
            const hasChildren = (children?.length as number) > 0;

            return (
              <li
                key={path as string}
                className={classnames(Styles.nav_item)}
                onMouseEnter={() => handleMouseEnter(hasChildren)}
                onMouseLeave={() => handleMouseLeave(hasChildren)}
              >
                <Link href={path as string}>{title as string}</Link>

                {hasChildren && <Iconify icon={<IoIosArrowDown />} size={12} />}
              </li>
            );
          })}
        </ul>
        <MegaMenu show={showMegaMenu}>
          <h1>Haaiajdihds</h1>
        </MegaMenu>
      </nav>
    </Container>
  );
};
