import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Input } from "@/components/Input";
import { useTaskContext } from "@/context/TaskContext/task-context";
import { Main } from "@/Templates/Main";
import { Save } from "lucide-react";
import { useRef, type ChangeEvent } from "react";

export const Settings = () => {
  const { state } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const workTime = workTimeInput.current?.value;
    const shortBreakTime = shortBreakTimeInput.current?.value;
    const longBreakTime = longBreakTimeInput.current?.value;

    console.log(workTime, shortBreakTime, longBreakTime);
  }
  return (
    <Main>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: "center" }}>
          Modifique as configurações para tempo de foco, descanso curto e
          descanso longo.
        </p>
      </Container>
      <Container>
        <form className="form" onSubmit={handleSaveSettings}>
          <div className="formRow">
            <Input
              ref={workTimeInput}
              defaultValue={state.config.workTime}
              type="number"
              label="Foco (min)"
              id="workTime"
              placeholder="25"
              min={25}
            />
          </div>
          <div className="formRow">
            <Input
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
              type="number"
              label="Descanso curto (min)"
              id="shortBreakTime"
              placeholder="5"
              min={5}
            />
          </div>
          <div className="formRow">
            <Input
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
              type="number"
              label="Descanso longo (min)"
              id="longBreakTime"
              min={15}
            />
          </div>
          <Button icon={<Save />} />
        </form>
      </Container>
    </Main>
  );
};
