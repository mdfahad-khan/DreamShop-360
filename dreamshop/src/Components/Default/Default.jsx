import React from "react";
import Shop from "../../pages/Shop/Shop";
import AboutUs from "../AboutUs/AboutUs";
import Account from "../Account/Account";
import Available from "../Available/Available";
import ContactUs from "../ContactUs/ContactUs";
import Exclusive from "../Exclusive/Exclusive";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Links from "../Links/Links";
import NewCollection from "../NewCollection/NewCollection";

const Default = () => {
  return (
    <div>
      <Home />
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

export default Default;
