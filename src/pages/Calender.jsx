import React, { useEffect, useState } from "react";
import calendarImg from "../assets/Calender1.jpg";
import { FaCalendarAlt, FaBook, FaTrash, FaPlus } from "react-icons/fa";

function Calender() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Study");

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("studyEvents"));

    if (savedEvents) {
      setEvents(savedEvents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("studyEvents", JSON.stringify(events));
  }, [events]);

  const addEvent = (e) => {
    e.preventDefault();

    if (!title || !date) {
      alert("Please fill all fields");
      return;
    }

    const newEvent = {
      id: Date.now(),
      title,
      date,
      category,
    };

    setEvents([...events, newEvent]);

    setTitle("");
    setDate("");
    setCategory("Study");
  };

  const deleteEvent = (id) => {
    const updated = events.filter((event) => event.id !== id);
    setEvents(updated);
  };

  const examCount = events.filter(
    (event) => event.category === "Exam"
  ).length;

  const assignmentCount = events.filter(
    (event) => event.category === "Assignment"
  ).length;

  return (
    <div
      className="container py-4"
      style={{
        background: "#FFF8F2",
        minHeight: "100vh",
      }}
    >
      {/* Hero */}

      <div
        className="card border-0 shadow-lg rounded-5 overflow-hidden mb-5"
        style={{ background: "#fff" }}
      >
        <div className="row align-items-center">
          <div className="col-lg-6 p-5">
            <h1
              className="fw-bold"
              style={{ color: "#5C4033" }}
            >
              Study Planner
            </h1>

            <p
              className="mt-3"
              style={{
                color: "#666",
                fontSize: "18px",
              }}
            >
              Organize your assignments, exams and study schedule in one place.
            </p>

            <button className="btn btn-warning rounded-pill px-4 mt-2">
              Plan Your Week
            </button>
          </div>

          <div className="col-lg-6">
            <img
              src={calendarImg}
              alt="calendar"
              className="img-fluid"
              style={{
                width: "100%",
                height: "380px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* Stats */}

      <div className="row g-4 mb-5">

        <div className="col-md-4">
          <div className="card border-0 shadow rounded-4 text-center p-4">
            <FaCalendarAlt
              size={35}
              color="#FF9800"
              className="mb-3"
            />

            <h3>{events.length}</h3>

            <p className="text-muted mb-0">
              Total Events
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow rounded-4 text-center p-4">
            <FaBook
              size={35}
              color="#8E44AD"
              className="mb-3"
            />

            <h3>{examCount}</h3>

            <p className="text-muted mb-0">
              Exams
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow rounded-4 text-center p-4">
            <FaBook
              size={35}
              color="#2ECC71"
              className="mb-3"
            />

            <h3>{assignmentCount}</h3>

            <p className="text-muted mb-0">
              Assignments
            </p>
          </div>
        </div>

      </div>

      {/* Form */}

      <div className="card border-0 shadow rounded-4 p-4 mb-5">

        <h3
          className="fw-bold mb-4"
          style={{ color: "#5C4033" }}
        >
          Add New Event
        </h3>

        <form onSubmit={addEvent}>

          <div className="row g-3">

            <div className="col-md-4">
              <input
                type="text"
                className="form-control rounded-3"
                placeholder="Event Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <input
                type="date"
                className="form-control rounded-3"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <select
                className="form-select rounded-3"
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
              >
                <option>Study</option>
                <option>Exam</option>
                <option>Assignment</option>
                <option>Project</option>
              </select>
            </div>

            <div className="col-md-2 d-grid">
              <button
                className="btn btn-warning rounded-3"
              >
                <FaPlus className="me-2" />
                Add
              </button>
            </div>

          </div>

        </form>

      </div>

      {/* Events */}

      <div className="card border-0 shadow rounded-4 p-4">

        <h3
          className="fw-bold mb-4"
          style={{ color: "#5C4033" }}
        >
          Upcoming Events
        </h3>

        {events.length === 0 ? (
          <div className="text-center py-5">

            <FaCalendarAlt
              size={55}
              color="#bbb"
            />

            <h5 className="mt-3 text-muted">
              No events added yet
            </h5>

          </div>
        ) : (
          events.map((event) => (
            <div
              key={event.id}
              className="card border-0 shadow-sm rounded-4 mb-3"
              style={{
                background: "#FFFDF8",
              }}
            >
              <div className="card-body d-flex justify-content-between align-items-center flex-wrap">

                <div>

                  <h5 className="fw-bold mb-1">
                    {event.title}
                  </h5>

                  <p className="mb-1 text-muted">
                    📅 {event.date}
                  </p>

                  <span className="badge bg-warning text-dark rounded-pill px-3">
                    {event.category}
                  </span>

                </div>

                <button
                  className="btn btn-danger rounded-circle"
                  onClick={() => deleteEvent(event.id)}
                >
                  <FaTrash />
                </button>

              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Calender;