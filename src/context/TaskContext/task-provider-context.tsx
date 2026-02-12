import { useEffect, useReducer } from "react";

import { TaskContext } from "./task-context";
import { taskInitialState } from "@/models/Task/task-initial-state";
import type { TaskContextProviderProps } from "@/models/Task/task-context";
import { taskReducer } from "../TaskReducer/task-reducer";

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [task, setTask] = useReducer(taskReducer, taskInitialState);
  useEffect(() => {
    console.log(task);
  }, [task]);
  return (
    <TaskContext.Provider
      value={{
        task,
        setTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
