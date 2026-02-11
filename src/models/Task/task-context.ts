import type { Dispatch, SetStateAction } from "react";
import type { TaskState } from "./task-state";

export type TaskContextProps = {
  state: TaskState;
  dispatch: Dispatch<SetStateAction<TaskState>>;
};
