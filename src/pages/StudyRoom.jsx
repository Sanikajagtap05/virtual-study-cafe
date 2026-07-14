import React from "react";
import { useNavigate } from "react-router-dom";

import studyroom1 from "../assets/studyroom1.jpg";
import studyroom2 from "../assets/studyroom2.jpg";

export default function StudyRoom() {
  const navigate = useNavigate();

  const joinRoom = (room) => {
    navigate(`/study-room/${encodeURIComponent(room)}`);
  };

  return (
    <div className="container py-4">

      {/* Hero Banner */}

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
              alt="Virtual Study Room"
              className="img-fluid w-100"
              style={{
                height: "340px",
                objectFit: "cover",
              }}
            />

          </div>

        </div>

      </div>

      {/* Study Rooms */}

      <div className="row">

        {/* Silent Library */}

        <div className="col-md-6 mb-4">

          <div className="card shadow rounded-4 border-0 h-100">

            <img
              src={studyroom2}
              alt="Silent Library"
              className="card-img-top"
              style={{
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div className="card-body text-center">

              <h4 className="mb-3">
                📚 Silent Library
              </h4>

              <p className="text-muted">
                A peaceful room for distraction-free studying.
              </p>

              <button
                className="btn btn-warning px-4"
                onClick={() => joinRoom("Silent Library")}
              >
                Join Room
              </button>

            </div>

          </div>

        </div>

        {/* Coffee Study Room */}

        <div className="col-md-6 mb-4">

          <div className="card shadow rounded-4 border-0 h-100">

            <img
              src={studyroom2}
              alt="Coffee Study Room"
              className="card-img-top"
              style={{
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div className="card-body text-center">

              <h4 className="mb-3">
                ☕ Coffee Study Room
              </h4>

              <p className="text-muted">
                Relax with a cozy café atmosphere while studying.
              </p>

              <button
                className="btn btn-warning px-4"
                onClick={() => joinRoom("Coffee Study Room")}
              >
                Join Room
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}