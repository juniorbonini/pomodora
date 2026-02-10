import { PlayCircle } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";

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

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <Button icon={<PlayCircle />} />
      </div>
    </div>
  );
};
