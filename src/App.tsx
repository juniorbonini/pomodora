import { PlayCircle, StopCircle } from "lucide-react";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Cycles } from "./components/Cycles";
import { Input } from "./components/Input";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { TimerDisplay } from "./components/TimerDisplay";

import "./theme/global.css";
import "./theme/theme.css";

export default function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <TimerDisplay />
      </Container>
      <Container>
        <Input label="task" type="text" id="taskName" placeholder="Task" />
      </Container>
      <Container>
        <Cycles />
      </Container>
      <Container>
        <Button color="green" icon={<PlayCircle />} />
        <Button color="red" icon={<StopCircle />} />
      </Container>
    </>
  );
}
