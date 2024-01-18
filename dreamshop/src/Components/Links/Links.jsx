import React from "react";
import "../Total/Total.css";

const Links = () => {
  return (
    <div className="last_content">
      <h1 className="last_h1">DREAM Gadget360</h1>
      <br />
      <br />
      <table width="1000px" className="footer_table">
        <thead>
          <th>Contact Info</th>
          <th>Useful Links</th>
          <th>My Account</th>
          <th>Subscribe</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <ul>
                <li className="footer_contact">
                  {" "}
                  <i className="fas fa-user"></i> Evan Ahmed Fahad{" "}
                </li>
                <br />
                <li className="footer_contact">
                  <i className="fas fa-map-marker-alt"> </i> Dhaka, Bangladesh
                </li>
                <br />
                <li className="footer_contact">
                  {" "}
                  <i className="fas fa-envelope"> </i> evanahmed@gmail.com{" "}
                </li>
                <br />
                <li className="footer_contact_social">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter-square"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-youtube"></i>
                </li>
                <br />
              </ul>
            </td>
            <td>
              <ul className="footer_link">
                <li>
                  <a href=""> About Us</a>
                </li>
                <br />
                <li>
                  <a href="">FAQ</a>
                </li>
                <br />
                <li>
                  <a href="">Location</a>
                </li>
                <br />
                <li>
                  <a href="">Affiliates</a>
                </li>
                <br />
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </td>
            <td>
              <ul className="footer_link">
                <li>
                  <a href=""> My Account</a>
                </li>
                <br />
                <li>
                  <a href="">Discount</a>
                </li>
                <br />
                <li>
                  <a href="">Returns</a>
                </li>
                <br />
                <li>
                  <a href="">Orders History</a>
                </li>
                <br />
                <li>
                  <a href="">Order Tracking</a>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li className="footer_subscriber">
                  <p>
                    Lorem dolor met, consec tetur adipis icing elit. Perspic
                    iatis repreh enderit fugiat minus sunt quia quos.
                  </p>
                </li>
                <br />
                <li>
                  <div className="footer_input">
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="input_last"
                    />
                    <input type="submit" value="Subscribe" className="submit" />
                  </div>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Links;
