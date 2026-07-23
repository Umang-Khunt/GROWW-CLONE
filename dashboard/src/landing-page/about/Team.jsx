import { Link } from "react-router-dom";
function Team() {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <h1 className="text-center fs-3 mb-5" style={{ color: "#525252" }}>
            People
          </h1>
          <div className="col-2"></div>
          <div className="col-3 text-center">
            <img
              src="/media/images/nithinKamath.jpg"
              className="ms-auto  border "
              style={{ width: "90%", borderRadius: "50%" }}
            />
            <h2 className="fs-4 mt-4" style={{ color: "#525252" }}>
              {" "}
              Nithin Kamath
            </h2>
            <p className="mt-4 pe-1" style={{ color: "#525252" }}>
              {" "}
              Founder,CEO
            </p>
          </div>
          <div className="col-6 pt-4 ">
            <p
              className="ps-3 pe-5"
              style={{ lineHeight: "1.7", fontSize: "1.1em", color: "#626262" }}
            >
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              <br />
              <br />
              Zerodha has changed the landscape of the Indian broking industry.
              <br />
              <br /> He is a member of the SEBI Secondary Market Advisory
              Committee (SMAC) and the Market Data Advisory Committee (MDAC).
              <br />
              <br /> Playing basketball is his zen.
            </p>
            <p
              className="ps-3"
              style={{ lineHeight: "1.7", fontSize: "1.1em", color: "#626262" }}
            >
              Connect on{" "}
              <Link to="/" style={{ textDecoration: "none" }}>
                Homepage
              </Link>{" "}
              /{" "}
              <Link to="/support" style={{ textDecoration: "none" }}>
                TradingQnA
              </Link>{" "}
              /
              <Link
                to="https://x.com/Nithin0dha"
                style={{ textDecoration: "none" }}
              >
                Twitter
              </Link>{" "}
            </p>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default Team;
