import { useEffect, useState } from "react";
import { getTasks } from "../services/taskApi";
import TaskItem from "./TaskItem";

export default function TaskList({ refreshKey }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, [refreshKey]);

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} refresh={loadTasks} />
      ))}
    </ul>
  );
}
