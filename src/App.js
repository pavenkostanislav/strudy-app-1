import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const todos = [
    { id: 0, completed: false, title: "Купить хлеб" },
    { id: 1, completed: false, title: "Купить масло" },
    { id: 2, completed: false, title: "Купить икру" },
    { id: 3, completed: false, title: "Купить чай" }
  ];
  return (
    <div className='wrapper'>
      <h1>React tutorial</h1>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
