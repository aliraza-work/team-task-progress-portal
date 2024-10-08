import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskBoard from "./components/TaskBoard";

function App() {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("");
  async function load(next = status) {
    const q = next ? `?status=${next}` : "";
    setTasks(await (await fetch(`/api/tasks${q}`)).json());
  }
  useEffect(() => { load(); }, []);
  return (
    <div className="page">
      <h1>Team Task & Progress Portal</h1>
      <p>Assign work, track deadlines, and follow up with notes.</p>
      <label>Status filter
        <select value={status} onChange={(e)=>{ setStatus(e.target.value); load(e.target.value); }}>
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="in_progress">In progress</option>
          <option value="blocked">Blocked</option>
          <option value="done">Done</option>
        </select>
      </label>
      <TaskForm onCreated={() => load()} />
      <TaskBoard tasks={tasks} />
    </div>
  );
}
export default App;
