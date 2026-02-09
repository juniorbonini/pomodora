import { History, House, Settings, Sun } from "lucide-react";
import styles from "./style.module.css";

export const Menu = () => {
  return (
    <nav className={styles.container}>
      <a href="#" className={styles.link}>
        <House />
      </a>
      <a href="#" className={styles.link}>
        <History />
      </a>
      <a href="#" className={styles.link}>
        <Settings />
      </a>
      <a href="#" className={styles.link}>
        <Sun />
      </a>
    </nav>
  );
};
