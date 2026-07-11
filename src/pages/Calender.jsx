import React from "react";
import calendar from "../assets/Calender1.jpg";

function Calender() {
  return (
    <div className="container py-4">
      <div className="card shadow border-0 rounded-4 overflow-hidden">
        <div className="row align-items-center">
          <div className="col-md-7 p-5">
            <h1 className="fw-bold">📅 Study Calendar</h1>

            <p className="text-muted">
              Plan your schedule, assignments and study sessions.
            </p>
          </div>

          <div className="col-md-5">
            <img
              src={calendar}
              alt="Calendar"
              className="img-fluid w-100"
              style={{
                height: "320px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calender;