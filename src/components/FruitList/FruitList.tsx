export default function FruitList({ fruits }: { fruits: string[] }) {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <h4>Fruit Lists</h4>
      <ul style={{ textAlign: "center", width: "70%", margin: "0 auto" }}>
        {fruits.map((fruit, index) => (
          <li
            style={{
              border: "1px solid black",
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              textTransform: "capitalize",
            }}
            key={index}
          >
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}
