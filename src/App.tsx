import React from "react";
import { TodoInput } from "./components/TodoInput";
import { useTodos } from "./hooks/useTodos";
import "./styles.css";

const App: React.FC = () => {
  const { addTodo } = useTodos();

  return (
    <div className="app">
      <h1>Todos</h1>
      <TodoInput onAdd={addTodo} />
    </div>
  );
};

export default App;
