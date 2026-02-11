import "./theme/global.css";
import "./theme/theme.css";
import { MainRoutes } from "./routes/MainRoutes/main-routes";
import { TaskContextProvider } from "./context/TaskContext/task-provider-context";

export default function App() {
  return (
    <TaskContextProvider>
      <MainRoutes />
    </TaskContextProvider>
  );
}
