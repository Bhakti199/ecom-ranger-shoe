import React from "react";
import "./HamburgurMenu.css";
import { Link } from "react-router-dom";
export const HamburgurMenuList = () => {
  return (
    <div>
      <ul className="hamburgur-menu">
        <Link to="/" className="hamburgur-menu-item">
          Home
        </Link>
        <Link to="/" className="hamburgur-menu-item">
          Login/SignUp
        </Link>
        <Link to="/product-listing" className="hamburgur-menu-item">
          Product Page
        </Link>
        <Link to="/wishlist-page" className="hamburgur-menu-item">
          WishList
        </Link>
        <Link to="/cart-page" className="hamburgur-menu-item">
          Cart
        </Link>
        <Link to="/" className="hamburgur-menu-item">
          About us
        </Link>
      </ul>
    </div>
  );
};
