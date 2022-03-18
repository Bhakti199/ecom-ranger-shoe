import React from "react";
import { ProductCardForCart } from "../../Components/Index";
export const CartPage = () => {
  return (
    <div className="landing-page bg-color">
      <h2 className="cart-page-title">My Cart</h2>

      <div className="cart-page flex">
        <div className="cart-item-container flex-col">
          <ProductCardForCart />
        </div>
      </div>
    </div>
  );
};
