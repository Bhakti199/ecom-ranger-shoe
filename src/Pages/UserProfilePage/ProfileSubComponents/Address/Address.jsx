import React from "react";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useUser } from "../../../../Context";
import "./Address.css";
import { MdOutlineAdd } from "react-icons/md";
import { useState } from "react";
import { useLocation } from "react-router-dom";
export const Address = () => {
  const location = useLocation();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const {
    addAddress,
    removeAddress,
    setAddressForOrder,
    updateAddress,
    user,
    proceedOrder,
    setProceedOrder,
    selectAddress,
    setSelectAddress,
  } = useUser();
  const { addresses, firstName, lastName } = user;
  const [address, setAddress] = useState({
    mobileNumber: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
  });

  const addressFormHandler = (event) => {
    event.preventDefault();
    if (address.mobileNumber.length === 10 && address.pincode.length === 6) {
      addAddress(address);
      setShowAddressForm(false);
    } else {
      toast("Please Enter proper details");
    }
  };
  return (
    <div className="address-container">
      {!showAddressForm && (
        <button
          className="add-address-button"
          onClick={() => {
            setAddress({
              _id: uuid(),
              mobileNumber: "",
              area: "",
              city: "",
              state: "",
              pincode: "",
            });
            setShowAddressForm(true);
          }}
        >
          <MdOutlineAdd size={20} /> Add Address
        </button>
      )}
      {showAddressForm && (
        <form
          className="login-form-ecom"
          onSubmit={(event) => {
            event.preventDefault();
            if (editAddress) {
              updateAddress(address);
              setEditAddress(false);
              setShowAddressForm(false);
            } else addressFormHandler(event);
          }}
        >
          <h2 className="margin-top-bottom-zero center-text">ADDRESS</h2>
          <div className="form-inputs">
            <input
              type="number"
              placeholder="10-digit mobile number"
              className="form-input-ecom"
              value={address.mobileNumber}
              onChange={(event) =>
                setAddress((prevAddress) => ({
                  ...prevAddress,
                  mobileNumber: event.target.value,
                }))
              }
              required
            />
            <input
              type="text"
              placeholder="Area and Street"
              className="form-input-ecom"
              value={address.area}
              onChange={(event) =>
                setAddress((prevAddress) => ({
                  ...prevAddress,
                  area: event.target.value,
                }))
              }
              required
            />
            <input
              type="text"
              placeholder="City/District/Town"
              className="form-input-ecom"
              value={address.city}
              onChange={(event) =>
                setAddress((prevAddress) => ({
                  ...prevAddress,
                  city: event.target.value,
                }))
              }
              required
            />

            <input
              type="text"
              placeholder="State"
              className="form-input-ecom"
              value={address.state}
              onChange={(event) =>
                setAddress((prevAddress) => ({
                  ...prevAddress,
                  state: event.target.value,
                }))
              }
              required
            />
            <input
              type="number"
              placeholder="Pincode"
              className="form-input-ecom"
              value={address.pincode}
              onChange={(event) =>
                setAddress((prevAddress) => ({
                  ...prevAddress,
                  pincode: event.target.value,
                }))
              }
              required
            />
          </div>
          {editAddress ? (
            <button
              type="submit"
              className="login-form-btn"
              onClick={() => setEditAddress(true)}
            >
              update Address
            </button>
          ) : (
            <button type="submit" className="login-form-btn">
              Add Address
            </button>
          )}
        </form>
      )}
      <div className="address-row-container">
        {addresses &&
          addresses.length > 0 &&
          addresses.map((address) => (
            <div key={address._id}>
              <span>
                {firstName} {lastName}, {address.area}, {address.city},{" "}
                {address.pincode}, {address.state},{" "}
              </span>
              <p>Mobile number: {address.mobileNumber}</p>
              {location.pathname === "/place-order" ? (
                <div className="address-buttons">
                  <button
                    className={`select-button ${
                      selectAddress.isAddressSelected &&
                      selectAddress._id === address._id &&
                      "black-button"
                    }`}
                    onClick={() =>
                      setSelectAddress({ isAddressSelected: true, ...address })
                    }
                  >
                    Deliver here
                  </button>
                </div>
              ) : (
                <div className="address-buttons">
                  <button
                    className="delete-button"
                    onClick={() => {
                      if (
                        selectAddress.isAddressSelected &&
                        selectAddress._id === address._id
                      ) {
                        setSelectAddress({ isAddressSelected: false });
                      }
                      removeAddress(address._id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="select-button"
                    onClick={(event) => {
                      event.preventDefault();
                      setEditAddress(true);
                      setAddress({
                        _id: address._id,
                        mobileNumber: address.mobileNumber,
                        area: address.area,
                        city: address.city,
                        state: address.state,
                        pincode: address.pincode,
                      });
                      setShowAddressForm(true);
                    }}
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};
