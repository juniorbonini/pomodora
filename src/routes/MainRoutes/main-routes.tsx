import { History } from "@/pages/History";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { Pomodoro } from "@/pages/Pomodoro";
import { Settings } from "@/pages/Settings";
import { BrowserRouter, Routes, Route } from "react-router";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/*" element={<NotFound />} />
        <Route index path="/pomodoro" element={<Pomodoro />} />
        <Route index path="/settings" element={<Settings />} />
        <Route index path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
};
