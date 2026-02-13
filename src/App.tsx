import "./theme/global.css";
import "./theme/theme.css";
import { MainRoutes } from "./routes/MainRoutes/main-routes";
import { TaskContextProvider } from "./context/TaskContext/task-provider-context";
import { Notification } from "./components/Notification";

export default function App() {
  return (
    <TaskContextProvider>
      <Notification>
        <MainRoutes />
      </Notification>
    </TaskContextProvider>
  );
}
