import React from "react";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useUser } from "../../../../Context";
import "./Address.css";
import { MdOutlineAdd } from "react-icons/md";
import { useState } from "react";
export const Address = () => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const { addAddress, removeAddress, setAddressForOrder, user } = useUser();
  const { addresses, firstName, lastName } = user;

  const addressFormHandler = (event) => {
    event.preventDefault();
    const [mobileNumber, area, city, state, pincode] = event.target.elements;
    console.log(mobileNumber.value.length, pincode.value.length);
    if (mobileNumber.value.length === 10 && pincode.value.length === 6) {
      setShowAddressForm(false);
      let address = {
        _id: uuid(),
        mobileNumber: mobileNumber.value,
        area: area.value,
        city: city.value,
        state: state.value,
        pincode: pincode.value,
      };
      addAddress(address);
    } else {
      toast("Please Enter proper details");
    }
  };
  return (
    <div className="address-container">
      {!showAddressForm && (
        <button
          className="add-address-button"
          onClick={() => setShowAddressForm(true)}
        >
          <MdOutlineAdd size={20} /> Add Address
        </button>
      )}
      {showAddressForm && (
        <form
          className="login-form-ecom"
          onSubmit={(event) => addressFormHandler(event)}
        >
          <h2 className="margin-top-bottom-zero center-text">ADDRESS</h2>
          <div className="form-inputs">
            <input
              type="number"
              placeholder="10-digit mobile number"
              className="form-input-ecom"
              required
            />
            <input
              type="text"
              placeholder="Area and Street"
              className="form-input-ecom"
              required
            />
            <input
              type="text"
              placeholder="City/District/Town"
              className="form-input-ecom"
              required
            />

            <input
              type="text"
              placeholder="State"
              className="form-input-ecom"
              required
            />
            <input
              type="number"
              placeholder="Pincode"
              className="form-input-ecom"
              required
            />
          </div>
          <button type="submit" className="login-form-btn">
            Add Address
          </button>
        </form>
      )}
      <div className="address-row-container">
        {addresses &&
          addresses.length > 0 &&
          addresses.map(({ mobileNumber, area, city, state, pincode, _id }) => (
            <div key={_id}>
              <span>
                {firstName} {lastName}, {area}, {city}, {pincode}, {state},{" "}
              </span>
              <p>Mobile number: {mobileNumber}</p>
              <div className="address-buttons">
                <button
                  className="delete-button"
                  onClick={() => removeAddress(_id)}
                >
                  Delete
                </button>
                <button
                  className="select-button"
                  onClick={() => {
                    setAddressForOrder({
                      mobileNumber,
                      area,
                      city,
                      state,
                      pincode,
                      _id,
                    });
                    toast("Address saved Successfully for Order.");
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
