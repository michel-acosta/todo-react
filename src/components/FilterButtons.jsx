import { useTaskContext } from "../context/useTaskContext";

export default function FilterButtons() {
  const { setFilter } = useTaskContext();

  return (
    <div className="filters">
      <button onClick={() => setFilter("all")}>Todas</button>
      <button onClick={() => setFilter("completed")}>Completadas</button>
      <button onClick={() => setFilter("pending")}>Pendientes</button>
    </div>
  );
}