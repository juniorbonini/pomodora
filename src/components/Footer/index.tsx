import styles from "./style.module.css";
export const Footer = () => {
  return (
    <footer className={styles.container}>
      <a href="/pomodoro">Entenda como funciona a técnica Pomodoro ❤️</a>
      <a href="/">Pomodora {new Date().getFullYear()} feito com 💚</a>
    </footer>
  );
};
