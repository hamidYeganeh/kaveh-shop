"use client";

import { FC } from "react";
import { IStackTypes } from "./Stack-types";
import Styles from "./Stack.module.scss";
import { classnames } from "@/helpers";

export const Stack: FC<IStackTypes> = (props) => {
  const {
    direction,
    justifyContent,
    alignItems,
    flexWrap,
    className,
    ...otherProps
  } = props;

  const StackClassName = classnames(
    Styles.stack_container,
    Styles[`stack-flex-direction-${props.direction}`],
    Styles[`stack-justify-content-${props.justifyContent}`],
    Styles[`stack-align-item-${props.alignItems}`],
    Styles[`stack-spacing-${props.spacing}`],
    className
  );

  return (
    <div className={StackClassName} {...otherProps}>
      {props.children}
    </div>
  );
};
