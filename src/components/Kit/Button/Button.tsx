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
    ...otherProps
  } = props;

  const ButtonClassNames = classnames(
    Styles.button_base,
    Styles[`button-size-${size}`],
    className
  );

  return (
    <button className={ButtonClassNames} {...otherProps}>
      {startIcon && <span className={Styles.icon}>{startIcon}</span>}

      {children}

      {endIcon && <span className={Styles.icon}>{endIcon}</span>}
    </button>
  );
};
