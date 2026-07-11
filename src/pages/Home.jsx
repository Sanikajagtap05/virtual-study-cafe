function Home() {
  return (
    <div className="container">

      <div
        className="text-center p-5 rounded-4 shadow"
        style={{
          background: "linear-gradient(135deg,#FFF8F0,#F8F5F2)",
        }}
      >
        <h1 className="display-4 fw-bold">
          Welcome to StudyVerse 📚
        </h1>

        <p className="lead mt-3">
          Your cozy virtual study café to stay focused, organized,
          and productive every day.
        </p>

        <button className="btn btn-dark btn-lg mt-3">
          Start Studying
        </button>
      </div>

      <div className="row mt-5">

        <div className="col-md-4 mb-4">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body">
              <h4>🕒 Pomodoro Timer</h4>
              <p>Boost productivity using focused study sessions.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body">
              <h4>📚 Daily Tasks</h4>
              <p>Organize and complete your study goals.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body">
              <h4>👥 Study Rooms</h4>
              <p>Study virtually with friends and stay motivated.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;