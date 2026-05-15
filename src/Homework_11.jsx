import TodoEditor from "./componenets-11/TodoEditor";
import TodoList from "./componenets-11/TodoList";
import React from "react";
import Filter from "./componenets-11/Filter";


export default function Homework_11() {

  const [inputValue, setInputValue] = React.useState({"id": "", "text": "", "completed": false});
  const [taskItems, setTaskItems] = React.useState([]);
  const [taskProgress, setTaskProgress] = React.useState("all");

  const filteredTasks = taskItems.filter((task) => {
    if (taskProgress === "all") return true;
    if (taskProgress === "active") return !task.completed;
    if (taskProgress === "completed") return task.completed;
    return true;
  });

  return (
    <div>
      <h1>Todo List</h1>
      <TodoEditor onAdd={(task) => setTaskItems([...taskItems, task])} inputValue={inputValue} setInputValue={setInputValue} />
      <TodoList todos={filteredTasks} onToggle={(id) => setTaskItems(taskItems.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))} />
      <Filter filter={taskProgress} setFilter={setTaskProgress} list={taskItems} />
    </div>
  );
}