import React from "react";
import cart from "../../assets/cart1.png";
// import back from "../../assets/back.png";
// import delevery from "../../assets/delevery.png";
import headphone from "../../assets/headphone.jpg";

import "./Total.css";
const Total = () => {
  return (
    <>
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>

      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <h3>Dream Gadget 360</h3>
            </div>
            <nav className="menubar">
              <ul className="munubar_ul">
                <li className="upperlink">
                  <a href="about.html" className="upperlink_a">
                    Home
                  </a>
                  <ul className="home_submenu">
                    <li>
                      <a
                        href="index.html"
                        target="_blank"
                        className="menubar_a">
                        {" "}
                        Fashion
                      </a>
                    </li>
                    <li>
                      <a href="" className="menubar_a">
                        {" "}
                        Furniture
                      </a>
                    </li>
                    <li>
                      <a href="" className="menubar_a">
                        {" "}
                        Accessories
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="upperlink">
                  <a href="product.html" className="upperlink_a">
                    Product
                  </a>
                </li>
                <li className="upperlink">
                  <a href="index.html" className="upperlink_a">
                    About
                  </a>
                </li>
                <li className="upperlink">
                  <a href="contact.html" className="upperlink_a">
                    Contact
                  </a>
                </li>
                <li className="upperlink">
                  <a href="account.html" className="upperlink_a">
                    Account
                  </a>
                </li>
              </ul>
            </nav>
            <div className="search_category">
              <select name="productcategory" className="categorylist">
                <option value="man">Man</option>
                <option value="female">Female</option>
                <option value="abc">ABC</option>
              </select>
              <h4>All Category</h4>
              <br />
              <input className="searchproduct" type="search" />{" "}
              <i className="fas fa-search"></i>
            </div>
            <a href="" className="user_login">
              <i className="fas fa-user"></i> Login
            </a>
            <a href="">
              <img
                className="cart1img"
                src={cart}
                width="30px"
                height="30px"
                alt="cart"
              />
            </a>
          </div>

          <div className="row">
            <div className="col-2">
              <h1>
                {" "}
                If you want you can buy, <br /> Beautiful gadget
              </h1>
              <p>
                You can trust me. We are always trying to give you the best
                product and support <br /> Hard work gains success. Greatness
                will come
              </p>
              <a href="" className="btn">
                <span>Shop Now &#8594;</span>
              </a>
            </div>
            <div className="col-2">
              <img
                className="image"
                src={headphone}
                alt=""
                height="450px"
                width="450px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="product">
        <div className="category_left">
          <div className="left_categorylist">
            <i className="fa-solid fa-bars"></i>
            <h4 className="all_category">All Category</h4>
          </div>

          <div className="category_box">
            <div className="list_item">
              <ul>
                <li className="dropdown">
                  <a href="#">
                    MALE <span className="arrow">&rsaquo;</span>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href=""> Shirt</a>
                    </li>
                    <li>
                      <a href=""> T-Shirt</a>
                    </li>
                    <li>
                      <a href=""> PANTS</a>
                    </li>
                    <li>
                      <a href=""> SUNGLASSES</a>
                    </li>
                    <li>
                      <a href=""> WATCH</a>
                    </li>
                    <li>
                      <a href=""> T-Shirt</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="">
                    FEMALE <span className="arrow">&rsaquo;</span>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href=""> Shirt</a>
                    </li>
                    <li>
                      <a href=""> T-Shirt</a>
                    </li>
                    <li>
                      <a href=""> PANTS</a>
                    </li>
                    <li>
                      <a href=""> SUNGLASSES</a>
                    </li>
                    <li>
                      <a href=""> WATCH</a>
                    </li>
                    <li>
                      <a href=""> T-Shirt</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">CHILDRIN</a>
                </li>
                <li>
                  <a href="">OTHERS</a>
                </li>
                <li>
                  <a href="">MAN</a>
                </li>
                <li>
                  <a href="">WOMAN</a>
                </li>
                <li>
                  <a href="">man</a>
                </li>
                <li>
                  <a href="">man</a>
                </li>
                <li>
                  <a href="">
                    <span className="morecategory">More Category</span>
                  </a>{" "}
                  <span className="morecategory">+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      {/* Feature categories */}
      {/* <div className="category">
        <div className="small-container2">
          <div className="row">
            <div className="col-3">
              <img src={airpods} alt="" />
            </div>
            <div className="col-3">
              <img src={airpods} alt="" />
            </div>
            <div className="col-3">
              <img src={airpods1} alt="" />
            </div>
            <div className="col-3">
              <img src={earphon} alt="" />
            </div>
            <div className="col-3">
              <img src={airpods} alt="" />
            </div>
            <div className="col-3">
              <img src={headphone} alt="" />
            </div>
          </div>
        </div>
      </div> */}

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

        {/* Latest Product */}
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

      <div class="offer">
        <div class="small-container1">
          <div class="row">
            <div class="col-2">
              {/* <img src="image/airpods2.png" class="offer-img"> */}
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
      <div className="about_us">
        <div className="about_us_div">
          {/* Left Content */}
          <div className="about_us_left">
            <h2 className="about_us_title">Our Story</h2>
            <p>
              We are Dream Gadget 360, a dedicated team striving to provide the
              best gadgets and accessories to our customers. With a passion for
              technology and innovation, we are committed to delivering
              top-quality products that enhance your lifestyle. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. A expedita aperiam
              vel quasi dicta exercitationem perferendis mollitia eveniet
              beatae. Eius odit assumenda obcaecati, mollitia ipsam eum totam
              error, maxime eveniet libero dolores esse, ut repellat accusamus
              voluptatum. Iste, velit dolores aliquam quam recusandae dolor?
              Dignissimos est repellat perferendis! Velit dolore voluptate
              laborum? Laudantium ea itaque quas voluptates ullam. Ipsam,
              praesentium. Iure, autem hic. Fugiat nisi culpa maxime dolor
              pariatur molestiae atque repellat obcaecati reiciendis
              reprehenderit necessitatibus nemo a rerum veniam sapiente et
              minima tenetur, optio error modi nostrum eaque quisquam
              voluptatibus porro! Perspiciatis dignissimos sed ipsa veritatis
              soluta eius a?
            </p>
            {/* Add more content about your company */}
          </div>

          {/* Right Content */}
          <div className="about_us_right">
            <img src={headphone} alt="" />
          </div>
        </div>
      </div>

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
                  Feel free to reach out via email or connect with me on
                  LinkedIn to discuss exciting opportunities and collaborations.
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
                  ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusantium, porro!
                </div>
              </div>
            </div>

            <div className="row_footer">
              <img className="cart1img" src={headphone} alt="" />
              <div className="info">
                <div className="head">30 Day Return</div>
                <div className="sub-title">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, totam!
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
        <div className="navbar_footer">
          <h1 className="footer_left">Support Us</h1>
          <div className="footer_right">
            <input
              type="email"
              placeholder="Enter your Email"
              className="input"
            />
            <input type="submit" value="Subscribe" className="submit_email" />
          </div>
        </div>
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
                      <i className="fas fa-map-marker-alt"> </i> Dhaka,
                      Bangladesh
                    </li>
                    <br />
                    <li className="footer_contact">
                      {" "}
                      <i className="fas fa-envelope">
                        {" "}
                      </i> evanahmed@gmail.com{" "}
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
                        <input
                          type="submit"
                          value="Subscribe"
                          className="submit"
                        />
                      </div>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Total;
