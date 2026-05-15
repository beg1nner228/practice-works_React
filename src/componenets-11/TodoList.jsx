export default function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed-task" : ""}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          {todo.text}
        </li>
      ))}
    </ul>
  );
}