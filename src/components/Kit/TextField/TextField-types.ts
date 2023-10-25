import { InputHTMLAttributes, ReactNode } from "react";

export interface ITextFieldTypes extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  helpertext?: string;
  error?: boolean;
  children?: ReactNode;
}
