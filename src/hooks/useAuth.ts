"use client";

import { AuthContext } from "@/contexts";
import { useContext } from "react";

export const useAuth = () => {
  const auth = useContext(AuthContext);

  return auth;
};
