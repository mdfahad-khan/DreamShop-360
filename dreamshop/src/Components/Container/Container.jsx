import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ShopContextProvider from "../../context/shop-context";
import Cart from "../../pages/Cart/Cart";
import Details from "../../pages/Details/Details";
import "../../pages/Shop/Product";
import Shop from "../../pages/Shop/Shop";
import AboutUs from "../AboutUs/AboutUs";
import Account from "../Account/Account";
import ContactUs from "../ContactUs/ContactUs";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Nav from "../Nav/Nav";
import "../Total/Total.css";

const Container = () => {
  return (
    <>
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>
      <div className="header">
        <div className="container">
          <ShopContextProvider>
            <Router>
              <Nav />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/product" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/About" element={<AboutUs />} />
                <Route path="/Contact" element={<ContactUs />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </Router>
          </ShopContextProvider>
        </div>
      </div>
    </>
  );
};

export default Container;
