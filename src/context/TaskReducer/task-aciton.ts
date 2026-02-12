import type { Task } from "@/models/Task/task-model";

export enum TaskActionTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  COMPLETE_TASK = "COMPLETE_TASK",
  COUNT_DOWN = "COUNT_DOWN",
  RESET_TASK = "RESET_TASK",
}

export type TaskActionWithPayload =
  | {
      type: TaskActionTypes.START_TASK;
      payload: Task;
    }
  | {
      type: TaskActionTypes.COUNT_DOWN;
      payload: { secondsRemaining: string };
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
