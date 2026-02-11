import { PlayCircle } from "lucide-react";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Cycles } from "@/components/Cycles";
import { Container } from "@/components/Container";
import { TimerDisplay } from "@/components/TimerDisplay";
import { useRef, type ChangeEvent } from "react";
import type { Task } from "@/models/Task/task-model";
import { useTaskContext } from "@/context/TaskContext/task-context";

export const Form = () => {
  const { dispatch } = useTaskContext();
  const inputValue = useRef(null);

  function createTask(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!inputValue.current) return;

    const taskName = inputValue.current.value;

    if (!taskName) {
      alert("Digite o nome da tarefa!");
      return;
    }

    console.log(taskName);

    const newTask: Task = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: "workTime",
    };

    const secondsRemaing = newTask.duration * 60;

    dispatch((prev) => {
      return {
        ...prev,
        activeTask: newTask,
        secondsRemaing,
        formattedSecondsRemaing: "00:00",
        startDate: Date.now().toString(),
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

      <div className="formRow">
        <span>Foque durante 25 min em Estudar React.Js</span>
      </div>
      <Container>
        <TimerDisplay />
      </Container>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <Button icon={<PlayCircle />} />
      </div>
    </form>
  );
};
