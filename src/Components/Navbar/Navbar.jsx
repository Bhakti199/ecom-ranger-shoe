import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

export const Navbar = () => {
  return (
    <nav className="nav-standard flex navigation">
      <div className="hamburger icon-badge">
        <GiHamburgerMenu className="icon-hover" />
      </div>

      <div className="min-bold nav-standard-item-sectionOne flex list">
        <div className="ranger-ui navbar-name">RangerShoe</div>
      </div>
      <ul className="nav-standard-item-sectionTwo flex list">
        <li className="nav-standard-list-item min-bold">
          <div>LOGIN / SIGNUP</div>
        </li>
        <li className="nav-standard-list-item min-bold">
          <button className="badge-on-icon ">
            <AiFillHeart className="icon-size icon-hover" />
            <div className="badge-on-icon-notify flex-row-center">
              <span>0</span>
            </div>
          </button>
        </li>
        <li className="nav-standard-list-item min-bold">
          <button className="badge-on-icon">
            <RiShoppingCart2Fill className="icon-badge icon-size icon-hover" />
            <div className="badge-on-icon-notify flex-row-center">
              <span>0</span>
            </div>
          </button>
        </li>
        <li className="nav-standard-list-item min-bold">
          <button className="button">
            <FiLogOut className="icon-size icon-hover" />
          </button>
        </li>
      </ul>
    </nav>
  );
};
