import { useState } from "react";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>What needs to be done?</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
      />
    </form>
  );
};
