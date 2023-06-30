"use client";

import EyeIcon from "@component/app/assets/icons/Eye";

export interface TextInputProps {
  label?: string;
  placeholder?: string;
  type?: InputType;
}

export enum InputType {
  text = "text",
  password = "password",
  email = "email",
}

export default function TextInput(props: TextInputProps) {
  const { label, placeholder, type } = props;

  return (
    <div className="w-full">
      <p className="text-sm mb-0.5">{label}</p>
      <div className="flex items-center border border-gray-3 rounded-lg py-3 pl-3 pr-2">
        <input
          className="w-full rounded-lg mr-2 focus:outline-none"
          placeholder={placeholder}
          type={type}
        />
        {type === InputType.password && <EyeIcon />}
      </div>
    </div>
  );
}
