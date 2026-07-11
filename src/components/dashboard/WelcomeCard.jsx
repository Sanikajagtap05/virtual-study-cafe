import dashboard1 from "../../assets/dashboard1.jpg";

function WelcomeCard() {
  const hour = new Date().getHours();

  let greeting = "Good Evening 🌙";

  if (hour < 12) greeting = "Good Morning ☀️";
  else if (hour < 18) greeting = "Good Afternoon 🌤️";

  return (
    <div
      className="card border-0 shadow rounded-4 mb-4 overflow-hidden"
      style={{
        background: "linear-gradient(135deg,#FFE8CC,#FFF5E4)",
      }}
    >
      <div className="row align-items-center">

        <div className="col-md-7 p-4">

          <h2 className="fw-bold">{greeting}</h2>

          <p className="text-secondary mb-0">
            Ready for another productive study session?
          </p>

        </div>

        <div className="col-md-5 text-end">

          <img
            src={dashboard1}
            alt="Dashboard"
            className="img-fluid"
            style={{
              maxHeight: "220px",
              objectFit: "cover",
            }}
          />

        </div>

      </div>
    </div>
  );
}

export default WelcomeCard;