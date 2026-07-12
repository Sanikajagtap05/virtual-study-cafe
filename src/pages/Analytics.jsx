import analytical from "../assets/analytical.jpg";

function Analytics() {
  return (
    <div className="container py-4">

      <div className="card shadow border-0 rounded-4 overflow-hidden">

        <div className="row align-items-center">

          <div className="col-lg-7 p-5">

            <h1 className="fw-bold">
              📊 Study Analytics
            </h1>

            <p className="text-muted mt-3">
              Track your study progress, productivity and weekly goals.
            </p>

            <div className="row mt-4">

              <div className="col-6 mb-3">
                <div className="card shadow-sm border-0 rounded-3">
                  <div className="card-body text-center">
                    <h3>18 hrs</h3>
                    <small>Study Time</small>
                  </div>
                </div>
              </div>

              <div className="col-6 mb-3">
                <div className="card shadow-sm border-0 rounded-3">
                  <div className="card-body text-center">
                    <h3>92%</h3>
                    <small>Focus Score</small>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="col-lg-5">

            <img
              src={analytical}
              className="img-fluid w-100"
              alt="Analytics"
              style={{
                height: "420px",
                objectFit: "cover",
              }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;