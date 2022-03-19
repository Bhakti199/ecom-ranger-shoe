import React from "react";
import "./CartPage.css";
import { ProductCardForCart, BillCardForCart } from "../../Components/Index";
import { useFilter } from "../../Context/index";
export const CartPage = () => {
  const { state } = useFilter();
  const { cartList } = state;
  return (
    <div className="landing-page bg-color">
      <h2 className="cart-page-title">
        {cartList.length > 0 ? "my cart" : "0 items in cart, Shop Now..."}
      </h2>

      <div className="cart-page flex">
        <div className="cart-item-container flex-col">
          <ProductCardForCart />
        </div>
        <BillCardForCart />
      </div>
    </div>
  );
};
