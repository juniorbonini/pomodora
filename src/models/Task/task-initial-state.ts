import type { TaskState } from "./task-state";

export const taskInitialState: TaskState = {
  tasks: [],
  secondsRemaing: 0,
  formattedSecondsRemaing: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};
