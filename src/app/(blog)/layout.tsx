import React, { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <main style={{ backgroundColor: "red" }}>{children}</main>;
}
