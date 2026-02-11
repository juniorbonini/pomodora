import { useEffect, useState } from "react";

import { TaskContext } from "./task-context";
import { taskInitialState } from "@/models/Task/task-initial-state";
import type { TaskContextProviderProps } from "@/models/Task/task-context";

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [state, dispatch] = useState(taskInitialState);

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <TaskContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
