import { Link } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaTasks,
  FaStickyNote,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div
      className="d-none d-md-block"
      style={{
        minHeight: "100vh",
        background: "#FFF8F0",
        borderRight: "1px solid #ddd",
      }}
    >
      <h4 className="text-center py-4 fw-bold">
        Menu
      </h4>

      <div className="list-group list-group-flush">

        <Link className="list-group-item list-group-item-action" to="/">
          <FaHome className="me-2" />
          Home
        </Link>

        <Link
          className="list-group-item list-group-item-action"
          to="/dashboard"
        >
          <FaChartLine className="me-2" />
          Dashboard
        </Link>

        <Link
          className="list-group-item list-group-item-action"
          to="/tasks"
        >
          <FaTasks className="me-2" />
          Tasks
        </Link>

        <Link
          className="list-group-item list-group-item-action"
          to="/notes"
        >
          <FaStickyNote className="me-2" />
          Notes
        </Link>

        <Link
          className="list-group-item list-group-item-action"
          to="/calendar"
        >
          <FaCalendarAlt className="me-2" />
          Calendar
        </Link>

        <Link
          className="list-group-item list-group-item-action"
          to="/study-room"
        >
          <FaUsers className="me-2" />
          Study Room
        </Link>

      </div>
    </div>
  );
}

export default Sidebar;