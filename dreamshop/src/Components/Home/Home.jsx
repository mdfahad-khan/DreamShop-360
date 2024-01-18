import React from "react";
import headphone from "../../assets/headphone.jpg";
// import Shop from "../../pages/Shop/Shop";
import Shop from "../../pages/Shop/Shop";
import AboutUs from "../AboutUs/AboutUs";
import Account from "../Account/Account";
import Available from "../Available/Available";
import ContactUs from "../ContactUs/ContactUs";
import Exclusive from "../Exclusive/Exclusive";
import Footer from "../Footer/Footer";

import Latest from "../Latest/Latest";
import Links from "../Links/Links";
import NewCollection from "../NewCollection/NewCollection";
import Support from "../Support/Support";
import "../Total/Total.css";

const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <h1>
            {" "}
            If you want you can buy, <br /> Beautiful gadget
          </h1>
          <p>
            You can trust me. We are always trying to give you the best product
            and support <br /> Hard work gains success. Greatness will come
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
      <Shop />
      <Exclusive />
      <Latest />
      <NewCollection />
      <Available />
      <AboutUs />
      <ContactUs />
      <Account />
      <Footer />
      <Support />
      <Links />
    </div>
  );
};

export default Home;
