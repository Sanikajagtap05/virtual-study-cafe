import { useNavigate } from "react-router-dom";

function PomodoroWidget() {

  const navigate = useNavigate();

  return (
    <div className="card shadow rounded-4 border-0">

      <div className="card-body text-center">

        <h4>⏱ Pomodoro</h4>

        <h1 className="display-4 fw-bold mt-3">
          25:00
        </h1>

        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/timer")}
        >
          Start Session
        </button>

      </div>

    </div>
  );
}

export default PomodoroWidget;