import type { HeadingProps } from "@/types/Heading/heading";
import styles from "./style.module.css";

export const Heading = ({ children }: HeadingProps) => {
  return <h1 className={styles.heading}>{children}</h1>;
};
