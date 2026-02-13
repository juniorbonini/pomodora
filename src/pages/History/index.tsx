import styles from "./style.module.css";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { useTaskContext } from "@/context/TaskContext/task-context";
import { Main } from "@/Templates/Main";
import type { SortTaskOptions } from "@/types/SortTask/sort-task";
import { formatDate } from "@/utils/FormatDate/format-date";
import { sortTasks } from "@/utils/SortTask/sort-task";
import { getTaskStatus } from "@/utils/TaskStatus/task-status";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export const History = () => {
  const { state } = useTaskContext();
  const [sortTaskOptions, setSortTaskOptions] = useState<SortTaskOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: "startDate",
        direction: "desc",
      };
    },
  );

  function handleSortTaskOptions({ field }: Pick<SortTaskOptions, "field">) {
    const newDirection = sortTaskOptions.direction === "desc" ? "asc" : "desc";

    setSortTaskOptions({
      tasks: sortTasks({
        direction: newDirection,
        field,
        tasks: sortTaskOptions.tasks,
      }),
      direction: newDirection,
      field,
    });
  }

  return (
    <Main>
      <Container>
        <Heading>
          Histórico
          <button className={styles.button}>
            <Trash2 />
          </button>
        </Heading>

        <Container>
          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <th
                    onClick={() => handleSortTaskOptions({ field: "name" })}
                    className={styles.thSort}
                  >
                    Tarefa ↕
                  </th>

                  <th
                    onClick={() => handleSortTaskOptions({ field: "duration" })}
                    className={styles.thSort}
                  >
                    Duraçåo ↕
                  </th>
                  <th
                    onClick={() =>
                      handleSortTaskOptions({ field: "startDate" })
                    }
                    className={styles.thSort}
                  >
                    Data ↕
                  </th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {sortTaskOptions.tasks.map((task) => {
                  const taskTypeHistory = {
                    workTime: "Foco",
                    shortBreakTime: "Descanso curto",
                    longBreakTime: "Descando longo",
                  };
                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration}</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeHistory[task.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Container>
      </Container>
    </Main>
  );
};
