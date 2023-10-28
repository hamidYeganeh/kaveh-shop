import { CSSProperties, HTMLAttributes } from "react";

type TStackSpacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface IStackTypes extends HTMLAttributes<HTMLDivElement> {
  //   stack flex direction
  direction?: CSSProperties["flexDirection"];

  //   stack justify content
  justifyContent?: CSSProperties["justifyContent"];

  //   stack align items
  alignItems?: CSSProperties["alignItems"];

  //   stack flex wrap
  flexWrap?: CSSProperties["flexWrap"];

  // stack spacing
  spacing?: TStackSpacing;

  // width
  fitContent?: boolean;
}
