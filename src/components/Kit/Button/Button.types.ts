import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

type TButtonSize = "sm" | "md" | "lg";

type TButtonVariant = "contained" | "outlined" | "standard";

export interface IButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  // icon
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  iconButton?: boolean;

  // size
  size?: TButtonSize;

  // variant
  variant?: TButtonVariant;

  // button state
  success?: boolean;
  failed?: boolean;
  loading?: boolean;
  disabled?: boolean;

  // color
  color?: CSSProperties["color"];
}
