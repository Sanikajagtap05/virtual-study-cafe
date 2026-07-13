import { FaTrash } from "react-icons/fa";

export default function TaskItem({
  task,
  toggleTask,
  deleteTask,
}) {
  return (
    <div className="card shadow-sm border-0 rounded-4 mb-3">

      <div className="card-body d-flex justify-content-between align-items-center">

        <div>

          <input
            type="checkbox"
            className="form-check-input me-3"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />

          <span
            style={{
              textDecoration: task.completed
                ? "line-through"
                : "none",
              color: task.completed ? "gray" : "#000",
            }}
          >
            {task.text}
          </span>

        </div>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteTask(task.id)}
        >
          <FaTrash />
        </button>

      </div>

    </div>
  );
}