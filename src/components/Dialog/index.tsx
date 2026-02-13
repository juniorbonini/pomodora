import styles from "./style.module.css";
import type { ToastContentProps } from "react-toastify";
import { Button } from "../Button";

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>
        <div className={styles.buttonContainer}>
          <Button icon onClick={() => closeToast()} />
          <Button icon onClick={() => closeToast()} />
        </div>
      </div>
    </>
  );
}
