import React from "react";
import headphone from "../../assets/headphone.jpg";
import "../Total/Total.css";

const Available = () => {
  return (
    <div class="offer">
      <div class="small-container1">
        <div class="row">
          <div class="col-2">
            <img src={headphone} class="offer-img" />
          </div>
          <div class="col-2">
            <p>Exlusive Avaiable on Dream Gadget360 </p>
            <h1>Airpods Pro</h1>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              odio numquam omnis distinctio{" "}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Available;
