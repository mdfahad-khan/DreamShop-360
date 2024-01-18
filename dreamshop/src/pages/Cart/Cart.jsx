import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { Products } from "../../product";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your cart</h1>
      </div>
      <div className="cartItems">
        {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      <div className="checkout">
        <p>Total:{totalAmount} tk</p>
        <button onClick={() => navigate("/")}> Continue shopping </button>
        <button> Chekout</button>
      </div>
    </div>
  );
};

export default Cart;
