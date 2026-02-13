import styles from "./style.module.css";
import type { ToastContentProps } from "react-toastify";
import { Button } from "../Button";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>
        <div className={styles.buttonContainer}>
          <Button
            icon={<ThumbsUpIcon />}
            onClick={() => closeToast(true)}
            aria-label="Confirmar ação e fechar"
            title="Confirmar ação e fechar"
          />
          <Button
            icon={<ThumbsDownIcon />}
            onClick={() => closeToast(false)}
            aria-label="Cancelar ação e fechar"
            title="Cancelar ação e fechar"
          />
        </div>
      </div>
    </>
  );
}
