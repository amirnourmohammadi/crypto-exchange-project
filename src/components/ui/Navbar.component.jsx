import React, { useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaCoins } from "react-icons/fa";
const NavbarComponent = () => {
  const btnToggleRef = useRef();

  const toggleMenu = () => {
    btnToggleRef.current.click();
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <FaCoins className="navbar-logo-icon" />
          <span className="navbar-logo-text">crypto exchange</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={btnToggleRef}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={toggleMenu}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={toggleMenu}>
              <Link className="nav-link" to="/faq">
                FAQ
              </Link>
            </li>
            <li className="nav-item" onClick={toggleMenu}>
              <Link className="nav-link" to="/about-us">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;

// Routes
// /
// /faq
// /about-us
// /contact-us
