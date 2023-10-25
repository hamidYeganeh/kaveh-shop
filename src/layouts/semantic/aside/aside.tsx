import { FC, PropsWithChildren } from "react";
import Styles from "./aside.module.scss";

export const Aside: FC<PropsWithChildren<unknown>> = (props) => {
  return <aside className={Styles.aside}>{props.children}</aside>;
};
