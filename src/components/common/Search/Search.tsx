"use client";

import { TextField } from "@/components";
import { useParams } from "next/navigation";
import { ChangeEvent, FC, useState } from "react";

export const Search: FC = () => {
  const [search, setSearch] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearch(value);
  }

  return <TextField name="search" value={search} onChange={handleChange} />;
};
