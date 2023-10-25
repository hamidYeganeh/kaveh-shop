"use client";

import { FC, useEffect, useState } from "react";
import { IMegaMenu } from "./MegaMenu-types";
import Styles from "./MegaMenu.module.scss";
import { classnames } from "@/helpers";

export const MegaMenu: FC<IMegaMenu> = (props) => {
  const [show, setShow] = useState(false);
  function handleMouseEnter() {
    setShow(true);
  }
  function handleMouseLeave() {
    setShow(false);
  }

  useEffect(() => {
    // setShow(props.show);
  }, [props.show]);
  return (
    <div
      className={classnames(
        Styles.mega_menu_container,
        show ? Styles.show_menu : Styles.hide_menu
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={Styles.mega_menu_paper}>{props.children}</div>
    </div>
  );
};
