import { ChangeEvent, FocusEvent } from "react";

export interface InputProps {
  label: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  value: string;
  name: string;
  type?: string;
  onBlur(e: FocusEvent<any, Element>): void;
}