import { useTaskContext } from "@/context/TaskContext/task-context";
import styles from "./style.module.css";
import { getNextCycle } from "@/utils/NextCycle/get-next-cycle";
import { getNextCycleType } from "@/utils/NextCycle/get-next-cycle-type";

export const Cycles = () => {
  const { task } = useTaskContext();
  const cycleStep = Array.from({ length: task.currentCycle });
  const cycleTypeMap = {
    workTime: "foco",
    shortBreakTime: "descanso curto",
    longBreakTime: "descanso longo",
  };

  return (
    <div className={styles.container}>
      <span>Ciclos:</span>

      <div className={styles.cycleContainer}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);

          return (
            <span
              key={nextCycle}
              aria-label={`Indicador de ciclo de ${cycleTypeMap[nextCycleType]}`}
              title={`Indicadpr de ciclo de ${cycleTypeMap[nextCycleType]}`}
              className={`${styles.cycle} ${styles[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
};
