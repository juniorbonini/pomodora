import styles from "./style.module.css";
import type { InputProps } from "@/types/Input/input";

export const Input = ({ id, label, type, ...props }: InputProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} className={styles.input} {...props} />
    </div>
  );
};
