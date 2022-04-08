import React from "react";
import "../../Components/Navbar/Navbar.css";
import "../../Components/NavbarMblView/NavbarMblView.css";
import { Categories } from "../../Components/Index";

import { BsHandbag, BsHeart, BsPerson, BsSearch } from "react-icons/bs";

import { Link } from "react-router-dom";
import { useFilter } from "../../Context/index";
import { useState } from "react";

export const NavbarMblView = () => {
  const { dispatch, state } = useFilter();
  const { cartList, wishList } = state;
  const [isHamburgurOpen, setIsHamburgurOpen] = useState(false);
  const sum = (acc, curr) => (acc = acc + curr.count);
  const cartCount = cartList.length > 0 ? cartList.reduce(sum, 0) : 0;

  return (
    <div className="navabar-mbl-view">
      <div className="free-shipping-msg">
        FREE SHIPPING FOR ORDERS Rs.2000+. GIFTED RANGER BAGS WITH PURCHASES
        Rs.2500+.
      </div>

      <nav
        className="nav-ecom-mbl-view
      flex nav-ecom-mbl-view"
      >
        <div className="flex list">
          <Link to="/" className="ranger-logo">
            <img src="./assets/R.png" alt="logo" className="logo-ecom" />
          </Link>
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
                <BsHeart className="icon-size icon-hover" />
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
                <BsHandbag className="icon-badge icon-size icon-hover" />
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

      <div className="category-desktop-view">
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
    </div>
  );
};
