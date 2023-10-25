import { TNavbar } from "@/@types";

export const NAVBAR_CONFIG: TNavbar = [
  { title: "خانه", path: "/" },
  {
    title: "فروشگاه",
    path: "/shop",
    children: [{ title: "گوشی", path: "/shop/phones" }],
  },
  { title: "درباره ما", path: "/about-us" },
  { title: "ارتباط با ما", path: "/contact-us" },
  { title: "بلاگ", path: "/blog" },
];
