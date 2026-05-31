import styles from "./App.module.css";
import { List } from "./components/List.jsx/List";
import { Sidebar } from "./components/Sidebar.jsx/Sidebar";
import { Header } from "./components/Header.jsx/Header";
import { Footer } from "./components/Footer.jsx/Footer";
import { useState } from "react";
import { useApiCategory } from "./hooks/useApiCategory";
import { API } from "./constants/base-url";

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState({
    specialization: "react-frontend-developer",
    skills: [],
    difficulty: [],
    rating: [],
  });

  const { data: specializations = [] } = useApiCategory(API.SPECIALIZATIONS);

  return (
    <div className={styles.app}>
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
