export default function Filter({ filter, setFilter, list }) {

  

  return (
    <div>
      <button onClick={() => {
        setFilter("all");
        list.filter((task) => true);
      }} disabled={filter === "all"}>All</button>
      <button onClick={() => {
        setFilter("active");
        list.filter((task) => task.completed === false);
      }} disabled={filter === "active"}>Active</button>
      <button onClick={() => {
        setFilter("completed");
        list.filter((task) => task.completed === true);
      }} disabled={filter === "completed"}>Completed</button>
    </div>
  );
}
