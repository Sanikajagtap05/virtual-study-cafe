function WelcomeCard() {
  const hour = new Date().getHours();

  let greeting = "Good Evening 🌙";

  if (hour < 12) greeting = "Good Morning ☀️";
  else if (hour < 18) greeting = "Good Afternoon 🌤️";

  return (
    <div
      className="card border-0 shadow rounded-4 mb-4"
      style={{
        background:
          "linear-gradient(135deg,#FFE8CC,#FFF5E4)",
      }}
    >
      <div className="card-body p-4">

        <h2 className="fw-bold">{greeting}</h2>

        <p className="mb-0 text-secondary">
          Ready for another productive study session?
        </p>

      </div>
    </div>
  );
}

export default WelcomeCard;