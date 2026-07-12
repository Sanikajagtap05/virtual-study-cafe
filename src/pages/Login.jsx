import login from "../assets/login.jpg";

function Login() {
  return (
    <div className="container py-5">

      <div className="card shadow border-0 rounded-4 overflow-hidden">

        <div className="row">

          <div className="col-lg-6">

            <img
              src={login}
              className="img-fluid w-100"
              alt="Login"
              style={{
                height: "100%",
                objectFit: "cover",
              }}
            />

          </div>

          <div className="col-lg-6 p-5">

            <h2 className="fw-bold mb-4">
              Welcome Back 👋
            </h2>

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
            />

            <input
              type="password"
              className="form-control mb-4"
              placeholder="Password"
            />

            <button className="btn btn-warning w-100">
              Login
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;