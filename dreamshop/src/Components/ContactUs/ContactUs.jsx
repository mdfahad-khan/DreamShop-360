import React from "react";
import "../Total/Total.css";

const ContactUs = () => {
  return (
    <div className="contact_us">
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title1">Contact me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="icons">
                <div className="row2">
                  <div className="circle">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Evan Ahmed Fahad</div>
                  </div>
                </div>
                <div className="row2">
                  <div className="circle">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Dhaka, Bangladesh</div>
                  </div>
                </div>
                <div className="row2">
                  <div className="circle">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">evanahmedfahad@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className="text">Get in Touch</div>
              <p>
                Feel free to reach out via email or connect with me on LinkedIn
                to discuss exciting opportunities and collaborations.
              </p>
            </div>
            <div className="column right">
              <div className="text">Message me</div>
              <form
                action="https://formspree.io/f/xleybyng"
                method="POST"
                id="my_form">
                <div className="fields">
                  <div className="field name">
                    <input
                      type="text"
                      placeholder="Name"
                      id="Name"
                      name="Name"
                    />
                  </div>
                  <div className="field email">
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                    />
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="field textarea">
                  <label htmlFor="massage"></label>
                  <textarea
                    name="massage"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Describe"></textarea>
                </div>
                <div className="button">
                  <button type="submit">Send message</button>
                </div>
                <div id="status"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
