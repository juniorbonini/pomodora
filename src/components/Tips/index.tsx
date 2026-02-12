import { useTaskContext } from "@/context/TaskContext/task-context";
import { getNextCycle } from "@/utils/NextCycle/get-next-cycle";
import { getNextCycleType } from "@/utils/NextCycle/get-next-cycle-type";

export const Tips = () => {
  const { task } = useTaskContext();
  const nextCycle = getNextCycle(task.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForActiveTask = {
    workTime: <span>Foque por {task.config.workTime} min</span>,
    shortBreakTime: (
      <span>
        Descanse <b>{task.config.shortBreakTime} min</b>
      </span>
    ),
    longBreakTime: <span>Descanso longo</span>,
  };
  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo é de <b>{task.config.workTime} min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo descanso é de <b>{task.config.shortBreakTime} min</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Próximo descanso será: <b>{task.config.longBreakTime} min</b>
      </span>
    ),
  };
  return (
    <>
      {!!task.activeTask && tipsForActiveTask[task.activeTask.type]}
      {!task.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
};
