import React, { useState } from "react";
function TaskForm({ onCreated }) {
  const [form, setForm] = useState({ title: "", assignee: "Ali Raza", status: "pending", notes: "", progress: 0 });
  async function submit(e) {
    e.preventDefault();
    await fetch("/api/tasks", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setForm({ title: "", assignee: "Ali Raza", status: "pending", notes: "", progress: 0 });
    onCreated();
  }
  return (
    <form className="card" onSubmit={submit}>
      <h2>Assign task</h2>
      <input placeholder="Title" value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})} required />
      <input placeholder="Assignee" value={form.assignee} onChange={(e)=>setForm({...form,assignee:e.target.value})} required />
      <textarea placeholder="Notes" value={form.notes} onChange={(e)=>setForm({...form,notes:e.target.value})} />
      <button type="submit">Create</button>
    </form>
  );
}
export default TaskForm;
