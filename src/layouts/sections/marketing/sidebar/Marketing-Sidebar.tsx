// "use client";

import { Aside } from "@/layouts";
import { getProducts } from "@/services";
import { useCallback, useEffect, useState } from "react";

export const MarketingSidebar = async () => {
  // const [categories, setCategories] = useState([]);

  // const getAllCategories = useCallback(async () => {
  const { categories } = await getProducts();
  // setCategories(data);
  // }, []);

  // useEffect(() => {
  //   getAllCategories();
  // }, [getAllCategories]);

  return (
    <Aside>
      <h1>Side bar</h1>

      {categories.map((category: string) => (
        <h1 key={category}>{category}</h1>
      ))}
    </Aside>
  );
};
