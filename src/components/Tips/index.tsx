import { useTaskContext } from "@/context/TaskContext/task-context";
import { getNextCycle } from "@/utils/NextCycle/get-next-cycle";
import { getNextCycleType } from "@/utils/NextCycle/get-next-cycle-type";

export const Tips = () => {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForActiveTask = {
    workTime: (
      <span>
        <b>Foco</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        <b>descanso curto</b>
      </span>
    ),
    longBreakTime: (
      <span>
        <b>Descanso longo</b>
      </span>
    ),
  };
  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo será: <b>{tipsForActiveTask.workTime}</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo ciclo será: <b>{tipsForActiveTask.shortBreakTime}</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Próximo ciclo será: <b>{tipsForActiveTask.longBreakTime}</b>
      </span>
    ),
  };
  return (
    <>
      {!!state.activeTask && tipsForActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
};
