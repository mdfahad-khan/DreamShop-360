import React, { useContext } from "react";
import { Router } from "react-router-dom"; // Import useHistory for navigation
import { ShopContext } from "../../context/shop-context";

const Product = (props) => {
  const { id, productName, Price, productImage } = props.data;
  const { addToCart } = useContext(ShopContext);
 // Use useHistory for navigation

  const handleDetailsClick = () => {
    Router.push(`./details/${id}`);
  };

  return (
    <div className="product">
      {/* Log the image path for debugging */}
      {console.log("Image Path:", productImage)}

      {/* Use a standard img tag */}
      <img src={productImage} alt={productName} width={200} height={200} />

      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p className="price">${Price}</p>
      </div>
      <div className="button">
        <button className="addToCartBtn" onClick={() => addToCart(id)}>
          Add To Cart
        </button>

        <button className="addToCartBtn" onClick={handleDetailsClick}>
          Details
        </button>
        
      </div>
    </div>
  );
};

export default Product;
