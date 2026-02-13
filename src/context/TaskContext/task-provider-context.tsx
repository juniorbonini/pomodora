/* eslint-disable react-hooks/refs */
import { useEffect, useReducer, useRef } from "react";

import { TaskContext } from "./task-context";
import { taskInitialState } from "@/models/Task/task-initial-state";
import type { TaskContextProviderProps } from "@/models/Task/task-context";
import { taskReducer } from "@/context/TaskReducer/task-reducer";
import { TimerWorkerManager } from "@/workers/timer-worker-manager";
import { TaskActionTypes } from "../TaskReducer/task-aciton";
import { loadBeep } from "@/utils/Audios/load-beep";
import type { TaskState } from "@/models/Task/task-state";

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const worker = TimerWorkerManager.getInstance();
  const playBeepAudio = useRef<ReturnType<typeof loadBeep> | null>(null);
  const [task, setTask] = useReducer(taskReducer, taskInitialState, () => {
    const storage = localStorage.getItem("task");

    if (storage === null) return taskInitialState;

    const parsedStorage = JSON.parse(storage) as TaskState;

    return {
      ...parsedStorage,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: "00:00",
    };
  });

  worker.onmessage((e) => {
    const countDownSeconds = e.data;
    console.log(typeof countDownSeconds);
    if (countDownSeconds <= 0) {
      if (playBeepAudio.current) {
        playBeepAudio.current();
        playBeepAudio.current = null;
      }
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
    localStorage.setItem("task", JSON.stringify(task));
    if (!task.activeTask) {
      worker.terminate();
    }

    document.title = `${task.formattedSecondsRemaining} - Chronos Pomodora`;

    worker.postMessage(task);
  }, [task, worker]);

  useEffect(() => {
    if (task.activeTask && playBeepAudio.current === null) {
      playBeepAudio.current = loadBeep();
    } else {
      playBeepAudio.current = null;
    }
  }, [task.activeTask]);
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
