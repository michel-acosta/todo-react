import { TaskContext } from "./TaskContext";
import { useTasks } from "../hooks/useTasks";

export const TaskProvider = ({ children }) => {
  const taskData = useTasks();

  return (
    <TaskContext.Provider value={taskData}>
      {children}
    </TaskContext.Provider>
  );
};