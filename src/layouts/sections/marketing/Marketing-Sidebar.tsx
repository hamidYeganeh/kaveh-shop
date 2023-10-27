// "use client";

import { Switch } from "@/components";
import { Aside } from "@/layouts";
import { getProducts } from "@/services";
import { useCallback, useEffect, useState } from "react";

export const MarketingSidebar = async () => {
  const { categories } = await getProducts();

  return (
    <Aside>
      <h1>Side bar</h1>
      <Switch />

      {categories.map((category: string) => (
        <h1 key={category}>{category}</h1>
      ))}
    </Aside>
  );
};
