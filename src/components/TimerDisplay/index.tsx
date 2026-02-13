import { useTaskContext } from "@/context/TaskContext/task-context";
import styles from "./style.module.css";

export const TimerDisplay = () => {
  const { state } = useTaskContext();
  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
};
