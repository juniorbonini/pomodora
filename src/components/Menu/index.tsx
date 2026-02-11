import { History, House, Moon, Settings, Sun } from "lucide-react";
import styles from "./style.module.css";
import type { ButtonProps } from "@/types/Button/button";
import { useEffect, useState } from "react";
import type { ChangeTheme } from "@/types/ChangeTheme/change-theme";
import { useNavigate } from "react-router";

export const Menu = ({ ...props }: ButtonProps) => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<ChangeTheme>(() => {
    const storage = localStorage.getItem("theme") as ChangeTheme;
    return storage;
  });

  function onToggleTheme() {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      return next;
    });

    console.log("O tema é:", theme);
  }

  const nextIcon = {
    dark: <Sun />,
    light: <Moon />,
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.container}>
      <button
        aria-label="Voltar a página principal"
        onClick={() => navigate("/")}
        className={styles.link}
      >
        <House />
      </button>
      <button
        aria-label="Ir para página de histórico"
        onClick={() => navigate("/history")}
        className={styles.link}
      >
        <History />
      </button>
      <button
        aria-label="Ir para página de configurações"
        onClick={() => navigate("/settings")}
        className={styles.link}
      >
        <Settings />
      </button>
      <button className={styles.link} onClick={onToggleTheme} {...props}>
        {nextIcon[theme]}
      </button>
    </nav>
  );
};
