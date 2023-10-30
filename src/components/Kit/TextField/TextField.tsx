"use client";

import { FC, Fragment } from "react";
import { ITextFieldTypes } from "./TextField-types";
import Styles from "./TextField.module.scss";
import { classnames } from "@/helpers/classnames";

export const TextField: FC<ITextFieldTypes> = (props) => {
  const { className, error, ...otherProps } = props;

  const TextFieldContainerClassName = classnames(Styles["textfield-container"]);
  const TextFieldClassName = classnames(Styles["text-field-base"], className);
  const TextFieldLabelClassName = classnames(Styles["text-field-label"]);
  const TextFieldHelperTextClassName = classnames(
    Styles["text-fields-helper-text"]
  );

  return (
    <Fragment>
      <div className={TextFieldContainerClassName}>
        <label htmlFor={"textfield"} className={TextFieldLabelClassName}>
          {props.label}
        </label>
        <input
          id={"textfield"}
          {...otherProps}
          className={TextFieldClassName}
        />
        <label htmlFor={"textfield"} className={TextFieldHelperTextClassName}>
          {props.helpertext}
        </label>
      </div>
    </Fragment>
  );
};
