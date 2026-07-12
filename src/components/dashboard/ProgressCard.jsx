import { useNavigate } from "react-router-dom";

function ProgressCard() {

  const navigate = useNavigate();

  return (
    <div
      className="card shadow rounded-4 border-0"
      onClick={() => navigate("/analytics")}
      style={{
        cursor: "pointer",
        transition: "0.3s",
      }}
    >
      <div className="card-body">

        <h4>📈 Weekly Progress</h4>

        <div
          className="mt-4 rounded d-flex justify-content-center align-items-center"
          style={{
            height: "250px",
            background: "#f5f5f5",
          }}
        >
          Click to View Analytics
        </div>

      </div>

    </div>
  );
}

export default ProgressCard;