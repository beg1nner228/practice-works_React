import { useState } from "react";

export default function TaskList({tasks, taskHandler}){

  return (
    <ul>
      {tasks.map((item, index) => (
        <li key={index}>{item} <button onClick={() => taskHandler(item)}>Remove</button></li>
      ))}
    </ul>
  );
}