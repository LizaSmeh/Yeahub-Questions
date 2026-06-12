import styles from "./Search.module.css";

export const Search = ({ value, onChange, onPage }) => {
  const handleSearch = (e) => {
    onPage(1);
    onChange(e.target.value);
  };

  return (
    <>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={handleSearch}
        placeholder="Введите запрос..."
      />
    </>
  );
};
