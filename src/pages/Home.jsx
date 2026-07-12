import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "";
  };

  return (
    <div className="container">

      {/* Hero Section */}

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

          <button
            className="btn btn-dark btn-lg mt-3 rounded-pill px-4"
            onClick={() => navigate("/dashboard")}
          >
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

      {/* Feature Cards */}

      <div className="row">

        {/* Pomodoro */}

        <div className="col-md-4 mb-4">

          <div
            className="card shadow border-0 rounded-4 h-100"
            onClick={() => navigate("/timer")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >

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

        {/* Tasks */}

        <div className="col-md-4 mb-4">

          <div
            className="card shadow border-0 rounded-4 h-100"
            onClick={() => navigate("/tasks")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >

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

        {/* Study Room */}

        <div className="col-md-4 mb-4">

          <div
            className="card shadow border-0 rounded-4 h-100"
            onClick={() => navigate("/study-room")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >

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