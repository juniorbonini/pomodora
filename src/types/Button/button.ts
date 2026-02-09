import type { ComponentProps, ReactNode } from "react";

export type ButtonProps = ComponentProps<"button"> & {
  icon: ReactNode;
  color?: "green" | "red";
};
