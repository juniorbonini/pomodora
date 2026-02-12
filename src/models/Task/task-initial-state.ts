import type { TaskState } from "./task-state";

export const taskInitialState: TaskState = {
  tasks: [],
  secondsRemaing: 0,
  formattedSecondsRemaing: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 1,
    shortBreakTime: 1,
    longBreakTime: 1,
  },
};
