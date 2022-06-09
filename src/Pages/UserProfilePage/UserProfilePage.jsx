import React, { useState } from "react";
import "./UserProfilePage.css";
import { useUser } from "../../Context";
import { BsPerson } from "react-icons/bs";
import { Address } from "./ProfileSubComponents/Address/Address";
import { MyOrders } from "./ProfileSubComponents/MyOrders/MyOrders";
export const UserProfilePage = () => {
  const { setIsUserLoggedIn, user } = useUser();
  const [showClickedSection, setShowClickedSection] = useState("profile");
  return (
    <div className="user-profile-container">
      <div className="user-profile">
        <BsPerson size={45} />
      </div>
      <div className="user-name">
        {user.firstName} {user.lastName}
      </div>
      <div className="profile-buttons-container">
        <button
          className={`profile-button ${
            showClickedSection === "profile" && "bg-color-profile-button"
          }`}
          onClick={() => setShowClickedSection("profile")}
        >
          Profile
        </button>
        <button
          className={`profile-button ${
            showClickedSection === "address" && "bg-color-profile-button"
          }`}
          onClick={() => setShowClickedSection("address")}
        >
          Address
        </button>

        <button
          className={`profile-button ${
            showClickedSection === "settings" && "bg-color-profile-button"
          }`}
          onClick={() => setShowClickedSection("settings")}
        >
          Settings
        </button>
      </div>
      <div>
        {showClickedSection === "profile" && (
          <div className="personal-details">
            <div>
              Name : {user.firstName} {user.lastName}
            </div>
            <div>E-mail : {user.email}</div>
          </div>
        )}
        {showClickedSection === "address" && (
          <div>
            <Address />
          </div>
        )}
        {showClickedSection === "orders" && (
          <div>
            <MyOrders />
          </div>
        )}
        {showClickedSection === "settings" && (
          <div>
            <button
              className="log-out-button"
              onClick={() => {
                setIsUserLoggedIn(false);
                localStorage.removeItem("userLoginToken");
                toast("Logged out.", { icon: <BsCheckCircleFill /> });
              }}
            >
              logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
