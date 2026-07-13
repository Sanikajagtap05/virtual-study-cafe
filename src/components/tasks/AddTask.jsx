import { useState } from "react";

export default function AddTask({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;

    addTask(text);
    setText("");
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 p-4 mb-4">

      <div className="input-group">

        <input
          type="text"
          className="form-control"
          placeholder="Enter a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Add Task
        </button>

      </div>

    </div>
  );
}