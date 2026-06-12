import styles from "./Pagination.module.css";
import { getPages } from "../../utils/get-pages";
import { nextPaginationIcon, prevPaginationIcon } from "../../icons";

export const Pagination = ({ currentPage, totalPage, onPageChange }) => {
  const pages = getPages(totalPage, currentPage);

  return (
    <div className={styles.pagination}>
      <button
        className={styles.back}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <img src={prevPaginationIcon} alt="" />
      </button>
      {pages.map((page, index) =>
        page === "..." ? (
          <span key={`dots-${index}`} className={styles["btn-pagination"]}>
            ...
          </span>
        ) : (
          <button
            key={`${page} - ${index}`}
            className={
              currentPage === page ? styles.active : styles["btn-pagination"]
            }
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ),
      )}

      <button
        className={styles.forward}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <img src={nextPaginationIcon} alt="" />
      </button>
    </div>
  );
};
