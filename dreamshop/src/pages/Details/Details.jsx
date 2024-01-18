// Details.js
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
// Import your product data
import { Products } from "../../product";
import "./Details.css"; // Import your CSS file

const Details = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const { cartItems } = useContext(ShopContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the product ID
    const fetchedProduct = Products.find(
      (product) => product.id === parseInt(id, 10)
    );

    if (fetchedProduct) {
      setProduct(fetchedProduct);
    } else {
      // Handle the case where the product is not found
      console.error(`Product with ID ${id} not found.`);
    }
  }, [id]);

  if (!product) {
    // If the product is not found or still loading, you can handle it accordingly
    return <div>Loading...</div>;
  }

  return (
    <div className="details">
      <div className="details-container">
        <img
          src={product.productImage}
          alt={product.productName}
          className="product-image"
        />
        <div className="product-info">
          <h1 className="product-name">{product.productName}</h1>

          <p className="product-price">Price: ${product.Price}</p>
          <p className="product-desc">
            Description :{product.productDescription}
          </p>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
};

export default Details;
