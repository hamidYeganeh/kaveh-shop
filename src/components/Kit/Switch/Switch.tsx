import { FC } from "react";
import { ISwitch } from "./Switch.types";
import Styles from "./Switch.module.scss";
import { classnames } from "@/helpers";

export const Switch: FC<ISwitch> = (props) => {
  const { checked, className, ...otherProps } = props;

  const SwitchContainerClassNames = classnames(Styles.switch_container);

  const SwitchCheckboxClassNames = classnames(Styles.switch_checkbox);

  return (
    <div className={SwitchContainerClassNames}>
      <input type="checkbox" className={SwitchCheckboxClassNames} />
    </div>
  );
};
