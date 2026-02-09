import { History, House, Settings, Sun } from "lucide-react";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import type { ChangeTheme } from "@/types/ChangeTheme/change-theme";

export const Menu = () => {
  const [theme, setTheme] = useState<ChangeTheme>("dark");

  function onToggle() {
    console.log("Clicado", Date.now());

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className={styles.container}>
      <a
        href="#"
        aria-label="Voltar a página principal"
        className={styles.link}
      >
        <House />
      </a>
      <a
        href="#"
        aria-label="Ir para página de histórico"
        className={styles.link}
      >
        <History />
      </a>
      <a
        href="#"
        aria-label="Ir para página de configurações"
        className={styles.link}
      >
        <Settings />
      </a>
      <a
        href="#"
        aria-label="Mudar tema"
        className={styles.link}
        onClick={onToggle}
      >
        <Sun />
      </a>
    </nav>
  );
};
