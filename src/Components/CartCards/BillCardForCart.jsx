import React from "react";
import { useFilter } from "../../Context/index";
import { calculatePrice, discountPrice } from "./CardUtils";
import { AiOutlineMinus } from "react-icons/ai";
export const BillCardForCart = () => {
  const { state } = useFilter();
  const { cartList } = state;
  let price = cartList.length > 0 ? calculatePrice(cartList) : 0;
  let discountObj = cartList.length > 0 ? discountPrice(cartList) : 0;
  return (
    <>
      {cartList.length > 0 && (
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
                <AiOutlineMinus /> Rs.
                {Math.round(discountObj.discountedPrice)}
              </span>
            </p>
            <p className="text-card-item flex">
              <span className="margin-left">Delivery charges</span>
              <span>Rs.199</span>
            </p>
            <hr className="line-separate" />
            <p className="text-card-item flex">
              <span className="margin-left min-bold">TOTAL AMOUNT</span>
              <span className="min-bold">
                Rs.{Math.round(discountObj.totalBill + 199)}
              </span>
            </p>
            <hr className="line-separate" />
            <p>
              You have saved Rs.{Math.round(discountObj.discountedPrice)} on
              this purchase.
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
