"use client";

import { BASE_URL } from "@/config";
import { client } from "@/helpers";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const Posts = () => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => client.get(`${BASE_URL}/products`),
  });

//   console.log(data);

  return <h1>Posts Comp</h1>;
};
