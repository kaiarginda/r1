import React from "react";
import "./listingspage.css";
import Listings from "../Listings/Listings";
import Info from "../Info/Info";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "../Navbar/navbar.css";

const ListingsLanding = () => {
  return (
    <div className="ls-landing">
      <div className="ls-landing-box">
        <h1>
          Property <br /> Listings
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          lacinia velit a feugiat finibus. Morbi iaculis diam id tellus iaculis,
          eu pretium metus fermentu
        </p>
        <div className="ls-landing-inp">
          <input type="text" placeholder="Search by City" />
          <button type="button">SEARCH</button>
        </div>
      </div>
    </div>
  );
};

const ListingsPage = () => {
  return (
    <div className="landingspage-parent">
      <ListingsLanding />
      <Info />
      <Listings />
      <Footer />
    </div>
  );
};

export default ListingsPage;
