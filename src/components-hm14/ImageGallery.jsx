const styles = {
  ul: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  li: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    overflow: "hidden",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    display: "block",
  },
};

export default function ImageGallery({ items, onItemClick }) {
  return (
    <ul style={styles.ul}>
      {items.map((item, index) => (
        <li
          key={`${item.id ?? index}-${index}`}
          style={styles.li}
          onClick={() => onItemClick?.(item)}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
          }}
        >
          <img src={item.webformatURL} alt={item.tags} style={styles.img} />
        </li>
      ))}
    </ul>
  );
}