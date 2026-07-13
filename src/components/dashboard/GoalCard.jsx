import { useNavigate } from "react-router-dom";

function GoalCard() {

  const navigate = useNavigate();

  return (
    <div
      className="card shadow rounded-4 border-0 h-100"
      onClick={() => navigate("/tasks")}
      style={{
        cursor: "pointer",
        transition: "0.3s",
      }}
    >
      <div className="card-body">

        <h4>🎯 Today's Goal</h4>

        <p>Study for 4 hours</p>

        <div className="progress">

          <div
            className="progress-bar bg-success"
            style={{ width: "50%" }}
          >
            50%
          </div>

        </div>

      </div>
    </div>
  );
}

export default GoalCard;
