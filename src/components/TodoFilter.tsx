import React from "react";

interface TodoFilterProps {
  activeTodosCount: number;
  filter: "all" | "active" | "completed";
  setFilter: (filter: "all" | "active" | "completed") => void;
  onClearCompleted: () => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({
  activeTodosCount,
  filter,
  setFilter,
  onClearCompleted,
}) => {
  return (
    <div className="todo-filter">
      <span>{activeTodosCount} items left</span>
      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <button onClick={onClearCompleted}>Clear completed</button>
    </div>
  );
};
