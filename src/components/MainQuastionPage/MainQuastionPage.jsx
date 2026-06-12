import styles from "./MainQuastionPage.module.css";
import { Link } from "react-router";
import { prevPageIcon, nextPageIcon } from "../../icons";
import { Answer } from "../Answer/Answer";

export const MainQuastionPage = ({ question, prevQuastion, nextQuastion }) => {
  return (
    <main className={styles.content}>
      <section className={styles.header}>
        {question?.imageSrc && <img src={question.imageSrc} />}
        <div className={styles["quastion-name"]}>
          <h2>{question?.title}</h2>
          <p>{question?.description}</p>
        </div>
      </section>
      <nav className={styles.navigate}>
        <Link
          to={`/question/${prevQuastion?.id}`}
          className={styles["nav-link"]}
        >
          <img src={prevPageIcon} alt="" />

          <span>Предыдущий</span>
        </Link>
        <Link
          to={`/question/${nextQuastion?.id}`}
          className={styles["nav-link"]}
        >
          <span>Следующий</span>
          <img src={nextPageIcon} alt="" />
        </Link>
      </nav>
      <Answer title="Краткий ответ" text={question?.shortAnswer} />
      <Answer title="Развёрнутый ответ" text={question?.longAnswer} toggle />
    </main>
  );
};
