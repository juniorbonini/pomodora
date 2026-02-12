import type { Dispatch, ReactNode } from "react";
import type { TaskState } from "./task-state";
import type { TaskActionType } from "@/context/TaskReducer/task-aciton";

export type TaskContextProps = {
  task: TaskState;
  setTask: Dispatch<TaskActionType>;
};

export type TaskContextProviderProps = {
  children: ReactNode;
};
