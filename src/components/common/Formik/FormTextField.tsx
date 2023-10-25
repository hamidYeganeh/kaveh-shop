"use client";

import { TextField } from "@/components";
import { ITextFieldTypes } from "@/components/Kit/TextField/TextField-types";
import { useField, useFormikContext } from "formik";
import { FC } from "react";

interface IFormTextFieldTypes {
  name: string;
}

export const FormTextField: FC<ITextFieldTypes> = (props) => {
  const { name } = props;
  const [field, meta] = useField(name);

  const errorConfig = {
    helpertext: meta.touched && meta.error ? meta.error : "",
    error: true,
  };

  return <TextField {...field} {...props} {...errorConfig} />;
};
