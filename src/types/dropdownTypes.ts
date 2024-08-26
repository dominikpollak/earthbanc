import { ReactNode } from "react";

export interface Option {
  label: ReactNode;
  value?: string;
  onClick?: () => void;
}
