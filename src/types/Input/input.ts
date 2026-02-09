import type { ComponentProps } from "react";

export type InputProps = ComponentProps<"input"> & {
  id: string;
  label: string;
};
