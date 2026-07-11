import React from "react";
import todolist1 from "../assets/todolist1.jpg";

export default function Tasks() {
  return (
    <div className="container py-4">

      <div className="card shadow rounded-4 border-0 overflow-hidden">

        <div className="row align-items-center">

          <div className="col-md-7 p-5">

            <h1 className="fw-bold">
              ✅ Today's Tasks
            </h1>

            <p className="text-muted">
              Complete your daily goals and stay productive.
            </p>

          </div>

          <div className="col-md-5">

            <img
              src={todolist1}
              alt=""
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