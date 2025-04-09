import React from "react";
import { TodoFilter } from "./components/TodoFilter";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";
import "./styles.css";

const App: React.FC = () => {
  const {
    todos,
    addTodo,
    toggleTodo,
    clearCompleted,
    setFilter,
    activeTodosCount,
    filter,
    allTodos,
  } = useTodos();

  return (
    <div className="app">
      <h1>Todos</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
      {allTodos.length > 0 && (
        <TodoFilter
          activeTodosCount={activeTodosCount}
          filter={filter}
          setFilter={setFilter}
          onClearCompleted={clearCompleted}
        />
      )}
    </div>
  );
};

export default App;
