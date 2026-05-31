import styles from "./Category.module.css";
import { useState } from "react";

export const Category = ({
  title,
  items,
  showAll = true,
  onSelect,
  isActive,
}) => {
  const [expanded, setExpanded] = useState(false);

  const visibleItems = expanded ? items : items.slice(0, 5);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.specialization}>
      <p className={styles.name}>{title}</p>

      <div className={styles.list}>
        {visibleItems.map((item, index) => (
          <button
            className={`${styles.item} ${isActive?.(item) ? styles.active : ""}`}
            key={`${item.id}-${index}`}
            onClick={() => onSelect(item)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {showAll && items.length > 5 && (
        <button className={styles.all} onClick={toggleExpand}>
          {expanded ? "Скрыть" : "Посмотреть все"}
        </button>
      )}
    </div>
  );
};
