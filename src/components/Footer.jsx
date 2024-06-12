import React from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="text">
        <h1>TSavvy.</h1>
        <div className="social">
          <a href="#" className="icon-social">
            {" "}
            <BsInstagram />{" "}
          </a>
          <a href="#" className="icon-social">
            {" "}
            <BsFacebook />{" "}
          </a>
          <a href="#" className="icon-social">
            {" "}
            <BsTwitter />{" "}
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 TSavvy. All rights reserved.</p>
      </div>
    </footer>
  );
};
