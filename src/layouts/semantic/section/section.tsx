import { FC, PropsWithChildren } from "react";
import Styles from "./section.module.scss";

export const Section: FC<PropsWithChildren<unknown>> = (props) => {
  const { children } = props;

  return <section className={Styles.section}>{children}</section>;
};
