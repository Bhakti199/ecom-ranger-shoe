import React from "react";
import "./Footer.css";
import {
  AiFillHeart,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
export const Footer = () => {
  return (
    <div className="flex-col-footer footer">
      <p className="footer-made-with-text flex-row-only">
        Made with <AiFillHeart className="heart-icon" /> by Bhakti Kharatkar
      </p>
      <div className="footer-icons-container">
        <a
          href="https://github.com/Bhakti199"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://twitter.com/Bhaktee_"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <AiOutlineTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/bhakti-kharatkar-33178a200/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <p className="copyright-text">
        <span className="flex-row-only">
          <AiOutlineCopyrightCircle />
          2022
        </span>
        <span className="ranger-name-footer">RangerShoe</span>
      </p>
    </div>
  );
};
