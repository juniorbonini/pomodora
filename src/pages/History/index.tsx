import styles from "./style.module.css";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Main } from "@/components/Main";
import { Trash2 } from "lucide-react";

export const History = () => {
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
                <tr>
                  <td>Estudar React.Js</td>
                  <td>25 minutos</td>
                  <td>09/01/2026</td>
                  <td>Concluído</td>
                  <td>Foco</td>
                </tr>
                <tr>
                  <td>Descanso</td>
                  <td>5 minutos</td>
                  <td>09/01/2026</td>
                  <td>Concluído</td>
                  <td>Descanso curto</td>
                </tr>
                <tr>
                  <td>Estudar React.Js</td>
                  <td>25 minutos</td>
                  <td>09/01/2026</td>
                  <td>Concluído</td>
                  <td>Foco</td>
                </tr>
                <tr>
                  <td>Descanso</td>
                  <td>5 minutos</td>
                  <td>09/01/2026</td>
                  <td>Em andamento</td>
                  <td>Descanso curto</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Container>
    </Main>
  );
};
