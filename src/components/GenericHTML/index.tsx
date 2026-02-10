import styles from "./style.module.css";
import type { GenericHTMLProps } from "@/types/GenericHTML/generic-html";

export const GenericHtml = ({ children }: GenericHTMLProps) => {
  return <div className={styles.genericHtml}>{children}</div>;
};
