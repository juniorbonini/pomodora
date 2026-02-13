import type { TaskContextProps } from "@/models/Task/task-context";
import { taskInitialState } from "@/models/Task/task-initial-state";
import { createContext, useContext } from "react";

const initialTaskContextValue = {
  state: taskInitialState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(
  initialTaskContextValue,
);

export const useTaskContext = () => {
  return useContext(TaskContext);
};
