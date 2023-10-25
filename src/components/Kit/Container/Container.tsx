import { FC } from "react";
import { IContainerTypes } from "./Container-types";
import Styles from "./Container.module.scss";
import { classnames } from "@/helpers";

export const Container: FC<IContainerTypes> = (props) => {
  const { className, children, ...otherProps } = props;

  const ContainerClassNames = classnames(Styles.container, className);

  return (
    <div className={ContainerClassNames} {...otherProps}>
      {children}
    </div>
  );
};
