import React, { useState } from "react";

//Components
import ToDoItem from "./components/ToDoItem/ToDoItem";
import ToDoForm from "./components/ToDoForm/ToDoForm";

//CSS

import "./App.css";

function App() {
  // parent component
  //State
  const [todos, setTodos] = useState([
    { text: "Do this", isComplete: false },
    { text: "Do that", isComplete: false },
    { text: "Maybe something else", isComplete: false },
  ]);

  // Actions
  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isComplete: false }]; // ... --> grabbing the items in the array and expands the array//
    setTodos(newTodos);
  };

  const completeToDo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  const removeToDo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>ToDoList</h1>
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            todo={todo}
            index={index}
            completeToDo={completeToDo}
            remoteToDo={removeToDo}
          /> // Can replace todo={todo} with just todo //
        ))}
        <ToDoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
