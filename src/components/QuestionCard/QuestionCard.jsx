import styles from "./QuestionCard.module.css";
import { MarkdownViewer } from "../MarkdownViewer/MarkdownViewer";
import { Link } from "react-router";
import { detailedIcon } from "../../icons";

export const QuestionCard = ({ item, isOpen, onToggle }) => {
  return (
    <>
      <div className={styles.question}>
        <div
          className={styles["question-title"]}
          onClick={() => onToggle(item.id)}
        >
          <p className={styles.title}>{item.title}</p>
          <div className={styles["arrow-box"]}>
            <span
              className={isOpen ? styles["arrow-up"] : styles["arrow-down"]}
            ></span>
          </div>
        </div>
        {isOpen && (
          <div className={styles["question-data"]}>
            <div className={styles.frame}>
              <div className={styles["frame-rating"]}>
                <p className={styles.rating}>Рейтинг:</p>
                <span className={styles.number}>{item.rate}</span>
              </div>
              <div className={styles["frame-difficulty"]}>
                <p className={styles.difficulty}>Сложность:</p>
                <span className={styles.number}>{item.complexity}</span>
              </div>
            </div>
            {item.imageSrc && (
              <img className={styles.img} src={item.imageSrc} alt="" />
            )}

            <div className={styles.answer}>
              <MarkdownViewer text={item.shortAnswer}></MarkdownViewer>
            </div>
            <Link
              to={`/question/${item.id}`}
              className={styles["more-detailed"]}
            >
              <span>Подробнее</span>
              <img src={detailedIcon} alt="" />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
