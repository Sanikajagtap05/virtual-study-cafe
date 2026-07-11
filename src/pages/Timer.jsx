import PomodoroTimer from "../components/promodoro/PromodoroTimer";

function Timer() {
  return (
    <div className="container py-5">

      <h1 className="text-center fw-bold mb-5">
        Pomodoro Timer
      </h1>

      <div className="row justify-content-center">

        <div className="col-lg-6">

          <PomodoroTimer />

        </div>

      </div>

    </div>
  );
}

export default Timer;