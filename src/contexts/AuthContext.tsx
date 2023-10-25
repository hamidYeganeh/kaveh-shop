"use client";
import { client } from "@/helpers/axios";
import { ReactNode, createContext, useState } from "react";

const initialState: {
  isAuthenticated: boolean;
  isInitialized: boolean;
  login: (values: any) => Promise<void>;
  user?: any;
} = {
  isAuthenticated: false,
  isInitialized: false,
  login: () => Promise.resolve(),
  user: null,
};

const AuthCtx = createContext(initialState);

const AuthContext = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsIntialized] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (values: any) => {
    const response = await client.post(
      "https://dummyjson.com/auth/login",
      values
    );
    setUser(response.data);
    setIsAuthenticated(true);
    setIsIntialized(true);
    return response.data;
  };

  return (
    <AuthCtx.Provider
      value={{
        isAuthenticated,
        isInitialized,
        login,
        user,
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
};

export { AuthContext, AuthCtx };
