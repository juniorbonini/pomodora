import { TimerIcon } from "lucide-react";
import styles from "./style.module.css";
export const Logo = () => {
  return (
    <div className={styles.container}>
      <a href="#" className={styles.link}>
        <TimerIcon size={65} />
        <span>Pomodora</span>
      </a>
    </div>
  );
};
