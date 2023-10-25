import { TProvidersTypes } from "@/@types";
import { FC } from "react";

export const Main: FC<TProvidersTypes> = ({ children }) => {
  return <main>{children}</main>;
};
