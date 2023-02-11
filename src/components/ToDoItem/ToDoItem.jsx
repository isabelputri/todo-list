import React from "react";

// CSS
import "./ToDoItem.css";

function ToDoItem(props) {
  const { todo, completeToDo, index } = props;

  return (
    <div className={`todo ${todo.isComplete ? "complete" : ""}`}>
      {todo.text}
      <button onClick={() => completeToDo(index)}>Complete</button>
      <button onClick={() => remove ToDo(index)}>x</button>
    </div>
  );
}

export default ToDoItem;
