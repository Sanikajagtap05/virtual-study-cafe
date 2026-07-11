import { useEffect, useState } from "react";

function PomodoroTimer() {
  const focusTime = 25 * 60;
  const breakTime = 5 * 60;

  const [seconds, setSeconds] = useState(focusTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    if (seconds === 0) {
      if (isBreak) {
        setSeconds(focusTime);
        setIsBreak(false);
      } else {
        setSeconds(breakTime);
        setIsBreak(true);
      }
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, seconds, isBreak]);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  const resetTimer = () => {
    setSeconds(focusTime);
    setIsRunning(false);
    setIsBreak(false);
  };

  const totalTime = isBreak ? breakTime : focusTime;
  const progress = ((totalTime - seconds) / totalTime) * 100;

  return (
    <div className="card shadow-lg border-0 rounded-4 p-4 text-center">

      <h2 className="fw-bold">
        {isBreak ? "☕ Break Time" : "📚 Focus Time"}
      </h2>

      <h1
        className="display-1 fw-bold my-4"
        style={{ color: "#6F4E37" }}
      >
        {minutes}:{secs}
      </h1>

      <div className="progress mb-4" style={{ height: "15px" }}>
        <div
          className="progress-bar bg-success"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="d-flex justify-content-center gap-3">

        <button
          className="btn btn-success"
          onClick={() => setIsRunning(true)}
        >
          Start
        </button>

        <button
          className="btn btn-warning"
          onClick={() => setIsRunning(false)}
        >
          Pause
        </button>

        <button
          className="btn btn-danger"
          onClick={resetTimer}
        >
          Reset
        </button>

      </div>

    </div>
  );
}

export default PomodoroTimer;