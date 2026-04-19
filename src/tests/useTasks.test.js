import { renderHook, act } from "@testing-library/react";
import { useTasks } from "../hooks/useTasks";
import { test, expect } from "vitest";

test("añade tarea correctamente", () => {
  const { result } = renderHook(() => useTasks());

  act(() => {
    result.current.addTask({ title: "Test", description: "Desc" });
  });

  expect(result.current.tasks.length).toBe(1);
});