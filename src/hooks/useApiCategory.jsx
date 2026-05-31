import { useFetch } from "./useFetch";

export const useApiCategory = (url) => {
    const { data } = useFetch(url);
    
      return { data: Array.isArray(data) ? data : [] };
}