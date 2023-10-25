import { TProvidersTypes } from "@/@types";
import { AuthContext } from "@/contexts";
import { FC } from "react";

export const AuthProvider: FC<TProvidersTypes> = ({ children }) => {
  return <AuthContext>{children}</AuthContext>;
};
