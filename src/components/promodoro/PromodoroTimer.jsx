import { useEffect, useState } from "react";

function PomodoroTimer() {
  const breakTime = 5 * 60;

  const [focusMinutes, setFocusMinutes] = useState(25);
  const [seconds, setSeconds] = useState(25 * 60);
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
        setSeconds(focusMinutes * 60);
        setIsBreak(false);
      } else {
        setSeconds(breakTime);
        setIsBreak(true);
      }
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, seconds, isBreak, focusMinutes]);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsBreak(false);
    setSeconds(focusMinutes * 60);
  };

  const changeFocusTime = (mins) => {
    setFocusMinutes(mins);
    setSeconds(mins * 60);
    setIsRunning(false);
    setIsBreak(false);
  };

  const totalTime = isBreak ? breakTime : focusMinutes * 60;
  const progress = ((totalTime - seconds) / totalTime) * 100;

  return (
    <div className="card shadow-lg border-0 rounded-4 p-4 text-center">

      <h2 className="fw-bold mb-4">
        {isBreak ? "☕ Break Time" : "📚 Focus Time"}
      </h2>

      {/* Time Selection */}

      <div className="mb-4">

        <label className="fw-semibold me-2">
          Study Time :
        </label>

        <select
          className="form-select w-auto d-inline-block"
          value={focusMinutes}
          onChange={(e) => changeFocusTime(Number(e.target.value))}
        >
          <option value={25}>25 Minutes</option>
          <option value={30}>30 Minutes</option>
          <option value={45}>45 Minutes</option>
          <option value={60}>1 Hour</option>
          <option value={90}>1 Hour 30 Minutes</option>
          <option value={120}>2 Hours</option>
        </select>

      </div>

      {/* Timer */}

      <h1
        className="display-1 fw-bold my-4"
        style={{ color: "#6F4E37" }}
      >
        {minutes}:{secs}
      </h1>

      {/* Progress */}

      <div
        className="progress mb-4"
        style={{ height: "15px" }}
      >
        <div
          className={`progress-bar ${
            isBreak ? "bg-warning" : "bg-success"
          }`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Buttons */}

      <div className="d-flex justify-content-center gap-3 flex-wrap">

        <button
          className="btn btn-success px-4"
          onClick={startTimer}
        >
           Start
        </button>

        <button
          className="btn btn-warning px-4"
          onClick={pauseTimer}
        >
           Pause
        </button>

        <button
          className="btn btn-danger px-4"
          onClick={resetTimer}
        >
           Reset
        </button>

      </div>

    </div>
  );
}

export default PomodoroTimer;