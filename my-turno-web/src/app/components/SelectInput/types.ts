import { ChangeEvent } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface ISelectInputProps {
  data: string[];
  defaultValue: string;
  keyValue: string;
  id: string;
  errors?: FieldError;
  registerOptions?: UseFormRegisterReturn;
  hideErrorMessage?: boolean;
}
