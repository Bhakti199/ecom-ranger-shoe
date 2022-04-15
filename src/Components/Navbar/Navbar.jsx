import React from "react";
import "./Navbar.css";
import { Categories } from "../../Components/Index";
import { GiHamburgerMenu } from "react-icons/gi";

import { BsCart2, BsHeart, BsPerson, BsSearch } from "react-icons/bs";

import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { useFilter } from "../../Context/index";
import { useState } from "react";
import { HamburgurMenuList } from "../../Components/Index";
export const Navbar = () => {
  const { dispatch, state } = useFilter();
  const { cartList, wishList } = state;
  const sum = (acc, curr) => (acc = acc + curr.count);
  const cartCount = cartList.length > 0 ? cartList.reduce(sum, 0) : 0;

  return (
    <>
      <div className="free-shipping-msg">
        FREE SHIPPING FOR ORDERS Rs.2000+. GIFTED RANGER COUPONS WITH PURCHASES
        Rs.2500+.
      </div>
      <nav className="navbar-ecom flex ">
        <div className="flex list">
          <Link to="/" className="ranger-logo">
            <img
              src="https://res.cloudinary.com/bhakti1801/image/upload/v1649919109/R_ezqx3h.png"
              alt="logo"
              className="logo-ecom"
            />
          </Link>
        </div>

        <div className="category-display-one">
          <Categories />
        </div>

        <div className="brand-search-container">
          <input
            type="text"
            className="brand-search-input"
            placeholder="Search for Items"
          />
          <BsSearch size={21} />
        </div>
        <ul className="navbar-second-part flex list">
          <li className="">
            <div>
              <BsPerson size={28} />
            </div>
          </li>
          <li className="">
            <Link to="/wishlist-page">
              <button className="badge-on-icon ">
                <BsHeart size={25} />
                {wishList.length > 0 && (
                  <div className="badge-on-icon-notify flex-row-center">
                    <span>{wishList.length}</span>
                  </div>
                )}
              </button>
            </Link>
          </li>
          <li className="">
            <Link to="/cart-page">
              <button className="badge-on-icon">
                <BsCart2
                  className="icon-badge icon-hover"
                  size={27}
                  color="var(--black-color)"
                />
                {cartCount > 0 && (
                  <div className="badge-on-icon-notify flex-row-center">
                    <span>{cartCount}</span>
                  </div>
                )}
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="category-display-two">
        <Categories />
      </div>
    </>
  );
};
