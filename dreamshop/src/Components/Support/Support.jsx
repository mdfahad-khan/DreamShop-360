import React from "react";
import "../Total/Total.css";

const Support = () => {
  return (
    <div className="navbar_footer">
      <h1 className="footer_left">Support Us</h1>
      <div className="footer_right">
        <input type="email" placeholder="Enter your Email" className="input" />
        <input type="submit" value="Subscribe" className="submit_email" />
      </div>
    </div>
  );
};

export default Support;
