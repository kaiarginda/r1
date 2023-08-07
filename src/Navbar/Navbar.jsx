import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const Navbar = (pth) => {
  const [rout, setRout] = useState("");

  let hamburger = useRef("");
  let navMenu = useRef(null);
  let liBtn = useRef("");
  let liClass = useRef(null);

  let liClass1 = useRef(null);

  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    hamburger.current = document.querySelector(".hamburger-navbar");
    navMenu.current = document.querySelector(".nav-menu");
    liBtn.current = document.querySelector(".navbar-btn-push");
    liClass.current = document.querySelector(".landing-li");

    liClass1.current = document.querySelector(".listings-li");

    if (pth.pth === "/real") {
      liClass1.current.classList.remove("cl-bl");

      liClass.current.classList.add("cl-bl");
    }

    if (pth.pth === "/listings") {
      liClass.current.classList.remove("cl-bl");

      liClass1.current.classList.add("cl-bl");
    }

    hamburger.current.addEventListener("click", (e) => {
      setToggle(!toggle);
      if (toggle === true) {
        hamburger.current.classList.add("activ");
        navMenu.current.classList.add("activ");
        liBtn.current.classList.remove("display-nn");
      } else {
        hamburger.current.classList.remove("activ");
        navMenu.current.classList.remove("activ");
        liBtn.current.classList.add("display-nn");
      }
    });

    window.addEventListener("load", () => {
      console.log("page loadd");
    });

    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (+window.scrollY >= 70) {
        console.log(window.scrollY);
        navMenu.current.classList.add("nav-top");
      }
    });
  });

  // hamburger.addEventListener("click", () => {
  //   console.log(hamburger, navMenu);
  //   hamburger.classList.toggle("active");
  //   navMenu.classList.toggle("active");
  // });

  const listingsClickHandler = () => {};
  const landingClickHandler = () => {
    const listingsLi = document.querySelector(".listings-li");
  };

  return (
    <div className="navbar">
      <h2>Real Estate Landing</h2>
      <ul className="nav-menu">
        <NavLink
          key={Math.random() * 9999}
          to="/listings"
          // activeclassname="cl-bl"
          className="navbar-li-link"
        >
          <li onClick={listingsClickHandler} className="listings-li">
            Listings
          </li>
        </NavLink>
        <NavLink
          key={Math.random() * 9999}
          to="/real"
          // activeclassname="cl-bl"
          className="navbar-li-link"
        >
          <li onClick={landingClickHandler} className="landing-li">
            Landing
          </li>
        </NavLink>
        <li
          className="navbar-btn-push display-nn"
          onClick={() => {
            hamburger.current.classList.remove("activ");
            navMenu.current.classList.remove("activ");
            // liBtn.current.classList.add("display-nn");
            setToggle(true);
          }}
        >
          <BsArrowLeft />
        </li>
        {/* <NavLink
          key={Math.random() * 9999}
          to="/home"
          activeclassname="cl-bl"
          className="navbar-li-link"
        >
          <li onClick={navClickHandler}>Home</li>
        </NavLink>
        <NavLink
          key={Math.random() * 9999}
          to="/contact"
          activeclassname="cl-bl"
          className="navbar-li-link"
        >
          <li onClick={navClickHandler}>Contact</li>
        </NavLink>
        <NavLink
          key={Math.random() * 9999}
          to="/blog"
          activeclassname="cl-bl"
          className="navbar-li-link"
        >
          <li onClick={navClickHandler}>Blog</li>
        </NavLink>
        <NavLink
          key={Math.random() * 9999}
          to="/about"
          activeclassname="cl-bl"
          className="navbar-li-link"
        >
          <li onClick={navClickHandler}>About</li>
        </NavLink> */}
      </ul>

      <div className="hamburger-navbar">
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;

/* 
<Link onClick={navClickHandler} to="/team" className="navbar-li-link">
          <li>Team </li>
        </Link>
        <Link
          onClick={navClickHandler}
          to="/listings"
          className="navbar-li-link"
        >
          <li>Listings </li>
        </Link>
        <Link
          onClick={navClickHandler}
          to="/"
          className="navbar-li-link navbar-li-active"
        >
          <li>Landing </li>
        </Link>{" "}
        <Link onClick={navClickHandler} to="/home" className="navbar-li-link">
          <li>Home </li>
        </Link>{" "}
        <Link
          onClick={navClickHandler}
          to="/contact"
          className="navbar-li-link"
        >
          <li>Contact </li>
        </Link>{" "}
        <Link onClick={navClickHandler} to="/blog" className="navbar-li-link">
          <li>Blog </li>
        </Link>{" "}
        <Link onClick={navClickHandler} to="/about" className="navbar-li-link">
          <li>About </li>
        </Link>
*/
