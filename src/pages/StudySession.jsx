import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function StudySession() {
  const { roomName } = useParams();
  const navigate = useNavigate();

  const ROOM_TIME = 25 * 60; // 25 minutes

  const [seconds, setSeconds] = useState(ROOM_TIME);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, seconds]);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div className="container py-5">

      <div className="card shadow border-0 rounded-4 p-5 text-center">

        <h1 className="fw-bold mb-3">
          📚 {decodeURIComponent(roomName)}
        </h1>

        <p className="text-muted">
          Stay focused and enjoy your study session.
        </p>

        <h1
          className="display-2 fw-bold my-4"
          style={{ color: "#ff9800" }}
        >
          {minutes}:{secs}
        </h1>

        <div className="mb-4">

          <button
            className="btn btn-success me-2"
            onClick={() => setIsRunning(true)}
          >
            Start
          </button>

          <button
            className="btn btn-warning me-2"
            onClick={() => setIsRunning(false)}
          >
            Pause
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => {
              setSeconds(ROOM_TIME);
              setIsRunning(false);
            }}
          >
            Reset
          </button>

        </div>

        <button
          className="btn btn-danger"
          onClick={() => navigate("/study-room")}
        >
          Leave Room
        </button>

      </div>

    </div>
  );
}
