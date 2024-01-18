import React from "react";
import headphone from "../../assets/headphone.jpg";
import "../Total/Total.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer_section">Footer Section</h1>
      <div className="weprovide">
        <div className="icons_footer">
          <div className="row_footer">
            <img className="cart1img" src={headphone} alt="" />
            <div className="info">
              <div className="head">Free Delivery</div>
              <div className="sub-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Accusantium,
                porro!
              </div>
            </div>
          </div>

          <div className="row_footer">
            <img className="cart1img" src={headphone} alt="" />
            <div className="info">
              <div className="head">30 Day Return</div>
              <div className="sub-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Labore,
                totam!
              </div>
            </div>
          </div>

          <div className="row_footer">
            <img className="cart1img" src={headphone} alt="" />
            <div className="info">
              <div className="head">24/7 Support</div>
              <div className="sub-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Repellat,
                veritatis?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
