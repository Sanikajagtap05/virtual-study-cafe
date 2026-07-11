import { Link } from "react-router-dom";
import { FaBookOpen, FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-light");
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm sticky-top"
      style={{
        background: "#F8F5F2",
      }}
    >
      <div className="container">

        <Link
          className="navbar-brand fw-bold fs-3"
          to="/"
          style={{ color: "#6F4E37" }}
        >
          <FaBookOpen className="me-2" />
          StudyVerse
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/tasks">
                Tasks
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/notes">
                Notes
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/calendar">
                Calendar
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/analytics">
                Analytics
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/study-room">
                Study Room
              </Link>
            </li>

          </ul>

          <div className="d-flex align-items-center gap-3">

            <Link
              to="/profile"
              className="btn btn-outline-secondary rounded-pill"
            >
              Profile
            </Link>

            <button
              className="btn btn-warning rounded-circle"
              onClick={toggleTheme}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;