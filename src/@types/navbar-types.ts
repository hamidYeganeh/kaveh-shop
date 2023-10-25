type TNavItem = {
  title: string;
  path?: string;
  action?: () => void;
};

export type TNavbar = {
  title: TNavItem["title"];
  path?: TNavItem["path"];
  action?: TNavItem["action"];
  children?: TNavItem[];
}[];
