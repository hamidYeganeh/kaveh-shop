"use client";

import { FC, PropsWithChildren } from "react";
import { IButtonTypes } from "./Button.types";
import { classnames } from "@/helpers";
import Styles from "./Button.module.scss";

export const Button: FC<PropsWithChildren<IButtonTypes>> = (props) => {
  const {
    className,
    children,
    startIcon,
    endIcon,
    iconButton,
    success,
    failed,
    loading,
    disabled,
    size,
    variant,
    ...otherProps
  } = props;

  const isIconButton = iconButton;
  const isDisabled = loading || disabled;

  const ButtonClassNames = classnames(
    Styles.button_base,
    Styles[`button-size-${size}`],
    isIconButton ? Styles[`icon-button`] : "",
    isDisabled
      ? Styles["button-disabled"]
      : Styles[`button-variant-${variant}`],
    className
  );

  return (
    <button className={ButtonClassNames} {...otherProps}>
      {startIcon && <span className={Styles.button_icon}>{startIcon}</span>}

      {children}

      {endIcon && <span className={Styles.button_icon}>{endIcon}</span>}
    </button>
  );
};
