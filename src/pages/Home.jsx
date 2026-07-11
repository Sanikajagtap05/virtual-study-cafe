import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";

function Home() {
  return (
    <div className="container">

      <div
        className="row align-items-center shadow rounded-4 overflow-hidden mb-5"
        style={{
          background: "linear-gradient(135deg,#FFF8F0,#F8F5F2)",
        }}
      >
        <div className="col-lg-6 p-5">

          <h1 className="display-4 fw-bold">
            Welcome to StudyVerse 📚
          </h1>

          <p className="lead mt-3">
            Your cozy virtual study café to stay focused,
            organized and productive every day.
          </p>

          <button className="btn btn-dark btn-lg mt-3">
            Start Studying
          </button>

        </div>

        <div className="col-lg-6 p-0">
          <img
            src={home1}
            alt="Study"
            className="img-fluid w-100"
            style={{
              height: "420px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card shadow border-0 rounded-4 h-100">

            <img
              src={home2}
              className="card-img-top"
              alt="Pomodoro"
              style={{
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div className="card-body">

              <h4>🕒 Pomodoro Timer</h4>

              <p>
                Boost productivity using focused study sessions.
              </p>

            </div>

          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow border-0 rounded-4 h-100">

            <img
              src={home3}
              className="card-img-top"
              alt="Tasks"
              style={{
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div className="card-body">

              <h4>📚 Daily Tasks</h4>

              <p>
                Organize and complete your study goals.
              </p>

            </div>

          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow border-0 rounded-4 h-100">

            <img
              src={home1}
              className="card-img-top"
              alt="Study Room"
              style={{
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div className="card-body">

              <h4>👥 Study Rooms</h4>

              <p>
                Study virtually with friends and stay motivated.
              </p>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;