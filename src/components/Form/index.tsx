import { PlayCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { Cycles } from "@/components/Cycles";
import { Input } from "@/components/Input";
import { Container } from "@/components/Container";
import { TimerDisplay } from "@/components/TimerDisplay";

export const Form = () => {
  return (
    <div className="form">
      <div className="formRow">
        <Input
          type="text"
          label="Tarefa"
          id="tarefa"
          placeholder="Digite o nome da tarefa"
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
    </div>
  );
};
