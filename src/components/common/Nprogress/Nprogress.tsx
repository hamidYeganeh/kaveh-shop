// lib
import NextTopLoader, { NextTopLoaderProps } from "nextjs-toploader";
import { NPROGRESS_HEIGHT } from "@/constants";

// types
import type { FC } from "react";

export const Nprogress: FC<NextTopLoaderProps> = (props) => {
  return (
    <NextTopLoader
      {...props}
      crawl
      showSpinner={false}
      height={NPROGRESS_HEIGHT}
      initialPosition={0.08}
      color="#daf"
    />
  );
};
