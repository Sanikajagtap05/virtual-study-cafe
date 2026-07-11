function ProgressCard() {
  return (
    <div className="card shadow rounded-4 border-0">

      <div className="card-body">

        <h4>📈 Weekly Progress</h4>

        <div
          className="mt-4 rounded"
          style={{
            height: "250px",
            background: "#f5f5f5",
          }}
        ></div>

      </div>

    </div>
  );
}

export default ProgressCard;