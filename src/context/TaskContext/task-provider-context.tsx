import { useEffect, useReducer } from "react";

import { TaskContext } from "./task-context";
import { taskInitialState } from "@/models/Task/task-initial-state";
import type { TaskContextProviderProps } from "@/models/Task/task-context";
import { taskReducer } from "@/context/TaskReducer/task-reducer";
import { TimerWorkerManager } from "@/workers/timer-worker-manager";
import { TaskActionTypes } from "../TaskReducer/task-aciton";

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [task, setTask] = useReducer(taskReducer, taskInitialState);
  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((e) => {
    const countDownSeconds = e.data;
    console.log(typeof countDownSeconds);
    if (countDownSeconds <= 0) {
      setTask({ type: TaskActionTypes.COMPLETE_TASK });
      worker.terminate();
    } else {
      setTask({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    console.log(task);
    if (!task.activeTask) {
      worker.terminate();
    }

    worker.postMessage(task);
  }, [task, worker]);
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
