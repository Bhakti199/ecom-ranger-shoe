import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useUser } from "../../Context/index";
import { calculatePrice, discountPrice } from "./CardUtils";
import { AiOutlineMinus } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
export const BillCardForCart = () => {
  const { user, isUserLoggedIn, addOrders } = useUser();
  const { cart } = user;

  let price = calculatePrice(cart) ?? 0;
  let discountObj = discountPrice(cart) ?? 0;
  let totalAmount = Math.round(discountObj.totalBill + 199);
  let discount = Math.round(discountObj.discountedPrice);
  return (
    <>
      {isUserLoggedIn && cart && cart.length > 0 && (
        <div className="text-card">
          <div className="text-card-section-one">
            <h3 className="margin-top-bottom-zero">PRICE DETAILS</h3>
            <hr className="line-separate" />
            <p className="text-card-item flex">
              <span className="margin-left">Price</span>
              <span>{price}</span>
            </p>
            <p className="text-card-item flex">
              <span className="margin-left">Discount</span>
              <span>
                <AiOutlineMinus /> <FaRupeeSign />
                {discount}
              </span>
            </p>
            <p className="text-card-item flex">
              <span className="margin-left">Delivery charges</span>
              <span>
                <FaRupeeSign />
                199
              </span>
            </p>
            <hr className="line-separate" />
            <p className="text-card-item flex">
              <span className="margin-left min-bold">TOTAL AMOUNT</span>
              <span className="min-bold">
                <FaRupeeSign />
                {totalAmount}
              </span>
            </p>
            <hr className="line-separate" />
            <p>
              You have saved <FaRupeeSign />
              {Math.round(discountObj.discountedPrice)} on this purchase.
            </p>
          </div>
          <div className="text-card-section-two flex">
            <button
              className="primary-btn-lg"
              onClick={() =>
                addOrders({ items: cart, _id: uuid(), totalAmount, discount })
              }
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </>
  );
};
