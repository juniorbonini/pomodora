import type { Task } from "@/models/Task/task-model";
import type { SortTaskOptions } from "@/types/SortTask/sort-task";

export function sortTasks({
  field = "startDate",
  direction = "desc",
  tasks = [],
}: SortTaskOptions): Task[] {
  return [...tasks].sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];

    if (aValue === null && bValue === null) return 0;

    if (aValue === null) return 1;
    if (bValue === null) return -1;

    if (typeof aValue === "number" && typeof bValue === "number") {
      return direction === "asc" ? aValue - bValue : bValue - aValue;
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return direction === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return 0;
  });
}
