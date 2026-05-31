import { API } from "../constants/base-url";

export const questionsUrlParams = ({
  page = 1,
  limit = 10,
  search,
  filters,
}) => {
  const params = new URLSearchParams();

  params.append("page", page);
  params.append("limit", limit);

  if (search.trim()) {
    params.append("titleOrDescription", search.trim());
  }

  if (filters.specialization) {
    params.append("specializationSlug", filters.specialization);
  }

  if (filters.skills.length > 0) {
    filters.skills.forEach((id) => {
      params.append("skills", id);
    });
  }

  if (filters.difficulty.length > 0) {
    params.append("complexity", filters.difficulty.join(","));
  }

  if (filters.rating.length > 0) {
    params.append("rate", filters.rating.join(","));
  }

  return `${API.QUESTIONS}?${params.toString()}`;
};
