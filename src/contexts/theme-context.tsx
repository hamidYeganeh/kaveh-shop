"use client";

import { TProvidersTypes } from "@/@types";
import { FC, createContext, useState } from "react";
import { classnames } from "@/helpers";

type TThemeMode = "light" | "dark";

type TTheme = {
  mode: TThemeMode;
};

const initialState: TTheme = {
  mode: "light",
};

export const ThemeCtx = createContext(initialState);

export const ThemeContext: FC<TProvidersTypes> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<TThemeMode>("light");

  const isLightMode = themeMode === "light";

  const contextValue = {
    mode: themeMode,
  };
  return (
    <ThemeCtx.Provider value={contextValue}>
      <div className={classnames("body")}>{children}</div>
    </ThemeCtx.Provider>
  );
};
