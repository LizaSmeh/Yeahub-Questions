export const toggleArrayItem = (array, value) => {
  const exists = array.includes(value);
  if (exists) {
    return array.filter((item) => item !== value);
  }
  return [...array, value];
};
