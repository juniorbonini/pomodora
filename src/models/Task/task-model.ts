import type { TaskState } from "./task-state";

export type Task = {
  id: string;
  name: string;
  duration: number;
  status?: string;
  startDate: number;
  completeDate: number | null; //quando o timer do pomodoro finaliza
  interruptDate: number | null; //quando o pomodoro cycle é interrompido
  type: keyof TaskState["config"]; // buscar a chave config no TaskState -> para filtar tipos na prop config:
};
