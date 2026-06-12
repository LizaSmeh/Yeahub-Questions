import styles from './AsideQuastionPage.module.css';
import { QuastionSidebarSection } from '../QuastionSidebarSection/QuastionSidebarSection';

export const AsideQuastionPage =({question, goToSkill, goToKeyWord}) => {
    return (
        <aside className={styles.sidebar}>
            <QuastionSidebarSection title="Уровень:">
              <div className={styles["frame"]}>
                <p className={styles["level"]}>Сложность:</p>{" "}
                <span className={styles.number}>{question?.complexity}</span>
              </div>
              <div className={styles["frame"]}>
                <p className={styles["level"]}>Рейтинг:</p>
                <span className={styles.number}>{question?.rate}</span>
              </div>
            </QuastionSidebarSection>
            <QuastionSidebarSection title="Навыки:">
              <div>
                {question?.questionSkills.map((skill) => (
                  <button key={skill.id} className={styles.item} onClick={()=> goToSkill(skill)}>
                    {skill.title}
                  </button>
                ))}
              </div>
            </QuastionSidebarSection>
            <QuastionSidebarSection title="Ключевые слова:">
              <div>
                {question?.keywords.map((word) => (
                  <button key={word} className={styles.tag} onClick={()=> goToKeyWord(word)}>
                    #{word}
                  </button>
                ))}
              </div>
            </QuastionSidebarSection>
          </aside>
    )
}