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
  const [state, dispatch] = useReducer(taskReducer, taskInitialState, () => {
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
      dispatch({ type: TaskActionTypes.COMPLETE_TASK });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(state));
    if (!state.activeTask) {
      worker.terminate();
    }

    document.title = `${state.formattedSecondsRemaining} - Chronos Pomodora`;

    worker.postMessage(state);
  }, [state, worker]);

  useEffect(() => {
    if (state.activeTask && playBeepAudio.current === null) {
      playBeepAudio.current = loadBeep();
    } else {
      playBeepAudio.current = null;
    }
  }, [state.activeTask]);
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
