import styles from "./Sidebar.module.css";
import { Filter } from "../Filter/Filter";
import { Search } from "../Search/Search";
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

      <Filter
        title="Специализация"
        items={specializations}
        isActive={(item) => filters.specialization === item.slug}
        onSelect={(item) => hadleSpecialization(item.slug)}
      />
      <Filter
        title="Навыки"
        items={filteredSkills}
        onSelect={(item) => toggleFilter("skills", item.id)}
        isActive={(item) => filters.skills.includes(item.id)}
      />
      <Filter
        title="Уровень сложности"
        items={difficultyLevels}
        onSelect={(item) => toggleFilter("difficulty", item.id)}
        isActive={(item) => filters.difficulty.includes(item.id)}
        showAll={false}
      />
      <Filter
        title="Рейтинг"
        items={ratingLevels}
        onSelect={(item) => toggleFilter("rating", item.id)}
        isActive={(item) => filters.rating.includes(item.id)}
        showAll={false}
      />
    </section>
  );
};
