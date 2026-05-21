const styles = {
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: "20px",
    borderRadius: "8px",
  },
  input: {
    padding: "10px 15px",
    fontSize: "16px",
    border: "2px solid #ddd",
    borderRadius: "4px",
    width: "300px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default function SearchForm({ onSearch, onInputChange, query }) {
  return (
    <form style={styles.form} onSubmit={onSearch}>
      <input
        style={styles.input}
        type="text"
        placeholder="Search images..."
        value={query}
        onChange={onInputChange}
        onFocus={(e) => (e.target.style.borderColor = "#007bff")}
        onBlur={(e) => (e.target.style.borderColor = "#ddd")}
      />
      <button
        style={styles.button}
        type="submit"
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Search
      </button>
    </form>
  );
}