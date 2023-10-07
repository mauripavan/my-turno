import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

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
  text = 'text',
  password = 'password',
  email = 'email',
}
