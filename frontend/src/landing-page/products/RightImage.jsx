function RightImage({ imageURL, productName, productDescription, learnMore }) {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-4 ms-5 ps-5 mt-5 ">
            <h1 className="fs-3 pt-5 mt-5">{productName}</h1>
            <p className="pe-5 mt-4" style={{ lineHeight: "1.8" }}>
              {productDescription}
            </p>
            <a
              href={learnMore}
              style={{ textDecoration: "none",}}
            >
              Learn More &nbsp;→
            </a>
          </div>
          <div className="col-1"></div>
          <div className="col-6">
            <img src={imageURL} width={"90%"} />
          </div>
          <div className="col-1 mb-3"></div>
        </div>
      </div>
    </>
  );
}

export default RightImage;
