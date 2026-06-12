import styles from "./App.module.css";
import { List } from "./components/List.jsx/List";
import { Sidebar } from "./components/Sidebar.jsx/Sidebar";
import { useEffect, useState } from "react";
import { useApiCategory } from "./hooks/useApiCategory";
import { API } from "./constants/base-url";
import { useSearchParams } from "react-router";

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState({
    specialization: "react-frontend-developer",
    skills: [],
    difficulty: [],
    rating: [],
  });

  const [searchParams] = useSearchParams();

  const { data: specializations = [] } = useApiCategory(API.SPECIALIZATIONS);

  useEffect(() => {
    const queary = searchParams.get("search");
    const skillId = searchParams.get("skills");

    if (queary) {
      setSearch(queary);
    }

    setFilters((prev) => ({
      ...prev,
      skills: skillId ? [Number(skillId)] : [],
    }));
    setPage(1);
  }, [searchParams]);

  return (
    <div className={styles.main}>
      <List
        search={search}
        page={page}
        setPage={setPage}
        filters={filters}
        specializations={specializations}
      />
      <Sidebar
        search={search}
        setSearch={setSearch}
        setPage={setPage}
        filters={filters}
        setFilters={setFilters}
        specializations={specializations}
      />
    </div>
  );
}

export default App;
