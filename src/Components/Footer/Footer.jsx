import React from "react";
import "./Footer.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-title">Join us</div>
      <p className="footer-msg">
        We will let you know when we have new arrivals, events and promo's don't
        worry we send them infrequently, just connect with us on our social
        media platforms for more updates!
      </p>
      <div className="footer-icons">
        <div>
          <AiFillGithub size={33} />
        </div>
        <div>
          <AiOutlineTwitter size={33} />
        </div>
        <div>
          <AiFillLinkedin size={33} />
        </div>
      </div>
      <div className="footer-terms-conditions">
        <div>Contact</div>
        <div>FAQ</div> <div>Shipping</div> <div>Returns</div>{" "}
        <div>Terms of Use</div> <div>Privacy Policy</div>
      </div>
      <div className="footer-copyright-text">
        <AiOutlineCopyrightCircle size={14} /> 2022 | Ranger Shoe ecommerce
      </div>
    </div>
  );
};
