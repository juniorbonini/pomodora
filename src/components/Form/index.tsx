import { PlayCircle, StopCircle } from "lucide-react";
import { useRef, type ChangeEvent } from "react";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Cycles } from "@/components/Cycles";
import { Container } from "@/components/Container";
import type { Task } from "@/models/Task/task-model";
import { TimerDisplay } from "@/components/TimerDisplay";
import { getNextCycle } from "@/utils/NextCycle/get-next-cycle";
import { useTaskContext } from "@/context/TaskContext/task-context";
import { getNextCycleType } from "@/utils/NextCycle/get-next-cycle-type";
import { formatSecondsToMinutes } from "@/utils/FormatSeconds/format-seconds-to-minutes";

export const Form = () => {
  const { task, setTask } = useTaskContext();
  const inputValue = useRef(null);
  const nextCycle = getNextCycle(task.currentCycle);
  const getCycleType = getNextCycleType(nextCycle);

  function createTask(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!inputValue.current) return;

    const taskName = inputValue.current.value;

    if (!taskName) {
      alert("Digite o nome da tarefa!");
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
    const secondsRemaing = newTask.duration * 60;

    setTask((prev) => {
      return {
        ...prev,
        activeTask: newTask,
        secondsRemaing,
        formattedSecondsRemaing: formatSecondsToMinutes(secondsRemaing),
        startDate: Date.now().toString(),
        currentCycle: nextCycle,
        config: {
          ...prev.config,
        },
        tasks: [...prev.tasks, newTask],
      };
      console.log(newTask);
    });
  }

  function handleInterruptTask() {
    setTask((prev) => {
      return {
        ...prev,
        activeTask: null,
        formattedSecondsRemaing: "00:00",
        secondsRemaing: 0,
        tasks: prev.tasks.map((task) => {
          if (prev.activeTask && prev.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    });
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
        />
      </div>

      <div className="formRow">Foque por 25 min</div>
      <Container>
        <TimerDisplay />
      </Container>

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
