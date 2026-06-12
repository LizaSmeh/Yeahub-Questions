import styles from "./Footer.module.css";
import {
  logoFooter,
  figmaIcon,
  telegramIcon,
  youtubeIcon,
  githubIcon,
} from "../../icons";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles["logo-footer"]}>
          <img src={logoFooter} alt="" />
        </div>
        <p className={styles.text}>
          Выберете, каким будет IT завтра, вместе с нами
        </p>
        <p className={styles["text-area"]}>
          YeaHub — это полностью открытый проект, призванный объединить и
          улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub.
          Дизайн проекта также открыт для ознакомления в Figma.
        </p>
        <div className={styles.contacts}>
          <div className={styles.data}>
            <div className={styles.documents}>
              © 2024 YeaHub<a href="">Документы</a>
            </div>
            <p>Ищите нас и в других соцсетях @yeahub_it</p>
          </div>
          <div className={styles.connection}>
            <a href="">
              <img src={figmaIcon} alt="" />
            </a>
            <a href="">
              <img src={telegramIcon} alt="" />
            </a>
            <a href="">
              <img src={youtubeIcon} alt="" />
            </a>
            <a href="">
              <img src={githubIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
