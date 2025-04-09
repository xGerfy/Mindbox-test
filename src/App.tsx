import React from "react";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";
import "./styles.css";

const App: React.FC = () => {
  const { addTodo, todos, toggleTodo } = useTodos();

  return (
    <div className="app">
      <h1>Todos</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
};

export default App;
