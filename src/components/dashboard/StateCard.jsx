import { useNavigate } from "react-router-dom";

function StatsCard({ title, value, icon, color, link }) {
  const navigate = useNavigate();

  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div
        className="card border-0 shadow rounded-4 h-100"
        onClick={() => navigate(link)}
        style={{
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <div className="card-body">

          <div
            className="rounded-circle d-flex align-items-center justify-content-center mb-3"
            style={{
              width: 60,
              height: 60,
              background: color,
              color: "white",
              fontSize: "24px",
            }}
          >
            {icon}
          </div>

          <h6 className="text-secondary">{title}</h6>

          <h2 className="fw-bold">{value}</h2>

        </div>
      </div>
    </div>
  );
}

export default StatsCard;