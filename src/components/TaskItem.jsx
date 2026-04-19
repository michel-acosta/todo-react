import { useTaskContext } from "../context/useTaskContext";

export default function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useTaskContext();

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      <span className={`task-text ${task.completed ? "completed" : ""}`}>
        {task.title} - {task.description}
      </span>

      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        Eliminar
      </button>
    </li>
  );
}