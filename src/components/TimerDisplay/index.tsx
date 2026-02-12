import { useTaskContext } from "@/context/TaskContext/task-context";
import styles from "./style.module.css";

export const TimerDisplay = () => {
  const { task } = useTaskContext();
  return <div className={styles.container}>{task.formattedSecondsRemaing}</div>;
};
