import { ChangeEvent } from "react";

export interface InputProps {
  label: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  value: string;
  name: string;
  type?: string;
}