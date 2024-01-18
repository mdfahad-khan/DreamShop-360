import React from "react";
import headphone from "../../assets/headphone.jpg";
import "../Total/Total.css";

const Exclusive = () => {
  return (
    <div className="small-container">
      {/* Exclusive Product */}
      <div className="Exclusive">
        <h2 className="title">Exclusive Product</h2>
        <ul>
          <li>
            <a href="" className="middlelink_a">
              New Arrival
            </a>
          </li>
          <li>
            <a href="" className="middlelink_a">
              Best Seller
            </a>
          </li>
          <li>
            <a href="" className="middlelink_a">
              Featured
            </a>
          </li>
          <li>
            <a href="" className="middlelink_a">
              Special Offer
            </a>
          </li>
        </ul>
      </div>

      {/* Row 1 */}
      <div className="row1">
        <div className="col-4">
          <img src={headphone} alt="" />
          <h4>Power Bank</h4>
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
  );
};

export default Exclusive;
