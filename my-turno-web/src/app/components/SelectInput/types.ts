import { ChangeEvent } from "react";

export interface ISelectInputProps {
  data: string[];
  defaultValue: string;
  keyValue: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}
