import styles from "./style.module.css";

import type { ButtonProps } from "@/types/Button/button";

export const Button = ({ icon, color = "green", ...props }: ButtonProps) => {
  return (
    <>
      <button
        color={color}
        className={`${styles.button} ${styles[color]}`}
        {...props}
      >
        {icon}
      </button>
    </>
  );
};
