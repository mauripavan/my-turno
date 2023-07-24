"use client";

import EyeIcon from "@component/app/assets/icons/Eye";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface TextInputProps {
  id: string;
  placeholder?: string;
  type?: InputType;
  label?: string;
  errors?: FieldError;
  registerOptions?: UseFormRegisterReturn;
  hideErrorMessage?: boolean;
}

export enum InputType {
  text = "text",
  password = "password",
  email = "email",
}

export default function TextInput(props: TextInputProps) {
  const {
    label,
    placeholder,
    type,
    id,
    errors,
    registerOptions,
    hideErrorMessage,
  } = props;

  return (
    <div className="w-full">
      <p className="text-sm mb-0.5">{label}</p>
      <div
        className={`flex items-center border rounded-lg py-3 pl-3 pr-2 ${
          errors ? "border-red-500" : "border-gray-3"
        }`}
      >
        <input
          className="w-full rounded-lg mr-2 focus:outline-none"
          placeholder={placeholder}
          type={type}
          id={id}
          {...registerOptions}
        />
        {type === InputType.password && <EyeIcon />}
      </div>
      {!hideErrorMessage && (
        <p className="text-xs mt-0.5 text-red-500">{errors?.message}</p>
      )}
    </div>
  );
}
