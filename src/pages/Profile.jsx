import profile from "../assets/profile.jpg";

function Profile() {
  return (
    <div className="container py-4">

      <div className="card shadow border-0 rounded-4 overflow-hidden">

        <div className="row">

          <div className="col-lg-5">

            <img
              src={profile}
              className="img-fluid w-100"
              alt="Profile"
              style={{
                height: "100%",
                objectFit: "cover",
              }}
            />

          </div>

          <div className="col-lg-7 p-5">

            <h2 className="fw-bold">
              My Profile 👤
            </h2>

            <hr />

            <p><strong>Name:</strong> Student</p>

            <p><strong>Email:</strong> student@example.com</p>

            <p><strong>Study Streak:</strong> 🔥 7 Days</p>

            <p><strong>Completed Tasks:</strong> ✅ 25</p>

            <button className="btn btn-warning">
              Edit Profile
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;