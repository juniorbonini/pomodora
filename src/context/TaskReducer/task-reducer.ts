import type { TaskState } from "@/models/Task/task-state";
import { TaskActionTypes, type TaskActionType } from "./task-aciton";

export function taskReducer(
  state: TaskState,
  action: TaskActionType,
): TaskState {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      return state;
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return state;
    }
    case TaskActionTypes.RESET_TASK: {
      return state;
    }
  }
  return state;
}
