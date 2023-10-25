import { CSSProperties, HTMLAttributes } from "react";

type TGridDirection = "row" | "column" | "column-reverse" | "row-reverse";

type TGridSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type TGridAlignItems =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline";

type TGridJustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "space-between"
  | "space-around"
  | "space-evenly";

type TGridFlexWrap = "wrap" | "nowrap" | "wrap-reverse";

export interface IGridTypes extends HTMLAttributes<HTMLDivElement> {
  // is container or item
  container?: boolean;
  item?: boolean;

  // grid item sizes
  xl?: TGridSize;
  lg?: TGridSize;
  md?: TGridSize;
  sm?: TGridSize;
  xs?: TGridSize;

  //   grid flex direction
  // direction?: TGridDirection;
  direction?: CSSProperties["flexDirection"];

  //   grid justify content
  justifyContent?: CSSProperties["justifyContent"];

  //   grid align items
  alignItems?: CSSProperties["alignItems"];

  //   grid flex wrap
  flexWrap?: TGridFlexWrap;

  // grid spacing
  spacing?: TGridSize;
}
