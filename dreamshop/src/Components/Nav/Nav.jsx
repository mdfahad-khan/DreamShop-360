import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import cart from "../../assets/cart1.png";
import "../Total/Total.css";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h3>Dream Gadget 360</h3>
      </div>
      <nav className="menubar">
        <ul className="munubar_ul">
          <li className="upperlink">
            {/* Use Link instead of anchor tags */}
            <Link to="/Home" className="upperlink_a">
              Home
            </Link>
          </li>
          <li className="upperlink">
            <Link to="/product" className="upperlink_a">
              Product
            </Link>
          </li>
          <li className="upperlink">
            <Link to="/about" className="upperlink_a">
              About
            </Link>
          </li>
          <li className="upperlink">
            <Link to="/contact" className="upperlink_a">
              Contact
            </Link>
          </li>
          <li className="upperlink">
            <Link to="/account" className="upperlink_a">
              Account
            </Link>
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
      <Link to="/login" className="user_login">
        <i className="fas fa-user"></i> Login
      </Link>
      <Link to="/cart">
        <img
          className="cart1img"
          src={cart}
          width="30px"
          height="30px"
          alt="cart"
        />
      </Link>
    </div>
  );
};

export default Nav;

{
  /* <div className="search_category">
        <select
          name="productcategory"
          className="categorylist"
          id="category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <h4>All Category</h4>
        <br />
        <input
          className="searchproduct"
          type="text"
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => {
            const lowerCaseTerm = e.target.value.toLowerCase();
            setSearchTerm(lowerCaseTerm);
          }}
        />{" "}
        <i className="fas fa-search"></i>
      </div>
      <div className="products">
        {Products.filter((product) => {
          const isMatchingCategory =
            selectedCategory === "All" || product.category === selectedCategory;
          const isMatchingSearch =
            product.productName.toLowerCase().includes(searchTerm) ||
            product.productDescription.toLowerCase().includes(searchTerm);
          return isMatchingCategory && isMatchingSearch;
        }).map((product) => (
          <div className="product" key={product.id}>
            <Product data={product} />
          </div>
        ))}
        {Products.filter((product) => {
          const isMatchingCategory =
            selectedCategory === "All" || product.category === selectedCategory;
          const isMatchingSearch =
            product.productName.toLowerCase().includes(searchTerm) ||
            product.productDescription.toLowerCase().includes(searchTerm);
          return isMatchingCategory && isMatchingSearch;
        }).length === 0 && (
          <div className="noProductsMessage">No products found</div>
        )}
      </div> */
}
