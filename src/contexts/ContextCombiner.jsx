/* eslint-disable react/display-name */
import React from "react";

export const combineContexts = (...contexts) => {
  return contexts.reduce(
    (AccumulatedComponents, CurrentComponent) =>
      ({ children }) =>
        (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        ),
    ({ children }) => <>{children}</>
  );
};
