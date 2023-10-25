"use client";
import { CSSProperties, FC } from "react";
import { IButtonTypes } from "./Button-types";
import { classnames } from "@/helpers";
import Styles from "./Button.module.scss";

export const Button: FC<IButtonTypes> = (props) => {
  const {
    className,
    children,
    startIcon,
    style,
    endIcon,
    success,
    failed,
    bgColor,
    ...otherProps
  } = props;

  const isDefaultColor = ![
    "primary",
    "success",
    "error",
    "warning",
    "info",
  ].includes(bgColor as string);
  const isSuccessOrFailed = success || failed;

  const ButtonClassNames = classnames(
    Styles.button_base,
    Styles[`button-size-${props.size}`],
    Styles[`button-variant-${props.variant}`],
    !isDefaultColor && Styles[`button-bg-color-${bgColor}`],
    isSuccessOrFailed &&
      Styles[`button-bg-color-${success ? "success" : "failed"}`],
    className
  );

  return (
    <button
      className={ButtonClassNames}
      {...otherProps}
      style={{
        ...style,
        ...(isDefaultColor && {
          backgroundColor: bgColor as CSSProperties["backgroundColor"],
          color: props.color as CSSProperties["color"],
        }),
      }}
    >
      {startIcon && <span className={Styles.icon}>{startIcon}</span>}

      {children}

      {endIcon && <span className={Styles.icon}>{endIcon}</span>}
    </button>
  );
};
