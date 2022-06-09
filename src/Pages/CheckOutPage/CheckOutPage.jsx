import React from "react";
import "./CheckOutPage.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export const CheckOutPage = () => {
  return (
    <div className="check-out-page">
      <div className="check-out">
        <div>
          <BsFillPatchCheckFill size={40} />
        </div>

        <h2 className="order-confirm-title">ORDER CONFIRMED</h2>
        <h3 className="order-confirm-title">
          Your order has been placed succuessfully.
        </h3>
        <Link to="/product-listing">
          <button className="cart-msg-btn"> Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};
