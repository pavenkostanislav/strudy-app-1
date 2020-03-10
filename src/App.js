import React from "react";
import TodoList from "./Todo/TodoList";
import AddTodo from "./Todo/AddTodo";
import Context from "./context";

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

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>React tutorial</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
        ) : (
          "Нет записей!"
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
