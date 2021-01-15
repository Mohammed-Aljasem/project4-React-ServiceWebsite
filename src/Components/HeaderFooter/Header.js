import React from "react";
import logo from "../../img/logo.png";
import "../../Styles/header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <Link to="/">
        <img
          src={logo}
          className="logo"
          alt="With Key 2 Drive the drivers can learn how to drive and we guarantee the best service'"
        ></img>
      </Link>
      <ul className="ul__header">
        <li>
          <Link
            className="nav-a-hover"
            style={{ textDecoration: "none", color: "white" }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="nav-a-hover"
            style={{ textDecoration: "none", color: "white" }}
            to="/service"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="nav-a-hover"
            style={{ textDecoration: "none", color: "white" }}
            to="/login"
          >
            Register / LogIn
          </Link>
        </li>
        <li>
          <Link
            className="nav-a-hover"
            style={{ textDecoration: "none", color: "white" }}
            to="/Profile"
          >
            <i className="fas fa-user-circle fa-lg"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}