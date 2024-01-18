
import { React, useState } from "react";
import "./Shop.css"
import { Products } from "../../product";
import { Link } from "react-router-dom";
import Product from "./Product";
import "./Shop.css";
const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default to show all products

  const uniqueCategories = [
    "All",
    ...new Set(Products.map((product) => product.category)),
  ];

  return (
    <div className="containerforproduct">
      <div className="filters">
        <div className="searchInput">
          <input
            type="text"
            placeholder="Search here"
            value={searchTerm}
            onChange={(e) => {
              const lowerCaseTerm = e.target.value.toLowerCase();
              setSearchTerm(lowerCaseTerm);
            }}
          />
        </div>
        <Link href="../cart/CartItems">
  cart
</Link>

        <div className="categoryDropdown">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}>
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
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
      </div>
    </div>
  );
};

export default Shop;