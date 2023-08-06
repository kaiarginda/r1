import React from "react";
import "./hero.css";
import { useState, useEffect } from "react";

let heroLeft;
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>
          FIND YOUR <br /> PERFECT HOME
        </h1>
        <p className="hero-first-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          lacinia velit a feugiat finibus. Morbi iaculis diam id tellus iaculis,
          eu pretium metus fermentu
        </p>
        <button type="button">
          Browse Listings <span>&rarr;</span>
        </button>
      </div>
      <div className="hero-right">
        <div className="hero-right-box">
          <h2>Contact An Agent</h2>
          <ul>
            <li>Call: (342) 234 – 2354</li>
            <li>Email: agents@diviestate.com</li>
            <li>Visit: 1234 Divi st. San Francisco, CA</li>
          </ul>
          <button type="button">
            Register For Free <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
