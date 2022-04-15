import React from "react";
import "./CartPage.css";
import { ProductCardForCart, BillCardForCart } from "../../Components/Index";
import { useFilter } from "../../Context/index";
import { Link } from "react-router-dom";
export const CartPage = () => {
  const { state } = useFilter();
  const { cartList } = state;
  return (
    <div className="cart-page-container bg-color">
      <h2 className="cart-page-title">CART</h2>
      {cartList.length === 0 && (
        <div className="cart-empty-msg">
          <span className="cart-empty-msg-title">
            YOUR SHOPPING CART IS EMPTY!
          </span>
          <Link to="/product-listing">
            <button className="cart-msg-btn">Shop Now</button>
          </Link>
        </div>
      )}
      <div className="cart-page flex">
        <div className="cart-item-container flex-col">
          <ProductCardForCart />
        </div>
        <BillCardForCart />
      </div>
    </div>
  );
};
