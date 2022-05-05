import React from "react";
import { Address } from "../../Pages/UserProfilePage/ProfileSubComponents/Address/Address";
import { useUser } from "../../Context";
import "./PlaceOrderPage.css";
export const PlaceOrderPage = () => {
  const { user } = useUser();
  const { addresses, firstName, lastName } = user;
  return (
    <div className="place-order-page">
      <Address />
      <div>PLACE ORDER PAGE.</div>
    </div>
  );
};
