import { FC, PropsWithChildren } from "react";

export const Aside: FC<PropsWithChildren<unknown>> = (props) => {
  return <aside>{props.children}</aside>;
};
