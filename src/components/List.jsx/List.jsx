import { useEffect, useMemo, useState } from "react";
import styles from "./List.module.css";
import { Pagination } from "./components/Pagination.jsx";
import { useFetch } from "../../hooks/useFetch.jsx";
import { questionsUrlParams } from "../../api/questions-url-params.js";
import { QuestionCard } from "./components/QuestionCard.jsx";
import { useDebounse } from "../../hooks/useDebounse.jsx";

export const List = ({ search, page, setPage, filters, specializations }) => {
  const [isOpen, setIsOpen] = useState(null);

  const debounseSearch = useDebounse(search);

  const url = useMemo(() => {
    return questionsUrlParams({
      page,
      limit: 10,
      search: debounseSearch,
      filters,
    });
  }, [page, debounseSearch, filters]);

  console.log(url);
  const { data, total } = useFetch(url);
  const questions = data || [];

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [page]);

  const toggleQuestion = (id) => {
    setIsOpen((prev) => (prev === id ? null : id));
  };

  const currentSpecialization = specializations.find(
    (item) => item.slug === filters.specialization,
  );
  console.log(specializations);

  return (
    <section className={styles["list-question"]}>
      <div className={styles["container-question"]}>
        <h2 className={styles["container-titel"]}>
          Вопросы {currentSpecialization?.title}
        </h2>
        <>
          {questions.map((item) => (
            <QuestionCard
              key={item.id}
              item={item}
              isOpen={isOpen === item.id}
              onToggle={toggleQuestion}
            />
          ))}
        </>
      </div>
      <Pagination currentPage={page} totalPage={total} onPageChange={setPage} />
    </section>
  );
};
