import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { TaskContext } from "../context/TaskContext";
import { test, expect } from "vitest";

test("renderiza tareas", () => {
  const mockTasks = [
    { id: 1, title: "Tarea 1", description: "Desc", completed: false }
  ];

  render(
    <TaskContext.Provider value={{ filteredTasks: mockTasks }}>
      <TaskList />
    </TaskContext.Provider>
  );

  expect(screen.getByText("Tarea 1 - Desc")).toBeInTheDocument();
});