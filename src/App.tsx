import "./theme/global.css";
import "./theme/theme.css";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Pomodoro } from "./pages/Pomodoro";

export default function App() {
  return (
    <>
      <Pomodoro />
    </>
  );
}
