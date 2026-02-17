import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./index.css";

export default function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div>
      <h1>Task Manager</h1>

      <TaskForm onAdd={() => setRefreshKey((k) => k + 1)} />
      <TaskList refreshKey={refreshKey} />
    </div>
  );
}
