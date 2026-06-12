import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let cancelled = false;
    console.log('Начинаю загрузку данных по URL:', url);
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        if (cancelled) return;
        console.log('Результат загрузки:', result);
        setData(result.data ?? result);
        setTotal(result.total);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      cancelled = true; 
    };
  }, [url]);

  return { data, total, isLoading, error };
};
