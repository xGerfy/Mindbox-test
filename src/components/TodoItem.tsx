import React from "react";
import { Todo } from "../hooks/useTodos";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={() => onToggle(todo.id)}>
        {todo.completed ? "✓" : "○"} {todo.text}
      </span>
    </div>
  );
};
