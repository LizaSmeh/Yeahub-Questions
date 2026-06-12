import { useState } from "react";
import { MarkdownViewer } from "../MarkdownViewer/MarkdownViewer";
import styles from "./Answer.module.css";
import rollUpIcon from "../../icons/rollUp.svg";

export const Answer = ({ title, text, toggle = false }) => {
  const [isOpenAnswer, setIsOpenAnswer] = useState(false);
  const isCollapsed = toggle && !isOpenAnswer;

  return (
    <section className={styles["container-answer"]}>
      <h2>{title}</h2>
      <div
        className={`${styles.content} ${isCollapsed ? styles.collapsed : ""}`}
      >
        <MarkdownViewer text={text} />
        {isCollapsed && (
          <div className={styles.overlay}>
            <button onClick={() => setIsOpenAnswer(true)}>
              <span>Развернуть</span>
              <img src={rollUpIcon} alt="" />
            </button>
          </div>
        )}
      </div>

      {toggle && isOpenAnswer && (
        <button onClick={() => setIsOpenAnswer(false)}>
          <img src={rollUpIcon} alt="" />
          <span>Свернуть</span>
        </button>
      )}
    </section>
  );
};
