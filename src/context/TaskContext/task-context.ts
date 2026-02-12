import type { TaskContextProps } from "@/models/Task/task-context";
import { taskInitialState } from "@/models/Task/task-initial-state";
import { createContext, useContext } from "react";

const initialTaskContextValue = {
  task: taskInitialState,
  setTask: () => {},
};

export const TaskContext = createContext<TaskContextProps>(
  initialTaskContextValue,
);

export const useTaskContext = () => {
  return useContext(TaskContext);
};
