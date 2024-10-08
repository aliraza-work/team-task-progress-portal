import React from "react";
function TaskBoard({ tasks }) {
  if (!tasks.length) return <p>No pending work for this filter.</p>;
  return (
    <section className="card">
      <h2>Progress board</h2>
      <ul>{tasks.map((t)=>(
        <li key={t._id}>
          <strong>{t.title}</strong> · {t.assignee} · {t.status} · {t.progress}%
          <p>{t.notes || "No notes yet"}</p>
        </li>
      ))}</ul>
    </section>
  );
}
export default TaskBoard;
