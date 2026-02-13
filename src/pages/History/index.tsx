import styles from "./style.module.css";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { useTaskContext } from "@/context/TaskContext/task-context";
import { Main } from "@/Templates/Main";
import { formatDate } from "@/utils/FormatDate/format-date";
import { getTaskStatus } from "@/utils/TaskStatus/task-status";
import { Trash2 } from "lucide-react";

export const History = () => {
  const { state } = useTaskContext();
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
                  <th className={styles.thSort}>Tarefa ↕</th>

                  <th className={styles.thSort}>Duraçåo ↕</th>
                  <th className={styles.thSort}>Data ↕</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {state.tasks.map((task) => {
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
