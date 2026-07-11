import React from "react";
import studyroom1 from "../assets/studyroom1.jpg";
import studyroom2 from "../assets/studyroom2.jpg";

export default function StudyRoom() {
  return (
    <div className="container py-4">

      <div className="card shadow rounded-4 border-0 overflow-hidden mb-5">

        <div className="row align-items-center">

          <div className="col-md-6 p-5">

            <h1 className="fw-bold">
              ☕ Virtual Study Room
            </h1>

            <p className="text-muted">
              Study together, stay motivated and focus better.
            </p>

          </div>

          <div className="col-md-6">

            <img
              src={studyroom1}
              alt=""
              className="img-fluid w-100"
              style={{
                height: "340px",
                objectFit: "cover",
              }}
            />

          </div>

        </div>

      </div>

      <div className="row">

        <div className="col-md-6 mb-4">

          <div className="card shadow rounded-4 border-0">

            <img
              src={studyroom2}
              className="card-img-top"
              style={{
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div className="card-body">

              <h4>📚 Silent Library</h4>

              <button className="btn btn-warning">
                Join Room
              </button>

            </div>

          </div>

        </div>

        <div className="col-md-6 mb-4">

          <div className="card shadow rounded-4 border-0">

            <img
              src={studyroom2}
              className="card-img-top"
              style={{
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div className="card-body">

              <h4>☕ Coffee Study Room</h4>

              <button className="btn btn-warning">
                Join Room
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}