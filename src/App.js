import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 0, completed: false, title: "Купить хлеб" },
    { id: 1, completed: true, title: "Купить масло" },
    { id: 2, completed: false, title: "Купить икру" },
    { id: 3, completed: false, title: "Купить чай" }
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  return (
    <div className='wrapper'>
      <h1>React tutorial</h1>
      <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
    </div>
  );
}

export default App;
