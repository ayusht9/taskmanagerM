import { useState } from "react";
import { createTask } from "../services/taskApi";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    await createTask({ title });
    setTitle("");
    onAdd();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
