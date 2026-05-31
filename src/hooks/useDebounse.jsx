import { useState, useEffect } from "react";

export const useDebounse = (value, delay = 500) => {
  const [debounseValue, setDebounseValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounseValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounseValue;
};
