import styles from "./QuastionSidebarSection.module.css";


export const QuastionSidebarSection = ({ title, children }) => {
  return (
    <section className={styles["container-filter"]}>
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  );
};
