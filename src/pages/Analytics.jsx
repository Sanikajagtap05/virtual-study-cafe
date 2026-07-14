import { useEffect, useState } from "react";
import analytical from "../assets/analytical.jpg";
import {
  FaStickyNote,
  FaCalendarAlt,
  FaTasks,
  FaCheckCircle,
  FaBookOpen,
  FaChartLine,
} from "react-icons/fa";

function Analytics() {
  const [stats, setStats] = useState({
    notes: 0,
    pinned: 0,
    events: 0,
    exams: 0,
    assignments: 0,
    tasks: 0,
    completedTasks: 0,
    productivity: 0,
  });

  useEffect(() => {
    const loadAnalytics = () => {
      // Notes
      const notes = JSON.parse(localStorage.getItem("notes")) || [];

      // Calendar Events
      const events =
        JSON.parse(localStorage.getItem("studyEvents")) || [];

      // Tasks
      const tasks =
        JSON.parse(localStorage.getItem("tasks")) || [];

      const completed = tasks.filter(
        (task) => task.completed
      ).length;

      const productivity =
        tasks.length === 0
          ? 0
          : Math.round((completed / tasks.length) * 100);

      setStats({
        notes: notes.length,
        pinned: notes.filter((note) => note.pinned).length,
        events: events.length,
        exams: events.filter(
          (event) => event.category === "Exam"
        ).length,
        assignments: events.filter(
          (event) => event.category === "Assignment"
        ).length,
        tasks: tasks.length,
        completedTasks: completed,
        productivity,
      });
    };

    loadAnalytics();

    window.addEventListener("storage", loadAnalytics);

    const interval = setInterval(loadAnalytics, 1000);

    return () => {
      window.removeEventListener("storage", loadAnalytics);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="container py-4"
      style={{
        background: "#F8FAFC",
        minHeight: "100vh",
      }}
    >
      {/* Hero */}

      <div className="card shadow border-0 rounded-4 overflow-hidden mb-5">
        <div className="row align-items-center">
          <div className="col-lg-7 p-5">
            <h1 className="fw-bold">
              📊 Study Analytics
            </h1>

            <p className="text-muted mt-3">
              Monitor your study progress with real-time statistics from Notes,
              Calendar and Tasks.
            </p>

            <div className="row mt-4 g-3">

              <div className="col-md-6">
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="card-body text-center">
                    <FaStickyNote
                      size={35}
                      color="#6366F1"
                      className="mb-3"
                    />
                    <h2>{stats.notes}</h2>
                    <p className="text-muted mb-0">
                      Total Notes
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="card-body text-center">
                    <FaBookOpen
                      size={35}
                      color="#F59E0B"
                      className="mb-3"
                    />
                    <h2>{stats.pinned}</h2>
                    <p className="text-muted mb-0">
                      Pinned Notes
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-lg-5">
            <img
              src={analytical}
              className="img-fluid w-100"
              alt="Analytics"
              style={{
                height: "430px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* Analytics Cards */}

      <div className="row g-4">

        <div className="col-lg-3 col-md-6">
          <div className="card shadow border-0 rounded-4 h-100">
            <div className="card-body text-center">
              <FaCalendarAlt
                size={38}
                color="#0EA5E9"
                className="mb-3"
              />
              <h2>{stats.events}</h2>
              <p className="text-muted mb-0">
                Total Events
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card shadow border-0 rounded-4 h-100">
            <div className="card-body text-center">
              <FaBookOpen
                size={38}
                color="#EF4444"
                className="mb-3"
              />
              <h2>{stats.exams}</h2>
              <p className="text-muted mb-0">
                Exams
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card shadow border-0 rounded-4 h-100">
            <div className="card-body text-center">
              <FaTasks
                size={38}
                color="#10B981"
                className="mb-3"
              />
              <h2>{stats.tasks}</h2>
              <p className="text-muted mb-0">
                Total Tasks
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card shadow border-0 rounded-4 h-100">
            <div className="card-body text-center">
              <FaCheckCircle
                size={38}
                color="#22C55E"
                className="mb-3"
              />
              <h2>{stats.completedTasks}</h2>
              <p className="text-muted mb-0">
                Completed Tasks
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Productivity */}

      <div className="card border-0 shadow rounded-4 mt-5">
        <div className="card-body p-4">

          <div className="d-flex justify-content-between align-items-center mb-3">

            <h3 className="fw-bold">
              <FaChartLine className="me-2 text-primary" />
              Productivity
            </h3>

            <h2 className="text-success">
              {stats.productivity}%
            </h2>

          </div>

          <div
            className="progress"
            style={{ height: "20px" }}
          >
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{
                width: `${stats.productivity}%`,
              }}
            >
              {stats.productivity}%
            </div>
          </div>

          <p className="text-muted mt-3 mb-0">
            Productivity is calculated from your completed tasks.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Analytics;