function GoalCard() {
  return (
    <div className="card shadow rounded-4 border-0">

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