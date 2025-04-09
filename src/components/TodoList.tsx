import React from "react";
import { Todo } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </div>
  );
};
