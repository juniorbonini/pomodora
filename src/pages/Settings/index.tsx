import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Input } from "@/components/Input";
import { Main } from "@/components/Main";
import { Save } from "lucide-react";

export const Settings = () => {
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
        <form className="form">
          <div className="formRow">
            <Input
              type="numeric"
              label="Foco (min)"
              id="workTime"
              placeholder="0"
            />
          </div>
          <div className="formRow">
            <Input
              type="numeric"
              label="Descanso curto (min)"
              id="shortBreakTime"
              placeholder="0"
            />
          </div>
          <div className="formRow">
            <Input
              type="numeric"
              label="Descanso longo (min)"
              id="longBreakTime"
              placeholder="0"
            />
          </div>
          <Button icon={<Save />} />
        </form>
      </Container>
    </Main>
  );
};
