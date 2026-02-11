import { PlayCircle } from "lucide-react";
import { useRef, type ChangeEvent } from "react";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Cycles } from "@/components/Cycles";
import { Container } from "@/components/Container";
import type { Task } from "@/models/Task/task-model";
import { TimerDisplay } from "@/components/TimerDisplay";
import { getNextCycle } from "@/utils/NextCycle/get-next-cycle";
import { useTaskContext } from "@/context/TaskContext/task-context";
import { formatSecondsToMinutes } from "@/utils/FormatSeconds/format-seconds-to-minutes";
import { getNextCycleType } from "@/utils/NextCycle/get-next-cycle-type";

export const Form = () => {
  const { state, dispatch } = useTaskContext();
  const inputValue = useRef(null);
  const nextCycle = getNextCycle(state.currentCycle);
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
      duration: state.config[getCycleType],
      type: getCycleType,
    };
    const secondsRemaing = newTask.duration * 60;

    dispatch((prev) => {
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
        tasks: {
          ...prev.tasks,
          newTask,
        },
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
        />
      </div>

      <div className="formRow">Foque por 25 min</div>
      <Container>
        <TimerDisplay />
      </Container>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        <Button icon={<PlayCircle />} />
      </div>
    </form>
  );
};
