import React from "react";

function Education() {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col">
            <img src="media/images/education.svg" />
          </div>
          <div className="col">
            <div className="row mt-5">
              <h1 className="fs-2">Free and open market education</h1>
              <p>
                Varsity, the largest online stock market education book in the
                world
                <br /> covering everything from the basics to advanced trading.
              </p>
              <a href="#" style={{ textDecoration: "none" }}>
                Versity <i className="fa-solid fa-arrow-right-long ms-1"></i>
              </a>
            </div>
            <div className="row mt-5">
              <p>
                TradingQ&A, the most active trading and investment community in{" "}
                <br /> India for all your market related queries.
              </p>
              <a href="#" style={{ textDecoration: "none" }}>
                TrendingQ&A{" "}
                <i className="fa-solid fa-arrow-right-long ms-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
