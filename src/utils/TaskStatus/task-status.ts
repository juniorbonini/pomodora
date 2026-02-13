import type { Task } from "@/models/Task/task-model";

export function getTaskStatus(task: Task, activeTask: Task | null) {
  if (task.completeDate) return "Conclúida";
  if (task.interruptDate) return "Interrompida";
  if (task.id === activeTask?.id) return "Em andamento";
  return "Abandonada";
}
