import React from 'react'
import headphone from "../../assets/headphone.jpg"
import "../Total/Total.css"

const Account = () => {
  return (
    <div className="account">
        <div className="testimonial">
          <h1>account</h1>
          <div className="small-container">
            <div className="row">
              <div className="col-3">
                <i className="fa fa-quote-left"></i>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat, aspernatur.
                </p>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <img src={headphone} alt="" />
                <h3>Evan Ahmed Fahad</h3>
              </div>
              <div className="col-3">
                <i className="fa fa-quote-left"></i>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat, aspernatur.
                </p>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <img src={headphone} alt="" />
                <h3>Rakib Mahmud</h3>
              </div>
            </div>
          </div>
        </div>
        </div>
      
  )
}

export default Account