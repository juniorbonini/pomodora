import type { Task } from "@/models/Task/task-model";

export type SortTaskOptions = {
  field?: keyof Task;
  tasks: Task[];
  direction?: "asc" | "desc";
};
