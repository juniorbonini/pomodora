import styles from "./style.module.css";

export const Cycles = () => {
  return (
    <div className={styles.container}>
      <span>Ciclos:</span>

      <div className={styles.cycleContainer}>
        <span className={`${styles.cycle} ${styles.workTime}`}></span>
        <span className={`${styles.cycle} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycle} ${styles.workTime}`}></span>
        <span className={`${styles.cycle} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycle} ${styles.workTime}`}></span>
        <span className={`${styles.cycle} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycle} ${styles.workTime}`}></span>
        <span className={`${styles.cycle} ${styles.longBreakTime}`}></span>
      </div>
    </div>
  );
};
