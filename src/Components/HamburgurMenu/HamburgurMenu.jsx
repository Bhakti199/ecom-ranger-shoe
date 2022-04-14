import React from "react";
import "./HamburgurMenu.css";
import { Link } from "react-router-dom";
export const HamburgurMenuList = ({ setIsHamburgurOpen }) => {
  return (
    <div>
      <ul className="hamburgur-menu">
        <Link
          to="/"
          className="hamburgur-menu-item"
          onClick={() => setIsHamburgurOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/"
          className="hamburgur-menu-item"
          onClick={() => setIsHamburgurOpen(false)}
        >
          Login/SignUp
        </Link>
        <Link
          to="/product-listing"
          className="hamburgur-menu-item"
          onClick={() => setIsHamburgurOpen(false)}
        >
          Product Page
        </Link>
        <Link
          to="/wishlist-page"
          className="hamburgur-menu-item"
          onClick={() => setIsHamburgurOpen(false)}
        >
          WishList
        </Link>
        <Link
          to="/cart-page"
          className="hamburgur-menu-item"
          onClick={() => setIsHamburgurOpen(false)}
        >
          Cart
        </Link>
        <Link
          to="/"
          className="hamburgur-menu-item"
          onClick={() => setIsHamburgurOpen(false)}
        >
          About us
        </Link>
      </ul>
    </div>
  );
};
