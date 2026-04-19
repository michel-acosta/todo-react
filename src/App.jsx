import { lazy, Suspense } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";

// Lazy imports
const TaskForm = lazy(() => import("./components/TaskForm"));
const FilterButtons = lazy(() => import("./components/FilterButtons"));

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<p>Cargando formulario...</p>}>
        <TaskForm />
      </Suspense>

      <Suspense fallback={<p>Cargando filtros...</p>}>
        <FilterButtons />
      </Suspense>

      <TaskList />
    </>
  );
}

export default App;