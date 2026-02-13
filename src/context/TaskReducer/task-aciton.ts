import type { Task } from "@/models/Task/task-model";
import type { TaskState } from "@/models/Task/task-state";

export enum TaskActionTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  COMPLETE_TASK = "COMPLETE_TASK",
  COUNT_DOWN = "COUNT_DOWN",
  RESET_TASK = "RESET_TASK",
  CHANGE_SETTINGS = "CHANGE_SETTINGS",
}

export type TaskActionWithPayload =
  | {
      type: TaskActionTypes.START_TASK;
      payload: Task;
    }
  | {
      type: TaskActionTypes.COUNT_DOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: TaskActionTypes.CHANGE_SETTINGS;
      payload: TaskState["config"];
    };

export type TaskActionWithoutPayload =
  | {
      type: TaskActionTypes.RESET_TASK;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionTypes.COMPLETE_TASK;
    };

export type TaskActionType = TaskActionWithPayload | TaskActionWithoutPayload;
