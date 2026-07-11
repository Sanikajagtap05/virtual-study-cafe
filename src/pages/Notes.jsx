import React from "react";
import notes1 from "../assets/notes1.jpg";
import notes2 from "../assets/notes2.jpg";
import notes3 from "../assets/notes3.jpg";

export default function Notes() {
  return (
    <div className="container py-4">

      <div className="card shadow border-0 rounded-4 overflow-hidden mb-5">
        <div className="row g-0 align-items-center">

          <div className="col-md-7 p-5">
            <h1 className="fw-bold">📒 My Notes</h1>

            <p className="text-muted mt-3">
              Organize your study notes and keep everything in one place.
            </p>

            <button className="btn btn-warning mt-3">
              Create Note
            </button>
          </div>

          <div className="col-md-5">
            <img
              src={notes1}
              alt="Notes"
              className="img-fluid w-100"
              style={{ height: "320px", objectFit: "cover" }}
            />
          </div>

        </div>
      </div>

      <div className="row">

        <div className="col-md-6 mb-4">
          <img
            src={notes2}
            className="img-fluid rounded-4 shadow"
            alt=""
          />
        </div>

        <div className="col-md-6 mb-4">
          <img
            src={notes3}
            className="img-fluid rounded-4 shadow"
            alt=""
          />
        </div>

      </div>

    </div>
  );
}