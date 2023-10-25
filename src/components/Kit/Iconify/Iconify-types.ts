import { CSSProperties, HTMLAttributes, ReactNode } from "react";

export interface IIconifyTypes extends HTMLAttributes<HTMLSpanElement> {
  icon: any;
  color?: CSSProperties["color"];
  size?: CSSProperties["width"] | CSSProperties["height"];
}
