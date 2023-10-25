import { FC } from "react";
import { IGridTypes } from "./Grid-types";
import { classnames } from "@/helpers/classnames";
import Styles from "./Grid.module.scss";

export const Grid: FC<IGridTypes> = (props) => {
  const {
    className,
    container,
    direction,
    justifyContent,
    alignItems,
    spacing,
    item,
    xl,
    lg,
    md,
    sm,
    xs,
    ...otherProps
  } = props;

  const isContainer = container;

  const GridContainerClassName = classnames(
    Styles["grid-container"],
    Styles[`grid-flex-direction-${direction || "row"}`],
    Styles[`grid-justify-content-${justifyContent}`],
    Styles[`grid-spacing-${spacing || 0}`]
  );

  const GridItemClassName = classnames(
    Styles["grid-item"],
    Styles[`grid-item-xl-${xl || "12"}`],
    Styles[`grid-item-lg-${lg || "12"}`],
    Styles[`grid-item-md-${md || "12"}`],
    Styles[`grid-item-sm-${sm || "12"}`],
    Styles[`grid-item-xs-${xs || "12"}`]
  );

  return (
    <div
      className={isContainer ? GridContainerClassName : GridItemClassName}
      {...otherProps}
    >
      {props.children}
    </div>
  );
};
