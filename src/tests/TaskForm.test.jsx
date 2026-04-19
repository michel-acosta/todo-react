import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "../components/TaskForm";
import { TaskContext } from "../context/TaskContext";
import { vi, test, expect } from "vitest";

test("añade una tarea", () => {
  const addTask = vi.fn();

  render(
    <TaskContext.Provider value={{ addTask }}>
      <TaskForm />
    </TaskContext.Provider>
  );

  fireEvent.change(screen.getByPlaceholderText("Título"), {
    target: { value: "Nueva tarea" },
  });

  fireEvent.click(screen.getByText("Añadir"));

  expect(addTask).toHaveBeenCalled();
});