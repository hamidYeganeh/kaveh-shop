import { FC } from "react";
import { IIconifyTypes } from "./Iconify-types";

export const Iconify: FC<IIconifyTypes> = (props) => {
  const { icon, size: iconSize, style, color, ...otherProps } = props;

  const size = iconSize || 24;
  
  return (
    <span
      {...otherProps}
      style={{
        ...style,
        color: color,
        fontSize: size,
        width: size,
        height: size,
      }}
    >
      {icon}
    </span>
  );
};
