import { Link } from "react-router-dom";

function LeftImage({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container mt-5 pb-5">
        <div className="row ">
          <div className="col-1"></div>
          <div className="col-6">
            <img src={imageURL} width={"90%"} />
          </div>
          <div className="col-4 ms-5 ps-5 mt-5">
            <h1 className="fs-3 mt-2">{productName}</h1>
            <p className="pe-5 mt-4" style={{ lineHeight: "1.8" }}>
              {productDescription}
            </p>
            <a
              href={tryDemo}
              className="pe-5"
              style={{ textDecoration: "none" }}
            >
              Try Demo &nbsp;→
            </a>
            <a
              href={learnMore}
              style={{ textDecoration: "none", paddingLeft: "2rem" }}
            >
              Learn More &nbsp;→
            </a>
            <br />
            <br />
            <a href={googlePlay} style={{ textDecoration: "none" }}>
              <img src="/media/images/googlePlayBadge.svg" />
            </a>
            <a
              href={appStore}
              style={{ textDecoration: "none", paddingLeft: "2rem" }}
            >
              {" "}
              <img src="/media/images/appstoreBadge.svg" width={"35%"} />
            </a>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default LeftImage;
