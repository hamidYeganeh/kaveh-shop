"use client";

import { TProvidersTypes } from "@/@types";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, useState } from "react";

export const ReactQueryProvider: FC<TProvidersTypes> = ({ children }) => {
  // const [queryClient] = useState(() => new QueryClient());

  return (
    // <QueryClientProvider client={queryClient}>
    <>{children}</>
    // </QueryClientProvider>
  );
};
