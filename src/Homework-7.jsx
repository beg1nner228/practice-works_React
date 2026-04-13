  import TaskList from "./components-hm7/TaskList";
  import { useState } from "react";

  export default function Homework_7() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    return (
      <div>
        <h1>Homework 7: Task List</h1>
        <form action="">
          <input 
            type="text" 
            placeholder="Enter a new task..."
            value={inputValue}
            onChange={(e) =>{
              if (e.target.value.trim() === "") {
                alert("Task cannot be empty!");
                return;
              }
              setInputValue(e.target.value);
            }}
          />
          <button type="submit" onClick={(e) => {
            e.preventDefault();
            if (inputValue.trim() === "") {
              alert("Task cannot be empty!");
              return;
            }
            setTasks([...tasks, inputValue]);
            setInputValue("");
          }}>Add Task</button>
        </form>
        <TaskList tasks={tasks || []} taskHandler={(task) => setTasks(tasks.filter((t) => t !== task))} />
      </div>
    );
  }