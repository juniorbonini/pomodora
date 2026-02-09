import type { ContainerProps } from "@/types/Container/container";

import styles from "./style.module.css";

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
