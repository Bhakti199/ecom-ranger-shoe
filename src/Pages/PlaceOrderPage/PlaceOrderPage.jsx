import React from "react";
import { Address } from "../../Pages/UserProfilePage/ProfileSubComponents/Address/Address";
import { useUser } from "../../Context";
import { BsCheckCircleFill } from "react-icons/bs";
import "./PlaceOrderPage.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
export const PlaceOrderPage = () => {
  const { user, finalPrice, selectAddress, clearCart } = useUser();
  return (
    <>
      <div className="place-order-page">
        <Address />
        {selectAddress.isAddressSelected && (
          <div className="place-order-msg">
            <div>Your total purchase is Rs.{finalPrice}</div>
            <Link to="/checkout">
              <button
                className="place-order-button"
                onClick={() => {
                  clearCart();
                  toast("order placed successfully.", {
                    icon: <BsCheckCircleFill />,
                  });
                }}
              >
                Place Order
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
