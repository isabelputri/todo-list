import React from "react";

// CSS
import "./ToDoItem.css";

function ToDoItem(props) {
  const { todo, completeToDo, index, removeToDo } = props;

  return (
    <div className={`todo ${todo.isComplete ? "complete" : ""}`}>
      {todo.text}
      <div>
        <button onClick={() => completeToDo(index)}>Complete</button>
        <button onClick={() => removeToDo(index)}>x</button>
      </div>
    </div>
  );
}

export default ToDoItem;
