import { TProvidersTypes } from "@/@types";
import { FC } from "react";
import "@/styles/index.scss";
import { ThemeContext } from "@/contexts";

export const ThemeProvider: FC<TProvidersTypes> = ({ children }) => {
  return <ThemeContext>{children}</ThemeContext>;
};
