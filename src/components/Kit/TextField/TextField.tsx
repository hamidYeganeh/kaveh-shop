"use client";

import { FC, Fragment, useId } from "react";
import { ITextFieldTypes } from "./TextField-types";
import Styles from "./TextField.module.scss";
import { classnames } from "@/helpers/classnames";

export const TextField: FC<ITextFieldTypes> = (props) => {
  const textfieldID = useId();
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
        <label htmlFor={textfieldID} className={TextFieldLabelClassName}>
          {props.label}
        </label>
        <input
          id={textfieldID}
          {...otherProps}
          className={TextFieldClassName}
        />
        <label htmlFor={textfieldID} className={TextFieldHelperTextClassName}>
          {props.helpertext}
        </label>
      </div>
    </Fragment>
  );
};
