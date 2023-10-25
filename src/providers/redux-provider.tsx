"use client";

import { TProvidersTypes } from "@/@types";
import { FC } from "react";
import { Provider } from "react-redux";

export const ReduxProvider: FC<TProvidersTypes> = ({ children }) => {
  return (
    // <Provider store={store}>
    //   <PersistGate persistor={persistor} loading={null}>
    <>{children}</>
    //   </PersistGate>
    // </Provider>
  );
};
