import TaskItem from "./TaskItem";
import { useTaskContext } from "../context/useTaskContext";

export default function TaskList() {
  const { filteredTasks } = useTaskContext();

  return (
    <ul>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}