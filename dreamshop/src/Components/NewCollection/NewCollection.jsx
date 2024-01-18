import React from "react";
import headphone from "../../assets/headphone.jpg";
import "../Total/Total.css";

const NewCollection = () => {
  return (
    <div className="New_collection1">
      {/* Left Collection */}
      <div className="left_collection1">
        <img src={headphone} alt="new1" />
        <div className="left_newcollectiontext1">
          <h3>Headphone</h3>
          <h1>New Collection</h1>
          <a href="">Shop Now</a>
        </div>
      </div>

      {/* Right Collection */}
      <div className="right_collection1">
        <img src={headphone} alt="new1" />
        <div className="left_newcollectiontext1">
          <h1>Watch</h1>
          <h3>Sale 40% Off</h3>
          <a href="">Shop Now</a>
        </div>
      </div>

      {/* Another Right Collection */}
      <div className="right_collection12">
        <img src={headphone} alt="new1" />
        <div className="left_newcollectiontext12">
          <h1>Camera</h1>
          <h3>Sale 40% Off</h3>
          <a href="">Shop Now</a>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
