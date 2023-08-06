import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-box">
        <h2>
          START YOUR SEARCH <br /> TODAY
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          lacinia velit a <br /> feugiat finibus. Morbi iaculis diam id tellus
          iaculis, eu pretium metus fermentu
        </p>
        <button type="button" className="ft-btn">
          FIND AN AGENT <span>&rarr;</span>{" "}
        </button>
      </div>
    </div>
  );
};

export default Footer;
