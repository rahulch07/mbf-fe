import React from "react";
import "./navbar.css";
import logo from "/logo.png";

export default function NavBar() {
  return (
    <div className="navbarr">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="brand">
          <div className="logo">
            <img src={logo} alt="Logo" style={{ height: "35px" }} />
          </div>
          <div className="brand-name">
            <a href="/">
              <b>MBF Logistics</b>
            </a>
          </div>
        </div>
        <hr style={{ margin: "0px" }} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="options collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactUs">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
