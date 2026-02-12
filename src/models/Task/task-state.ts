import type { Task } from "./task-model";

export type TaskState = {
  tasks: Task[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: Task | null;
  currentCycle: number; // número de 1 a 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
