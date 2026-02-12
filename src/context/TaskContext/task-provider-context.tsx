import { useEffect, useState } from "react";

import { TaskContext } from "./task-context";
import { taskInitialState } from "@/models/Task/task-initial-state";
import type { TaskContextProviderProps } from "@/models/Task/task-context";

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [task, setTask] = useState(taskInitialState);

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
