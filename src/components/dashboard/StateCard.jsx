function StatsCard({ title, value, icon, color }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">

      <div
        className="card border-0 shadow rounded-4 h-100"
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