import React from "react";
import { useUser } from "../../Context/index";
import { calculatePrice, discountPrice } from "./CardUtils";
import { AiOutlineMinus } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
export const BillCardForCart = () => {
  const { user, isUserLoggedIn } = useUser();
  const { cart } = user;

  let price = calculatePrice(cart) ?? 0;
  let discountObj = discountPrice(cart) ?? 0;
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
                {Math.round(discountObj.discountedPrice)}
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
                {Math.round(discountObj.totalBill + 199)}
              </span>
            </p>
            <hr className="line-separate" />
            <p>
              You have saved <FaRupeeSign />
              {Math.round(discountObj.discountedPrice)} on this purchase.
            </p>
          </div>
          <div className="text-card-section-two flex">
            <button className="primary-btn-lg">Place Order</button>
          </div>
        </div>
      )}
    </>
  );
};
