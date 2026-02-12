import type { Task } from "@/models/Task/task-model";

export enum TaskActionTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  RESET_TASK = "RESET_TASK",
}

export type TaskActionWithPayload = {
  type: TaskActionTypes.START_TASK;
  payload: Task;
};

export type TaskActionWithoutPayload =
  | {
      type: TaskActionTypes.RESET_TASK;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    };

export type TaskActionType = TaskActionWithPayload | TaskActionWithoutPayload;
