import { logoOneIcon, logoTwoIcon } from "../../icons";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <div className={styles.picture}>
              <img src={logoOneIcon} alt="" />
            </div>
            <img src={logoTwoIcon} alt="" />
          </div>
          <nav className={styles["nav-list"]}>
            <a href="">База вопросов</a>
            <a href="">Тренажер</a>
            <a href="">Материалы</a>
            <a href="">Навыки (hh)</a>
          </nav>
        </div>
        <div className={styles.btns}>
          <button className={styles.entrance}>Вход</button>
          <button className={styles.exit}>Регистрация</button>
        </div>
      </div>
    </header>
  );
};
