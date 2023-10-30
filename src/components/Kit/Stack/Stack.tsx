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
    spacing,
    fitContent,
    ...otherProps
  } = props;

  const StackClassName = classnames(
    Styles.stack_container,
    Styles[`stack-flex-direction-${direction}`],
    Styles[`stack-justify-content-${justifyContent}`],
    Styles[`stack-align-item-${alignItems}`],
    Styles[`stack-spacing-${spacing}`],
    fitContent ? Styles["stack-fit-content"] : "",
    className
  );

  return (
    <div className={StackClassName} {...otherProps}>
      {props.children}
    </div>
  );
};
