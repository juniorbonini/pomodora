import type { Task } from "./task-model";

export type TaskState = {
  tasks: Task[];
  secondsRemaing: number;
  formattedSecondsRemaing: "string";
  activeTask: Task | null;
  currentyCycle: number; // número de 1 a 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
