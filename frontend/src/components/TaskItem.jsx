import { updateTask, deleteTask } from "../services/taskApi";

export default function TaskItem({ task, refresh }) {
  return (
    <li>
      <span
        style={{
          textDecoration:
            task.status === "completed" ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>

      <button
        onClick={async () => {
          await updateTask(task._id, { status: "completed" });
          refresh();
        }}
        style={{
            margin:2
        }}
      >
        Complete
      </button>

      <button
        onClick={async () => {
          await deleteTask(task._id);
          refresh();
        }}
      >
        Delete
      </button>
    </li>
  );
}
