import React from "react";

function Pricing() {
  return (
    <>
      <div className="container mt-5 pb-5 pt-5">
        <div className="row">
          <div className="col-4">
            <h1 className="fs-1">Unbeatable pricing</h1>
            <p className="mt-3">
              {" "}
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>

            <a href="#" style={{ textDecoration: "none" }}>
              {" "}
              See Pricing<i className="fa-solid fa-arrow-right-long ms-3"></i>
            </a>
          </div>
          <div className="col-2"></div>
          <div className="col-6">
            <div className="row text-center">
              <div className="col border ">
                <h1 className=" mt-4 mb-4 ">₹0</h1>{" "}
                <p className="mb-5">
                  Free equity delivery and <br />
                  direct mutual funds
                </p>
              </div>

              <div className="col border ">
                <h1 className=" mt-4 mb-4 ">₹20</h1>{" "}
                <p lassName="mb-5">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
