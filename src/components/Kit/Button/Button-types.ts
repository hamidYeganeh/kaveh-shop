import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

type TButtonSize = "sm" | "md" | "lg";

type TButtonVariant = "contained" | "outlined";

type TButtonBgColor =
  | "primary"
  | "success"
  | "error"
  | "warning"
  | "info"
  | CSSProperties["backgroundColor"];

export interface IButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  // icon
  startIcon?: ReactNode;
  endIcon?: ReactNode;

  // size
  size?: TButtonSize;

  // variant
  variant?: TButtonVariant;

  // button state
  success?: boolean;
  failed?: boolean;

  // color
  bgColor?: TButtonBgColor;
  color?: CSSProperties["color"];
}
