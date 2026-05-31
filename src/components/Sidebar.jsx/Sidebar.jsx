import styles from "./Sidebar.module.css";
import { Category } from "./components/Category";
import { Search } from "./components/Search";
import { difficultyLevels, ratingLevels } from "../../constants/filters";
import { toggleArrayItem } from "../../utils/toggle-array-item";
import { useMemo, useEffect } from "react";
import { useApiCategory } from "../../hooks/useApiCategory";
import { API } from "../../constants/base-url";

export const Sidebar = ({
  search,
  setSearch,
  setPage,
  filters,
  setFilters,
  specializations,
}) => {
  const { data: skills } = useApiCategory(API.SKILLS);
  //const { data: specializations = [] } = useSpecialization();

  useEffect(() => {
    if (!specializations.length) return;

    setFilters((prev) => {
      if (prev.specialization) return prev;

      return {
        ...prev,
        specialization: specializations[0].slug,
        skills: [],
      };
    });
  }, [specializations]);

  const hadleSpecialization = (slug) => {
    setPage(1);
    setFilters((prev) => ({ ...prev, specialization: slug, skills: [] }));
  };

  const toggleFilter = (key, value) => {
    setPage(1);
    setFilters((prev) => ({
      ...prev,
      [key]: toggleArrayItem(prev[key], value),
    }));
  };

  const filteredSkills = useMemo(() => {
    if (!filters.specialization) return [];

    return skills.filter((skill) =>
      skill.specializations.some(
        (specialization) => specialization.slug === filters.specialization,
      ),
    );
  }, [skills, filters.specialization]);

  return (
    <section className={styles.filter}>
      <Search value={search} onChange={setSearch} onPage={setPage} />

      <Category
        title="Специализация"
        items={specializations}
        isActive={(item) => filters.specialization === item.slug}
        onSelect={(item) => hadleSpecialization(item.slug)}
      />
      <Category
        title="Навыки"
        items={filteredSkills}
        onSelect={(item) => toggleFilter("skills", item.id)}
        isActive={(item) => filters.skills.includes(item.id)}
      />
      <Category
        title="Уровень сложности"
        items={difficultyLevels}
        onSelect={(item) => toggleFilter("difficulty", item.id)}
        isActive={(item) => filters.difficulty.includes(item.id)}
        showAll={false}
      />
      <Category
        title="Рейтинг"
        items={ratingLevels}
        onSelect={(item) => toggleFilter("rating", item.id)}
        isActive={(item) => filters.rating.includes(item.id)}
        showAll={false}
      />
      {/* <Category title='Статус' items={status} showAll={false}/>
       */}
    </section>
  );
};
