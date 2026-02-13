import { useRef, type ChangeEvent } from "react";
import { PlayCircle, StopCircle } from "lucide-react";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Cycles } from "@/components/Cycles";
import { Container } from "@/components/Container";
import type { Task } from "@/models/Task/task-model";
import { TimerDisplay } from "@/components/TimerDisplay";
import { getNextCycle } from "@/utils/NextCycle/get-next-cycle";
import { useTaskContext } from "@/context/TaskContext/task-context";
import { TaskActionTypes } from "@/context/TaskReducer/task-aciton";
import { getNextCycleType } from "@/utils/NextCycle/get-next-cycle-type";
import { Tips } from "../Tips";
import { showNotification } from "@/notifications/show-notification";

export const Form = () => {
  const { task, setTask } = useTaskContext();
  const inputValue = useRef(null);
  const nextCycle = getNextCycle(task.currentCycle);
  const getCycleType = getNextCycleType(nextCycle);
  const lastTaskName = task.tasks[task.tasks.length - 1]?.name || "";

  function createTask(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    showNotification.dimiss();

    if (!inputValue.current) return;

    const taskName = inputValue.current.value;
    if (!taskName) {
      showNotification.warn("Insira o nome da tarefa.");
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: task.config[getCycleType],
      type: getCycleType,
    };
    setTask({ type: TaskActionTypes.START_TASK, payload: newTask });
    showNotification.succes("Tarefa iniciada.");
  }

  function handleInterruptTask() {
    setTask({ type: TaskActionTypes.INTERRUPT_TASK });
    showNotification.error("Tarefa interrompida.");
  }
  return (
    <form className="form" onSubmit={createTask}>
      <div className="formRow">
        <Input
          type="text"
          label="Tarefa"
          id="tarefa"
          placeholder="Digite o nome da tarefa"
          ref={inputValue}
          disabled={!!task.activeTask}
          defaultValue={lastTaskName}
        />
      </div>

      <Container>
        <TimerDisplay />
      </Container>

      <div className="formRow">
        <Tips />
      </div>

      {task.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      {!task.activeTask && (
        <Button
          aria-label="Iniciar nova tarefa"
          title="Iniciar nova tarefa"
          type="submit"
          key="botao-submit"
          icon={<PlayCircle />}
        />
      )}
      {!!task.activeTask && (
        <Button
          icon={<StopCircle />}
          aria-label="Interromper tarefa"
          title="Interromper tarefa"
          key="botao-interrupt"
          color="red"
          onClick={handleInterruptTask}
        />
      )}
    </form>
  );
};
