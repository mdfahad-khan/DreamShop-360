import React from "react";
import headphone from "../../assets/headphone.jpg";
import "../Total/Total.css";

const Latest = () => {
  return (
    <>
      <div>
        <h2 className="title">Latest Product</h2>
        <div className="row">
          <div className="col-4">
            <img src={headphone} alt="" />
            <h4>Mouse</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-0"></i>
            </div>
            <p>1000 tk</p>
          </div>
          <div className="col-4">
            <img src={headphone} alt="" />
            <h4>Mouse</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <p>200 tk</p>
          </div>
          <div className="col-4">
            <img src={headphone} alt="" />
            <h4>Mouse</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <p>3500 tk</p>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <img src={headphone} alt="" />
            <h4>Mouse</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-0"></i>
            </div>
            <p>1000 tk</p>
          </div>
          <div className="col-4">
            <img src={headphone} alt="" />
            <h4>Mouse</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <p>200 tk</p>
          </div>
          <div className="col-4">
            <img src={headphone} alt="" />
            <h4>Mouse</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <p>3500 tk</p>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Latest;
