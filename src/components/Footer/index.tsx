import styles from "./style.module.css";
export const Footer = () => {
  return (
    <footer className={styles.container}>
      <a href="">Entenda como funciona a técnica Pomodor</a>
      <a href="">Pomodora &copy {new Date().getFullYear()} feito com 💚</a>
    </footer>
  );
};
