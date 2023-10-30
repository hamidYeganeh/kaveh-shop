import { TProvidersTypes } from "@/@types";
import { FC } from "react";
import Styles from "./main.module.scss";

export const Main: FC<TProvidersTypes> = ({ children }) => {
  return <main className={Styles.main}>{children}</main>;
};
