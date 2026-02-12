import type { TaskState } from "@/models/Task/task-state";
import { TaskActionTypes, type TaskActionType } from "./task-aciton";
import { getNextCycle } from "@/utils/NextCycle/get-next-cycle";
import { formatSecondsToMinutes } from "@/utils/FormatSeconds/format-seconds-to-minutes";

export function taskReducer(
  state: TaskState,
  action: TaskActionType,
): TaskState {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaing = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaing,
        formattedSecondsRemaing: formatSecondsToMinutes(secondsRemaing),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaing: 0,
        formattedSecondsRemaing: "00:00",
        tasks: state.tasks.map((task) => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return {
              ...task,
              interruptDate: Date.now(),
            };
          }
          return task;
        }),
      };
    }
    case TaskActionTypes.COMPLETE_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaing: 0,
        formattedSecondsRemaing: "00:00",
        tasks: state.tasks.map((task) => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return {
              ...task,
              completeDate: Date.now(),
            };
          }
          return task;
        }),
      };
    }
    case TaskActionTypes.COUNT_DOWN: {
      return {
        ...state,
        secondsRemaing: action.paylod.secondsRemaing,
        formattedSecondsRemaing: formatSecondsToMinutes(
          action.paylod.secondsRemaing,
        ),
      };
    }
    case TaskActionTypes.RESET_TASK: {
      return state;
    }
  }
  return state;
}
